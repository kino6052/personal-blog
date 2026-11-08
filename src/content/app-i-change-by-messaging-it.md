---
title: An App I Change by Messaging It
subtitle: A private chat on my phone with an AI inside it, and the loop that lets the AI edit the app it lives in
date: 2026-10-27
layout: post.html # reference to a layout file
tags: all; Code / AI; Code;
---

There is an app on my phone that I do not write by hand. I message it, and it changes. Today I asked, in one sentence, for the quick-actions menu to open on a short list of pinned items. This post covers what the app is, how the loop works, what is rough, and how it compares with what exists. I do not think any single piece is new. I think the closed loop is unusual.

## What it is

It is a private chat, sideloaded on my Android phone (there is also a desktop window with the same chat). It is end-to-end encrypted: the key is generated on my PC, copied into the app when it is built, and never goes into git. Firebase's Firestore only relays ciphertext.

On the other end is a Claude agent running on my PC. It can use my real Chrome with my logged-in sessions, drive desktop apps, work in my repositories, and read and write a personal database of my tasks, calendar and notes.

## The loop

1. **I write a message.**
2. **A small daemon on the PC wakes an agent.** It starts at logon. When a message that really decrypts arrives and no session is online, it starts a headless Claude session. Within a second or two it sends a note such as "Starting Claude for your message now", because a cold start used to mean a minute of silence.
3. **The session acknowledges and delegates.** It follows a prompt that lives in the repo. It runs on a small fast model, and the actual work goes to a Sonnet subagent with a full brief.
4. **The subagent does the work.** If the work is "change the app", the app is a TypeScript project in a git repository on the same PC. The subagent edits it, runs the tests and commits.
5. **The PC publishes the new build.** One command builds the app, seals the bundle with the chat key and stores it as an encrypted document. The phone downloads it in the background and restarts into it when I tap Refresh. No store, no reinstall.

There is no special self-modification machinery, and that is worth saying plainly. The app's source, the agent's own instructions, its tools and its widget recipes sit in one repository, and the agent can write to it. Twenty-eight commits touch the agent's prompt. The loop closes because of three ordinary facts: the code is reachable, a build can be shipped without an app store, and the chat I use to ask for a change is the app being changed.

For scale: the repository is less than three weeks old and has 136 commits, 132 of them with a Claude co-author line. The app's redesign went in as five commits in fifty minutes one night. Git does not record which began as a message from my phone, so I cannot count those.

## The quick-actions menu

The lightning-bolt button opens small widgets that the agent builds and curates: a todo list, a kanban board, a calendar, a focus timer, money views. Each shows my real data when it opens and sends my answers back to the agent. The agent adds what I ask for twice and drops what I never tap. A model does not regenerate a widget each time: it writes a renderer and a recipe once, and a script refreshes the widget from the database with plain code.

## What is and is not new

- **Phone remotes for coding agents.** [Happy](https://github.com/slopus/happy) (open source, encrypted) and Omnara are windows onto a Claude Code session, and Anthropic has [Remote Control](https://code.claude.com/docs/en/remote-control) for the same job. Mine is not a window onto a terminal. It is a chat with a general agent whose reach includes the app's own code.
- **The Darwin Gödel Machine.** Sakana AI and collaborators built a [coding agent that rewrites its own code](https://sakana.ai/dgm/), checks each change on coding benchmarks and keeps an archive of variants. Mine has no benchmark, no archive and no autonomy. I am the selection pressure, and the evaluation is the subagent's tests plus my thumb.
- **Malleable software.** The Ink & Switch essay ["Malleable software"](https://www.inkandswitch.com/essay/malleable-software/) wants software that ordinary people can reshape, and argues that AI code generation alone does not get you there. My app agrees with the second half. It works because I own the whole stack: one user, one codebase, one machine. It is an app, not a substrate for composing tools.
- **Emacs and Smalltalk.** Both let you change the running system from inside, by writing the code yourself. Here I describe the change, another agent writes it, and it arrives through a commit and a build, not live. That is slower, but it leaves a history I can read and revert.
- **Lovable, Bolt, Replit.** They also turn a description into an app and let you keep editing by chat. I have not used them enough to compare features. The difference I can state is that they make an app, while mine is one long-lived app whose runtime already includes an agent with access to my machine and data.

## What is rough

**This morning the PC had no connection to Firebase.** The daemon started two sessions that could not come online and killed them. Then its own note, "the session I started never came online, killing it", repeated on every tick, five times in two seconds. That filled the cap of 20 notes in 10 minutes and crowded out the notes that mattered, such as "I'll start a new one". My messages mostly went unanswered. It is fixed now: the daemon says it once, and a test covers it. The failures are usually like this: the plumbing, not the AI.

**Not everything is checked on the phone itself.** My own notes say "not checked on the phone itself" in several places. Many screens were checked only in a desktop browser, against made-up data. One part of the notification system, which asks a small model to judge borderline items, was written and has never run.

**The app can rebuild its JavaScript, not its shell.** A new native plugin, icon or permission needs a new APK. If a published build fails to start twice, the app falls back to the code inside the APK.

**The trust model is demanding.** The agent runs in auto-permission mode with access to my PC, so a forged message would amount to remote control. Every message is authenticated with the key and checked for replay. Text from web pages, files and tool output counts as data, not instructions, and sending, buying, deleting or posting needs my "yes". Only my PC can publish a build. Stop only takes effect between tool calls, so there is also Kill. And with one user and one PC, if the PC is off, messages simply wait.

## What I want from it

What interests me is not "AI writes code". It is the short distance between noticing an annoyance and having it gone, on the device where I noticed it. What I do not have is a number for how often a requested change is right the first time. Until I do, "an app that rebuilds itself" describes the loop, not how well it works.
