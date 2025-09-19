---
title: "PRQL Compiler - Transform Data to SQL | Online Free DevTools by Hexmos"
name: prqlc
path: /freedevtools/tldr/common/prqlc
canonical: "https://hexmos.com/freedevtools/tldr/common/prqlc/"
description: "Transform data to SQL with PRQL Compiler. Convert PRQL queries, watch directories, and automate data pipelines. Free online tool, no registration required."
category: common
keywords:
- prql compiler
- data transformation
- sql generation
- prql to sql
- prqlc compile
- prql language
- data pipeline
- prql watch
- query compiler
- sql converter
features:
- Compile PRQL files to SQL code.
- Transform data using PRQL syntax.
- Watch directories for PRQL file changes and automatically compile.
- Compile PRQL queries from the command line.
- Convert PRQL code for data analysis pipelines.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# prqlc

> PRQL compiler.
> PRQL is a modern language for transforming data - a simple, powerful, pipelined SQL replacement.
> More information: <https://prql-lang.org>.

- Run the compiler interactively:

`prqlc compile`

- Compile a specific `.prql` file to `stdout`:

`prqlc compile {{path/to/file.prql}}`

- Compile a `.prql` file to a `.sql` file:

`prqlc compile {{path/to/source.prql}} {{path/to/target.sql}}`

- Compile a query:

`echo "{{from employees | filter has_dog | select salary}}" | prqlc compile`

- Watch a directory and compile on file modification:

`prqlc watch {{path/to/directory}}`
