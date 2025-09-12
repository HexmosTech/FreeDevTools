---
title: "ODPS Command - Manage Aliyun Data Processing | Free DevTools"
name: odps
path: /freedevtools/tldr/common/odps
canonical: "https://hexmos.com/freedevtools/tldr/common/odps/"
description: "Manage Aliyun data processing with ODPS Command, a powerful command-line tool. Execute queries, manage tables, and control data workflows seamlessly. Free online tool, no registration required."
category: common
keywords:
- ODPS command
- Aliyun ODPS
- Open Data Processing Service
- ODPS command line tool
- Data query Aliyun
- Aliyun data management
- ODPS table management
- ODPS partition management
- ODPS project management
- Aliyun cloud data
features:
- Execute SQL queries on Aliyun ODPS
- Manage tables and partitions within ODPS projects
- Switch between different ODPS projects
- Describe table and partition schemas
- Configure ODPS command-line client
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# odps

> Aliyun ODPS (Open Data Processing Service) command-line tool.
> Some subcommands such as `inst` have their own usage documentation.
> More information: <https://www.alibabacloud.com/help/doc-detail/27971.htm>.

- Start the command-line with a custom configuration file:

`odpscmd --config={{odps_config.ini}}`

- Switch current project:

`use {{project_name}};`

- Show tables in the current project:

`show tables;`

- Describe a table:

`desc {{table_name}};`

- Show table partitions:

`show partitions {{table_name}};`

- Describe a partition:

`desc {{table_name}} partition ({{partition_spec}});`
