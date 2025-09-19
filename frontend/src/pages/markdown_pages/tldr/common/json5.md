---
title: "JSON5 Converter - Format JSON5 Files to JSON | Online Free DevTools by Hexmos"
name: json5
path: /freedevtools/tldr/common/json5
canonical: "https://hexmos.com/freedevtools/tldr/common/json5/"
description: "Format JSON5 files quickly with JSON5 Converter. Convert JSON5 to JSON, validate syntax, and specify indentations. Free online tool, no registration required."
category: common
keywords:
- JSON5 converter
- JSON5 to JSON
- JSON5 validator
- JSON5 formatter
- JSON5 online
- JSON5 command line
- JSON to JSON5 converter
- validate JSON5
- convert JSON5 files
- JSON5 tools
features:
- Converts JSON5 files to JSON format
- Validates JSON5 syntax for errors
- Allows specifying indentation for output JSON
- Converts JSON5 from stdin to stdout
- Supports outputting to a specified JSON file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# json5

> Convert JSON5 files to JSON.
> More information: <https://json5.org>.

- Convert JSON5 `stdin` to JSON `stdout`:

`echo {{input}} | json5`

- Convert a JSON5 file to JSON and output to `stdout`:

`json5 {{path/to/input_file.json5}}`

- Convert a JSON5 file to the specified JSON file:

`json5 {{path/to/input_file.json5}} --out-file {{path/to/output_file.json}}`

- Validate a JSON5 file:

`json5 {{path/to/input_file.json5}} --validate`

- Specify the number of spaces to indent by (or "t" for tabs):

`json5 --space {{indent_amount}}`

- Display help:

`json5 --help`
