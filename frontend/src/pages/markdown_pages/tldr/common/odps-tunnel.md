---
title: "ODPS Tunnel - Transfer Data | Free DevTools"
name: odps-tunnel
path: /freedevtools/tldr/common/odps-tunnel
canonical: "https://hexmos.com/freedevtools/tldr/common/odps-tunnel/"
description: "Transfer data with ODPS Tunnel, allowing efficient data upload and download between local systems and Alibaba Cloud ODPS. Free online tool, no registration required."
category: common
keywords:
- ODPS data transfer
- ODPS tunnel upload
- ODPS tunnel download
- Alibaba Cloud ODPS
- data upload command line
- data download command line
- ODPS partition upload
- ODPS data manipulation
- big data transfer
- ODPS command-line interface
features:
- Download data tables from ODPS to local files
- Upload local files to ODPS table partitions
- Specify field and record delimiters for data upload
- Support multi-threaded uploads for faster data transfer
- Facilitate data movement in Alibaba Cloud ODPS
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# odps tunnel

> Data tunnel in ODPS (Open Data Processing Service).
> See also: `odps`.
> More information: <https://www.alibabacloud.com/help/doc-detail/27971.htm>.

- Download table to local file:

`tunnel download {{table_name}} {{path/to/file}};`

- Upload local file to a table partition:

`tunnel upload {{path/to/file}} {{table_name}}/{{partition_spec}};`

- Upload table specifying field and record delimiters:

`tunnel upload {{path/to/file}} {{table_name}} -fd {{field_delim}} -rd {{record_delim}};`

- Upload table using multiple threads:

`tunnel upload {{path/to/file}} {{table_name}} -threads {{num}};`
