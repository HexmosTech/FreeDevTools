---
title: "Review Code - Improve Code with GPT | Online Free DevTools by Hexmos"
name: rgpt
path: /freedevtools/tldr/common/rgpt
canonical: "https://hexmos.com/freedevtools/tldr/common/rgpt/"
description: "Improve code with rgpt, a GPT-powered code review tool. Analyze code changes and get suggestions directly from your terminal. Free online tool, no registration required."
category: common
keywords:
- code review
- GPT code review
- AI code analysis
- terminal code reviewer
- automated code improvement
- code diff review
- linux code review
- macos code review
- code quality analysis
- command-line code review
features:
- Provides code improvement suggestions using GPT
- Supports verbose output for detailed code analysis
- Allows limiting GPT3 token usage for cost control
- Enables customization of GPT result uniqueness
- Supports specifying a specific GPT model for code review
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rgpt

> An automated code review tool that uses GPT you can use straight from your terminal.
> More information: <https://github.com/vibovenkat123/review-gpt>.

- Ask GPT to improve the code with no extra options:

`rgpt --i "$(git diff {{path/to/file}})"`

- Get a more detailed verbose output from `rgpt` while reviewing the code:

`rgpt --v --i "$(git diff {{path/to/file}})"`

- Ask GPT to improve the code and limit it to a certain amount of GPT3 tokens:

`rgpt --max {{300}} --i "$(git diff {{path/to/file}})"`

- Ask GPT for a more unique result using a float value between 0 and 2. (higher = more unique):

`rgpt --pres {{1.2}} --i "$(git diff {{path/to/file}})"`

- Ask GPT to review your code using a specific model:

`rgpt --model {{davinci}} --i "$(git diff {{path/to/file}})"`

- Make `rgpt` use a JSON output:

`rgpt --json --i "$(git diff {{path/to/file}})"`
