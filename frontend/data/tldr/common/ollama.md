---
title: "Run Language Models - Control with Ollama | Online Free DevTools by Hexmos"
name: ollama
path: "/freedevtools/tldr/common/ollama/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ollama/"
description: "Run large language models with Ollama. Download, manage, and interact with various LLMs directly from your terminal. Free online tool, no registration required."
category: common
keywords:
- large language model runner
- ollama command line tool
- llm management tool
- model inference tool
- ai model runner
- text generation tool
- open source llm
- llm deployment tool
- ollama serve
- ollama run
features:
- Run and interact with LLMs from the command line
- Download and manage pre-trained language models
- Serve LLMs locally for low-latency inference
- Create custom models using a Modelfile
- List and delete models to manage disk space
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ollama

> A large language model runner.
> For a list of available models, see <https://ollama.com/library>.
> More information: <https://github.com/ollama/ollama>.

- Start the daemon required to run other commands:

`ollama serve`

- Run a model and chat with it:

`ollama run {{model}}`

- Run a model with a single prompt:

`ollama run {{model}} {{prompt}}`

- List downloaded models:

`ollama list`

- Pull a specific model:

`ollama pull {{model}}`

- List running models:

`ollama ps`

- Delete a model:

`ollama rm {{model}}`

- Create a model from a `Modelfile`:

`ollama create {{new_model_name}} {{[-f|--file]}} {{path/to/Modelfile}}`
