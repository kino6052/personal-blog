---
title: CODE STORIES - package.json and Git
subtitle: When there are constantly updated dependencies
date: 2025-02-21
layout: post.html # reference to a layout file
tags: all; code / stories; code / git; code / web;
---

In software development more than 50% of the time you don't do software, you do things that are barely related to it—mostly reducing friction. One such example is working on a large front-end project with many teams where versions of internal packages constantly change. Your branch, which needs to update one package, will _guaranteed_ have merge conflicts.

I had many thoughts about how to approach that problem. First, avoid JSON altogether and use YAML or even a TS file for managing packages. But that creates friction—we need to add extra scripts around `npm`.

So here is how I solved it for myself.

Simple, and to the point.

---

## The Problem Isn't JSON. It's Proximity.

Most people blame JSON for merge conflicts. They say it's hard to read, it doesn't have comments, or Git doesn't know how to merge it properly.

That's not quite right.

The real problem is **Git is a line-based diffing tool**. It doesn't know or care about JSON structure. It only cares about _which lines changed_ and _how close they are to other changed lines_.

Here's what that looks like:

```json
{
  "dependencies": {
    "react": "^18.0.0", // ← changes frequently
    "@acme/core": "^1.0.0", // ← YOUR protected package (also changes)
    "lodash": "^4.0.0" // ← changes frequently
  }
}
```

You bump `@acme/core` in your branch. Meanwhile, another team bumps `react` in `main`. Both lines are adjacent. Git sees two changed lines right next to each other and throws a conflict—even though the changes are completely independent.

**The fix is not to change the format. It's to change the spacing.**

---

## The Obvious Trick: Just Add Some Lines

JSON doesn't support comments. But npm _does_ ignore keys that start with `//`. That means you can add whatever descriptive keys you want—npm won't care.

So I do this:

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "// this is line to protect dependency below from the merge conflicts": "",
    "@acme/core": "^1.0.0",
    "// this is line to protect dependency above from the merge conflicts": "",
    "lodash": "^4.0.0"
  }
}
```

Now when `react` bumps, it's no longer adjacent to `@acme/core`. There's a stable, unchanging line between them. When `@acme/core` bumps, it sits between two lines that _never change_.

Git sees your change in isolation. No conflict.

It takes two lines. It costs nothing. It works.

---

## But Sometimes Things Slip Through

Nothing is perfect. Sometimes a colleague adds a new dependency directly above your protected package. Sometimes someone removes the protective lines during a refactor. Sometimes the conflict is in `package-lock.json`, which this trick doesn't touch.

For those cases, I keep a script.

---

## The Structural Merge Script (Fire Extinguisher)

This script does a **proper 3-way merge** of `package.json`—by structure, not by lines.

When Git shows a conflict, it stores three versions of the file:

- **Stage 1:** The common ancestor (Base)
- **Stage 2:** Your version (Ours)
- **Stage 3:** The incoming version (Theirs)

You can read them with `git show :1:package.json`, `git show :2:package.json`, and `git show :3:package.json`.

The script:

1. Parses all three as JSON.
2. Merges them structurally—ours wins over base, theirs wins over ours.
3. Writes the merged `package.json`.
4. Runs `npm install --package-lock-only` to regenerate the lockfile.
5. Stages both files for commit.

Here it is.

```typescript
#!/usr/bin/env tsx
/**
 * resolve-pkg-conflict.ts
 *
 * Usage (when Git says CONFLICT in package.json):
 *   npx tsx scripts/resolve-pkg-conflict.ts
 */

import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";

type JsonPrimitive = string | number | boolean | null;
type JsonArray = JsonValue[];
type JsonObject = { [key: string]: JsonValue };
type JsonValue = JsonPrimitive | JsonArray | JsonObject;

const isObject = (v: JsonValue): v is JsonObject =>
  typeof v === "object" && v !== null && !Array.isArray(v);

const deepMerge = (left: JsonValue, right: JsonValue): JsonValue => {
  if (isObject(left) && isObject(right)) {
    const keys = new Set([...Object.keys(left), ...Object.keys(right)]);
    return Object.fromEntries(
      [...keys].map((key) => [key, deepMerge(left[key], right[key])]),
    );
  }

  if (Array.isArray(left) && Array.isArray(right)) {
    return [...left, ...right].filter(
      (value, index, array) => array.indexOf(value) === index,
    );
  }

  return right;
};

const merge3Way = (
  base: JsonValue,
  ours: JsonValue,
  theirs: JsonValue,
): JsonValue => deepMerge(deepMerge(base, ours), theirs);

const readGitStage = (stage: 1 | 2 | 3): JsonValue => {
  try {
    const raw = execSync(`git show :${stage}:package.json`, {
      encoding: "utf-8",
      stdio: ["pipe", "pipe", "ignore"],
    });
    return JSON.parse(raw);
  } catch {
    return {};
  }
};

const hasConflict = (): boolean => {
  try {
    const output = execSync("git ls-files -u package.json", {
      encoding: "utf-8",
    });
    return output.trim().length > 0;
  } catch {
    return false;
  }
};

const writeJson = (file: string, data: JsonValue): void => {
  writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
};

const run = (cmd: string): void => {
  execSync(cmd, { stdio: "inherit" });
};

const main = (): void => {
  if (!hasConflict()) {
    console.log("✅ No merge conflict detected in package.json. Exiting.");
    process.exit(0);
  }

  console.log("🔍 package.json conflict detected. Resolving structurally...");

  const base = readGitStage(1);
  const ours = readGitStage(2);
  const theirs = readGitStage(3);

  const merged = merge3Way(base, ours, theirs);

  writeJson("package.json", merged);
  console.log("✅ Merged package.json written.");

  console.log("🔄 Regenerating package-lock.json...");
  run("npm install --package-lock-only --no-audit --no-fund");

  run("git add package.json package-lock.json");

  console.log("🎉 Conflict resolved! Files are staged.");
  console.log("👉 Run 'git commit' to complete the merge.");
};

main();
```

The logic is simple: **Ours wins over Base, Theirs wins over Ours**. Your branch keeps its changes, but if the target branch has a newer version of something, you take it. That's almost always what you want.

If you need the opposite, swap the order.

---

## The Lockfile Problem

Fixing `package.json` is only half the battle. If you change dependencies, the lockfile must change too. Doing this manually is impossible.

The script runs `npm install --package-lock-only` to regenerate the exact dependency tree from the merged `package.json`. Clean, deterministic, automated.

---

## When This Breaks

This isn't a silver bullet. The script doesn't know about _semantic_ conflicts—if Theres upgrades React to v19 and Ours upgrades React-DOM to v18, the script will happily merge them and your app will crash at runtime.

But that's a _logic_ error, not a _merge_ error. Your tests or CI should catch that. The script's job is to get you past Git's line-based gatekeeping so you can actually run those tests.

---

## The Takeaway

We spend way too much time acting as glorified diff-checkers for machines. If a problem is deterministic and repetitive, automate it.

The `//` trick takes two lines. The script takes 30 minutes to write. Together, they've saved my team hours of friction.

The best code isn't just bug-free—it's the code that removes the need to write other code.

---

**P.S.** If you're using Yarn, change step 5 to `yarn install --mode=update-lockfile`. If you're using pnpm, use `pnpm install --lockfile-only`. The Git staging logic stays exactly the same.
