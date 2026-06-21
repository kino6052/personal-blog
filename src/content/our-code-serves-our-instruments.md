---
title: Our Code Serves Our Instruments, Not Us
subtitle: And how to fix it
date: 2025-06-21
layout: post.html # reference to a layout file
tags: all; code / architecture;
---

Open any codebase. What do you see first?
A graveyard of machinery. webpack.config.js. tsconfig.json. jest.config.js. eslint.config.js. docker-compose.yml. vite.config.ts. .env.example. prettier.config.js. A dozen configuration files screaming for attention before you glimpse a single line of code that does something a human would recognize.
The actual program entry point is buried. Hidden in a folder called src/index.ts that does nothing but bootstrap a framework. Named something that misleads you. Always behind layers of ceremony that exist not for the developer, but for the tooling.
The build system needs these configs. The bundler needs them. The test runner. The linter. The framework. All demand their tribute. And we have accepted that our first duty is to feed the machinery before we can even find the program we are supposed to write.
The code serves the instruments. Not us.

---

The Cost
When you open a new project, you want to find something meaningful. A screen. A use case. A button that corresponds to something real. Something you can see.
Instead, you wade through abstractions that have no visible referent. You mentally model the framework's lifecycle. You trace imports across a dozen files. You try to reconstruct the flow from fragments scattered across the codebase.
The brain drains quickly. Not because the problem is intrinsically complex, but because the machinery has been placed in front of the meaning. You have to navigate the maze before you can even find the room where the actual work happens.
This is not an accident. It is the natural consequence of treating the instrument's needs as primary.

---

The Promise That Fails
Clean Architecture promised to solve this. Separate the core from the machinery. Inject dependencies. Depend on abstractions, not concretions. Keep the surface clean.
It has been promising this for decades.
In practice, the machinery always creeps back. The configuration proliferates. The frameworks multiply. The entry point becomes a dumping ground for bootstrapping code. The core becomes abstract and ungrounded.
Why?
Because the theory lacks grounding. It gives you principles but no way to verify that you are following them. It talks about "entities" and "use cases" and "interfaces" but never asks the crucial question: What does this correspond to in experience?
Without that question, the architecture floats. Developers invent concepts—Repositories, Aggregates, Services—that satisfy the pattern without having any perceptual referent. The surface becomes polluted with entities that exist only in the modeler's mind.

---

The Disease of Reification
Reification is treating an abstraction as if it were a concrete thing.
In philosophy, this is an ancient error. In software, it is the primary source of the complexity we fight every day.
A "Customer" object is not a customer. A customer is a human being who behaves in certain observable ways. The object is a set of data structures and functions that stands for certain aspects of that behavior. The moment you forget this—the moment you believe that the Customer class is the customer—you have reified. You have created a ghost.
Ghosts are not harmless. They pollute your thinking. They turn your attention away from the only thing that can ground your reasoning: experience. What can be seen? What can be tested? What can be verified by looking at the running software?
A grounded system answers these questions. A reified system does not.

---

The Grounding Question
Ask a single question, relentlessly, for every element in your system:
What does this correspond to in experience?
If you cannot answer, you have drifted. The abstraction may still be useful—many abstractions are—but you must know that it is ungrounded. You must be able to trace a path from the abstraction back to something perceivable.
For an application with a UI, the ground is the screen. Every abstraction must ultimately serve what appears there. Buttons, forms, lists, transitions—these are the ontological ground floor. The database is subservient. The API is subservient. The service bus is subservient. All of them exist to produce the user's experience.
For a database, the ground is the use-case. Read this key. Write that value. Perform this transaction. The B-tree is subservient. The lock manager is subservient. The query optimizer is subservient. All of them exist to fulfill the client's contract.
If you work on backend code or infrastructure, you must understand: you are serving. Your code is not the story—it is the machinery that makes the story possible. That is a noble role. It is not the leading role.

---

The Defensive Accusation
The accusation comes quickly: clarity is weakness. If you cannot navigate the labyrinth, you are not a true developer. The complexity is not the problem—your inability to handle it is.
This is a defense mechanism. It protects the status of those who have invested in mastering the machinery. It makes opacity a virtue. It equates confusion with sophistication.
Think about what this logic implies. If clarity is weakness, then obscurity is strength. If navigation of the labyrinth is a sign of competence, then the labyrinth itself must be preserved. The person who questions why the labyrinth exists is not a hero—they are a threat to the entire status system.
This is not engineering. It is priesthood.

---

The Discipline
What is the practical discipline that keeps the machinery in its place?
First: awareness. Constant reflexive checking. Every abstraction you create, ask yourself: What is this, really? What does it stand for in the running software?
Second: an honest entry point. The surface of your system should be clean, minimal, and truthful. The first thing a reader sees should tell them what the software does. Not what framework it uses. Not how it is configured. Not the clever abstractions you invented. What it does.
Third: a test suite that starts from the ground. For a UI application, this means tests that run from the user's perspective—clicking buttons, filling forms, asserting visible states. For a database, this means tests that connect via the wire protocol and issue queries. The ground must be tested as ground, not as an abstraction.
Fourth: the ability to strip the abstractions away. If you removed every layer of ceremony, could you still describe the program clearly? Could you write the necessary and sufficient code that does the work, without the wrappers, without the indirections, without the machinery? If not, the abstractions have become load-bearing. And load-bearing abstractions are the ones that resist change.

---

The Response
Against the accusation that clarity is weakness, you do not argue. You demonstrate.
Patiently. Repeatedly. With real examples and real use-cases.
You show them a codebase that is grounded. Where the surface tells the true story. Where the entry point is honest. Where every abstraction can be traced to experience. You show them that this code is easier to change, easier to understand, easier to trust. Not because it is simpler—but because it is honest.
You accept that this will be a long process. The status system is entrenched. The priesthood defends itself. Individual developers will resist because the alternative threatens their identity.
But the results speak for themselves. A grounded codebase is softer. It yields to change rather than resisting it. It welcomes new developers rather than requiring them to be initiated. It does the work without demanding tribute.
You keep demonstrating. You keep building. You keep showing that clarity is not weakness. It is the only sustainable strength.

---

What Would It Look Like?
The surface would tell you exactly what the software does.
If it is a website, the top-level structure would correspond to screens, behaviors, and interactions. Not HTML necessarily—perhaps a declarative description that says: "Here is the homepage. Here is the login flow. Here is what happens when you click this button." The necessary and sufficient story of the program would be laid bare.
The abstractions would be there—they would have to be—but they would be behind the surface. The machinery would live where it belongs: out of sight, accessible when needed but invisible by default.
Entry points would be honest and clear. The file that starts the program would be named start or boot or entry. It would be visible. The first thing you read would tell you what the software does, not what it depends on.
The instruments would serve us. Not the other way around.

---

The Ultimate Truth
Software is made of ideas, not matter. And ideas drift.
They drift away from experience. They become self-referential. They create ghost entities that exist only in the modeler's mind. The machinery that was supposed to serve us becomes the center, and we become its servants.
The only cure is grounding. Every concept must be traceable to something perceivable. Every abstraction must be able to answer the question: What does this correspond to in experience?
This is not minimalism. It is not anti-abstraction. It is simply honesty—the refusal to let the machinery become the master.
Build the necessary and sufficient code. Tuck the machinery away. Keep the surface clean. And always, always be able to come back to the ground.
That is the discipline.
That is the long path.

---

If you removed every layer of ceremony, could you still describe the program clearly? If not, the abstractions have become load-bearing—and load-bearing abstractions are the ones that resist change.
The instruments serve us, not the other way around.
