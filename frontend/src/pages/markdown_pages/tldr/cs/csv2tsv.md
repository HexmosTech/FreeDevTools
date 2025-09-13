---
title: "Convert CSV to TSV - Format Text Files | Free DevTools"
name: csv2tsv
path: /freedevtools/tldr/cs/csv2tsv
canonical: "https://hexmos.com/freedevtools/tldr/cs/csv2tsv/"
description: "Format CSV files to TSV easily with csv2tsv. Quickly convert comma-separated values to tab-separated values. Free online tool, no registration required."
category: common
keywords:
- csv to tsv converter
- convert csv to tsv
- csv2tsv command
- csv to tsv online
- tab separated values
- comma separated values
- text file conversion
- command line csv to tsv
- linux csv to tsv
- macos csv to tsv
features:
- Convert CSV files to TSV format
- Support custom field delimiters
- Read from multiple input CSV files
- Write TSV output to a file
- Process large CSV files efficiently
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# csv2tsv

> Convert CSV (comma-separated) text to TSV (tab-separated) format.
> More information: <https://github.com/eBay/tsv-utils/blob/master/README.md#csv2tsv>.

- Convert from CSV to TSV:

`csv2tsv {{path/to/input_csv1 path/to/input_csv2 ...}} > {{path/to/output_tsv}}`

- Convert field delimiter separated CSV to TSV:

`csv2tsv -c'{{field_delimiter}}' {{path/to/input_csv}}`

- Convert semicolon separated CSV to TSV:

`csv2tsv -c';' {{path/to/input_csv}}`
