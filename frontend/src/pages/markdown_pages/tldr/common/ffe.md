---
title: "Format Flat Files - Extract Fields with FFE | Online Free DevTools by Hexmos"
name: ffe
path: /freedevtools/tldr/common/ffe
canonical: "https://hexmos.com/freedevtools/tldr/common/ffe/"
description: "Format flat file data with FFE, a powerful field extractor. Convert files, select fields, and filter records using configuration files. Free online tool, no registration required."
category: common
keywords:
- flat file formatter
- field extractor
- data converter
- FFE command
- flat file parser
- data transformation
- record selection
- configuration file parsing
- command line tool
- data extraction
features:
- Extract specific fields from flat files
- Convert flat files to different formats
- Filter records based on expressions
- Utilize configuration files for data interpretation
- Display input data in a structured format
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ffe

> Extract fields from a flat database file and write to another format.
> A configuration file is required to interpret the input and format the output.
> More information: <https://ff-extractor.sourceforge.net/ffe.html>.

- Display all input data using the specified data configuration:

`ffe {{[-c|--configuration]}} {{path/to/config.ffe}} {{path/to/input}}`

- Convert an input file to an output file in a new format:

`ffe --output={{path/to/output}} {{[-c|--configuration]}} {{path/to/config.ffe}} {{path/to/input}}`

- Select input structure and print format from definitions in `~/.fferc` configuration file:

`ffe {{[-s|--structure]}} {{structure}} {{[-p|--print]}} {{format}} {{path/to/input}}`

- Write only the selected fields:

`ffe {{[-f|--field-list]}} "{{FirstName,LastName,Age}}" {{[-c|--configuration]}} {{path/to/config.ffe}} {{path/to/input}}`

- Write only the records that match an expression:

`ffe {{[-e|--expression]}} "{{LastName=Smith}}" {{[-c|--configuration]}} {{path/to/config.ffe}} {{path/to/input}}`

- Display help:

`ffe {{[-?|--help]}}`
