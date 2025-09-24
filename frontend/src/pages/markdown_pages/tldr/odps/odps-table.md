---
title: "Create ODPS Table - Manage Data Storage | Online Free DevTools by Hexmos"
name: odps-table
path: /freedevtools/tldr/odps/odps-table
canonical: "https://hexmos.com/freedevtools/tldr/odps/odps-table/"
description: "Create ODPS tables with ODPS Table command. Manage data storage, define partitions, and set lifecycle policies in Alibaba Cloud's Open Data Processing Service. Free online tool, no registration required."
category: common
keywords:
- ODPS table creation
- Alibaba Cloud ODPS
- data warehousing ODPS
- partition management
- lifecycle management
- ODPS DDL commands
- cloud data storage
- ODPS command-line
- table schema definition
- big data processing
features:
- Create tables with partitions and lifecycle policies
- Duplicate table definitions from existing tables
- Add new partitions to existing tables
- Remove partitions from tables
- Drop tables to delete them entirely
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# odps table

> Create and modify tables in ODPS (Open Data Processing Service).
> See also: `odps`.
> More information: <https://www.alibabacloud.com/help/doc-detail/27971.htm>.

- Create a table with partition and lifecycle:

`create table {{table_name}} ({{col}} {{type}}) partitioned by ({{col}} {{type}}) lifecycle {{days}};`

- Create a table based on the definition of another table:

`create table {{table_name}} like {{another_table}};`

- Add partition to a table:

`alter table {{table_name}} add partition ({{partition_spec}});`

- Delete partition from a table:

`alter table {{table_name}} drop partition ({{partition_spec}});`

- Delete table:

`drop table {{table_name}};`
