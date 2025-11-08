---
title: "Generate Code with Aider - AI Pair Programming | Online Free DevTools by Hexmos"
name: aider
path: "/freedevtools/tldr/common/aider/"
canonical: "https://hexmos.com/freedevtools/tldr/common/aider/"
description: "Generate code with Aider, the AI pair programmer. Get real-time code generation and debugging assistance using natural language. Free online tool, no registration required."
category: common
keywords:
- AI code generator
- code generation tool
- aider command line
- pair programming AI
- AI assisted coding
- LLM code generation
- code debugging tool
- refactor code AI
- documentation generator
- aider code assistant
features:
- Generate new code based on natural language instructions.
- Refactor existing code automatically.
- Fix bugs in code with AI assistance.
- Update documentation automatically.
- Work with various LLMs using API keys.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aider

> Pair program with the LLM of your choice.
> More information: <https://github.com/Aider-AI/aider>.

- Start a new project or work with an existing code base:

`aider --model {{model_name}} --api-key {{your_api_key}}`

- Add new features or test cases to specific files:

`aider {{path/to/file1 path/to/file2 ...}}`

- Describe a bug and let `aider` fix it:

`aider {{path/to/file}} --describe "{{bug_description}}"`

- Refactor code in a specific file:

`aider {{path/to/file}} --refactor`

- Update documentation:

`aider {{path/to/file}} --update-docs`

- Display help:

`aider --help`
