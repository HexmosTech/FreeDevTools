---
title: "Query CSV - Execute SQL on Files | Online Free DevTools by Hexmos"
name: q
path: "/freedevtools/tldr/common/q/"
canonical: "https://hexmos.com/freedevtools/tldr/common/q/"
description: "Execute SQL queries on CSV files with Query CSV. Quickly analyze and transform data from CSV and TSV files. Free online tool, no registration required."
category: common
keywords:
- query csv
- csv query
- sql csv
- tsv query
- query tsv
- csv sql
- tsv sql
- file query
- data query
- command line query
features:
- Query CSV and TSV files using SQL-like syntax.
- Specify delimiters for various file formats.
- Read data directly from standard input (stdin).
- Join data from multiple files based on common columns.
- Format output with custom delimiters and headers.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# q

> Execute SQL-like queries on CSV and TSV files.
> More information: <https://harelba.github.io/q>.

- Query a CSV file by specifying the delimiter as ',':

`q {{[-d|--delimiter]}} ',' "SELECT * from {{path/to/file}}"`

- Query a TSV file:

`q {{[-t|--tab-delimited]}} "SELECT * from {{path/to/file}}"`

- Query file with header row:

`q {{[-d|--delimiter]}} {{delimiter}} {{[-H|--skip-header]}} "SELECT * from {{path/to/file}}"`

- Read data from `stdin`; '-' in the query represents the data from `stdin`:

`{{output}} | q "select * from -"`

- Join two files (aliased as `f1` and `f2` in the example) on column `c1`, a common column:

`q "SELECT * FROM {{path/to/file}} f1 JOIN {{path/to/other_file}} f2 ON (f1.c1 = f2.c1)"`

- Format output using an output delimiter with an output header line (Note: Command will output column names based on the input file header or the column aliases overridden in the query):

`q {{[-D|--output-delimiter]}} {{delimiter}} {{[-O|--output-header]}} "SELECT {{column}} as {{alias}} from {{path/to/file}}"`
