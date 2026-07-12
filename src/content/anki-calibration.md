---
title: Anki Isn't Broken. Your Calibration Is.
subtitle: How to use Anki
date: 2025-02-21
layout: post.html # reference to a layout file
tags: all; learning; language;
---

Open the deck options in Anki and you'll find a number sitting there quietly, waiting for you to leave it alone: 90%. Desired retention. Almost nobody touches it, and almost nobody asks where it came from.

It came from twenty thousand strangers. Something like seven hundred million of their reviews went into training FSRS, the algorithm behind that number, and what came out the other end was an average — a setting tuned to fit as many of those twenty thousand people as possible, reasonably well, most of the time. That's a perfectly respectable thing for an algorithm to produce. It is also, quietly, not a fact about you. You have never been part of that average. You have your own processing speed, your own tolerance for interference, your own languages already jostling for the same shelf space in memory. A number built to fit twenty thousand people badly is a strange thing to accept as an instruction for one.

That's really the whole story this piece has to tell, told several different ways: find out what a setting is actually doing, then test it against yourself instead of trusting the average. Every claim below comes with a companion question — what result would prove this wrong? An idea you can't imagine failing isn't an idea. It's a mascot.

## A contradiction hiding in plain sight

Start with an argument you've probably heard, because it's popular and it sounds right: comprehensible input is all you need. Immerse yourself, understand what you hear and read, and acquisition more or less takes care of itself. Flashcards, on this view, are training wheels at best.

Here's the contradiction hiding inside that argument. Comprehension requires two very different things to happen, one after the other, and the popular version quietly assumes the first one is free. Before you can understand a sentence, you have to decode it — turn a stream of sound or a string of characters into something recognizable at all. Only once that's done can meaning get built on top of it. If decoding is too slow, or fails outright, the sentence never arrives intact enough for meaning to happen, no matter how "comprehensible" it supposedly was. The input hypothesis never explains how you get from raw signal to recognized pattern fast enough to keep up with a real conversation. It just assumes you already can.

That gap between signal and pattern is exactly the job flashcards are built for. Not comprehension. Not fluency. Retrieval — matching a signal to something already sitting in memory, quickly, under pressure, without stopping to think about it. Even a card that asks you to produce your own sentence is still testing that same narrow thing: can you pull a stored pattern out on cue? It isn't asking you to build something new out of thin air. That's a smaller job than most people assume Anki is doing. It's also, because it's smaller and better defined, a job you can actually measure — which a vague goal like "get better at the language" never will be.

If that's wrong — if drilling pure retrieval turns out not to transfer to any real decoding or production task at all — this whole framing falls apart, and the honest thing to do is say so and start over.

## The two dials nobody notices

Anki hides two separate levers behind what looks like one setting, and almost everyone only ever hears about half of it.

The first is desired retention — how often you want to succeed, on average, when a card comes due. Push it toward 100% and the workload doesn't rise gently. It rises the way debt does: slowly, then all at once, until you're reviewing so often that spacing has quietly turned back into cramming, the exact thing it was supposed to prevent. There's no correct number waiting to be discovered here. There's a trade-off curve, and where you sit on it depends on how forgiving your material actually is.

The second lever is the one almost nobody adjusts: the delay before a new card graduates out of "learning" and into the long-term schedule. Out of the box, it's absurdly short — a minute, then ten minutes, and then, ready or not, tomorrow. Nothing stops you from stretching that first day into a chain of hours instead — ten minutes, then an hour, then three, then five — and Anki's own guidance asks only that the whole chain finish inside a single day, nothing more restrictive than that. If your situation calls for a slower first climb than "twice in ten minutes, then silence until tomorrow," that isn't a limitation you're stuck with. It's a setting you simply haven't touched yet.

## The card that stopped being a test

Picture a sentence card you've seen sixty times. You know it instantly — the answer arrives before you've finished reading the prompt. It feels mastered. And in one narrow sense, it is: you can retrieve it fast, right now, under these exact conditions.

But "fast, right now, under these exact conditions" is not the same thing as "durable." Memory researchers split those into two separate quantities — how easily something comes to mind this moment, and how deeply it's actually rooted for later. A card can score high on the first and low on the second, and the gap between them is invisible from the inside, because the feeling of fluency doesn't arrive labeled with which kind it is. Worse: research on what actually makes practice stick found something almost perverse — conditions that make practice _harder_ in the moment, like changing the wording or context each time, are often the ones that build memory strong enough to survive outside that one narrow context. Keep everything constant instead, and you build something that only works inside the box you built it in.

Which means that unchanging sentence card, at some point, quietly stops testing your language and starts testing your memory of one specific card. The fix is almost embarrassingly simple: once a card crosses some interval — ten days, say, or whatever your own testing eventually settles on — rewrite it. Same word, same grammar pattern, different sentence around it. This used to be too much work to bother with across a real deck. It isn't anymore; regenerating a batch of structurally identical, superficially different sentences is now something you hand to an AI in a spare minute, which is the actual reason this rule is worth adopting now, not a reason it's suddenly true. If rewritten cards score no better on a genuinely new sentence than untouched ones do, the whole idea was decoration, and it should be dropped.

A different failure looks similar but isn't: a card you keep failing outright, over and over. That's not staleness, it's overload — you've asked one card to hold too much at once. The fix isn't a new sentence, it's fewer things per card, sometimes with a small mnemonic built directly in. Piotr Wozniak, who spent decades thinking about exactly this problem, called it the minimum information principle: one atomic fact per card, because a memory built from several tangled ideas at once activates unevenly, while a memory built from one clean idea activates the same way every time.

## An idea that survived being cut in half

The obvious design for vocabulary practice is three separate cards per word: recognize it going one direction, recognize it going the other, and produce it in a sentence of your own. It looks thorough. It's probably wasteful.

Studies comparing these formats directly have found that practicing production alone — just the hardest of the three — tends to produce gains at least as large as practicing all three, sometimes on both the receptive and productive measures at once. If one format already buys what three formats were meant to buy separately, running three is just extra hours spent producing no extra signal. So: production only, both in the test deck below and in real decks — not because the other two are wrong in some abstract sense, but because nothing so far justifies paying for them. If production-only turns out to measurably underperform the fuller set on a real exam, the fix is easy: bring the other two back.

## A question worth stopping on: what does "production" even mean for a single letter?

Here's a problem the framework runs straight into, and it's worth sitting with rather than smoothing over. Production, everywhere above, meant building your own sentence. But the test case for calibrating all of this is going to be an alphabet cipher — a random substitution code, nothing more — and you cannot build a sentence out of individual letters. A letter isn't a thought. There's nothing to compose it into.

Except there is, one level up: a word. "Cat" isn't a sentence, but it also isn't a single atomic symbol — it's three letters, C-A-T, combined into a sequence you've never specifically drilled as a unit. Encoding "cat" symbol by symbol, using rules you learned from entirely different letters in entirely different combinations, is exactly the same kind of test a sentence is at the word level: can you apply something learned in isolation to a new combination you've never seen assembled that particular way? The word doesn't need to mean anything to the cipher. "Cat" and "dog" work precisely because nobody needs to picture an actual cat to encode the letters that spell it, which is the whole point — it keeps the test exactly where it was always supposed to sit: pure retrieval and recombination, with meaning still safely excluded.

## The trouble with trusting your own clicks

FSRS already claims to personalize itself: feed it your own review history and it fits its parameters to you, not the crowd. Two things get in the way of trusting that on its own.

The first is patience. Anki's own guidance suggests you need several hundred reviews of real data before the optimizer has enough to work with, which means weeks, sometimes months, of flying on the population default before your "personal" settings even exist.

The second problem runs deeper, and it's the more interesting one. The optimizer learns from your own button presses — Again, Hard, Good, Easy — and those presses are judgments about your memory, not measurements of it. There's a well-documented gap between the two. Researchers studying how people judge their own learning found that those judgments lean heavily on cues available while you're studying — the answer sitting right there, the sense that it looks familiar — cues that vanish the moment you're actually tested later. People also turn out to be strangely bad at factoring in how much time will pass before that later test happens, unless something forces them to think about forgetting explicitly. Clicking "Good" is a judgment made under precisely the conditions that make judgments like that unreliable. Feed an algorithm that signal, however sophisticated the algorithm is, and it inherits the bias sitting inside the data.

A cold exam on material you've never drilled doesn't have this problem. It can't be flattered by familiarity, because there's nothing familiar about it yet. That's the real argument for building a separate testing method rather than simply trusting the one already built in — not that FSRS is wrong, but that the signal it's fed is soft, and a harder signal is available to anyone willing to build it. If FSRS-optimized settings turn out to score just as well on that same cold exam, the extra work below wasn't necessary, and that would be a fair thing to discover.

## Borrowing a hundred-year-old trick

There's a clean way to test any of this without your existing vocabulary quietly doing the work for you: strip the material of meaning entirely. Hermann Ebbinghaus got there first, in the 1880s, for exactly this reason. He started out trying to study memory using real prose and gave it up, because real sentences dragged in a tangle of influences he couldn't control — associations, half-memories, the sound of a phrase he happened to like. So he built himself several thousand meaningless three-letter combinations instead, specifically so nothing he already knew could quietly help him. He also ran the entire study on a sample size of one: himself. That's a real weakness if you're trying to say something about human memory in general. It's exactly the right design if the question isn't "what's true for everyone," but "what's true for this one particular brain" — which is precisely the question at hand here.

The modern version: build a random substitution cipher for the Roman alphabet, deliberately more arbitrary than Morse code, which at least rewards you with learnable rhythmic patterns. Turn it into a deck. Because the whole alphabet is small, actually mastering it — say, to about 95% correctness — is a realistic finish line rather than a statistical abstraction you approach forever without arriving.

Run it carefully, changing one thing at a time rather than everything at once, or you'll never know which change did what:

- Run the cipher sequentially across a small number of configurations, not several at once side by side — similar arbitrary symbols studied in parallel are exactly the kind of material that interferes with itself.
- One run tests whether a higher retention target paired with hour-scale learning steps reaches 95% mastery faster than Anki's untouched defaults.
- A separate run, changing nothing else, tests whether rewriting cards past a short interval — two days, to keep the whole loop fast, rather than the ten it might eventually settle on — actually beats not rewriting them at all.
- Once a configuration hits 95%, the real test comes a week later: encode a batch of new words you've never drilled, using letters you already know. That's the moment that separates genuine, durable learning from a fast, shallow imitation of it.

Because the cipher carries no meaning to lean on, it's deliberately worst-case material. Deep, meaningful processing has consistently been shown to produce stronger, longer-lasting memory than shallow, surface-level processing, and nonsense material forecloses the meaningful route entirely, by design. Real vocabulary, which does permit that deeper route, should be easier to hold onto under the same settings. Whatever survives the worst case should be a safe floor under everything easier.

The prediction, stated in advance so it can be checked rather than argued about afterward: higher retention plus hour-scale steps beats the defaults on time-to-mastery. If the defaults get there just as fast, the prediction was simply wrong — not "close," not "needs adjusting." Wrong. And if the cipher-tuned settings, once carried over to real vocabulary, perform no better than the untouched defaults would have anyway, the entire worst-case argument was empty from the start — the cipher taught nothing the defaults didn't already know.

## One test further, if you want to go looking for it

The cipher can only ever validate or kill the calibration settings. It can't tell you whether the three-stage story — signal, then retrieval, then meaning — is actually a real structural fact about how language works, or just a convenient story, because nonsense material has no meaning stage to measure in the first place.

That needs a different design, one small enough to run and rich enough to matter: a real, minimal language rather than pure noise. Toki Pona, built deliberately tiny, is a plausible candidate. Take two learners. Train one with the three stages kept deliberately separate — decoding drills, then recall drills, then meaning-construction exercises, addressed one at a time, in that order. Train the other purely through immersion, no separated drilling at all. Score both on three independent measures, not one bundled proficiency number: how fast they process the raw sound, how reliably they can recall and translate individual words, and how well they can actually construct meaning from what they've decoded.

Three outcomes are all genuinely possible here, and all three would be worth knowing. The separated learner might pull measurably ahead on recall specifically, which would support the whole three-stage picture. The two might converge regardless of method, which would undercut it. Or the sample might simply be too small and too tangled with everything else going on in a real language-learning life to say anything at all — a real answer, just an unsatisfying one. An idea that can only ever be confirmed, never checked against a result that would embarrass it, isn't really an idea. It's a slogan wearing an idea's clothes.

## Where that leaves you

Nothing here claims Anki's defaults are wrong for everyone, or that any particular number in this piece is the right one for you specifically. The claim is narrower, and sturdier: whether you're calibrated correctly is a real, checkable question, and almost nobody checks it, because a default has a way of feeling like a fact rather than a stranger's average dressed up as one. Build the cipher. Change one thing at a time. Write down, before you look, exactly what result would make you admit you were wrong. Then look.

---

### Further reading

- Anki Manual, _Deck Options_ — desired retention and learning steps: docs.ankiweb.net/deck-options.html
- open-spaced-repetition/fsrs4anki wiki, _The Optimal Retention_: github.com/open-spaced-repetition/fsrs4anki/wiki
- Expertium, _Understanding retention in FSRS_: expertium.github.io/Retention.html
- Roediger & Karpicke (2006), _The Power of Testing Memory_, Perspectives on Psychological Science
- Bjork & Bjork, _Creating Desirable Difficulties to Enhance Learning_
- Wozniak, _Twenty Rules of Formulating Knowledge_ (SuperMemo)
- Swain, _Comprehensible Output Hypothesis_
- Nakata & Webb, and related studies on receptive vs. productive vocabulary retrieval practice
- Koriat & Bjork (2005), _Illusions of Competence in Monitoring One's Knowledge During Study_, JEP: Learning, Memory & Cognition
- Craik & Lockhart (1972), _Levels of Processing: A Framework for Memory Research_
- Ebbinghaus (1885/1913), _Memory: A Contribution to Experimental Psychology_
