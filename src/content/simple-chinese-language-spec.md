---
title: 简单话 (Jiǎndān Huà) — Language Specification v1.0
subtitle: Language Specification v1.0
date: 2025-02-21
layout: post.html # reference to a layout file
tags: all; language / chinese / 简单话; learning; technology / AI;
---

## What Is 简单话?

简单话 is a logically simplified, fully functional subset of standard Mandarin Chinese. It uses the same pronunciation, the same Simplified Chinese characters, and the same basic word order as Putonghua — but removes all irregularities, arbitrary vocabulary, and grammatical complexity that make Mandarin difficult for beginners.

Every word and every rule is **transparent, predictable, and minimal**. Instead of memorising thousands of opaque terms, learners master **171 root characters** and **12 grammar rules**, then construct any concept on the fly as a descriptive noun phrase:

| Concept    | 简单话                 | Literal meaning                          |
| ---------- | ---------------------- | ---------------------------------------- |
| Restaurant | 吃饭的房子             | house where you eat food                 |
| Doctor     | 修病的人               | person who fixes illness                 |
| Telephone  | 能在很远的地方说话的机 | machine that lets you talk from far away |
| Courage    | 不怕的感觉             | feeling of not being afraid              |
| History    | 过去发生的事           | things that happened in the past         |

Because 简单话 uses real Mandarin sounds and characters, **native speakers understand it immediately without any training**. A learner can speak 简单话 to a taxi driver, shopkeeper, or waiter and be understood.

简单话 is a **bridge, not a destination**. Once fluent, learners upgrade by replacing 简单话 phrases with standard vocabulary and grammar.

---

## Part I — Design Principles

**P1 — Fixed root set. Never expanded.**
171 generative roots, memorised once. No new roots are ever added. All productive vocabulary is derived from these.

**P2 — Verbose and transparent by design.**
A longer, clear expression is always preferred over a shorter, opaque one. A sentence must be decodable by any native Mandarin speaker who has never studied the system. If a native cannot understand it, the expression fails and must be revised.

**P3 — Negation absorbs opposites.**
One pole of every quality pair is a root; the other is derived by negation. This eliminates roughly 40 quality words from the core:

> cold = 不热 · far = 不近 · dark = 不亮 · wrong = 不对 · sad = 不好的感觉 · slow = 不快 · empty = 不满 · ugly = 不好看

**P4 — One expression per concept. No synonyms.**
Each concept has exactly one standard 简单话 expression. Synonyms are forbidden — they fragment the lexicon.

**P5 — Grammar rules govern sentences only.**
Word building (vocabulary generation) is entirely separate from sentence grammar. The 的-phrase system creates words; the 12 rules govern how those words combine into sentences.

---

## Part II — The Root Set (171 roots)

### Body (8)

**头 手 口 心 身 力 肉 脚**

> face = 头前 · neck = 头身间 · brain = 头里 · arm = 上手 · leg = 上脚 · finger = 手子 · toe = 脚子 · ear = 头听的部分 · eye = 头看的部分 · lip = 口边 · chin = 口下 · blood = 身体里红色的水

### People & Kin (7)

**人 男 女 子 父 母 友**

> son = 男子 · daughter = 女子 · brother = 同生的男子 · sister = 同生的女子 · family = 同住的人们 · baby = 新生的子 · husband = 结合的男人 · wife = 结合的女人

### Numbers (13)

**一 二 三 四 五 六 七 八 九 十 百 千 半**

> zero = 没有 · ordinals via function morpheme 第: 第一, 第二 · million = 百万

### Time (8)

**时 天 月 年 早 现 过 来**

> now = 现在 · past = 过去 · future = 以后/来的时候 · morning = 早 · night = 不亮的时候 · yesterday = 过去的天 · tomorrow = 来的天 · week = 七天 · year = 年 · hour = 一时 · minute = 一分 (using 分 from high-value roots)
> _Note: 过 serves dual roles — past time marker and physical passing/crossing. Both are natural Chinese._

### Space (14)

**上 下 前 后 里 外 中 边 间 左 右 近 方 路**

> far = 不近 · direction = 方 · place = 这个方 · road = 路 · across/through = 过 · top = 最上的地方 · bottom = 最下的地方
> _Compass directions (东南西北) recommended as loans — see Part IV._

### Nature (10)

**水 火 土 石 木 金 气 光 声 色**

> air = 气 · steam = 热到变成气的水 · smoke = 火产生的气 · sand = 很小的石 · river = 长长的水 · tree = 木 · metal = 金 · silver = 白色的金 · iron = 很硬的金

### Movement (14)

**去 走 跑 飞 跳 站 坐 进 出 回 到 动 送 起**

> come = 来 (Time root, dual role) · stop = 不动 · fall = 向下动 · swim = 在水里走 · rise = 向上动 · arrive = 到
> _Note: 到 stays in Movement (arrive). The preposition "to/toward" uses 向._

### Making & Tools (18)

**做 用 拿 买 卖 打 开 关 放 拉 推 切 修 选 找 机 器 房**

> make = 做 · begin = 开始 · get = 拿 · wash = 用水让它变干净 · keep = 不让走 · machine = 机 · tool/vessel = 器 · room/building = 房
> _Note: 给 (give) is a function morpheme only — not a content root._

### Mind, Speech & Sense (21)

**看 听 说 想 知 学 教 写 问 答 记 算 信 明 怕 爱 喜 笑 哭 感 觉**

> read = 看写的东西 · understand = 明白 · think/want = 想 · remember = 记 · believe = 信 · sense/feel (physical or emotional) = 感 · perceive/notice = 觉 · feel that... = 觉得...

### Life & Social (15)

**住 帮 等 见 让 杀 玩 睡 生 死 病 痛 吃 喝 钱**

> live (reside) = 住 · be alive = 生 · work = 做事 · meet = 见 · cure = 修病 · money = 钱 · price = 要多少钱

### Qualities (17)

**大 长 高 多 快 好 新 热 重 满 亮 真 对 难 老 净 干**

> Opposites all via negation (P3). beautiful = 好看的 · strong = 力大的 · clean = 净 · dry = 干

### Colours (5)

**红 黄 蓝 白 黑**

> green = 草的颜色 · brown = 土的颜色 · grey = 黑白之间的颜色 · orange = 红黄混合的颜色

### Abstract & Relational (14)

**事 物 理 法 数 类 全 同 别 自 名 样 部 完**

> thing = 物 · matter/affair = 事 · logic/reason = 理 · method/rule = 法 · kind/category = 类 · same = 同 · self = 自 · manner = 样 · part = 部 · finished/done = 完

### High-Value Additions (7)

**变 分 合 管 国 平 因**

> change = 变 · divide/minute = 分 · join/combine = 合 · manage = 管 · country = 国 · flat/even/peace = 平 · cause/because = 因

---

## Part III — Function Morphemes (closed set, ~46 items)

Function morphemes are never used as compounding elements inside 的-phrases.

| Class                         | Items                                             |
| ----------------------------- | ------------------------------------------------- |
| Pronouns                      | 我 你 它 们                                       |
| Demonstratives & quantifiers  | 这 那 哪 每 都 一些 几 任                         |
| Copula / existence / location | 是 有 在                                          |
| Negation                      | 不 没                                             |
| Possessive / relativiser      | 的                                                |
| Ordinal marker                | 第                                                |
| Question                      | 吗 谁 什么 _(哪里 = 哪+里, 怎么, 为什么 derived)_ |
| Connectives                   | 和 或 但 因为 所以 如果 虽然 然后 为了            |
| Prepositions                  | 从 向 比 关于 给 被                               |
| Modals                        | 要 能 可以 会 可能                                |
| Adverbs                       | 很 太 也 还 就 只 再 请 当 最                     |

---

## Part IV — Concrete Loans (open class)

These are borrowed unchanged from standard Mandarin. They are not derived from roots — derivation would be too opaque. This class can grow; learners borrow what they need.

- **Animals:** 鸟 鱼 虫 马 牛 猫 狗 羊
- **Body details:** 骨 鼻 牙 耳 眼 皮 _(too cumbersome to derive)_
- **Plants:** 草 花 树 叶 _(草 needed for green = 草的颜色)_
- **Compass:** 东 南 西 北 _(strongly recommended — derivations are hemisphere-dependent and unnatural)_
- **Materials:** 纸 布 油 玻璃 米 盐 糖
- **Sensory qualities:** 硬 软 直 厚 薄 紧 苦 酸 咸 粘
- **Raw actions:** 试 换 碰 转 压 挖 烧 滚

---

## Part V — Word Building

### The 的-Phrase Principle

All vocabulary is constructed as a **descriptive noun phrase**:

> **[description] + 的 + [head noun]**

The description is a phrase — a verb phrase, adjective phrase, or clause — that answers the question: _what does this thing do, what is it for, or what does it feel like?_ The head noun classifies the thing into a category.

Three verbosity levels are all valid; choose based on clarity and context:

| Level    | Doctor           | When to use                 |
| -------- | ---------------- | --------------------------- |
| Compact  | 修病人           | Clear context, fast speech  |
| Standard | 修病的人         | Default                     |
| Full     | 帮人把病修好的人 | Teaching, ambiguous context |

### The Six Description Patterns

| #   | Pattern    | Question answered        | Template                | Example                             |
| --- | ---------- | ------------------------ | ----------------------- | ----------------------------------- |
| 1   | Function   | What does it do?         | [verb phrase] + 的      | 修病的人 (heals illness)            |
| 2   | Purpose    | What is it for?          | 用来 + [verb] + 的      | 用来写字的器 (for writing)          |
| 3   | Enablement | What does it let you do? | 让你能 + [verb] + 的    | 让你能开门的东西                    |
| 4   | Quality    | What is it like?         | [adj phrase] + 的       | 很热的时候 (very hot time = summer) |
| 5   | Condition  | What happens if?         | [condition clause] + 的 | 吃了会死的东西 (kills you if eaten) |
| 6   | Location   | Where does it happen?    | 在 [place] + 的         | 在水里走的事 (thing done in water)  |

### The Nine Generative Heads

Every concrete concept is classified under one of these nine head nouns. The head always comes last.

| Head        | Category                      | Example expressions                                                                                               |
| ----------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **房**      | rooms & buildings             | 吃饭的房 restaurant · 修病的房 hospital · 放很多书的房 library · 学东西的房 school · 关犯法的人的房 prison        |
| **机**      | machines & devices            | 算得很快的机 computer · 能在很远的地方说话的机 phone · 让你看图和听声音的机 TV · 能在天上飞的机 airplane          |
| **器**      | tools, vessels, instruments   | 用来喝东西的器 cup · 用来写字的器 pen · 用来看时间的器 clock · 用来切东西的器 knife · 把门关住不让人进来的器 lock |
| **人**      | roles & professions           | 修病的人 doctor · 帮别人学习的人 teacher · 守着法的人 police · 管很多事的人 manager · 为国打仗的人 soldier        |
| **物/东西** | concrete objects              | 让你能开门的东西 key · 吃了会让你死的东西 poison · 可以用手拿着玩的圆的东西 ball · 让房子亮起来的东西 light bulb  |
| **事**      | abstract affairs & activities | 很难解决的事 problem · 买东西和卖东西的事 business · 过去发生的事 history · 两国打仗的事 war                      |
| **感觉**    | emotions & inner states       | 不怕的感觉 courage · 心里很热很快的感觉 anger · 心里很好很满的感觉 happiness · 很想帮别人的感觉 compassion        |
| **水**      | liquids                       | 里面有吃的东西的水 soup · 用来写字的黑色的水 ink · 热到变成气的水 steam · 身体里的红色的水 blood                  |
| **时/时候** | time periods & occasions      | 天气很热的时候 summer · 天气很冷的时候 winter · 一天最早的时候 morning · 没有光的时候 night                       |

### Negation as Vocabulary Reduction

Keep only one pole of each quality pair. Negate for the other. Degree adverbs adjust intensity:

| Root        | Derived opposite      | Intensified          |
| ----------- | --------------------- | -------------------- |
| 热 (hot)    | 不热 (cold)           | 很不热 (very cold)   |
| 大 (big)    | 不大 (small)          | 太不大 (tiny)        |
| 近 (near)   | 不近 (far)            | 很不近 (very far)    |
| 亮 (bright) | 不亮 (dark)           | 非常不亮 (very dark) |
| 快 (fast)   | 不快 (slow)           | 太不快 (very slow)   |
| 新 (new)    | 不新 (old, of things) | 太不新 (very old)    |
| 好 (good)   | 不好 (bad)            | 很不好 (terrible)    |
| 多 (many)   | 不多 (few)            | 太不多 (almost none) |

---

## Part VI — The 12 Grammar Rules

These rules govern sentence construction only. They do not apply inside 的-phrases (which are vocabulary, not grammar).

---

### G1 — Word Order

Basic order: **Subject – [Time] – Verb – Object – [Result/Purpose]**

The time expression, when present, always precedes the verb:

> 我 明天 去 买 苹果。(I tomorrow go buy apples.)
> 他们 过去 在 那个 地方 住。(They in the past lived in that place.)

Topic-comment structure is also valid — state the topic, then comment on it:

> 这个苹果，我很喜欢。(This apple — I really like it.)
> 那个问题，我不知道怎么解决。(That problem — I don't know how to solve it.)

---

### G2 — Tense: Time Words, Never Particles

There are no aspect particles (了, 过, 着) in 简单话. All tense and aspect is expressed through time words placed before the verb.

| Time            | Word(s)                        | Example                               |
| --------------- | ------------------------------ | ------------------------------------- |
| Past            | 过去, 过天 (yesterday), 上个月 | 我过天吃了苹果 → **我过天吃一个苹果** |
| Present/ongoing | 现在                           | 我现在吃东西                          |
| Future          | 以后, 来天 (tomorrow), 下个月  | 我来天去买东西                        |
| Habitual        | no marking                     | 我每天早起                            |

---

### G3 — Completion: 完 as the Sole Post-Verbal Marker

**完** (complete/done) may directly follow a verb to signal that an action is fully finished:

> 我吃完。(I finished eating.)
> 他做完这个事了。→ **他做完这个事。**(He finished doing that thing.)

All other result complements use **然后** to sequence the result as a separate clause:

> 看懂 → **看，然后明白** (look, then understand)
> 做好 → **做，然后变好** (do, then it gets good)
> 学会 → **学，然后能做** (learn, then be able to do it)

No other verb-result complements are used.

---

### G4 — Measure Words: 个 Only

Use **个** for all countable nouns. No other measure words (条, 张, 本, 辆, etc.):

> 一个人 · 三个苹果 · 两个问题 · 五个想法 · 一个月 · 一个房子

---

### G5 — Plurals: 们 for People Only

**们** is optional and applies only to people and pronouns:

> 我们, 你们, 他们, 朋友们 — valid
> 苹果们, 问题们 — **invalid**

Number is usually clear from context. When it matters, use a number or 一些 (some):

> 我有一些朋友。(I have some friends.)

---

### G6 — Negation

Two negation words, with distinct uses:

| Word   | Use                                | Example                     |
| ------ | ---------------------------------- | --------------------------- |
| **不** | Negate verbs, qualities, modals    | 不吃 · 不大 · 不是 · 不能来 |
| **没** | Negate 有 (possession/existence)   | 没有时间 · 没有钱           |
| **没** | Negate occurrence of a past action | 我过天没吃苹果              |

Negation always immediately precedes the element being negated.

---

### G7 — Questions

**Yes/no questions:** add **吗** to the end of any statement:

> 你吃苹果吗？(Do you eat apples?)

**No A-not-A questions** (吃不吃 → use 你吃吗？)

**Wh-questions** use question words in the position where the answer would go:

| Wh-word  | Meaning | Example                                      |
| -------- | ------- | -------------------------------------------- |
| 谁       | who     | 谁修病？(Who fixes the illness?)             |
| 什么     | what    | 你吃什么？(What are you eating?)             |
| 哪里     | where   | 吃饭的房子在哪里？(Where is the restaurant?) |
| 什么时候 | when    | 你什么时候来？(When are you coming?)         |
| 怎么     | how     | 你怎么去？(How are you going?)               |
| 为什么   | why     | 你为什么不吃？(Why aren't you eating?)       |

---

### G8 — Comparison

| Meaning                   | Structure         | Example        |
| ------------------------- | ----------------- | -------------- |
| X is more [adj] than Y    | X 比 Y 更 + adj   | 这个比那个更大 |
| X and Y are equally [adj] | X 和 Y 一样 + adj | 他和我一样高   |
| X is the most [adj]       | X 是最 + adj + 的 | 这个是最大的   |

---

### G9 — Modals

Five modals, each with a distinct meaning. Modal always precedes the verb:

| Modal    | Core meaning                 | Example                                          |
| -------- | ---------------------------- | ------------------------------------------------ |
| **能**   | physical ability             | 我能走很远 (I can walk very far)                 |
| **可以** | permission / appropriateness | 你可以进来 (You may come in)                     |
| **要**   | necessity / intention        | 我要吃东西 (I need to / want to eat)             |
| **会**   | future / learned ability     | 我会说简单话 (I will / know how to speak 简单话) |
| **可能** | possibility                  | 他可能来 (He might come)                         |

---

### G10 — Passive Voice

**With a known agent:** 被 + [agent] + verb

> 他被那个人打。(He was hit by that person.)

**Without a known agent:** use 有人 (someone) + active verb

> 有人打他。(Someone hit him. / He got hit.)

The **把** construction is not used in 简单话. Use regular SVO:

> 我把书放在桌上 → **我放书在桌上** (I put the book on the table)

---

### G11 — Connectives

| Meaning        | Structure             | Example                |
| -------------- | --------------------- | ---------------------- |
| Condition      | 如果 X，就 Y          | 如果你来，就一起吃     |
| Cause → result | 因为 X，所以 Y        | 因为下雨，所以我不去   |
| Contrast       | 虽然 X，但 Y          | 虽然很难，但我要学     |
| Sequence       | X，然后 Y             | 我吃完，然后去走路     |
| Purpose        | 为了 [goal]，[action] | 为了学中文，我每天学习 |

---

### G12 — Copular Structures: 是 / 有 / 在

Chinese has no single verb "to be." Three verbs cover its functions:

| Verb   | Use                                       | Example                                |
| ------ | ----------------------------------------- | -------------------------------------- |
| **是** | Identity: A is B                          | 这个是苹果 (This is an apple)          |
| **有** | Existence / possession: there is / I have | 这里有苹果 · 我有钱                    |
| **在** | Location: subject is at a place           | 苹果在桌上 (The apple is on the table) |

Negation: 不是 · 没有 · 不在

---

## Part VII — The Bridge to Standard Mandarin

简单话 is designed so that every 简单话 expression maps cleanly to a standard Mandarin equivalent. As fluency grows, learners upgrade expression by expression:

| 简单话                 | Standard Mandarin | What changes                             |
| ---------------------- | ----------------- | ---------------------------------------- |
| 我过天吃一个苹果       | 我吃了一个苹果    | Time word → 了 particle                  |
| 吃饭的房子             | 餐厅              | Descriptive phrase → lexical word        |
| 修病的人               | 医生              | Descriptive phrase → lexical word        |
| 能在很远的地方说话的机 | 手机/电话         | Full phrase → standard term              |
| 不怕的感觉             | 勇气              | Transparent phrase → opaque but standard |
| 看，然后明白           | 看懂              | 然后 sequence → VR complement            |
| 我过天去               | 我昨天去了        | 过天 → 昨天; add 了                      |
| 用来写字的器           | 笔                | Descriptive phrase → one character       |

The transition is graded. Learners first master 简单话 fully, then upgrade:

1. **简单话** — full descriptive phrases, time words, no 了/过/着
2. **清楚话** — introduce the most common opaque words (医生, 餐厅, 电话) while keeping grammar
3. **小普通话** — introduce 了/过/着 and result complements; reduce descriptive phrases
4. **Standard Mandarin** — full lexicon and grammar

---

## Quick Reference Card

### The 9 Generative Heads

房 (building) · 机 (machine) · 器 (tool/vessel) · 人 (role) · 东西/物 (object) · 事 (affair) · 感觉 (feeling) · 水 (liquid) · 时候 (time)

### The 12 Grammar Rules at a Glance

| #   | Rule          | Core constraint                                            |
| --- | ------------- | ---------------------------------------------------------- |
| G1  | Word order    | S – Time – V – O – Result                                  |
| G2  | Tense         | Time words before verb; no 了/过/着                        |
| G3  | Completion    | Only 完 post-verbally; other results use 然后              |
| G4  | Measure words | 个 only                                                    |
| G5  | Plurals       | 们 for people only                                         |
| G6  | Negation      | 不 for verbs/qualities; 没 for 有 and past non-occurrence  |
| G7  | Questions     | 吗 for yes/no; wh-words in answer position; no A-not-A     |
| G8  | Comparison    | X 比 Y 更 + adj · X 和 Y 一样 + adj · 最 + adj             |
| G9  | Modals        | 能 能力 · 可以 允许 · 要 需要 · 会 将来/技能 · 可能 可能性 |
| G10 | Passive       | 被 + agent; no agent → 有人 + active; no 把                |
| G11 | Connectives   | 如果/就 · 因为/所以 · 虽然/但 · 然后 · 为了                |
| G12 | Copula        | 是 identity · 有 existence · 在 location                   |

### Root Count by Category

| Category              | Count   | Roots                                      |
| --------------------- | ------- | ------------------------------------------ |
| Body                  | 8       | 头手口心身力肉脚                           |
| People & kin          | 7       | 人男女子父母友                             |
| Numbers               | 13      | 一二三四五六七八九十百千半                 |
| Time                  | 8       | 时天月年早现过来                           |
| Space                 | 14      | 上下前后里外中边间左右近方路               |
| Nature                | 10      | 水火土石木金气光声色                       |
| Movement              | 14      | 去走跑飞跳站坐进出回到动送起               |
| Making & tools        | 18      | 做用拿买卖打开关放拉推切修选找机器房       |
| Mind, speech & sense  | 21      | 看听说想知学教写问答记算信明怕爱喜笑哭感觉 |
| Life & social         | 15      | 住帮等见让杀玩睡生死病痛吃喝钱             |
| Qualities             | 17      | 大长高多快好新热重满亮真对难老净干         |
| Colours               | 5       | 红黄蓝白黑                                 |
| Abstract & relational | 14      | 事物理法数类全同别自名样部完               |
| High-value additions  | 7       | 变分合管国平因                             |
| **Total**             | **171** |                                            |
