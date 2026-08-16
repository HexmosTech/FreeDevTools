---
title: "LLM Fundamentals: How Large Language Models Work"
date: 2026-01-25
description: "Tokenization, context windows, pricing, temperature, top-p, and the other knobs and dials that shape how LLMs process information and generate responses."
tags: [llm]
author: "Athreya"
feature_image: "./cover.png"
slug: "llm-fundamentals-how-large-language-models-work"
---

Large Language Models (LLMs) like GPT, Claude, and Gemini power today's most impressive AI applications—chatbots, coding assistants, search engines, and more.

But to really use them well, you need to understand the _knobs and dials_ that shape how they process information and generate responses.

These fundamentals—tokenization, context, pricing, and generation parameters—are the backbone of every LLM interaction.

Let's go deeper into each one.

## 1. Tokenization: The Language of Models

Computers don't "understand" words as humans do. Instead, LLMs break text into **tokens**, which are numerical representations of text pieces.

- A token can be a word (`apple`), part of a word (`ap` + `ple`), or punctuation (`.` or `,`).
- Different models use different tokenizers (e.g., GPT's Byte Pair Encoding vs. SentencePiece in Google models).
- Typical English text: **1 token ≈ 4 characters ≈ 0.75 words.**

Why tokens matter:

- **Efficiency:** By working with tokens, the model avoids dealing with infinite word variations.
- **Robustness:** Even rare words can be broken into smaller, known parts.
- **Costs:** Since pricing is token-based, tokenization directly impacts your bill.

Example:

- Sentence: _"ChatGPT is amazing!"_
- Tokens: `["Chat", "G", "PT", " is", " amazing", "!"]`
- Token IDs: `[1012, 4321, 9876, 523, 7812, 999]`

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0oyjmzl6vr96iecpyhs1.png)

## 2. Context Windows: The Model's Memory Span

LLMs don't "remember" everything. They operate inside a **context window**—the maximum number of tokens they can consider at once.

- A GPT-3.5 model: ~4k tokens (~3k words).
- GPT-4-Turbo: ~128k tokens (~100k words).
- Claude 3.5 Sonnet: ~200k tokens (~150k words).

When you exceed the window, older tokens slide out like a **moving window**, and the model literally forgets them.

Why it matters:

- **Chatbots:** Long conversations may "forget" early details.
- **Documents:** Long PDFs may need chunking + retrieval techniques (RAG).
- **Costs:** Larger windows = more expensive compute.

Modern research pushes this limit using:

- **Retrieval-Augmented Generation (RAG):** Fetch only the most relevant chunks instead of feeding the whole text.
- **Long-context transformers:** Architectures that scale efficiently to hundreds of thousands of tokens.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5piybhziscpnsbhquodm.png)

## 3. Token-Based Pricing: Why Every Word Costs Money

Most commercial LLM APIs (OpenAI, Anthropic, Google) charge **per token**.

- **Input tokens** = your prompt.
- **Output tokens** = the reply.
- Pricing = (tokens in + tokens out) × rate per 1,000 tokens.

Example with GPT-4-Turbo (illustrative):

- Input: 500 tokens
- Output: 700 tokens
- Total = 1,200 tokens ≈ cost for ~1.2k tokens

Why it matters:

- Writing concise prompts saves money.
- Controlling max output prevents runaway costs.
- Developers often build **token counters** into apps to predict expenses.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9mu249pvc2wpu9rvv8py.png)

## 4. Temperature: Controlling Creativity

Temperature adjusts how "risky" the model is when picking the next word.

- **Low (0–0.2):** Model plays it safe. Great for factual answers, code, legal text.
- **Medium (0.5):** Balanced—still coherent but with some variety.
- **High (0.8–1.0):** More creative, but may hallucinate. Good for brainstorming, story writing.

Example: Prompt = "Suggest a slogan for a coffee shop."

- Temp 0.1 → "Fresh Coffee, Every Day." (safe, boring)
- Temp 0.9 → "Awaken Your Senses, One Cup at a Time." (creative, varied)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rz2t8sgiviyde8juoil0.png)

## 5. Top-p (Nucleus Sampling): Focused Creativity

Top-p is a probability-based filter:

- The model considers only the smallest set of next words that add up to **p** (e.g., 0.9).
- This avoids "flat randomness" and ensures diversity with focus.

Example:

- With **p=0.3**, only the very top likely words are considered.
- With **p=0.95**, many more words make it into the pool, allowing for surprise.

Best practice:

- Use **temperature and top-p together**. Often, set one high and the other moderate for balance.

## 6. Frequency Penalty: Fighting Repetition

LLMs sometimes fall into loops: _"very very very good"_.
Frequency penalty reduces this by lowering the score of repeated tokens.

- **Value 0:** No penalty, model may repeat.
- **Value 1+:** Stronger penalty, less repetition.

Useful in:

- Long-form writing.
- Customer chatbots (avoid copy-paste replies).

## 7. Presence Penalty: Encouraging Novelty

While frequency penalty discourages repetition, **presence penalty** pushes the model to introduce new concepts.

- Higher value = more varied, exploratory responses.
- Lower value = more consistent, less risk of going off-topic.

Example:

- With high presence penalty, the model may bring in synonyms or new angles.
- With low presence penalty, it sticks to the same themes.

## 8. Stopping Criteria: Knowing When to Stop

LLMs don't naturally stop—they predict "the next word" endlessly. Stopping criteria tell them when to cut off.

Common methods:

- **Max token limit:** Hard cutoff.
- **Special stop token:** e.g., `<|end|>`.
- **Custom strings:** e.g., "###" to signal end of a section.

This ensures:

- Predictable reply lengths.
- No wasted tokens (and costs).
- Cleaner formatting in apps.

## 9. Max Length: The Reply Budget

This parameter caps how many tokens the model can generate.

- Short (50–200 tokens): Tweets, short answers.
- Medium (500–1,000): Blog paragraphs, explanations.
- Long (2,000+): Essays, research reports.

The trick: Balance **clarity vs. cost vs. relevance**. Too short cuts answers off. Too long wastes compute and risks drifting.

# Closing Thoughts

Working with LLMs is about **understanding trade-offs**:

- Tokens vs. cost.
- Context vs. memory.
- Creativity vs. accuracy.
- Repetition vs. novelty.

By mastering these fundamentals—tokenization, context windows, pricing, and generation parameters—you gain control over how LLMs behave, and can fine-tune them for your exact use case.

As research advances with **long-context transformers, smarter retrieval, and better sampling techniques**, the fundamentals remain the foundation for building reliable, efficient, and creative AI systems.

I've been building for **FreeDevTools**.

A collection of UI/UX-focused tools crafted to simplify workflows, save time, and reduce friction in searching tools/materials.

Any feedback or contributors are welcome!

It's online, open-source, and ready for anyone to use.

👉 Check it out: [FreeDevTools](https://hexmos.com/freedevtools/)
⭐ Star it on GitHub: [freedevtools](https://github.com/HexmosTech/FreeDevTools)

Let's make it even better together.
