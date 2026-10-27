---
title: Reviewing a Word Next to Its Relatives
subtitle: An idea for my flashcard app, where the links between words decide the order in which cards come up
date: 2026-10-27
layout: post.html # reference to a layout file
tags: all; language / chinese; learning;
---

I am building a small spaced-repetition app for my HSK 5 deck. It uses FSRS to decide what is due, and today it treats every card as if it lived alone: the due cards come up in order of how overdue they are, with the cards of one lesson kept together. That is not how I remember words. I remember a word because of what sits next to it: it means nearly the same as one word and the opposite of another, or it is a harder version of a simple word I already know.

This post is about using that. It is an idea, with a design I settled on after a round of questions. Nothing in it is built yet, and the last two sections say what is undecided and how I will find out whether it works.

## The idea

We do not memorize things by themselves. We memorize things that are related: we compare them, put them next to each other, set them against what we already know. In memory research the general finding points the same way: material that is tied to what you already know, and thought about in relation to other things, is remembered better than material met alone. The name for part of it is elaboration. I am not quoting a study or a number. I hold it as a general finding, and the test at the end is how I will check it for myself.

So the app should connect cards by their relationships, automatically, and use those links to help me remember. If I am studying a word and its synonym is a due card, I should land on that card right then, and let each one lean on the other. If a card is related to a simpler one, the simple one can help me reach the hard one.

## Five kinds of link

The first version has these:

- **Synonym.** Two words that say nearly the same thing.
- **Opposite.** Today the deck handles this by putting both words on one card ("positive goes with optimistic, negative goes with pessimistic": 积极, 乐观; 消极, 悲观). The idea is that the app links separate cards instead.
- **Easier cousin.** A simpler word for the same idea. The deck's own note on 均为 says it is the formal, written way to say 都是. 都 is the easier cousin.
- **Same character or component.** The deck has 主食, 主要, 地主 and 资本主义, among others, and 主 sits in all of them.
- **By logic: how the word is built and where it comes from.** A shared part with a related meaning, the same root. The deck already has notes of this kind: 校庆 is 校 "school" + 庆 "celebrate", and 参赛 is 参加比赛. This is the one I think is clearest for memory, because logic makes the relationship obvious. So it ranks high among the kinds.

Later, maybe: same topic, and look-alike or sound-alike words.

## Where the links come from

From dictionary data, with no ticking. My Hao-shuo-de knowledge base already holds synonym groups, opposites with their kinds, composite words, and a part-of map. A link that turns out to be wrong can be cut from the card.

One caution. That knowledge base is about the words and composites of Hao-shuo-de, my simplified Mandarin. I have not counted how many words of the HSK 5 deck it covers. For a word it does not hold, there are no links until I find another source. The Chinese Open Wordnet is already installed for the knowledge base and is a candidate, but I have not tried it for this.

## What a link does to the order

There is no special pair screen. Cards still come one after another. The links only change which card comes next:

1. **When a card is up, a linked partner is pulled into the sequence.** The strong partner comes first, then the weak card. The anchor helps me reach the weak one.
2. **A partner that is not yet due can be pulled too, and it gets a real review**: I grade it, and its schedule moves. This happens when the two cards are far apart in how well I know them. How well I know a card is its strength, the chance that I recall it today, which the FSRS schedule already knows. The reasoning: a relationship should make a card easier. If I cannot connect a card to a simple related one, then that related card, which went out of review, is not helping me, and it has to be kept closer.
3. **A pull can go on as a short chain**, at most four cards, each step a link.
4. **Links stay inside my focus.** The app has a theme tree and lists by day and week, and I can focus review on one branch. If I have, only cards of that branch are used. A link never leads outside it.

## An example

The numbers below are invented. The words and the sentences are from my deck.

The card 我们参观了杭州的灵隐寺 ("We visited Lingyin Temple in Hangzhou") is due, and I do not know it well: say a 35% chance of recall today. The deck also has 参赛 ("to take part in a competition"), which I know well, say 90%, and it is not due for another nine days. The two share 参, "take part, join". That is a link of the same-character kind, and a link by logic: 参 "join" + 赛 "contest", and 参 "join" + 观 "look" make "to visit and look around". I use that reading as a memory aid. I am not claiming it is the word's history.

The strengths are far apart, so 参赛 comes first, and I answer it for real. If I say Good, its next gap grows as usual. If I say Again, it comes back soon, which is the point: an anchor I cannot hold is not an anchor. Then 参观 comes up. Above it sits a small chip, "linked to 参赛 · same character 参". If I tap the chip, I see the logic in one line.

The pair I first had in mind was 参观 and 访问, both "to visit". They are close but not the same: as I understand them, 参观 is to visit a place and look around (a temple, a factory), and 访问 is to call on a person or an organisation, or to visit a website. That makes the difference worth showing. But I checked the deck today, and it has no 访问 card. It has 参观 twice (the temple sentence and 自助参观, "self-guided visit"). That pair would show up only once a card for 访问 is added.

## How I will know

The app keeps every answer with its time. There are 1,648 so far, on 314 of the roughly 830 cards, from 19 September to today. Most were imported from my Anki history, and 143 were made in the app. Each answer is Again or Good.

The first test is simple. Take a card whose review came right after a strong linked partner, and ask how often I remembered it (Good) at its next review. Compare that with the same measure for reviews that came alone.

It is a first test, not proof, and I can already see three limits:

- **The history is short.** With this few reviews I might see a large difference, but not a small one.
- **The old reviews were never ordered by links.** A card that followed a related card there did so by chance. Real data will come only after the feature runs.
- **The two groups may differ.** The cards that follow a partner may be easier or harder than the rest, so a gap would be a hint, not an answer.

There is also a way it could go the other way. Similar words next to each other can blur instead of help. I do not know yet which effect wins in my case, and that is what the test is for.

## What is not decided

- **How far apart is "far apart".** The size of the gap in strength, and how many extra reviews of not-yet-due cards I allow in a day.
- **The other direction.** I described the pull from the weak card's side. Whether a strong card that is up should also pull in its weak, not-yet-due relative, I have not decided.
- **Which links to pick when there are many.** A character like 主 links several cards. "Logic ranks high" is decided. The rest of the ranking is not.
- **Where links and the one-line logic come from** for words the knowledge base does not hold.
- **The later kinds**: same topic, look-alike, sound-alike.

## Where it stands

What exists: the review screen with FSRS, the full review history, the theme tree, the day and week lists, and the review focus on a branch. My plan also has groups of confusable words that come together, followed by a contrast card, but as far as the plan says that is not built yet. It is a separate piece. A link is about one pair, it uses strength, and it says who goes first.

What does not exist: the links themselves, the order they change, the chip, and the test. It is an idea I intend to try, and I will write down what the test shows, including if it shows nothing.
