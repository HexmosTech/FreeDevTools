---
title: "Generate Gemini AI Prompts - Interact with AI | Online Free DevTools by Hexmos"
name: gemini
path: /freedevtools/tldr/common/gemini
canonical: "https://hexmos.com/freedevtools/tldr/common/gemini/"
description: "Generate AI prompts with Gemini. Interact with Google's AI models using the Gemini command-line tool. Free online tool, no registration required."
category: common
keywords:
- gemini ai
- ai prompt generator
- command line ai
- large language model cli
- google ai api
- gemini api
- gemini cli
- terminal ai assistant
- conversational ai tool
- interactive ai prompt
features:
- Launch an interactive Gemini AI chat session
- Send command output to Gemini for processing
- Override the default AI model
- Execute prompts and then enter interactive mode
- Include all files in the context for AI analysis
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gemini

> Launch an interactive prompt with Gemini AI.
> More information: <https://github.com/google-gemini/gemini-cli>.

- Start a REPL session to chat interactively:

`gemini`

- Send the output of another command to Gemini and exit immediately:

`{{echo "Summarize the history of Rome"}} | gemini {{[-p|--prompt]}}`

- Override the default model (default: gemini-2.5-pro):

`gemini {{[-m|--model]}} {{gemini-2.5-flash}}`

- Run inside a sandbox container:

`gemini {{[-s|--sandbox]}}`

- Execute a prompt then stay in interactive mode:

`gemini {{[-i|--prompt-interactive]}} "{{Give me an example of recursion in Python}}"`

- Include all files in context:

`gemini {{[-a|--all-files]}}`

- Show memory usage in status bar:

`gemini --show-memory-usage`
