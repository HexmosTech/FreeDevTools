---
title: "Format Data with Miller (mlr) | Online Free DevTools by Hexmos"
name: mlr
path: /freedevtools/tldr/common/mlr
canonical: "https://hexmos.com/freedevtools/tldr/common/mlr/"
description: "Format data easily with Miller (mlr). Convert between CSV, JSON, TSV, and tabular formats. Free online tool, no registration required."
category: common
keywords:
- csv formatter
- json formatter
- tsv formatter
- tabular data converter
- data transformation cli
- miller command line
- miller awk alternative
- miller sed alternative
- mlr csv json
- linux data tools
features:
- Convert CSV, JSON, and TSV data formats.
- Sort data based on field values (alphabetical or numerical).
- Perform calculations on data fields.
- Filter data based on regular expressions.
- Pretty-print data in tabular or JSON formats.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mlr

> Miller is like `awk`, `sed`, `cut`, `join`, and `sort` for name-indexed data such as CSV, TSV, and tabular JSON.
> More information: <https://johnkerl.org/miller/doc>.

- Pretty-print a CSV file in a tabular format:

`mlr --icsv --opprint cat {{example.csv}}`

- Receive JSON data and pretty print the output:

`echo '{"hello":"world"}' | mlr --ijson --opprint cat`

- Sort alphabetically on a field:

`mlr --icsv --opprint sort -f {{field}} {{example.csv}}`

- Sort in descending numerical order on a field:

`mlr --icsv --opprint sort -nr {{field}} {{example.csv}}`

- Convert CSV to JSON, performing calculations and display those calculations:

`mlr --icsv --ojson put '${{newField1}} = ${{oldFieldA}}/${{oldFieldB}}' {{example.csv}}`

- Receive JSON and format the output as vertical JSON:

`echo '{"hello":"world", "foo":"bar"}' | mlr --ijson --ojson --jvstack cat`

- Filter lines of a compressed CSV file treating numbers as [S]trings:

`mlr --prepipe 'gunzip' {{[-c|--csv]}} filter {{[-S|--infer-none]}} '${{fieldName}} =~ "{{regex}}"' {{example.csv.gz}}`
