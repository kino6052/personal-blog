---
title: Where the Agent Runs, My Phone or My PC
subtitle: A message from the phone app is now answered by an AI on the phone. Getting there, and what still goes through the PC
date: 2026-10-28
layout: post.html # reference to a layout file
tags: all; Code / AI; Code;
---

For the first weeks, my phone was only a window. I typed in a private chat app, and the AI that answered ran on my PC, which had to be on, awake and connected. Today I made the phone a machine of its own: a message sent from the phone app is now answered by a Claude session running on the phone. This post is about why that is more than a switch, what I had to build around it, and what still does not work.

## Three things that were all "the app"

When I said "the app runs on my PC", I was lumping three things together.

- **The window.** The chat screen, which has always been on the phone.
- **The listener.** A small program that watches the chat and starts an agent when a message arrives. It used to exist only on the PC.
- **The agent.** The Claude session that reads my message and does the work, with its own files, tools and logins.

Moving the window was never the question. The question was whether the listener and the agent can live in a phone: an Android phone with Termux, an Ubuntu inside it, and the same command-line Claude I use on the PC. They can.

## The rule

I wrote the rule down before building anything: **what I do through the phone app happens on the phone, unless I choose "share" or "PC only". The PC app does the opposite: it defaults to the PC. Each app keeps its own setting.**

Two machines listening to one chat will both answer unless something stops them. A message now carries where it should run, and the first machine to take it wins, decided in one database transaction, so exactly one machine answers. Every reply carries where it ran, "ran on: phone" or "ran on: PC", and the app is built to show it, so I never have to guess who I am talking to. The design also says that a phone which is off, hot or low on battery must not silently hand my message to the PC. I have not tested those cases yet.

## What I did first: jobs, not chat

I did not start with chat. I started with a queue. A job is a git tag holding a brief; the phone's worker claims it with a push that can only succeed once, runs Claude on it, and pushes the result to a branch. The PC fetches that branch, runs the tests on Windows and merges it.

That worked better than I expected. The first four jobs, code only, took from 75 seconds to a little over 10 minutes each: a scan of the code for Windows-only assumptions, then pieces of the phone-side chat listener and the database bridge below, written by the phone itself.

Then I gave it a job that was not code: turn two children's readers, given as PDFs, into slide decks, using the books' own pictures. After more than an hour on the phone it had not finished, and the phone was laggy enough that typing and pasting into the terminal became hard. I do not know exactly why it was so slow. My guess is memory and processor load from installing a PDF and PowerPoint toolkit and then looking at about twenty pictures. The PC redid both decks in about 25 minutes, with the real fonts and a real PowerPoint to check them in. Lesson: the phone is good at small code tasks and bad at heavy ones, and a worker that cannot tell me what it is doing is hard to trust.

## What the phone cannot do

A session on the phone does not have my personal database, my PC's files or my browser. So the phone session has a short rule: when something needs the PC, say `Needs the PC: <what>`, do the rest, and offer to hand that part over. It must never fail silently.

The database matters most, because most of what I ask for touches it. So there is a bridge: the PC serves the database tools over the same encrypted channel, and the phone's Claude sees them as ordinary tools. I measured it from the PC through the real channel: 47 tools, 20 calls, none failed, about half a second per call once connected, and about three seconds for the first. I have not yet measured it from the phone itself.

## What was hard

**Putting the chat key on the phone.** The key must not go through git, the chat or a log. The app has a menu row that copies the chat's setup to the clipboard, and a script on the phone imports it, keeps it in a file with owner-only permissions, and prints a short fingerprint of the key (eight characters) instead of the key, so I can compare it with the app. Writing that was easier than using it: pasting into a slow terminal, typing in the wrong window (plain Termux instead of the Ubuntu inside it), and a clipboard helper app that never answered. In the end I pasted by hand, and the fingerprints matched.

## What is rough right now

- **Two sessions heard the same message.** My long-running PC session was started before the routing existed, so I think it is why it still heard messages the phone had already taken. I can check who took a message, and I do, but a restart would be cleaner.
- **The phone cannot message the PC.** I asked it whether it could. Today the most it can do is say "Needs the PC" and leave me to resend the message to the PC. The obvious fix is a hand-off through the same job queue, and it is not built.
- **The phone's work is invisible.** The activity chip stays at zero seconds and zero steps for a phone session, and agents started on the phone do not show up in the agents list. I have not found why yet.
- **A busy phone is a slow phone.** With the heavy job still running, the phone was slow to answer, and several of my messages waited.

## What I want from it

What I wanted is simple to say: I should never have to wonder whether I am talking to the PC or to my phone, and the phone should not need the PC to be awake for the things it can do alone. The first half now works, as a label on every reply. The second half works for small things. I do not yet have numbers for how often the phone gets a task right alone, or how much slower it is, and until I do, "the phone runs the agent" describes where the process lives, not how well it does the job.
