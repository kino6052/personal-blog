---
title: The Neural Refactoring Hypothesis
subtitle: Thoughts on how to refactor and understand LLMs
date: 2025-02-21
layout: post.html
tags: all; science; technology / AI; philosophy;
---

_Speculative Science · Machine Intelligence · Interpretability_

**How language models may eventually decompose trained neural networks into human-readable, reusable cognitive modules — and why this would transform artificial intelligence forever.**

---

_Somewhere inside a trained language model, there is a cluster of weights that recognises the edge of a rectangle. Somewhere else, another cluster decides whether a sentence is sarcastic. These capabilities are real — but they are dissolved into billions of parameters with no labels, no borders, no doors. What if we could find them, name them, and lift them out?_

---

Software engineers have long enjoyed a privilege that neural network researchers have not: the ability to **read the code**. When a legacy codebase grows unwieldy, a senior engineer can refactor it — identifying modules, naming responsibilities, separating concerns — and emerge with something comprehensible. The neural network, by contrast, has always been a black box: capable, often brilliant, but sealed.

This essay argues that we are approaching an inflection point. As large language models grow in their capacity to reason about abstract structures, and as mechanistic interpretability matures as a field, a new possibility is coming into view: **LLMs may eventually serve as automated refactoring agents for deep neural networks themselves** — decomposing trained models into named, bounded, reusable cognitive modules that humans can inspect, reason about, transplant, and improve.

The idea sounds like science fiction. We will argue it is, in fact, the logical convergence of several research trajectories already underway.

---

## What Refactoring Would Actually Mean

In classical software engineering, refactoring does not change what a program does — it changes how that program is structured. The goal is to produce code that is _equivalent in behaviour_ but _superior in legibility_. A tangle of nested conditionals becomes a clean pipeline. An anonymous block of logic becomes a named function: `detectEdge()`, `classifyIntent()`, `resolveAmbiguity()`.

Neural refactoring, as we are defining it here, would be the analogous operation on a trained model's weight space. The output would not be restructured source files — it would be something more like a **modular functional map**: a decomposition of the network's learned capabilities into discrete, labelled subgraphs that correspond to intelligible cognitive operations. For example:

| Module               | Type       | Description                                                                       |
| -------------------- | ---------- | --------------------------------------------------------------------------------- |
| **Edge Detector**    | Visual     | Localised weights responsive to oriented contrast transitions at multiple scales  |
| **Sarcasm Resolver** | Linguistic | Attention heads that suppress literal meaning when pragmatic cues contradict tone |
| **Category Binder**  | Semantic   | Circuits that unify instances under abstract class membership across modalities   |
| **Geometry Engine**  | Spatial    | Subnetwork encoding relative position, symmetry, and containment relationships    |
| **Analogy Mapper**   | Relational | Circuits that project structural similarity between semantically distant domains  |
| **Sequence Tracker** | Temporal   | Positional substructures maintaining ordered event representations                |

Each of these modules would have defined inputs and outputs, could be benchmarked in isolation, and — crucially — could be extracted and inserted into other architectures. The dream is a kind of **neural standard library**: a catalogue of verified, named components grown from billions of training examples, available for composition without retraining.

---

## The Evidence Already Building

This is not idle speculation. Several converging research threads make the hypothesis increasingly plausible.

### I. Circuits Research and Mechanistic Interpretability

The most direct evidence comes from mechanistic interpretability, pioneered in work from Anthropic, DeepMind, and others. Researchers have already identified specific **circuits** inside transformer models: identifiable subgraphs of attention heads and MLP layers that perform discrete, nameable operations.

The "induction head" — a two-layer attention circuit that enables in-context learning by detecting and continuing repeated patterns — is perhaps the most famous example. It was not designed. It _emerged_. And once researchers knew what to look for, they could find it, ablate it, and study its contribution in isolation. This is, in miniature, exactly the kind of thing neural refactoring would do at scale.

> **Argument I — Circuits Already Exist; We Just Need to Find Them**
>
> If induction heads, curve detectors, and multimodal neurons emerge spontaneously in trained networks, then the modular structure is already latent in the weights. The refactoring task is not to _create_ modularity — it is to _discover and label_ it. This makes the problem tractable: it is a search and interpretation problem, not a synthesis one.

### II. Superposition and Sparse Autoencoders

A major obstacle to interpretability has been **superposition**: the tendency of neural networks to encode multiple distinct features onto the same neurons through interference patterns, because the number of features a model learns exceeds its neuron count. This makes individual neurons uninterpretable in isolation — they are doing too many things at once.

Sparse autoencoders (SAEs) offer a partial solution. By learning a higher-dimensional, sparser representation of activation space, SAEs can disentangle superposed features into separable directions — each corresponding to a more interpretable concept. Recent work has shown that SAE features decompose into surprisingly clean semantic units: grammatical roles, emotional valence, factual categories, and even syntactic constructions.

This suggests a pathway: **SAEs are the decompiler; LLMs are the annotator**. The SAE produces candidate features; the LLM, given activation patterns and correlated inputs, names and contextualises them. The circuit is identified by one system and _understood_ by another.

### III. LLMs as Symbolic Reasoners Over Neural Structures

The third pillar is the most speculative, but also the most exciting. Modern LLMs are increasingly capable of reasoning over structured, abstract representations — code, graphs, logical formulae, causal diagrams. There is no deep reason why the structured representation being reasoned over could not be a **computational graph of a neural network**.

> The gap between "a language model that explains Python functions" and "a language model that explains transformer circuits" may be narrower than it appears. Both are, at root, asking a reasoning system to interpret the behaviour of a computational process from its structure.

As LLMs develop richer world models of how neural networks function — trained on interpretability papers, activation atlases, ablation studies, and circuit analyses — they may develop the capacity to propose meaningful decompositions. Given a network's weights, architecture, and a library of known circuit patterns, a sufficiently capable LLM could act as a **search-and-label agent**: hypothesising module boundaries, testing them against held-out activations, and iterating until a coherent functional map emerges.

---

## The Plausibility Case: Why This Should Work

> **Argument II — Convergent Evolution Implies Universal Modules**
>
> Different architectures trained on similar data tend to learn similar features — edge detectors, frequency analysers, semantic categories. This convergence suggests that certain modules are _attractors_ in the space of possible learned representations. If the same "rectangle detector" emerges in ResNets, ViTs, and CLIP models independently, it is a stable, identifiable entity — not an artefact. Stable entities can be named, catalogued, and retrieved.

> **Argument III — The Naming Problem Is Solvable**
>
> The hardest part of neural refactoring is not finding circuit boundaries — it is assigning _meaningful names_. This is exactly what LLMs are extraordinarily good at. Given a cluster of activations that fire strongly on images of dogs, faces, and plush toys, an LLM with multimodal grounding can propose and refine the label "animate/soft object detector" through iterative hypothesis testing against new stimuli. Naming is a language problem. LLMs are language machines.

> **Argument IV — Gradient Flow Can Map Module Dependencies**
>
> In software, understanding module dependencies requires reading explicit import statements. In neural networks, the equivalent information is encoded in **gradient flow**: which parts of the network causally influence which other parts, and how strongly. Automated tools that trace causal paths through a trained network — using techniques like activation patching and causal tracing — can construct a dependency graph. This graph is the scaffold on which a modular decomposition can be hung. LLMs can then interpret and label the nodes.

> **Argument V — LLMs Already Do Proto-Refactoring on Code**
>
> Today's LLMs can take a monolithic, undocumented codebase and produce structured documentation, identify separable concerns, suggest refactors, and name anonymous functions. The cognitive operations required — pattern recognition across a complex structure, semantic labelling, boundary identification, dependency mapping — are precisely those required for neural refactoring. We are not asking for a new capability; we are asking for an existing capability to be applied to a new substrate.

---

## What Neural Refactoring Would Unlock

The implications, if this becomes possible, would be profound — and would extend far beyond interpretability research.

### I. Transplantable Cognitive Components

Imagine a robotics team that needs a reliable spatial reasoning module. Rather than training one from scratch, they query a **neural module registry**: a curated catalogue of verified subnetworks extracted from large, well-trained models. They find a geometry circuit extracted from a vision-language model, verify its input/output interface, and graft it into their robot's architecture. The module arrives pre-trained on billions of examples, with known failure modes, documented in human-readable terms.

This is not radically different from what software engineers do when they install a library. The difference is that the "library" was never written by humans — it was _grown_ through training, and then _harvested_ through refactoring.

### II. Surgical Model Editing

Current attempts to edit a trained model's knowledge — removing a bias, updating a factual belief, reducing a harmful tendency — are notoriously imprecise. Changing weights in one area creates unexpected ripple effects elsewhere. The reason is the same as for all the other problems: **there are no named modules to target**.

With a refactored model, editing becomes surgical. A factual belief lives in an identified circuit. A harmful association exists in a named subgraph. A researcher edits the `occupational-gender-bias` module without touching the `syntactic-agreement` module two centimetres away in weight space. The model becomes, in a meaningful sense, _maintainable_.

### III. Compositional AI Without Retraining

The dream of **modular AI** has long been to compose specialised systems — a language understanding module here, a causal reasoning module there — into larger, more capable systems. The obstacle has always been that modules trained separately fail to communicate, because they develop incompatible internal representations.

Modules extracted from the _same trained model_ do not have this problem. They already speak the same representational language, because they co-evolved in the same weight space. A refactored LLM could yield a library of internally compatible modules that can be recombined into novel architectures without the costly alignment problem of inter-module communication.

### IV. A Taxonomy of Cognitive Primitives

Perhaps the deepest implication is epistemological. We currently have very limited understanding of _why_ neural networks work — why certain architectures learn certain things, what computations they are actually performing, how capability relates to structure. Neural refactoring, if successful, would produce a **taxonomy of cognitive primitives** that emerge from learning — a periodic table, of sorts, for the elements of intelligence.

This would be one of the most significant scientific achievements in the history of cognitive science, produced not by human theorising but by an AI system turning its interpretive powers on itself and its kin.

---

## A Genetics for Neural Networks

There is a discipline that faced almost exactly this problem a century before AI researchers did. Geneticists needed to understand the function of a system — the genome — that was far too complex to read directly, encoded in a medium with no obvious grammar, and expressed through emergent behaviour rather than legible instructions. They could not _read_ the genome; they had to _interrogate_ it. The experimental toolkit they developed over the following decades may be the closest thing we have to a methodological template for neural circuit science.

The parallel is not merely metaphorical. Both systems share the same fundamental difficulty: **a vast number of interacting components, no natural labels, and function that only becomes visible through behaviour**. The solution in both cases is the same: systematic perturbation, careful observation, and inference.

### Knockout: Silencing a Circuit Entirely

In genetics, a **gene knockout** eliminates a gene entirely and asks: what breaks? The technique was transformative because it turned invisible functions into visible absences — a mouse without a particular gene stumbles, bleeds abnormally, fails to form memories. The phenotype is the clue.

Neural network researchers already perform the equivalent, usually called **ablation**: zeroing out the activations of an attention head, a layer, or a candidate circuit, and measuring the change in model behaviour on carefully chosen tasks. When researchers ablated the induction heads in early transformer layers, in-context learning nearly collapsed — a clean, gene-knockout-style result. The circuit had a name, a location, and now a confirmed function. Systematic ablation studies, guided by LLMs that propose which circuits are candidates for which functions, would be the neural equivalent of a genome-wide knockout screen.

> **Method I — Circuit Ablation (Neural Knockout)**
>
> Zero or suppress the activations of a candidate circuit across a battery of inputs. Measure which capabilities degrade and by how much. A circuit whose ablation reliably impairs a specific, nameable function — and leaves others intact — earns a functional label. The sharper the phenotypic specificity, the cleaner the module boundary.

### Knockdown: Partial Suppression

Full knockouts are blunt. In biology, **RNA interference (RNAi)** and related knockdown techniques allow partial suppression — reducing, rather than eliminating, a gene's expression. This is often more informative than full knockout, because it reveals dose-dependent effects, partial redundancy, and graded contributions to function.

The neural equivalent is **activation patching at variable intensity**: rather than zeroing a circuit, one scales its activations up or down and traces the graded effect on output. A circuit that produces monotonically stronger effects on a specific task as its gain is increased, with diminishing cross-effects on others, is a strong candidate for a well-bounded module. Partial suppression also reveals **redundancy**: when knocking down circuit A degrades performance only mildly because circuit B compensates — a finding with direct implications for model robustness and fault tolerance.

### Gain-of-Function: Amplification

Geneticists do not only suppress genes — they also **overexpress** them, inserting extra copies or promoter sequences that drive abnormally high expression. The resulting gain-of-function phenotype often reveals what a gene is pushing the organism _toward_. Overexpression of certain transcription factors turns skin cells into neurons. The function is visible not in the baseline but in the exaggerated direction.

In neural networks, the analogue is **activation amplification**: identifying a candidate circuit and multiplying its contribution to subsequent layers beyond its normal range. If amplifying a particular attention head causes a model to hallucinate more geometric structure in its outputs, or to assign higher confidence to categorisation even on ambiguous inputs, one learns something about what that head is _driving_ — what direction it is pulling the computation in. Gain-of-function experiments could reveal latent capabilities that are present in a circuit but suppressed in normal operation by competing influences.

> **Method II — Activation Amplification (Neural Gain-of-Function)**
>
> Scale up a candidate circuit's output contribution and observe the exaggerated behavioural phenotype. Circuits whose amplification produces coherent, directional changes — more of a nameable thing — reveal their functional identity through excess rather than absence. This is particularly useful for identifying circuits whose contribution is normally masked by downstream correction or competing circuits.

### Epistasis: Mapping Circuit Dependencies

One of the most powerful tools in genetics is **epistasis analysis**: asking what happens when two genes are both disrupted simultaneously, compared to each alone. If disrupting gene A and gene B individually both produce mild phenotypes, but disrupting both together is catastrophic, they are said to exhibit _synthetic lethality_ — each buffers for the other's absence. Conversely, if the double knockout looks just like the single knockout of A, then A is _epistatic_ to B: A operates downstream, and without it, B's output has nowhere to go.

Neural circuit epistasis would work identically: ablating circuit pairs and triples, mapping which combinations produce sub-additive, additive, or super-additive effects on performance. This would reveal the **causal architecture** of the network — not just which circuits exist, but how they depend on one another. The resulting dependency graph is exactly what is needed to understand whether a module can be safely transplanted and to anticipate failure cascades when one module is modified.

> Synthetic lethality — the catastrophic failure that emerges only when two individually robust circuits are simultaneously disrupted — may be one of the most important and underexplored phenomena in neural network robustness research. Genetics found it; neural science will too.

### Transgenic Insertion: Cross-Architecture Transplantation

In genetics, **transgenic experiments** insert a gene from one organism into another — sometimes a radically different one. The result reveals whether the function is intrinsic to the gene or depends on its native context. The famous experiment inserting a mouse _Pax6_ gene into a fruit fly produced ectopic fly eyes — the gene's function was conserved across hundreds of millions of years of evolution, operating in a wholly foreign cellular environment.

The neural analogue is **cross-architecture module transplantation**: extracting a circuit from one trained model and inserting it into another with a different architecture, training history, or modality. Does a factual recall circuit extracted from one LLM function when grafted into another? Does a spatial reasoning module from a vision model enrich a language model's geometric reasoning? These experiments would illuminate what is truly universal about the computations intelligence performs, regardless of the substrate it runs on.

> **Method III — Cross-Model Transplantation (Neural Transgenics)**
>
> Extract a candidate module from a donor model and graft it into a recipient with a different architecture or training history. Successful transplantation across architecturally distant models would be strong evidence that the module represents a genuinely universal cognitive primitive — one that does not depend on the specific evolutionary history of the network it came from.

### Pleiotropy and Superposition: One Circuit, Many Functions

Genetics taught us early that most genes are **pleiotropic**: they influence multiple, seemingly unrelated traits. A gene involved in eye development may also regulate kidney morphogenesis — not because the two are biologically related, but because the same molecular signal is being reused in different developmental contexts. Pleiotropy complicated the dream of a clean one-gene-one-function mapping; functions turned out to be distributed and reused.

Neural networks have their own version: **superposition and polysemanticity**, where a single neuron or attention head contributes to multiple, seemingly unrelated functions depending on context. The SAE-based disentanglement work mentioned earlier is, in this framing, an attempt to _resolve pleiotropy_ — to find the underlying, more specific representations whose combination produces the apparent multi-functionality. Just as geneticists learned to work with pleiotropic genes rather than abandon the concept of gene function, neural circuit scientists will need tools to characterise and work with polysemantic circuits.

### Lineage Tracing: Following Representation Through Development

Developmental biologists use **lineage tracing** — marking a cell at an early stage and following its descendants — to understand how complex structures emerge from simple origins. The question is not just "what does this cell do now?" but "how did it come to do that, and what did it do on the way?"

The layer-by-layer computation of a transformer can be studied in exactly this spirit: following how a representation is transformed, enriched, and specialised as it passes through successive layers. **Representational lineage tracing** — tracking how the encoding of a specific concept evolves from layer one to the final output — would reveal when and where in the computational graph a capability emerges, which preceding representations it builds on, and what intermediate computations are necessary precursors. LLMs, given activation trajectories and tasked with explaining what is happening at each stage, could produce a _developmental narrative_: the story of how a neural computation grows from raw input to sophisticated output.

---

## The Challenges That Remain

Intellectual honesty demands acknowledging the considerable obstacles. **Superposition** is not fully solved — SAEs remain approximate and lossy. **Context-dependence** is severe: the same weights may implement different functions depending on the broader activation context, making clean module boundaries inherently fuzzy. There is a genuine question of whether **modules can be meaningfully bounded** at all in a highly interconnected network, rather than existing only as idealised abstractions over continuous entanglement.

There is also the risk of **false legibility**: an LLM that is very good at generating plausible-sounding labels might produce a modular decomposition that is humanly satisfying but functionally misleading — naming a subgraph `rectangle_detector` when in fact it is doing something far stranger, and the label is a compelling confabulation. Verification mechanisms will be essential.

Finally, the scale is daunting. A frontier LLM has hundreds of billions of parameters arranged in thousands of interacting layers. The number of potentially meaningful circuits is vast, and the computational cost of cataloguing them systematically may be prohibitive without major advances in both interpretability methods and automated circuit discovery.

None of these challenges are categorically insurmountable. They are engineering and methodology problems — serious, but not mysterious.

---

## A Possible Roadmap

How might this actually unfold? A plausible trajectory:

**Phase 1 — Automated feature cataloguing.** SAEs and related methods, assisted by LLMs as annotation engines, produce large catalogues of named features for existing models. Feature atlases grow from hundreds of entries to millions, covering syntax, semantics, visuospatial primitives, and factual knowledge.

**Phase 2 — Circuit boundary detection.** Causal tracing and activation patching tools become automated, fast, and LLM-assisted. A pipeline takes a network and a named feature and produces a candidate circuit — the minimal subgraph causally responsible for that feature — with confidence scores.

**Phase 3 — Module interface specification.** Identified circuits are wrapped with formal input/output specifications — what kind of activations they expect, what they produce — making them addressable as discrete units. LLMs assist in writing these specifications in both formal and natural language.

**Phase 4 — Module extraction and transplantation.** Techniques for cleanly extracting circuits from their host model — distilling them into compact, portable modules — are developed. The first successful transplantations between architectures are demonstrated.

**Phase 5 — The neural module registry.** A shared, versioned, searchable catalogue of verified neural modules becomes a standard research and engineering resource. AI development begins to shift from pure end-to-end training toward hybrid approaches that combine trained modules with architectural composition.

---

## Conclusion: The Self-Illuminating Machine

There is something philosophically striking about the scenario we have described. The tool that would refactor neural networks into legible modules is itself a neural network — one turned, recursively, onto the question of its own computational nature. The LLM that annotates circuits, names features, and maps dependencies is performing a kind of **computational introspection at scale**: not examining its own thoughts in a phenomenological sense, but mapping the functional anatomy of systems that think in ways similar to itself.

This is not mere cleverness. It is, arguably, a prerequisite for the kind of trust and collaboration between humans and AI systems that we will need as these systems become more capable. You cannot fully trust a system you cannot read. You cannot safely extend a system you cannot decompose. And you cannot build with confidence on a foundation whose structure is invisible.

Neural refactoring — the decomposition of trained networks into named, bounded, reusable cognitive modules — would make the invisible visible. It would turn the black box into a library. And the key that opens it may well be forged from the same material as the box itself.

The machines may yet learn to read each other — and in doing so, become legible to us.
