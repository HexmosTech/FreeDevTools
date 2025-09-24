---
title: "Generate AI Responses - Command-line AI with Mods | Online Free DevTools by Hexmos"
name: mods
path: /freedevtools/tldr/common/mods
canonical: "https://hexmos.com/freedevtools/tldr/common/mods/"
description: "Generate AI responses with Mods, a command-line AI tool designed for pipelines. Process data and automate tasks using natural language. Free online tool, no registration required."
category: common
keywords:
- command-line AI
- AI response generator
- natural language processing
- CLI AI tool
- AI text summarizer
- code comment generator
- markdown formatter AI
- data organization AI
- linux AI tools
- macos AI tools
features:
- Answer questions using natural language input
- Generate comments on code in markdown format
- Summarize text from raw HTML
- Organize data based on natural language instructions
- Customize settings using a text editor
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mods

> AI for the command-line, built for pipelines.
> More information: <https://github.com/charmbracelet/mods>.

- Ask a generic question:

`mods "{{write me a poem about platypuses}}"`

- Open settings in your `$EDITOR`:

`mods --settings`

- Ask for comments on your code, in markdown format:

`mods --format "{{what are your thoughts on improving this code?}}" < {{path/to/file}}`

- Ask for help with your documentation, in markdown format:

`mods --format "{{write a new section to this readme for a feature that sends you a free rabbit if you hit r}}" < {{README.md}}`

- Organize your videos, in markdown format:

`ls {{path/to/videos}} | mods --format "{{organize these by decade and summarize}}"`

- Read through raw HTML and summarize the contents, in markdown format:

`curl "{{https://api.open-meteo.com/v1/forecast?latitude=29.00&longitude=-90.00&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m}}" | mods --format "{{summarize this weather data for a human}}"`

- Display help:

`mods --help`
