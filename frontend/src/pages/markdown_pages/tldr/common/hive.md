---
title: "Run Hive Queries - Execute HiveQL with CLI | Free DevTools"
name: hive
path: /freedevtools/tldr/common/hive
canonical: "https://hexmos.com/freedevtools/tldr/common/hive/"
description: "Execute Hive queries efficiently with HiveQL CLI. Analyze big data, perform ETL operations, and manage data warehouses seamlessly. Free online tool, no registration required."
category: common
keywords:
- HiveQL execution
- Apache Hive CLI
- Big data querying
- Data warehousing hive
- HiveQL file processing
- Hive variable substitution
- Hive configuration settings
- Hive interactive shell
- SQL-on-Hadoop execution
- Hive query language
features:
- Execute HiveQL commands directly from the command line
- Run Hive queries from SQL files with variable substitution
- Start an interactive Hive shell for data exploration
- Configure Hive settings using command-line options
- Define variables for use in HiveQL scripts
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hive

> CLI tool for Apache Hive.
> More information: <https://cwiki.apache.org/confluence/display/Hive/LanguageManual+Cli>.

- Start a Hive interactive shell:

`hive`

- Run HiveQL:

`hive -e "{{hiveql_query}}"`

- Run a HiveQL file with a variable substitution:

`hive {{[-d|--define]}} {{key}}={{value}} -f {{path/to/file.sql}}`

- Run a HiveQL with HiveConfig (e.g. `mapred.reduce.tasks=32`):

`hive --hiveconf {{conf_name}}={{conf_value}}`
