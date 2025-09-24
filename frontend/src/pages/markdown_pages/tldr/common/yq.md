---
title: "YAML Processor - Format YAML Data with YQ | Online Free DevTools by Hexmos"
name: yq
path: /freedevtools/tldr/common/yq
canonical: "https://hexmos.com/freedevtools/tldr/common/yq/"
description: "Format YAML data with YQ. Parse, update, and manipulate YAML files seamlessly from the command line. Free online tool, no registration required."
category: common
keywords:
- YAML Processor
- YAML formatter
- YAML parser
- YAML editor
- YAML command line
- YAML merge
- YAML update
- YAML transform
- YQ command
- YQ tool
features:
- Format YAML files for readability
- Merge multiple YAML files into one
- Update specific keys and values in YAML
- Parse and extract data from YAML files
- Transform YAML data using expressions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# yq

> A lightweight and portable YAML processor.
> More information: <https://mikefarah.gitbook.io/yq/>.

- Output a YAML file, in pretty-print format (v4+):

`yq eval {{path/to/file.yaml}}`

- Output a YAML file, in pretty-print format (v3):

`yq read {{path/to/file.yaml}} {{[-C|--colors]}}`

- Output the first element in a YAML file that contains only an array (v4+):

`yq eval '.[0]' {{path/to/file.yaml}}`

- Output the first element in a YAML file that contains only an array (v3):

`yq read {{path/to/file.yaml}} '[0]'`

- Set (or overwrite) a key to a value in a file (v4+):

`yq eval '.{{key}} = "{{value}}"' {{[-i|--inplace]}} {{path/to/file.yaml}}`

- Set (or overwrite) a key to a value in a file (v3):

`yq write {{[-i|--inplace]}} {{path/to/file.yaml}} '{{key}}' '{{value}}'`

- Merge two files and print to `stdout` (v4+):

`yq eval-all 'select(filename == "{{path/to/file1.yaml}}") * select(filename == "{{path/to/file2.yaml}}")' {{path/to/file1.yaml}} {{path/to/file2.yaml}}`

- Merge two files and print to `stdout` (v3):

`yq merge {{path/to/file1.yaml}} {{path/to/file2.yaml}} {{[-C|--colors]}}`
