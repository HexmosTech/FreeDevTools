---
title: "Convert to CSV - Format Tabular Data | Free DevTools"
name: in2csv
path: /freedevtools/tldr/in/in2csv
canonical: "https://hexmos.com/freedevtools/tldr/in/in2csv/"
description: "Convert tabular data to CSV with in2csv. Format XLS, XLSX, DBF, and JSON files. Free online tool, no registration required."
category: common
keywords:
- tabular data to CSV
- XLS to CSV conversion
- XLSX to CSV conversion
- DBF to CSV conversion
- JSON to CSV conversion
- data format conversion
- csvkit in2csv
- command-line CSV converter
- in2csv examples
- tabular data converter
features:
- Convert XLS files to CSV format.
- Convert DBF files to CSV format.
- Convert specific sheets from XLSX files to CSV.
- Accept JSON data via pipe and convert to CSV.
- Supports multiple tabular data formats for CSV conversion.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# in2csv

> Convert various tabular data formats to CSV.
> Included in csvkit.
> More information: <https://csvkit.readthedocs.io/en/latest/scripts/in2csv.html>.

- Convert an XLS file to CSV:

`in2csv {{data.xls}}`

- Convert a DBF file to a CSV file:

`in2csv {{data.dbf}} > {{data.csv}}`

- Convert a specific sheet from an XLSX file to CSV:

`in2csv --sheet={{sheet_name}} {{data.xlsx}}`

- Pipe a JSON file to in2csv:

`cat {{data.json}} | in2csv {{[-f|--format]}} json > {{data.csv}}`
