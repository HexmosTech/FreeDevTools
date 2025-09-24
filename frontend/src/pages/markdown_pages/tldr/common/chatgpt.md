---
title: "ChatGPT - Generate Text & Images | Online Free DevTools by Hexmos"
name: chatgpt
path: /freedevtools/tldr/common/chatgpt
canonical: "https://hexmos.com/freedevtools/tldr/common/chatgpt/"
description: "Generate text and images with ChatGPT command line tool. Use AI models like GPT-4 for natural language tasks and DALL-E for image creation. Free online tool, no registration required."
category: common
keywords:
- ChatGPT shell script
- command line ChatGPT
- GPT-3.5 Turbo CLI
- GPT-4 terminal
- DALL-E image generation
- AI prompt engineering
- terminal chatbot
- Linux ChatGPT
- macOS ChatGPT
- OpenAI command line
features:
- Generate text-based responses from prompts.
- Create images using DALL-E directly from the terminal.
- Initiate interactive chat sessions with different GPT models.
- Pipe command output as input for generating contextual responses.
- Customize chatbot behavior with initial prompts.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# chatgpt

> Shell script to use OpenAI's ChatGPT and DALL-E from the terminal.
> More information: <https://github.com/0xacx/chatGPT-shell-cli>.

- Start in chat mode:

`chatgpt`

- Give a prompt to answer to:

`chatgpt {{[-p|--prompt]}} "{{What is the regex to match an email address?}}"`

- Start in chat mode using a specific model (default is `gpt-3.5-turbo`):

`chatgpt {{[-m|--model]}} {{gpt-4}}`

- Start in chat mode with an initial prompt:

`chatgpt {{[-i|--init-prompt]}} "{{You are Rick, from Rick and Morty. Respond to questions using his mannerism and include insulting jokes.}}"`

- Pipe the result of a command to `chatgpt` as a prompt:

`echo "{{How to view running processes on Ubuntu?}}" | chatgpt`

- Generate an image using DALL-E:

`chatgpt {{[-p|--prompt]}} "{{image: A white cat}}"`
