---
title: A Computational Framework for Prime Numbers
subtitle: A Case Study on How Reification and Ontology Affect Prime Infinitude Arguments
date: 2025-02-21
layout: post.html # reference to a layout file
tags: all; philosophy; mathematics / number theory;
---

**Yong Xue**
**December 26, 2025**
_Dedicated to Li Juan, another mystery yet to be solved._

---

**Abstract**

We often make a fundamental mistake in mathematics: we take a living, ongoing process and freeze it into a dead object. This is called reification, and it creates unnecessary obstacles. This paper introduces the Computational Prime Number Framework (CPNF). Here, primality is not a permanent property a number is born with; it is a status earned through a strict, step-by-step certification process.

By looking at primes as the output of a working machine rather than a static, completed set, we change how we frame our questions. We apply this to twin primes. We do not claim to provide a formal mathematical proof that the twin prime machine never halts. Instead, we present a strong philosophical case: because the fundamental physical rates of the machine strictly diverge—its search window expands quadratically while its eliminations accumulate logarithmically—the rational epistemic default is non-halting. We show that by shifting our ontology, classical barriers like the parity problem disappear, and the burden of proof shifts to those claiming a local structural collapse against the grain of global divergence.

**Methodological Note.** This paper is philosophical. It asks: how does turning a process into an object dictate the limits of our reasoning? CPNF is a self-contained working model. In this model, famous roadblocks like the "parity problem" simply do not exist because they are artifacts of the wrong point of view. We do not offer a deductive proof from Peano Arithmetic; we offer a new lens to establish the most reasonable default stance.

---

## 1. The Problem: Freezing the Process

When we do mathematics, we make assumptions about what things are. One of the most common habits is reification: treating a dynamic process as if it were a finished, static object.

Think of how we usually view primes. We see them as a fixed landscape, a "completed infinite set." Because we see them this way, we invent tools to count them or measure their density. But what if primes are not pre-existing objects? What if they are simply certificates issued by an ongoing verification process?

This is the core of the Computational Prime Number Framework (CPNF). In CPNF, primality is a status. A number becomes prime only when it survives a strict, deterministic filter. This is how Euclid and Eratosthenes originally thought.

Our goal is to show that changing the viewpoint changes the math. We will look at twin primes—pairs like $(6n - 1, 6n + 1)$. We will explore how a process-oriented ontology naturally establishes their continuous generation as the logical default.

## 2. CPNF: The Certification Machine

Let $\mathbb{N}^+$ be the positive integers. In CPNF, we do not define primes just by divisibility. We define them by a recursive sifting process. The machine has three parts:

- **The Blocker Set ($B_k$):** A finite list of numbers we have already certified by stage $k$. We start with nothing: $B_0 = \emptyset$.
- **The Candidates:** All integers $\ge 2$.
- **The Sieve:**

$$S(B_k, \mathbb{N}^+) = \{n \in \mathbb{N}^+ : n \ge 2 \land \forall p \in B_k, p \nmid n\}$$

The machine runs in distinct stages:

1. **Start:** $B_0 = \emptyset$.
2. **Stage $k$:**

- Take all numbers and pass them through the current blockers. The ones that make it are the survivors: $S(B_{k-1}, \mathbb{N}^+)$.
- Find the smallest survivor, $n_k$.
- Certify $n_k$ as an **ordinary framework prime**. Add it to the blockers: $B_k = B_{k-1} \cup \{n_k\}$.

Every ordinary framework prime earns a finite certificate: the exact list of blockers it survived. Stage 1 certifies 2. Stage 2 certifies 3. The machine keeps ticking.

**What does this machine do?**

- **It is precise:** It never certifies a composite number.
- **It never stops:** The recursive sifting process runs forever.

This is Euclid’s infinitude argument, rebuilt not as a statement about an infinite set, but as a guarantee that a machine will never run out of fuel.

## 3. Finding Twin Primes

### 3.1 The Twin Index

Once the machine filters out multiples of 2 and 3, every surviving number looks like $6n \pm 1$. This gives us a brilliant shortcut: the twin index.

- The index $n \ge 1$ represents the pair $(6n - 1, 6n + 1)$.
- Certifying the index $n$ means _both_ numbers survive the current blockers in $B_k$.

### 3.2 The Safe Window

We cannot certify an index $n$ blindly. We can only certify it when all of its possible divisors are already in our blocker set $B_k$.

If our biggest blocker is $y_k = \max(B_k)$, we can only safely check numbers up to $\sqrt{6n + 1} \le y_k$. This gives us a strict, safe boundary for our search, which we call the certification window, $W_k$:

$$n \le W_k = \lfloor \frac{y_k^2 - 1}{6} \rfloor$$

### 3.3 How the Machine Sifts for Twins

We start with $B_0 = \{2, 3\}$. The machine then alternates between two jobs:

1. **Build the Shield (Completion):** Add new ordinary framework primes to $B_k$ until the safe window expands enough to cover our targets.
2. **Search the Zone:** Look inside the safe window $W_k$ for the smallest index $n$ that survives the current blockers.

If the machine finds a survivor, it certifies the twin. If it does not, it adds the next ordinary framework prime and expands the window. It is a strictly controlled process.

## 4. The Race, the Grid, and the Epistemic Default

### 4.1 The Endless Chase

What if the machine reaches a point where every single twin index is destroyed before the safe window can reach it? What if the expanding window is always chasing survivors, but never catching them? We call this the endless chase. The classical Twin Prime Conjecture is simply the statement that this chase never occurs.

### 4.2 Why Averages Fail Us

Classical math uses density estimates. It says we should find about $y_k^2 / (\log y_k)^2$ twins inside the window $W_k$. But averages are dangerous.

The full repeating pattern of our sieve—the modulus $M_k = \prod_{p \in B_k} p$—grows super-exponentially. Our safe window $W_k$ only grows quadratically. The window is a microscopic sliver of the full pattern. A global average guarantees survivors exist on a large scale, but it cannot mathematically force a survivor to land inside our specific, local window.

### 4.3 Stopping the Strobe: Fixed-Modulus Reduction

To see clearly, we lock the modulus at $M_0$ for a specific stage $k_0$. We look at the repeating grid of residues modulo $M_0$.

On this grid, we have safe slots. When a new prime $q$ enters the machine, it strikes out a maximum of two slots modulo $q$. As the primes get bigger, their strikes become incredibly sparse. They accumulate at a slow, logarithmic rate.

Meanwhile, our safe window $W_k$ accelerates quadratically. The window expands vastly faster than the sparse new primes can strike out the safe slots.

### 4.4 The Machine's Output and the Rational Default

A strict formalist will look at this and say: _The machine is deterministic. The primes are not independent. They follow rigid arithmetic. If the combined eliminations happen to perfectly cover the interval $W_k$, that is not a 'conspiracy' requiring a magic mechanism; it is simply the deterministic combinatorial output of the machine. Diverging global averages do not prevent local gaps._

Mathematically, this is entirely correct. We cannot formally deduce the non-emptiness of the local window from global divergence.

However, philosophically, we must establish a rational epistemic stance. In a deterministic system governed by macroscopic rates that diverge so radically (quadratic expansion vs. logarithmic elimination), a permanent local collapse—an empty window stretching into infinity—represents an extreme structural anomaly.

In the reified, static view of primes, the burden is placed on the mathematician to prove this anomaly _cannot_ exist. The math stalls.

In the process-oriented view of CPNF, we look at the physical reality of the machine. The expansion aggressively outpaces the elimination. Therefore, our philosophical case is this: a deterministic integer process with such diverging behavior should not be assumed to produce an infinitely persistent, specific local gap without a concrete, identifiable combinatorial forcing mechanism. Absent proof of such a structural collapse, the rational default is that the machine continues. We shift the burden not as a logical deduction, but as an epistemic necessity.

## 5. Bypassing the Parity Problem

Classical number theory hits a wall called the parity problem. Using traditional sieves, mathematicians cannot tell the difference between a number with an even amount of prime factors and an odd amount.

Why does this happen? Because they are using the wrong tool. They are trying to measure the exact size of a completed set.

In CPNF, the parity problem vanishes.

1. **We do not make absolute claims:** We only certify relative to the current stage.
2. **We run a machine:** We care about what the machine does next, not about counting everything it left behind.
3. **Success is movement:** We do not need to count the twins. We only need to show the machine does not stagnate. The parity of the factors we eliminated does not matter at all.

Reification—freezing the primes—forces us to use complicated tools to solve artificial problems. By focusing on the process, we make these artificial walls disappear.

## 6. Conclusion: A New Lens

This paper was written to find conceptual clarity. Mathematics, like philosophy, suffers when we confuse a living process for a dead object.

When we freeze primes into an infinite set, we force ourselves to measure them. Those measuring tools eventually break. They hit limits like the parity problem. They force us to logically disprove hypothetical scenarios without physical justification.

The Computational Prime Number Framework offers a different lens. Primality is a stage-relative certification. "Infinitude" is not the size of a set; it is the physical continuation of a deterministic machine.

We do not claim to have established a formal mathematical proof of the Twin Prime Conjecture. The gap between global averages and local realities remains mathematically open. However, we claim to have established a strong philosophical case. By viewing the problem through a process ontology, we see a machine whose foundational rates dictate expansion over elimination. The epistemic default shifts. We no longer ask, "How can we prove the set is infinite?" We ask, "Given the mechanics of this machine, what logical right do we have to assume it ever stops?" Change the point of view, and the way forward becomes clear.
