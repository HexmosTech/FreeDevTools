---
title: "CSV Format - Convert CSV to Custom Format | Online Free DevTools by Hexmos"
name: csvformat
path: "/freedevtools/tldr/cs/csvformat/"
canonical: "https://hexmos.com/freedevtools/tldr/cs/csvformat/"
description: "Format CSV data easily with CSVFormat. Convert delimiters and line endings to create custom CSV outputs. Free online tool, no registration required."
category: common
keywords:
- csv formatting
- csv conversion
- tsv converter
- delimiter changer
- line ending converter
- csv to tsv
- csv quoting
- common
- command line csv
- csvkit
features:
- Convert CSV to tab-delimited format (TSV).
- Change delimiters to custom characters.
- Convert line endings to carriage return + line feed.
- Minimize or maximize quote usage in CSV output.
- Customize CSV output format via command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# csvformat

> Convert a CSV file to a custom output format.
> Included in csvkit.
> More information: <https://csvkit.readthedocs.io/en/latest/scripts/csvformat.html>.

- Convert to a tab-delimited file (TSV):

`csvformat {{[-T|--out-tabs]}} {{data.csv}}`

- Convert delimiters to a custom character:

`csvformat {{[-D|--out-delimiter]}} "{{custom_character}}" {{data.csv}}`

- Convert line endings to carriage return (^M) + line feed:

`csvformat {{[-M|--out-lineterminator]}} "{{\r\n}}" {{data.csv}}`

- Minimize use of quote characters:

`csvformat {{[-U|--out-quoting]}} 0 {{data.csv}}`

- Maximize use of quote characters:

`csvformat {{[-U|--out-quoting]}} 1 {{data.csv}}`
