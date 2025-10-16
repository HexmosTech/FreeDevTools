---
title: "Augment Humans with Fabric - AI Prompt Framework | Online Free DevTools by Hexmos"
name: fabric
path: "/freedevtools/tldr/common/fabric/"
canonical: "https://hexmos.com/freedevtools/tldr/common/fabric/"
description: "Augment humans with AI using Fabric, a modular AI prompt framework. Solve problems using crowdsourced prompts. Free online tool, no registration required."
category: common
keywords:
- ai prompt framework
- augment humans ai
- fabric ai tool
- crowdsourced ai prompts
- ai workflow automation
- command line ai
- ai pattern execution
- youtube video ai analysis
- user defined ai patterns
- modular ai platform
features:
- Run pre-defined AI patterns from the command line.
- Chain AI patterns together for complex workflows.
- Execute patterns on YouTube video content.
- Create and run custom, user-defined AI patterns.
- Output AI pattern results to a specified file.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fabric

> An open-source framework for augmenting humans using AI.
> Provides a modular framework for solving specific problems using a crowdsourced set of AI prompts.
> More information: <https://github.com/danielmiessler/fabric#usage>.

- Run the setup to configure fabric:

`fabric {{[-S|--setup]}}`

- List all available patterns:

`fabric {{[-l|--listpatterns]}}`

- Run a pattern with input from a file:

`fabric {{[-p|--pattern]}} {{pattern_name}} < {{path/to/input_file}}`

- Run a pattern on a YouTube video URL:

`fabric {{[-y|--youtube]}} "{{https://www.youtube.com/watch?v=video_id}}" {{[-p|--pattern]}} {{pattern_name}}`

- Chain patterns together by piping output from one to another:

`fabric {{[-p|--pattern]}} {{pattern1}} | fabric {{[-p|--pattern]}} {{pattern2}}`

- Run a custom user-defined pattern:

`fabric {{[-p|--pattern]}} {{custom_pattern_name}}`

- Run a pattern and save the output to a file:

`fabric {{[-p|--pattern]}} {{pattern_name}} {{[-o|--output]}} {{path/to/output_file}}`

- Run a pattern with the specified variables:

`fabric {{[-p|--pattern]}} {{pattern_name}} {{[-v|--variable]}} "{{variable_name}}:{{value}}"`
