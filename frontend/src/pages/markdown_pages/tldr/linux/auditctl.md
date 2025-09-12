---
title: "Auditctl - Control Linux Auditing System | Free DevTools"
name: auditctl
path: /freedevtools/tldr/linux/auditctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/auditctl/"
description: "Control Linux audit system behavior with auditctl. Manage audit rules, view system status, and monitor file changes. Free online tool, no registration required."
category: linux
keywords:
  - linux audit control
  - auditctl commands
  - linux system auditing
  - audit rule management
  - linux security auditing
  - file system monitoring
  - audit log analysis
  - linux auditctl tutorial
  - system event monitoring
  - auditd configuration
features:
  - Display the status of the audit system
  - List all currently loaded audit rules
  - Add, delete, and modify audit rules
  - Enable or disable the audit system
  - Monitor files and directories for changes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# auditctl

> Utility to control the behavior, get status and manage rules of the Linux Auditing System.
> More information: <https://manned.org/auditctl>.

- Display the [s]tatus of the audit system:

`sudo auditctl -s`

- [l]ist all currently loaded audit rules:

`sudo auditctl -l`

- [D]elete all audit rules:

`sudo auditctl -D`

- [e]nable/disable the audit system:

`sudo auditctl -e {{1|0}}`

- Watch a file for changes:

`sudo auditctl -a always,exit -F arch=b64 -F path=/{{path/to/file}} -F perm=wa`

- Recursively watch a directory for changes:

`sudo auditctl -a always,exit -F arch=b64 -F dir=/{{path/to/directory}}/ -F perm=wa`

- Display [h]elp:

`auditctl -h`
