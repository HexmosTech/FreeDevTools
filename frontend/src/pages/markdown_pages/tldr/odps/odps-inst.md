---
title: "ODPS Instance Manager - Control ODPS Instances | Free DevTools"
name: odps-inst
path: /freedevtools/tldr/odps/odps-inst
canonical: "https://hexmos.com/freedevtools/tldr/odps/odps-inst/"
description: "Manage ODPS instances easily with ODPS Instance Manager. Check instance status, kill tasks, and monitor progress within Alibaba Cloud's ODPS. Free online tool, no registration required."
category: common
keywords:
- ODPS instance management
- Alibaba Cloud ODPS
- data processing service
- ODPS task control
- ODPS instance status
- ODPS kill instance
- ODPS instance logs
- ODPS command line
- ODPS task monitoring
- ODPS instance termination
features:
- Show instances created by user
- Describe details of a specific instance
- Check the current status of an instance
- Wait for instance termination with log output
- Kill a specified ODPS instance
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# odps inst

> Manage instances in ODPS (Open Data Processing Service).
> See also: `odps`.
> More information: <https://www.alibabacloud.com/help/doc-detail/27971.htm>.

- Show instances created by current user:

`show instances;`

- Describe the details of an instance:

`desc instance {{instance_id}};`

- Check the status of an instance:

`status {{instance_id}};`

- Wait on the termination of an instance, printing log and progress information until then:

`wait {{instance_id}};`

- Kill an instance:

`kill {{instance_id}};`
