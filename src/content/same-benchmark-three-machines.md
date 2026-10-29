---
title: The Same Benchmark on Three Machines
subtitle: My phone, my Windows PC and a Linux inside it, measured with the same small scripts, and what the numbers say about where work should run
date: 2026-10-29
layout: post.html # reference to a layout file
tags: all; technology / AI; code;
---

My agent work runs on a PC, and I have started running some of it on my phone. Before I decide where a job should go, I want numbers. So I ran the same small benchmarks on three machines: the phone, the Windows PC, and a real Ubuntu running inside the PC through WSL2.

The phone has 8 cores and about 2 GB free while other things run. The PC has 8 threads and 16 GB. The Ubuntu is 26.04 on its own ext4 disk, with bun installed in it.

## What I measured

There were three tests. Each one reports total milliseconds, and lower is better.

- **CPU.** A short JavaScript suite: integer and float loops, sorting, JSON, regular expressions, typed arrays, a map, and SHA-256. It runs three rounds and keeps the best one.
- **IO.** Write 2000 files of 1 KB, read them all back, then delete them. This is the kind of work a test run or a build does all day.
- **Parallel.** Eight copies of the CPU suite at once, to see what happens when several agents share one machine.

## The numbers

On the CPU suite, the phone and the Ubuntu were close: 1159 and 1225 ms. The Windows PC took 1653 ms. The PC's bun is an older version (1.1.42), while the other two run 1.4.4, so part of that gap may be the version, not the machine.

On the file test the picture changed. The phone took 1119 ms and the PC 1198 ms, about the same. The Ubuntu, on its own disk, took 109 ms. That is about ten times faster than either.

The same test run from inside the Ubuntu onto the Windows drive (`/mnt/c`) took 20633 ms. That is about seventeen times slower than the PC doing the same files natively. Going through the Windows file system from Linux costs more than the work itself.

With eight CPU suites running at once, the PC's copies each took 2664 to 2713 ms (that run used node, not bun). The Ubuntu's took 2140 to 2304 ms, and all eight finished together in 7.8 s. The phone's runs took 1660 to 2124 ms, from an earlier run whose wall time I did not keep.

## What it means

Three things stand out.

First, the phone is a real computer for small jobs. Its CPU is in the same range as the PC's, so a short code-only job can run there. Its file speed is also the same as the PC's.

Second, file-heavy work belongs on the Linux disk. The same files take a tenth of the time there. Work that goes through the Windows file system from Linux is the slowest case of all. So any build, test or agent checkout that runs under WSL2 should live in the Linux home, never under `/mnt/c`.

Third, the PC is still the place for everything that needs its Windows session. That covers the browser with my sign-ins, the desktop automation, and the personal database. The Linux side is faster for pure code, but it cannot do those jobs.

## Caveats

Each test ran once per machine, and the PC was doing other work while it ran. An earlier PC file run gave 1124 ms against 1198 ms today, so differences of about 10 percent or less are not meaningful. The CPU and file numbers come from the saved scripts. The phone's parallel run is from an earlier session, so its range is less certain.

The benchmark scripts sit in the agent project's `agent-out/bench` folder, next to the results table.
