---
title: Explaining Hǎo-shuō-de to a Rubber Duck
subtitle: What a duck that only asks questions found in my own project
date: 2026-10-18
layout: post.html # reference to a layout file
tags: all; language / chinese; learning; tools / ai;
---

I built a language, and I could not explain it in a way that did not contradict itself. I found that out in about ten minutes, with a rubber duck.

## The duck

A rubber duck is the old programmer's trick: you explain your problem out loud to something that cannot answer, and halfway through you hear the mistake yourself.

My duck is a bit more active. It is Claude in a special mode, and it follows three rules:

- **I explain, it only asks.** It never gives me the right answer.
- **Every answer gets a verdict**: correct, partly correct, incorrect, or "can't tell". Each verdict quotes what I said and gives one comment.
- **One question at a time**, always a _what_, _why_ or _how_, short enough to fit on one line.

Behind the scenes it breaks the topic into small pieces, and it counts a piece as _held_ only when I have explained it in my own words. A side panel shows which pieces are held and which are not, and it keeps a list of the places where I contradicted myself.

The topic I gave it was a single line: **what is haoshuode?**

## First answer

> haoshuode is a language. It is the most minimal version of Mandarin. It has only 230 and grammar rules that allow you to say almost anything, and it lets you transition to real Mandarin in a fraction of the time, because it is a bridge language.

Verdict: _partly correct_. "Minimal version of Mandarin" and "bridge language" held. But "only 230" does not say 230 of what.

That was the first small embarrassment. The number I say most often was missing its noun.

## Why not just follow HSK?

I asked the duck to ask me this one, because it is the question I get most. My answer:

- HSK has levels and a vocabulary list for each, but none of the levels gives you a **closed system** where you can express your own thoughts.
- It does not really teach real Chinese. It teaches reading and writing, and even then you are confined to graded readers.

## Why is this new?

The second proposed question: hasn't someone tried this before?

My answer was that other methods always hand you real Mandarin and only change the approach: flash cards, pictures for hanzi, AI conversation, comprehensible input. They change the _method_, never the _system_. I treat it like an engineer: separate the concerns, ask where the bottlenecks are, which part is essence and which part is accident. That lets me simplify the system without losing its essence.

And then I said something that I did not notice at the time: _this is a complete language, although not a Mandarin._

## The first contradiction

The duck did not accept it. In my first answer haoshuode was "a minimal version of Mandarin". Now it was "not a Mandarin".

This is the part of the exercise I value most. The duck had no opinion about Mandarin. It had only my own sentences, set next to each other.

My first try at repairing it was weak: _it can say almost anything because Mandarin has many inessential words._ That is true, but it left the contradiction untouched.

The second try was a single line:

> It is a subset. A subset is not the whole.

That made both statements fit. Everything in haoshuode is real Mandarin, but haoshuode is not all of Mandarin. I later flagged that exchange as a confusing point in my own explanation, because a newcomer will trip over it just as I did.

## Atoms, core words, composite words

The next stretch was vocabulary, and the duck was ruthless about it. I had said "230 atomic words", and the duck asked what _atomic_ means.

- **Atomic** means you cannot break it down further or express it in other terms.
- But **not every word of the 230 is an atom.** Some core words _can_ be described with other core words. They stay in because without them you lose the ability to say things naturally, and that naturalness carries over into real Mandarin.
- Everything else is built from the 230 by combining them under simple grammar rules.

So the number "230" is not a count of atoms. It is the smallest set of words needed to say everything most naturally. My own first answer had hidden that difference.

### How you say a thing nothing names

The duck asked me to walk through it step by step. My answer:

1. Find the closest matching thing.
2. If it is a tool, ask _what kind_ of tool.
3. Build a descriptive part that makes the meaning concrete.

The word you end up with is **longer, sometimes much longer, yet clear and descriptive**. I call it a **composite word**: a word made only of core words under the grammar rules.

### What it cannot say

Honestly: specific scientific terms and jargon. Each would need a long description, whereas in a full language such a word is a shortcut for exactly that kind of description.

## Why can so few words say so much?

My answer here was the philosophical one. Language and thought seem to rest on a small number of basic building blocks. Aristotle's categories point that way, so does the linguist's list of semantic primes (NSM), and a tiny made-up language like Toki Pona backs it up in practice. If that is right, language is highly compressible. The price is that you must adjust to saying things in a more logical way than you are used to.

## Real Mandarin, or not?

The duck came back to the contradiction from another side. Question: _how is haoshuode connected to real Mandarin, word by word and rule by rule?_

My answer: it **is** real Mandarin. It uses its rules, but only the 230 most basic words, about a hundred grammar items, and only pinyin. No chengyu, no cultural layers, no hanzi, nothing that complicates the learning and puts you on a tangent.

The duck noted that this again sat badly with "not a Mandarin". The same repair applied: a subset is not the whole.

Then the _why_: why keep the words and rules real? Because I want a **bridge toward real Mandarin, with a series of checkpoints.** Clear one and you have mastered a full language: you can read books in it, watch content, talk to other learners or to an AI.

And the last question of the session so far: why not build it on Toki Pona's rules instead? Because Toki Pona is a made-up language. If I used made-up rules, it would stop being Mandarin and lose the benefit as a learning tool. You would learn only vocabulary, then have to relearn all of the grammar and unlearn habits, which is almost learning from scratch.

## What the duck found

By the end of the first stretch the panel showed the explanation in seven slots: what it is, why it exists, how it works, what it relies on, its limits, and so on. Only two were empty, and those two honestly do not apply (inputs and outputs, and failure) to a language.

More useful were the things it caught:

- **A missing noun**: "only 230" needed "230 core words".
- **A contradiction I kept repeating**: "minimal version of Mandarin" against "not a Mandarin". I used the second phrase in three different answers without noticing. The word that fixed it, _subset_, had to come from me.
- **A word doing two jobs**: "230 atoms", when only some of the core words are atoms.
- **Claims it could not check**: "a fraction of the time", "no hanzi", "checkpoints", "closed system". These are not wrong. They are the claims I would have to prove to a skeptical reader, and I now know which ones they are.

## What it did not get to

The session is not finished. The duck has not yet asked about the grammar (how a describing word sits before its noun and takes _-de_, how word order shows who does what), about the book of 26 lessons, or about the knowledge base that checks the data. It also still owes me the question I find hardest: what is haoshuode, in three sentences, now?

I will come back to this article when it does.

## Why bother

Writing documentation does not do this. When you write, you can smooth over a contradiction with a good paragraph. When you answer a short question, you cannot. The duck's only skill is to put my sentences next to each other and ask.

I recommend it to anyone who has worked on a thing so long that they have stopped hearing how it sounds.
