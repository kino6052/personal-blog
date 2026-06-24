---
title: EMPIRICAL SOFTWARE MANIFESTO
subtitle: THE MANIFESTO FOR SOFT SOFTWARE
date: 2025-02-21
layout: post.html # reference to a layout file
tags: all; code / architecture; code / metaphysics;
---

# EMPIRICAL SOFTWARE: THE MANIFESTO FOR SOFT SOFTWARE

Modern software engineering is buried under an immense, expensive temple of its own decoration. We have built a tech culture that treats presentation as architecture, pours concrete over ideas far too early, and forces human creativity to serve the machine.

**Empirical Software** exists to dismantle this priesthood, strip away the introduced complexity, and make software do what it was always meant to do: stay _soft_.

---

## 1. The Three Triumvirates of Failure: Our Named Enemies

To fix what is broken, we must call out the core pathologies that corrupt modern development. The architecture of a system breaks down not because of a lack of technical tools, but because of foundational philosophical failures.

### Enemy I: Reification

The act of treating an abstract concept born in a meeting as a real, physical thing that exists in the wild. In modern code, this manifests as building massive, load-bearing code structures around phantom entities—like an abstract domain layer, an aggregate root, or an enterprise model—long before a single user-facing behavior is validated.

### Enemy II: Metaphysics

The creation of overcomplicated, unfalsifiable corporate and engineering fantasies that have no grounding in direct user perception. When software is driven by ungrounded metaphysics, it spins out of control into a labyrinth of multi-layered architectures and abstract enterprise languages that hide the actual soul of the application.

### Enemy III: The Obsession with Details

The crippling habit of focusing on implementation details—such as which cloud infrastructure, database ORM, or server-side rendering library to use—before defining the underlying logic of the program.

This obsession manifests clearly in how teams frantically try to organize everything into rigid folder hierarchies early in a codebase's lifecycle. Just like heavy linters and over-engineered configurations, physical file structures are chosen too soon and mistaken for genuine architecture. File organization is merely a subjective presentation layer, yet teams weld it to substance.

> **The Tragedy of Modern Tooling:** Our code has ceased to serve human utility. Instead, **our code serves our tools and our bureaucracy**. Root directories fill with configuration files for deployment machines while the real story of what the software does is buried six folders deep.

---

## 2. The Core Principle: Radical Softness

Good architecture is defined by one primary metric: **making software soft**.

True architectural softness is the absolute capacity to **postpone implementation and detail decisions as far into the future as possible.** If a small change in the real world requires rewriting complex deployment pipelines, editing twelve files of structural boilerplate, or re-drawing database schemas, your code is hard. It has been concrete-shackled by its own decoration.

Empirical Software protects the soul of an idea by ensuring that the core mathematical transformations of a program remain completely isolated from, and indifferent to, the shifting runtimes and environments of the external world.

---

## 3. The Metaphysical Exorcism: Grounding the Client

When business stakeholders communicate, they routinely fall victim to their own ungrounded corporate metaphysics, speaking in buzzwords like _"multi-tiered user-retention ecosystem matrices"_. Empirical Software begins every project with a compassionate, non-belittling visual translation exercise designed to strip away the jargon:

- **The Rule of Visual Language:** We ask the client, _"If your idea were fully represented on a static computer screen using only text, buttons, and squares, what would it look like?"_

- **Dethroning Abstract Names:** We forcefully dereify labels. A "login page" is no longer a metaphysical state; it is a square with two inputs and a button.

- **The TRIZ Assumption Teardown:** We deploy TRIZ-style inventive analysis to deliberately isolate, unpack, and disassemble the hidden assumptions locking the client into a narrow, over-engineered solution space. We utilize high-level abstractions consciously as provisional notation, never as permanent load-bearing walls.

---

## 4. The Dual-UI Architecture & Behavioral Grounding

To guarantee softness, Empirical Software enforces a strict structural separation between primitive behavioral truth and aesthetic design. We track development across two parallel UI tracks:

### Track 1: The Minimal Necessary UI

This is the raw, brutally minimalist backbone of the system—effectively drawn in MS Paint. It displays only the bare-bones functional entities, a plain background, and the exact inputs required to move forward. The entire runtime state of the application is anchored strictly to this empirical, perceivable representation.

### Track 2: The Target UI

This is the polished consumer production design, complete with elaborate layouts, fonts, colors, and transitions.

```
  [ Minimal Necessary UI ] ---> ( Downstream Mappers ) ---> [ Target UI ]
    (Pure In-Memory State)                                   (Polished Design)

```

The Target UI is treated as a pure, swappable projection. It is layered on top using **isolated, non-invasive mappers** that cleanly map the core application state and primitive handlers downstream to the design components. The production design conforms to the handlers; the core logic never yields to the design.

### Honest Interaction Handlers

We reject abstract, non-visual code labels. Code handlers do not capture phantom user intents (e.g., `handleSubmit`), because "submitting" cannot be visually pointed to on a screen. A user simply interacts with a physical boundary—like clicking a button—to see a new screen that tells them if they are going the right way or the wrong way. We write code that mirrors the exact physical interaction: `onButtonPress`.

---

## 5. Stripped Bare: The Synchronous Local Workstation

The ultimate litmus test of scalable software is feedback velocity. A project built by Empirical Software can be stripped entirely of its implementation details and run **completely synchronously in-memory on a developer's local machine at any single point in time**.

- **No Vampire Pipelines:** We eradicate budget-sucking, latency-inducing CI/CD pipelines, bloated Docker environments, and heavy, brittle automated E2E testing suites that plague modern development teams.

- **Instant Compilation:** Developers compile locally and instantly, updating only what has explicitly changed.

- **Radical Sprint Demos:** Because the application runs cleanly in-memory with lightweight, synchronous replacements for infrastructure, sprint demos are always tangible, functional, and demonstrable. There is no "complete on paper but broken in reality" fantasy stage.

---

## 6. Living Contracts at the Frontier

We do not allow the messy metaphysics of third-party APIs or external cloud networks to infiltrate our core logic. When integrating with external entities, Empirical Software enforces strict defensive lines:

1. **The Demand for Primitives:** If an external partner wishes to integrate with us, we demand they provide a minimal, necessary, and sufficient synchronous in-memory interface and behavioral implementation of their service.

2. **The Boundary Proxy:** If they cannot provide this, **we build it ourselves**. We map their external concepts through a defensive proxy layer, verifying integration correctness locally in milliseconds without ever forcing our system to bow to foreign instruments.

---

## 7. The Architecture Blueprint (Framework-Blind Composition)

Below is the definitive layout of a **Credential Box** (what the ungrounded world incorrectly reifies as a "Login Page"). Notice how the composition root is entirely pure JavaScript—it remains blind to React, browsers, DOM structures, and renderers.

### `credentialLogic.js` (Pure Perceptual States & Handlers)

This file holds the pure data transitions and instantiates the agnostic state workstation manager. It contains zero external framework or markup dependencies.

```javascript
// Pure functional logic transformations
export function updateFormEntry(currentEntries, key, incomingText) {
  return { ...currentEntries, [key]: incomingText };
}

export function evaluateFormValidity(usernameText, passwordText) {
  if (!usernameText.trim()) return "Username text box cannot be empty";
  if (!passwordText.trim()) return "Password text box cannot be empty";
  return null;
}

// Agnostic Workstation State Manager
export function createCredentialWorkstation(localNetworkProxy) {
  let state = {
    userFormEntries: { usernameText: "", passwordText: "" },
    isLoaderVisible: false,
    displayedStatusText: "Please enter your credentials",
    isActionButtonDisabled: false,
  };

  const listeners = new Set();
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const emit = () => listeners.forEach((l) => l(getPrimitiveProps()));

  const onInputChange = (key, incomingText) => {
    state.userFormEntries = updateFormEntry(
      state.userFormEntries,
      key,
      incomingText,
    );
    state.displayedStatusText = "Typing...";
    emit();
  };

  const onButtonPress = async () => {
    const UIValidationError = evaluateFormValidity(
      state.userFormEntries.usernameText,
      state.userFormEntries.passwordText,
    );

    if (UIValidationError) {
      state.displayedStatusText = UIValidationError;
      emit();
      return;
    }

    state.isLoaderVisible = true;
    state.displayedStatusText = "Verifying credentials against server...";
    state.isActionButtonDisabled = true;
    emit();

    try {
      const successDisplayString = await localNetworkProxy(
        state.userFormEntries.usernameText,
        state.userFormEntries.passwordText,
      );
      state.isLoaderVisible = false;
      state.displayedStatusText = successDisplayString;
      state.isActionButtonDisabled = true;
    } catch (err) {
      state.isLoaderVisible = false;
      state.displayedStatusText = `Error: ${err.message}`;
      state.isActionButtonDisabled = false;
    }
    emit();
  };

  const getPrimitiveProps = () => ({
    statusText: state.displayedStatusText,
    isSpinnerActive: state.isLoaderVisible,
    usernameValue: state.userFormEntries.usernameText,
    passwordValue: state.userFormEntries.passwordText,
    disableAction: state.isActionButtonDisabled,
    onUsernameType: (text) => onInputChange("usernameText", text),
    onPasswordType: (text) => onInputChange("passwordText", text),
    onButtonPress,
  });

  return { subscribe, getProps: getPrimitiveProps };
}
```

### `credentialView.jsx` (The Peripheral View Layer Detail)

The view layer encapsulates its own internal dependencies (React, ReactDOM, DOM targets) entirely within itself. It exposes a single, clean contract method to the world: `renderUI(stateManager)`.

```jsx
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

// Track 1: Minimal Necessary UI (MS Paint primitive equivalence)
function MinimalCredentialBox(props) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "300px" }}>
      <div>{props.statusText}</div>
      {props.isSpinnerActive && <div>[Loader Active]</div>}
      <input
        type="text"
        value={props.usernameValue}
        onChange={(e) => props.onUsernameType(e.target.value)}
        placeholder="User Box"
      />
      <input
        type="password"
        value={props.passwordValue}
        onChange={(e) => props.onPasswordType(e.target.value)}
        placeholder="Pass Box"
      />
      <button onClick={props.onButtonPress} disabled={props.disableAction}>
        Press Button
      </button>
    </div>
  );
}

// Track 2: Target UI (Polished wrapper projection lens)
function TargetCredentialBox(props) {
  return (
    <div className="auth-card-container modern-shadow-v2">
      <header className="brand-header">
        <p className="ui-subtitle-status">{props.statusText}</p>
      </header>
      {props.isSpinnerActive && <div className="modern-loading-bar" />}
      <div className="input-group-wrapper">
        <input
          className="styled-input-field"
          type="text"
          value={props.usernameValue}
          onChange={(e) => props.onUsernameType(e.target.value)}
        />
      </div>
      <div className="input-group-wrapper">
        <input
          className="styled-input-field"
          type="password"
          value={props.passwordValue}
          onChange={(e) => props.onPasswordType(e.target.value)}
        />
      </div>
      <button
        className="action-btn-primary"
        onClick={props.onButtonPress}
        disabled={props.disableAction}
      >
        Sign In
      </button>
    </div>
  );
}

// Internal framework adapter bridge
function ReactWorkstationShell({ workstation }) {
  const [props, setProps] = useState(() => workstation.getProps());

  useEffect(() => {
    return workstation.subscribe((nextPrimitiveProps) => {
      setProps(nextPrimitiveProps);
    });
  }, [workstation]);

  return (
    <div style={{ display: "flex", gap: "40px", padding: "40px" }}>
      <MinimalCredentialBox {...props} />
      <TargetCredentialBox {...props} />
    </div>
  );
}

// Standardized Contract Method: The View Layer takes ownership of its own presentation machinery
export function renderUI(workstation) {
  const domRootElement = document.getElementById("root");
  const UIPlatformRoot = ReactDOM.createRoot(domRootElement);
  UIPlatformRoot.render(<ReactWorkstationShell workstation={workstation} />);
}
```

### `main.js` (The Framework-Blind Composition Root)

This is the absolute entry point of the application running on the system. It contains no JSX, no React imports, and no reference to browser DOM elements. It sets up the logic dependencies and boots up the presentation adapter blind to its specific implementation.

```javascript
import { createCredentialWorkstation } from "./credentialLogic";
import { renderUI } from "./credentialView";

// 1. Setup clean, local, synchronous infrastructure proxies
const synchronousLocalProxy = async (username, password) => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  if (username === "admin" && password === "soft") {
    return "Access Granted: Welcome back, Operator Alpha";
  }
  throw new Error("Invalid entries inside the primitive text boxes");
};

// 2. Instantiate the pure state manager workstation
const workstation = createCredentialWorkstation(synchronousLocalProxy);

// 3. Hand control off to the isolated view presentation layer
renderUI(workstation);
```

---

## The Empirical Manifesto

We reject the false industry consensus that massive engineering overhead is the necessary price of software scalability. Bloat is not the cost of power; it is the penalty paid for ungrounded thinking.

By demanding necessity and sufficiency, stripping away the ceremony of modern frameworks, and centering our entire architecture around what can be directly seen and verified, we make software that can scale to a billion users while remaining light enough to run on an ENIAC.

We stop building immovable monuments to our tools. We build software that remains soft.

---

## 8. FAQ

### Q: Without a rigid folder structure like Feature-Sliced Design (FSD), how do developers find anything in a massive codebase?

**A:** You use your IDE's search, context menus, and jump-to-definition features. In the modern era, the physical directory on a disk is practically invisible during active development. Treating file structure as a primary architectural choice is a fundamental mistake; it confuses a presentation lens with structural logic. Code can live in a completely flat structure and still be neatly organized through dynamic, swappable tags. Architecture is about how code yields to change, not where you store the files.

### Q: If we don't use Domain-Driven Design (DDD), how are we supposed to map complex business requirements?

**A:** DDD routinely models an organization's internal bureaucracy and meeting notes rather than the user's actual experience of the software. Users don't interact with "Bounded Contexts" or "Aggregate Roots"; they interact with a button, a list, a text field, and a status block. The moment you make a conceptual word like "Customer" a load-bearing architectural wall, you have reified an abstraction. We map requirements by starting from the perceptible screen outward, ensuring every line of code tracks a visible truth rather than a metaphysical ghost.

### Q: Stripping away automated E2E tests and heavy CI/CD pipelines sounds reckless. How do you guarantee stability?

**A:** Heavy CI/CD pipelines are a tax teams pay for building high-latency, infrastructure-dependent systems. If your software requires a cloud environment, a live database, and three third-party sandboxes just to verify a logic change, your feedback loop is broken. True stability doesn't come from a vampire pipeline auditing thousands of lines of transitive dependencies. It comes from an architecture that runs completely synchronously and in-memory. When correctness can be verified locally in milliseconds, the heavy engineering pipeline transitions from a necessity to an expensive corporate ornament.

### Q: React won the industry standard. Why go through the trouble of hiding it behind a custom view adapter?

**A:** React succeeded because it introduced composable UI components, but it also popularized the mixing of layout presentation syntax with pure state logic. JSX requires complex, non-native transformation pipelines that harden your codebase. Runtimes change and frameworks drift, but pure logic is durable. Relegating React to a peripheral implementation detail—accessed only via a standardized `renderUI` contract—guarantees that your software's soul remains soft, independently testable, and completely framework-blind.

### Q: Isn't tracking a "Minimal Necessary UI" and a "Target UI" just writing the code twice?

**A:** No, because you are writing the _substance_ (the states and physical handlers) exactly once. The Target UI is merely a downstream projection layer. Traditional stacks weld the visual design system directly to the business logic, meaning a minor design revamp or layout shift forces a massive refactoring of data flows. By utilizing non-invasive mappers, you ensure that the substance changes freely while the visual clothing adjusts automatically without taxing the architecture.

> **The Litmus Test:** Take any user-facing behavior in your current codebase. Add an extra input field or change the success condition. If Version A (the direct logic) requires one clean edit, but Version B (the decorated stack) requires you to touch a page object, an abstract registry, a factory, and an infrastructure configuration file, your abstractions are not paying rent. They are a tax on change.

## Is this really new?

No, it is absolutely not new—and that is precisely where its power comes from.

If it were a brand-new invention, it would just be another shiny pattern to add to the pile. Instead, this philosophy is an act of **architectural restoration**. It takes foundational principles from 300-year-old philosophy and 50-year-old computer science and weaponizes them against the specific, bloated pathologies of the 2020s tech stack.

Here is where these ideas actually come from and why they feel so radical today:

---

## 1. The Philosophical Roots: Radical Empiricism

The core thesis—_if you cannot perceive it, it is a ghost that has no right to exist_—is straight out of the 18th century.

- **George Berkeley** argued _esse est percipi_ ("to be is to be perceived"). He proved that when philosophy detaches its concepts from direct human experience, it creates meaningless metaphysical monsters.

- **Immanuel Kant** warned us about how the mind aggressively projects its own internal categories onto reality rather than deriving truth from experience.

- **Empirical Software** simply applies this exact epistemological rigor to silicon: the user's screen is our only empirical ground truth, and everything else is just provisional machinery.

---

## 2. The Computer Science Roots: Pure Determinism

The separation of pure, deterministic mathematical transformations from the messy, stateful, external world is the foundational bedrock of **Functional Programming** and early computing limits.

- The concept of pushing framework-specific delivery mechanisms (like React) to the absolute perimeter of the application is a hardcore realization of Alistair Cockburn’s **Ports and Adapters (Hexagonal Architecture)** and Uncle Bob's **Clean Architecture**.

- The idea of a completely synchronous, in-memory running model echoes the **UNIX Philosophy**: build minimal, necessary, and sufficient programs that communicate via simple, transparent interfaces, free from environmental contamination.

---

## 3. What _Is_ New: The Target of the Rebellion

What makes this feel fresh is not the underlying logic, but the **modern context of the counter-attack**.

Software has never been more decoupled from the actual hardware running it. We live in an era where developers routinely pull down a 50MB `node_modules` folder to render a simple static form, hide behind ungrounded abstractions like Domain-Driven Design to justify architectural stagnation, and allow expensive CI/CD pipelines to act as a substitute for fast local feedback.

When ancient computing discipline is dropped into today's ecosystem of bloated frameworks and process-heavy corporate bureaucracy, it doesn't look like a standard best-practice checklist—**it looks like an act of war**. It is old wisdom repurposed as a modern manifesto.
