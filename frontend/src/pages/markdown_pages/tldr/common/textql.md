---
title: "Execute SQL on Text - Query CSV/TSV with TextQL | Free DevTools"
name: textql
path: "/freedevtools/tldr/common/textql"
canonical: "https://hexmos.com/freedevtools/tldr/common/textql/"
description: "Execute SQL queries directly on text files with TextQL. Analyze CSV and TSV data with SQL, ideal for data analysis and reporting. Free online tool, no registration required."
category: common
keywords:
- SQL CSV query
- SQL TSV query
- TextQL SQL
- CSV SQL command line
- TSV SQL command line
- SQL text file
- SQL data analysis
- SQL flat file
- SQL delimited data
- SQL text processing
features:
- Query CSV and TSV files using SQL syntax
- Specify delimiters for different text file formats
- Read data from standard input for flexible data sources
- Join data from multiple text files based on common columns
- Format output with custom delimiters and headers
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# textql

> Execute SQL against structured text like CSV or TSV files.
> More information: <https://github.com/dinedal/textql>.

- Print the lines in the specified CSV file that match an SQL query to `stdout`:

`textql -sql "{{SELECT * FROM filename}}" {{path/to/filename.csv}}`

- Query a TSV file:

`textql -dlm=tab -sql "{{SELECT * FROM filename}}" {{path/to/filename.tsv}}`

- Query file with header row:

`textql -dlm={{delimiter}} -header -sql "{{SELECT * FROM filename}}" {{path/to/filename.csv}}`

- Read data from `stdin`:

`cat {{path/to/file}} | textql -sql "{{SELECT * FROM stdin}}"`

- Join two files on a specified common column:

`textql -header -sql "SELECT * FROM {{path/to/file1}} JOIN {{file2}} ON {{path/to/file1}}.{{c1}} = {{file2}}.{{c1}} LIMIT {{10}}" -output-header {{path/to/file1.csv}} {{path/to/file2.csv}}`

- Format output using an output delimiter with an output header line:

`textql -output-dlm={{delimiter}} -output-header -sql "SELECT {{column}} AS {{alias}} FROM {{filename}}" {{path/to/filename.csv}}`
