---
title: "OpenAI CLI - Create AI Content | Free DevTools"
name: openai
path: /freedevtools/tldr/common/openai
canonical: "https://hexmos.com/freedevtools/tldr/common/openai/"
description: "Create AI content with OpenAI CLI. Generate text completions, chat interactions, and DALL·E images easily from the command line. Free online tool, no registration required."
category: common
keywords:
- openai cli
- openai api
- ai text generation
- dall-e image generation
- command line ai
- python openai
- text completion api
- chat completion api
- ai image creation
- ai model list
features:
- Generate text completions with various AI models.
- Create interactive chat completions with conversational AI.
- Generate images via the DALL·E API using text prompts.
- List available OpenAI API models for selection.
- Interact with the OpenAI API from the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# openai

> CLI tool providing access to the OpenAI API.
> More information: <https://github.com/openai/openai-python>.

- List models:

`openai api models.list`

- Create a completion:

`openai api completions.create --model {{ada}} --prompt "{{Hello world}}"`

- Create a chat completion:

`openai api chat_completions.create --model {{gpt-3.5-turbo}} --message {{user "Hello world"}}`

- Generate images via DALL·E API:

`openai api image.create --prompt "{{two dogs playing chess, cartoon}}" --num-images {{1}}`
