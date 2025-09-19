---
title: "UUID Parser - Parse UUIDs with uuidparse | Online Free DevTools by Hexmos"
name: uuidparse
path: /freedevtools/tldr/linux/uuidparse
canonical: "https://hexmos.com/freedevtools/tldr/linux/uuidparse/"
description: "Parse UUIDs efficiently with the uuidparse command-line tool.  Format, validate, and output UUID data in various formats. Free online tool, no registration required."
category: linux
keywords:
  - uuid parser
  - uuid formatting
  - uuid validation
  - uuid command line
  - uuid output formats
  - uuid json output
  - uuid parsing tool
  - command line uuid
  - uuid terminal
  - linux uuid
features:
  - Parses multiple UUIDs simultaneously.
  - Supports various output formats (tabular, JSON, raw).
  - Allows for flexible column selection.
  - Accepts input from stdin for piped data.
  - Provides detailed help and usage instructions.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# uuidparse

> Parse universally unique identifiers.
> See also: `uuidgen`.
> More information: <https://manned.org/uuidparse.1>.

- Parse the specified UUIDs, use a tabular output format:

`uuidparse {{uuid1 uuid2 ...}}`

- Parse UUIDs from `stdin`:

`{{command}} | uuidparse`

- Use the JSON output format:

`uuidparse {{[-J|--json]}} {{uuid1 uuid2 ...}}`

- Do not print a header line:

`uuidparse {{[-n|--noheadings]}} {{uuid1 uuid2 ...}}`

- Use the raw output format:

`uuidparse {{[-r|--raw]}} {{uuid1 uuid2 ...}}`

- Specify which of the four output columns to print:

`uuidparse {{[-o|--output]}} {{UUID,VARIANT,TYPE,TIME}}`

- Display help:

`uuidparse {{[-h|--help]}}`
