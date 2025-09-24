---
title: "Convert to JSON - Format Command Output | Online Free DevTools by Hexmos"
name: jc.json
path: /freedevtools/tldr/common/jc.json
canonical: "https://hexmos.com/freedevtools/tldr/common/jc.json/"
description: "Format command output with jc, converting to JSON for easy parsing and integration. Get structured data from any command line tool. Free online tool, no registration required."
category: common
keywords:
- command output JSON
- JSON file converter
- CLI output JSON
- text to JSON conversion
- linux command JSON
- macos command JSON
- bash JSON parser
- data extraction from CLI
- JSON formatting tool
- jc command parser
features:
- Convert command line output to JSON format
- Automatically parse output from various commands
- Output pretty JSON for readability
- Supports magic syntax for easier command execution
- Integrates with various CLI tools for data extraction
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jc

> Convert the output of multiple commands to JSON.
> More information: <https://github.com/kellyjonbrazil/jc>.

- Convert command output to JSON via pipe:

`{{ifconfig}} | jc {{--ifconfig}}`

- Convert command output to JSON via magic syntax:

`jc {{ifconfig}}`

- Output pretty JSON via pipe:

`{{ifconfig}} | jc {{--ifconfig}} {{[-p|--pretty]}}`

- Output pretty JSON via magic syntax:

`jc {{[-p|--pretty]}} {{ifconfig}}`
