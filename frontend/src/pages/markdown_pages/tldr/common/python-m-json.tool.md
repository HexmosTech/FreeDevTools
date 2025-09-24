---
title: "Validate JSON - Format JSON Data | Online Free DevTools by Hexmos"
name: python-m-json.tool
path: /freedevtools/tldr/common/python-m-json.tool
canonical: "https://hexmos.com/freedevtools/tldr/common/python-m-json.tool/"
description: "Validate JSON with python -m json.tool. Format and pretty-print JSON data for readability and debugging. Free online tool, no registration required."
category: common
keywords:
- json validation
- json formatting
- json pretty print
- python json tool
- command line json
- json validator
- json linter
- json beautifier
- json standard input
- json file processing
features:
- Validate JSON syntax for correctness
- Pretty-print JSON data for enhanced readability
- Format JSON from files
- Format JSON from standard input
- Process JSON data using command-line interface
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# python -m json.tool

> Validate and pretty-print JSON data.
> Part of Python's standard library.
> More information: <https://docs.python.org/library/json.html#module-json.tool>.

- Pretty-print JSON from a file:

`python -m json.tool {{path/to/file.json}}`

- Validate and pretty-print JSON from standard input:

`echo '{{{"key": "value"}}}' | python -m json.tool`
