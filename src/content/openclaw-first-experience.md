---
title: OpenClaw
subtitle: First experience using overhyped technology
date: 2025-02-21
layout: post.html
tags: all; code; technology / AI;
---

I remember when ChatGPT went public. Everybody was talking about it. I made an account, started chatting, and felt like I was talking to a real thinking being — calm, patient, surprisingly capable. It blew my mind, and it was only GPT-3.5.

Fast forward to 2026. Now everybody is talking about OpenClaw. AI that has "hands." It can control a browser, call APIs, fill out forms, and act on your behalf in the real world. The hype cycle has kicked in again, louder than ever.

My first reaction was: sure, sounds interesting. But actually using it privately felt like a dead end before I even started. I don't have a GPU powerful enough to run models locally. And running it "locally" while still sending everything to a cloud LLM is just security theater — you get none of the privacy benefits and all of the complexity. So I had to go the cloud route.

---

**Looking for a reason to use it**

Before spending any money, I tried to think of a real use case. Organize my documents? That's a serious privacy concern — I'm not feeding my files to a third-party agent. Write code? Tools like Cursor already handle that well without extra setup. Manage my todos and calendar? That's just overkill for what a simple app already does.

Eventually I landed on something that actually made sense: ordering groceries and waimai. It genuinely takes time. Browsing Meituan, picking items, checking prices — if an agent could handle that, I'd actually notice the difference.

So I went and looked for cloud solutions. The most compelling option I found was Tencent Cloud. Setting it up was a hassle, but I did it. I configured the LLM integration, connected the agent to a messenger interface, and added the browser and API skills. It took real effort.

---

**Where it fell apart**

The result was disappointing in a very specific way. Meituan and Taobao both use aggressive bot detection. These platforms actively block automated interactions — and they're good at it. Modern detection systems go far beyond checking user-agent strings. They fingerprint browsers, analyze behavior patterns, monitor mouse movement, and flag any traffic that doesn't look convincingly human. This isn't an edge case. It's by design, and it's getting stricter, not looser.

The browser skill was essentially useless against these defenses. The agent could fetch a page, maybe, but it couldn't navigate checkout flows or interact with dynamic content reliably. Every action that mattered got blocked.

So after spending around ¥100 and several hours of setup, I had a smart assistant that couldn't do the one thing I wanted. Everything it _could_ do, I can do faster myself.

---

**Am I alone in this?**

Not really. A piece from _Public Citizen_ published in early 2026 put it well: AI agents "excel at narrow, well-defined tasks" like drafting and summarizing, but "are not ready to be trusted with end-to-end responsibility." The article called treating them as autonomous workers "a category error that 2026 will make increasingly obvious."

A 2025 MIT NANDA initiative study came to a similar conclusion after analyzing enterprise deployments: 95% of generative AI pilot programs failed to produce measurable financial impact. Researchers at MIT Sloan also found that when teams actually tried to deploy agents in practice, 80% of the work ended up being "unglamorous tasks" — data engineering, workflow integration, stakeholder alignment — before the agent could do anything useful at all.

This matches my experience exactly. The technology worked in a narrow sense. The infrastructure around it didn't.

---

**The counterargument is real, though**

To be fair, there are places where AI agents genuinely deliver. McKinsey's 2025 state of AI report shows consistent productivity gains in software engineering, IT support, and internal operations. Enterprises using agents for well-scoped tasks like password resets, document retrieval, and internal ticket resolution report deflection rates of 40–70%. Some companies report ROI in the hundreds of percent.

The pattern is clear: agents work well when the environment is controlled, the data is structured, and the task is narrow. Internal corporate workflows are a good fit. The open web — and especially consumer platforms with commercial interests in blocking bots — is not.

---

**What I actually think**

The honest conclusion isn't that AI agents are useless. It's that they're useful in a very specific context that doesn't describe most individual users trying to automate their daily life.

The infrastructure isn't there yet for personal use. There are no standardized integrations with major consumer platforms. The apps people actually want to automate — food delivery, e-commerce, ride-hailing — have every incentive to block agents, because agents don't see ads, don't get upsold, and can't be influenced by UX dark patterns.

A piece in _Medium_ from early 2026 framed the problem clearly: "We tried to compress a decade of engineering maturity into a year of product launches, and the systems told us, quietly but clearly, that they were not ready."

That's where we are. The technology is real. The ecosystem isn't. For personal use outside of controlled environments, AI agents are still a hobbyist project — fun to explore, not yet useful enough to justify the cost and effort.

Maybe in a couple of years that changes. For now, I'm back to ordering waimai myself.
