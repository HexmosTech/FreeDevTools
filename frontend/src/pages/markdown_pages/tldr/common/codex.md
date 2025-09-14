---
title: "Generate Code with Codex - Natural Language Tool | Free DevTools"
name: codex
path: /freedevtools/tldr/common/codex
canonical: "https://hexmos.com/freedevtools/tldr/common/codex/"
description: "Generate code with Codex, a natural language code assistant. Edit files, run commands, and get help with coding tasks. Free online tool, no registration required."
category: common
keywords:
- natural language code generation
- openai codex terminal
- code assistant command line
- codex linux
- codex macos
- codex windows
- command line code editor
- terminal code generator
- programming assistant
- natural language to code
features:
- Generate code snippets from natural language prompts
- Edit files directly in the current directory
- Run commands automatically based on prompts
- Use specific providers and models for code generation
- Load entire repository context for more accurate results
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# codex

> Natural language code assistant for the terminal, powered by OpenAI.
> Reads and edits files in your current directory to fulfill requests.
> More information: <https://github.com/openai/codex>.

- Start an interactive Codex session in the current directory:

`codex`

- Run a single Codex command using a prompt:

`codex "{{your prompt}}"`

- Run a prompt with automatic approval of all file edits and commands:

`codex {{[-a|--approval-mode]}} full-auto "{{your prompt}}"`

- Use a specific provider and model:

`codex --provider {{provider_name}} {{[-m|--model]}} {{model_name}} "{{your prompt}}"`

- Load the entire repository as context (experimental):

`codex --full-context "{{your prompt}}"`

- Show the resource usage for the current session (run this command inside a session):

`/cost`

- Display help:

`codex --help`
