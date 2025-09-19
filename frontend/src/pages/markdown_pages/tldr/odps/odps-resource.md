---
title: "ODPS Resource Manager - Manage Data Resources | Online Free DevTools by Hexmos"
name: odps-resource
path: /freedevtools/tldr/odps/odps-resource
canonical: "https://hexmos.com/freedevtools/tldr/odps/odps-resource/"
description: "Manage ODPS resources with ODPS Resource Manager. Upload files, archives, JARs, and Python scripts for data processing. Free online tool, no registration required."
category: common
keywords:
- odps resource management
- alibaba cloud odps resource
- odps data processing
- odps file upload
- odps archive upload
- odps jar upload
- odps python script upload
- odps resource deletion
- odps project resource listing
- odps command line resource
features:
- List resources in the current ODPS project
- Add file resources to ODPS
- Add archive resources to ODPS
- Add JAR resources to ODPS
- Delete resources from ODPS
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# odps resource

> Manage resources in ODPS (Open Data Processing Service).
> See also: `odps`.
> More information: <https://www.alibabacloud.com/help/doc-detail/27971.htm>.

- Show resources in the current project:

`list resources;`

- Add file resource:

`add file {{filename}} as {{alias}};`

- Add archive resource:

`add archive {{archive.tar.gz}} as {{alias}};`

- Add .jar resource:

`add jar {{package.jar}};`

- Add .py resource:

`add py {{script.py}};`

- Delete resource:

`drop resource {{resource_name}};`
