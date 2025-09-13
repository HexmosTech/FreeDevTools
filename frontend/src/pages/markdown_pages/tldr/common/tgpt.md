---
title: "Generate AI Chat - Interact with AI Models via Command Line | Free DevTools"
name: tgpt
path: "/freedevtools/tldr/common/tgpt"
canonical: "https://hexmos.com/freedevtools/tldr/common/tgpt/"
description: "Generate AI chat effortlessly with tgpt, a command-line interface to talk to AI models without API keys. Access multiple AI providers. Free online tool, no registration required."
category: common
keywords:
- ai chat generator
- command line ai
- openai cli
- llama2 command line
- koboldai command line
- blackboxai command line
- ai model selector
- prompt engineering cli
- text generation command line
- ai provider manager
features:
- Interact with AI models directly from the command line
- Generate text and code using various AI providers
- Generate images and save them to the current directory
- Customize AI model parameters like temperature and max length
- Execute shell commands using AI suggestions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tgpt

> Talk to an AI chatbot without the need for API keys.
> Available providers: `openai`, `opengpts`, `koboldai`, `phind`, `llama2`, `blackboxai`.
> More information: <https://github.com/aandrew-me/tgpt>.

- Chat with the default provider (GPT-3.5-turbo):

`tgpt "{{prompt}}"`

- Start multi-line interactive mode:

`tgpt {{[-m|--multiline]}}`

- Generate images and save them to the current directory:

`tgpt {{[-img|--image]}} "{{prompt}}"`

- Generate code with the default provider (GPT-3.5-turbo):

`tgpt {{[-c|--code]}} "{{prompt}}"`

- Chat with a specific provider quietly (without animations):

`tgpt --provider {{openai|opengpts|koboldai|phind|llama2|blackboxai}} {{[-q|--quiet]}} {{[-w|--whole]}} "{{prompt}}"`

- Generate and execute shell commands using a specific provider (with a confirmation prompt):

`tgpt --provider {{llama2}} {{[-s|--shell]}} "{{prompt}}"`

- Prompt with an API key, model, max response length, temperature, and `top_p` (required when using `openai` provider):

`tgpt --provider openai --key "{{api_key}}" --model "{{gpt-3.5-turbo}}" --max-length {{10}} --temperature {{0.7}} --top_p {{0.9}} "{{prompt}}"`

- Feed a file as additional pre-prompt input:

`tgpt --provider {{blackboxai}} "{{prompt}}" < {{path/to/file}}`
