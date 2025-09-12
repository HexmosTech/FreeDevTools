---
title: "Query DuckDB - Run SQL on Data Files | Free DevTools"
name: duckdb
path: /freedevtools/tldr/common/duckdb
canonical: "https://hexmos.com/freedevtools/tldr/common/duckdb/"
description: "Query data files with DuckDB. Execute SQL commands on CSV, JSON, and Parquet files, create in-memory databases, and run SQL scripts. Free online tool, no registration required."
category: common
keywords:
- DuckDB SQL query
- CSV SQL engine
- JSON SQL engine
- Parquet SQL engine
- In-memory database SQL
- SQL script runner
- Command line SQL client
- Linux SQL data
- macOS SQL analysis
- DuckDB data analysis
features:
- Execute SQL queries against CSV, JSON, and Parquet files
- Create and manage in-memory DuckDB databases
- Run SQL scripts from the command line
- Read CSV data from stdin and write CSV data to stdout
- Launch the DuckDB UI for notebook-style data analysis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# duckdb

> Client for DuckDB, an in-process analytical SQL engine.
> More information: <https://duckdb.org>.

- Start an interactive shell with a transient in-memory database:

`duckdb`

- Start an interactive shell on a database file. If the file does not exist, a new database is created:

`duckdb {{path/to/dbfile}}`

- Query a CSV, JSON, or Parquet file using SQL:

`duckdb -c "{{SELECT * FROM 'data_source.[csv|csv.gz|json|json.gz|parquet]'}}"`

- Directly query a CSV, JSON, or Parquet file using the `file` view:

`duckdb {{data_source.[csv|csv.gz|json|json.gz|parquet]}} -c "{{ SELECT * FROM file }}"`

- Run an SQL script:

`duckdb -f {{path/to/script.sql}}`

- Run query on database file and keep the interactive shell open:

`duckdb {{path/to/dbfile}} -cmd "{{SELECT DISTINCT * FROM tbl}}"`

- Read CSV from `stdin` and write CSV to `stdout`:

`cat {{path/to/source.csv}} | duckdb -c "{{COPY (FROM read_csv('/dev/stdin')) TO '/dev/stdout' WITH (FORMAT CSV, HEADER)}}"`

- Start the DuckDB UI, a web interface with notebooks:

`duckdb -ui`
