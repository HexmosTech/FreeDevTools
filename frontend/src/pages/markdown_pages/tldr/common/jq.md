---
title: "JSON Processor - Format JSON Data with jq | Online Free DevTools by Hexmos"
name: jq
path: /freedevtools/tldr/common/jq
canonical: "https://hexmos.com/freedevtools/tldr/common/jq/"
description: "Format JSON data effortlessly with jq, a powerful JSON processor. Transform, filter, and extract data with ease. Free online tool, no registration required."
category: common
keywords:
- json processor
- json formatter
- json filter
- json extractor
- jq command line
- jq tutorial
- linux json
- macos json
- json transformation
- dsl json
features:
- Format and colorize JSON output
- Execute jq scripts from files
- Pass arguments to jq scripts
- Create new JSON objects from multiple files
- Filter JSON data based on multiple conditions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jq

> A JSON processor that uses a domain-specific language (DSL).
> More information: <https://jqlang.github.io/jq/manual/>.

- Execute a specific expression only using the `jq` binary (print a colored and formatted JSON output):

`jq '.' {{path/to/file.json}}`

- Execute a specific script:

`{{cat path/to/file.json}} | jq {{[-f|--from-file]}} {{path/to/script.jq}}`

- Pass specific arguments:

`{{cat path/to/file.json}} | jq {{--arg "name1" "value1" --arg "name2" "value2" ...}} '{{. + $ARGS.named}}'`

- Create new JSON object via old JSON objects from multiple files:

`{{cat path/to/multiple_json_file_*.json}} | jq '{{{newKey1: .key1, newKey2: .key2.nestedKey, ...}}}'`

- Print specific array items:

`{{cat path/to/file.json}} | jq '{{.[index1], .[index2], ...}}'`

- Print all array/object values:

`{{cat path/to/file.json}} | jq '.[]'`

- Print objects with 2-condition filter in array:

`{{cat path/to/file.json}} | jq '.[] | select((.key1=="value1") and .key2=="value2")'`

- Add/remove specific keys:

`{{cat path/to/file.json}} | jq '. {{+|-}} {{{"key1": "value1", "key2": "value2", ...}}}'`
