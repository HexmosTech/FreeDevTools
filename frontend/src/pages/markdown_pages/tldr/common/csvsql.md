---
title: "Generate SQL from CSV - csvsql | Free DevTools"
name: csvsql
path: /freedevtools/tldr/common/csvsql
canonical: "https://hexmos.com/freedevtools/tldr/common/csvsql/"
description: "Generate SQL statements from CSV files with csvsql. Convert CSV data to SQL, import into databases, and run queries directly. Free online tool, no registration required."
category: common
keywords:
- csv to sql converter
- generate sql from csv
- csvsql command
- csv to database import
- query csv with sql
- csvkit csvsql
- csv sql generator
- command line csv tool
- sql create table from csv
- csv data analysis tool
features:
- Generate CREATE TABLE statements from CSV files
- Import CSV data directly into SQL databases
- Execute SQL queries on CSV data
- Convert CSV files to SQL database format
- Support various SQL database dialects
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# csvsql

> Generate SQL statements for a CSV file or execute those statements directly on a database.
> Included in csvkit.
> More information: <https://csvkit.readthedocs.io/en/latest/scripts/csvsql.html>.

- Generate a `CREATE TABLE` SQL statement for a CSV file:

`csvsql {{path/to/data.csv}}`

- Import a CSV file into an SQL database:

`csvsql --insert --db "{{mysql://user:password@host/database}}" {{data.csv}}`

- Run an SQL query on a CSV file:

`csvsql --query "{{select * from 'data'}}" {{data.csv}}`
