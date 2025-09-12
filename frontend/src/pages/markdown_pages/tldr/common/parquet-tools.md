---
title: "Parquet Tools - Inspect Parquet Files | Free DevTools"
name: parquet-tools
path: /freedevtools/tldr/common/parquet-tools
canonical: "https://hexmos.com/freedevtools/tldr/common/parquet-tools/"
description: "Inspect Parquet files with Parquet Tools. View schema and metadata, merge, and get row counts easily. Free online tool, no registration required."
category: common
keywords:
- parquet file inspector
- parquet schema viewer
- parquet metadata extractor
- parquet data dumper
- parquet merge tool
- parquet row counter
- parquet command line tools
- parquet command
- linux parquet tools
- parquet file manipulation
features:
- Display Parquet file content
- Print Parquet file schema
- Extract Parquet file metadata
- Merge multiple Parquet files
- Count rows in a Parquet file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# parquet-tools

> Show, inspect and manipulate Parquet file.
> More information: <https://github.com/apache/parquet-mr>.

- Display the content of a Parquet file:

`parquet-tools cat {{path/to/parquet}}`

- Display the first few lines of a Parquet file:

`parquet-tools head {{path/to/parquet}}`

- Print the schema of a Parquet file:

`parquet-tools schema {{path/to/parquet}}`

- Print the metadata of a Parquet file:

`parquet-tools meta {{path/to/parquet}}`

- Print the content and metadata of a Parquet file:

`parquet-tools dump {{path/to/parquet}}`

- Concatenate several Parquet files into the target one:

`parquet-tools merge {{path/to/parquet1}} {{path/to/parquet2}} {{path/to/target_parquet}}`

- Print the count of rows in a Parquet file:

`parquet-tools rowcount {{path/to/parquet}}`

- Print the column and offset indexes of a Parquet file:

`parquet-tools column-index {{path/to/parquet}}`
