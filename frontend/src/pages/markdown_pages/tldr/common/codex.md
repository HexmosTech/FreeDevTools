---
title: "Codex - Generate Code with AI | Online Free DevTools by Hexmos"
name: codex
path: /freedevtools/tldr/common/codex
canonical: "https://hexmos.com/freedevtools/tldr/common/codex/"
description: "Generate code snippets with Codex, an AI-powered code assistant.  Edit files, run commands, and leverage natural language prompts for efficient coding. Free online tool, no registration required."
category: common
keywords:
  - natural language code generation
  - ai code generation terminal
  - codex command line tool
  - codex windows command line
  - codex macos terminal
  - codex linux terminal
  - openai codex prompt examples
  - terminal code generation ai
  - code generation from natural language
  - ai powered code assistant
features:
  - Generate code from natural language descriptions.
  - Directly edit files within the current directory.
  - Execute commands based on natural language prompts.
  - Utilize specific OpenAI models for customized code generation.
  - Load entire repository context for improved code accuracy (experimental).
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
