---
title: "Create ODPS Functions - Manage Data Processing | Online Free DevTools by Hexmos"
name: odps-func
path: "/freedevtools/tldr/odps/odps-func/"
canonical: "https://hexmos.com/freedevtools/tldr/odps/odps-func/"
description: "Create ODPS functions instantly with ODPS Func. Manage data processing jobs and resources, and define custom logic using Java or Python scripts. Free online tool, no registration required."
category: common
keywords:
- ODPS function creation
- ODPS data processing
- Java ODPS function
- Python ODPS function
- Alibaba Cloud ODPS
- ODPS command line tool
- ODPS resource management
- Big data function deployment
- Data transformation function
- Cloud data processing
features:
- Create Java ODPS functions using JAR resources
- Create Python ODPS functions using Python scripts
- List all functions within the current ODPS project
- Delete existing functions from an ODPS project
- Manage user-defined functions for data processing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# odps func

> Manage functions in ODPS (Open Data Processing Service).
> See also: `odps`.
> More information: <https://www.alibabacloud.com/help/doc-detail/27971.htm>.

- Show functions in the current project:

`list functions;`

- Create a Java function using a `.jar` resource:

`create function {{func_name}} as {{path.to.package.Func}} using '{{package.jar}}';`

- Create a Python function using a `.py` resource:

`create function {{func_name}} as {{script.Func}} using '{{script.py}}';`

- Delete a function:

`drop function {{func_name}};`
