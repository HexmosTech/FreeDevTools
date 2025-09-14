---
title: "Execute JSONPath - Query JSON with AJSON | Free DevTools"
name: ajson
path: /freedevtools/tldr/common/ajson
canonical: "https://hexmos.com/freedevtools/tldr/common/ajson/"
description: "Execute JSONPath queries with AJSON, a command-line JSON processor. Extract, transform, and filter JSON data effortlessly. Free online tool, no registration required."
category: common
keywords:
- JSONPath executor
- JSON query tool
- command line JSON
- JSON filter
- JSON transformer
- AJSON command
- JSON data extraction
- CLI JSON parser
- linux JSON
- macos JSON
features:
- Execute JSONPath expressions on JSON data from files.
- Process JSON data piped from standard input.
- Query JSON data fetched directly from URLs.
- Perform calculations within JSONPath expressions.
- Filter and extract specific data points from JSON objects.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ajson

> Execute JSONPath on JSON objects.
> More information: <https://github.com/spyzhov/ajson>.

- Read JSON from a file and execute a specified JSONPath expression:

`ajson '{{$..json[?(@.path)]}}' {{path/to/file.json}}`

- Read JSON from `stdin` and execute a specified JSONPath expression:

`cat {{path/to/file.json}} | ajson '{{$..json[?(@.path)]}}'`

- Read JSON from a URL and evaluate a specified JSONPath expression:

`ajson '{{avg($..price)}}' '{{https://example.com/api/}}'`

- Read some simple JSON and calculate a value:

`echo '{{3}}' | ajson '{{2 * pi * $}}'`
