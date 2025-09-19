---
title: "Format JSON Data - Jello Processor using Python | Online Free DevTools by Hexmos"
name: jello
path: /freedevtools/tldr/common/jello
canonical: "https://hexmos.com/freedevtools/tldr/common/jello/"
description: "Format JSON data with Jello, a Python-powered JSON processor. Transform and manipulate JSON with ease using Python syntax. Free online tool, no registration required."
category: common
keywords:
- JSON formatter
- JSON processor
- JSON Python syntax
- JSON command line
- JSON pretty print
- JSON schema output
- JSON data manipulation
- JSON-Lines processing
- Linux JSON tool
- MacOS JSON formatter
features:
- Pretty-prints JSON and JSON-Lines data
- Outputs JSON schema for data inspection
- Extracts elements from arrays and objects
- Supports JSON and JSON-Lines formats
- Integrates Python syntax for transformations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jello

> A JSON processor using Python syntax.
> More information: <https://github.com/kellyjonbrazil/jello>.

- Pretty-print JSON or JSON-Lines data from `stdin` to `stdout`:

`cat {{file.json}} | jello`

- Output a schema of JSON or JSON Lines data from `stdin` to `stdout` (useful for grep):

`cat {{file.json}} | jello -s`

- Output all elements from arrays (or all the values from objects) in JSON or JSON-Lines data from `stdin` to `stdout`:

`cat {{file.json}} | jello -l`

- Output the first element in JSON or JSON-Lines data from `stdin` to `stdout`:

`cat {{file.json}} | jello _[0]`

- Output the value of a given key of each element in JSON or JSON-Lines data from `stdin` to `stdout`:

`cat {{file.json}} | jello '[i.{{key_name}} for i in _]'`

- Output the value of multiple keys as a new JSON object (assuming the input JSON has the keys `key_name1` and `key_name2`):

`cat {{file.json}} | jello '{{{"key1": _.key_name1, "key2": _.key_name2, ...}}}'`

- Output the value of a given key to a string (and disable JSON output):

`cat {{file.json}} | jello -r '"{{some text}}: " + _.{{key_name}}'`
