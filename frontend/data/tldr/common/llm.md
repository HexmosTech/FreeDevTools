---
title: "Interact with LLMs - Generate Text | Online Free DevTools by Hexmos"
name: llm
path: "/freedevtools/tldr/common/llm/"
canonical: "https://hexmos.com/freedevtools/tldr/common/llm/"
description: "Generate text with Large Language Models (LLMs) using llm. Interact with remote APIs and local models. Free online tool, no registration required."
category: common
keywords:
- LLM text generation
- Large language model API
- Command line LLM tool
- Local LLM model
- Prompt engineering tool
- Open AI API interaction
- Text completion CLI
- Machine learning inference
- Natural language processing tool
- Datasette LLM
features:
- Generate text from prompts
- Interact with remote LLM APIs
- Run LLMs on local machines
- Install LLM packages from PyPI
- Save and reuse system prompts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# llm

> Interact with Large Language Models (LLMs) via remote APIs and models that can be installed and run on your machine.
> More information: <https://llm.datasette.io/en/stable/help.html>.

- Set up an OpenAI API Key:

`llm keys set openai`

- Run a prompt:

`llm "{{Ten fun names for a pet pelican}}"`

- Run a system prompt against a file:

`cat {{path/to/file.py}} | llm {{[-s|--system]}} "{{Explain this code}}"`

- Install packages from PyPI into the same environment as LLM:

`llm install {{package1 package2 ...}}`

- Download and run a prompt against a model:

`llm {{[-m|--model]}} {{orca-mini-3b-gguf2-q4_0}} "{{What is the capital of France?}}"`

- Create a system prompt and save it with a template name:

`llm {{[-s|--system]}} '{{You are a sentient cheesecake}}' --save {{sentient_cheesecake}}`

- Have an interactive chat with a specific model using a specific template:

`llm chat {{[-m|--model]}} {{chatgpt}} {{[-t|--template]}} {{sentient_cheesecake}}`
