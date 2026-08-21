---
title: What Are Prime Numbers?
subtitle: On ghosts, rules, and why the primes are a process rather than a place
date: 2026-08-21
layout: post.html # reference to a layout file
tags: all; philosophy; mathematics / number theory;
---

# What are prime numbers?

When I took introductory classes in formal mathematics in college, the professors would often speak of math as something existing in a separate world — that there is some inherent beauty to it, that it was found rather than made. They especially liked to emphasise the mystery of infinity.

Back then I was not yet familiar with the relevant philosophical concepts, so I did not notice how much philosophy was being smuggled in, seemingly harmlessly.

The foundation of mathematics is entirely philosophical. Some beliefs are required for the system to exist at all. But once those beliefs are stated, mathematics becomes heavy lifting — proofs and computations — and stops being about how we think of these things. How we think about them, and what they are, is precisely philosophy. The rest is mathematics. It is the philosophy I have always been interested in, not the math.

Computation and rigorous proof are fun, right up to the point where they require you to become a machine. Once mathematics is nothing but machine-like rule-following, the beauty dissolves. That is my view, at least.

So for me, as someone who came to this from philosophy, it matters to keep playing with the question of what mathematics actually is.

---

From the beginning we are handed set theory — the conceptual system behind modern mathematics, the thing that makes it a unified field instead of a compendium of tricks. Simple rules: the most fundamental entities are objects and sets. Add operations, a little extra, and you have all of mathematics.

The funny thing is that despite being mostly common sense, one thing was added to it that defies common sense — infinities, of several different kinds.

From an empirical standpoint this looks like a crude mistake. Smuggling in reified entities is known to cause a great deal of trouble in philosophy.

No wonder mathematicians are so adamant that mathematics exists in a separate world. Once you have committed to the ghosts, you need somewhere to put them.

For anyone familiar with empirical philosophy, and with Berkeley's arguments in particular, entities need grounding and empirical validation. Otherwise we are just talking about ghosts.

The most honest thing we can say about numbers is that mathematics is more like a game. We have rules, and everything is contained in those rules and can be unfolded analytically from them, in Kant's sense. My mathematics teachers disagreed with this, and it is no wonder they did.

Over time I came to think that the most ghost-filled stronghold in all of mathematics is number theory, and the prime numbers in particular. These are numbers we hand almost supernatural properties to, as if they were out there somewhere, waiting to be found.

---

## The machine

So I wanted a way to show that prime numbers are nothing mysterious — that they are the output of rules and a process. This is why I built what I call the Computational Prime Number Framework.

It is based on the sieve of Eratosthenes, which everyone already knows. But the sieve is normally used only as an illustration, or as a way to compute a table. It is not used as a reasoning framework. Number theory reasons analytically instead, about densities and distributions. I wanted to see what happens if you take the sieve seriously as the thing itself, and reason inside it.

There is an irony here that I am aware of. I said mathematics loses its beauty when it becomes mechanical rule-following, and then I went and built a machine. But there is a difference between being made to follow rules you did not choose and cannot see, and making the rules explicit, finite, and small enough to hold in your head at once. The second is what dissolves ghosts.

Here are the rules in full.

> **1. Start with nothing.** The list of blockers is empty.
>
> **2. Survival.** A number survives if no blocker divides it.
>
> **3. Certification.** The smallest survivor greater than 1 is certified. It then becomes a blocker itself.
>
> **4. Repeat.** Forever.
>
> That is the entire machine for ordinary primes. For twin primes, two more:
>
> **5. Labelling.** Once 2 and 3 are blockers, every survivor is either one less or one more than a multiple of six. So a candidate pair can be labelled by a single number _n_: the pair is (6*n*−1, 6*n*+1).
>
> **6. The window.** A pair may be certified only once the largest blocker _y_ is big enough to vouch for it — that is, only when 6*n*+1 is no larger than *y*².

That is all of it. Nothing else is assumed.

---

## What the rules produce

Run it. The blockers start empty, so everything survives, and the smallest survivor is 2. Certify it. Now the survivors are 3, 5, 7, 9, 11, and the smallest is 3. Certify it. Now 5. Then 7.

The machine never certifies a composite number, and the reason is worth saying plainly, because everything else rests on it. Any composite number has a factor no larger than its own square root. By the time the machine reaches that composite, every prime below its square root is already sitting in the blocker list. Look at 25. It survives 2 and 3, so it really is in the survivor list. But it is not the smallest survivor, and long before the machine could reach it, 5 becomes a blocker and kills it.

So primality here is not a property a number is born with. It is a status earned by surviving a test, and every certificate is finite: the list of blockers the number got past.

Now, does the machine ever run out? Take all the current blockers, multiply them together, add one. No blocker divides that number, because each one leaves a remainder of 1. So a survivor always exists, which means the machine can always take another step.

This is Euclid's argument, but notice what it says here. It does not say that a completed infinite set of primes exists somewhere. It says the rule never stalls. That is a claim about a process, and it is the kind of claim you can actually cash out.

---

## Why 6n ± 1

Here is my favourite thing the framework explains, because analytically it is usually presented as a curiosity, and here it is just bookkeeping.

Every prime past 3 is of the form 6*n*−1 or 6*n*+1. Why?

Because of the second step. After 2 and 3 become blockers, the survivors are exactly the numbers that are neither even nor divisible by three. Out of every six consecutive integers, precisely two make it through: the one just before a multiple of six, and the one just after. That is the whole explanation. The 6*n*±1 shape is not a deep property of primes. It is the residue left by the sieve step [2, 3], and every blocker after that only thins the surviving lattice further.

This is what I mean about starting conditions. The output depends entirely on where you start and what you use. Stop the machine after [2] and the survivors are the odd numbers, sitting in a pattern of period 2. Run it through [2, 3] and you get the 6*n*±1 lattice, period 6, two survivors per period. Run it through [2, 3, 5] and the pattern has period 30 with eight survivors in it. None of these is a discovery about a pre-existing landscape. Each is just what those rules make.

---

## Twins, and what killing one requires

Now the twin prime conjecture. In this framework it becomes a question about the machine: does the machine keep certifying new pairs forever, or does there come a point after which every new stretch it opens is empty?

And here the framework tells you something precise that I had originally got wrong myself.

I used to think that each new blocker removes the left member of a pair, or the right one, or sometimes both. It can never be both. If a prime of 5 or greater divided both 6*n*−1 and 6*n*+1, it would have to divide the difference between them, which is 2. No prime that size divides 2.

So every blocker from 5 onward kills **at most one side of any given pair**. To destroy a twin, you need two different primes — one landing on the left member, one on the right — and they have to land on the same _n_.

That changes the character of the question completely. If the twin primes are to run out, then for every single candidate pair from some point onward, forever, two distinct primes must coordinate to cover both sides. Not once. Every time. Without exception, and without any rule in the machine arranging it.

This is what I mean when I say the burden should be reversed. The classical question is: _can we guarantee that a surviving pair eventually lands inside the window?_ The question the machine actually poses is: _can we guarantee that the eliminations conspire to miss nothing, forever?_ The word conspiracy stops being a metaphor here. It is literally a demand for coordination between separate primes, repeated without end.

---

## Other observations

**The window is the real constraint.** The machine cannot certify what its blockers cannot vouch for. With blockers up to 7, the window reaches only to _n_ = 8. Inside it the machine certifies (5,7), (11,13), (17,19), (29,31) and (41,43). Pair 8 is (47,49), and 49 is 7² — killed right at the edge. Certify 11 and the window jumps to _n_ = 20, opening a fresh stretch that contains four more twins.

**The repetition is real, but it happens out of sight.** The surviving pattern repeats with a period equal to the product of all the blockers. That sounds like something you could exploit, and it was the first thing I tried. But by the time the largest blocker is 100,000, that period is a number with 43,293 digits, while the window is a number with ten. The pattern does repeat. The window will never live long enough to see it come around.

**The machine has never stalled.** Every stretch opened by a new blocker, checked all the way to a hundred million — 1,227 of them — contains twins. Not one is empty. The leanest stretches contain at least 79 pairs once the blockers pass 5,000, and the count keeps climbing.

---

## What this does not do

I want to be straight about the limits, because an argument that hides them is not worth making.

The machine halts forever exactly when the twin primes run out. Not approximately, not in spirit — exactly, and this can be proved from the machine's own rules. So nothing in this framework makes the conjecture easier. Anyone who proves the machine never halts has thereby proved the twin prime conjecture, by a translation that costs nothing at all.

I think that is a credential rather than a defect. If the machine's halting were _not_ equivalent to the conjecture, then the machine would be about something else, and watching it would tell us nothing about twins. Exact correspondence is the whole job of a reformulation. It is a strange habit to treat it as a disappointment.

And the reversal I described above is a shift in where the burden of explanation sits. It is not a proof, and I am not offering it as one. Numerical evidence of this quality has been wrong before — Pólya's conjecture survived nine hundred million cases and turned out false.

---

To conclude: looking at prime numbers from an epistemically honest standpoint matters, and not because it hands you theorems. It hands you a clear view of what you are actually claiming. The primes are not a place. They are what these six rules do, and the question of whether the twins run out is a question about whether a process stalls — not about the contents of a completed infinite set that nobody has ever met.

That is the difference between doing mathematics and inventing ghosts.
