---
title: "bwrap Sandbox - Run Programs Securely | Online Free DevTools by Hexmos"
name: bwrap
path: /freedevtools/tldr/linux/bwrap
canonical: "https://hexmos.com/freedevtools/tldr/linux/bwrap/"
description: "Run programs securely with bwrap, a lightweight sandbox. Isolate processes, control resource access, and enhance security. Free online tool, no registration required."
category: linux
keywords:
  - linux sandbox
  - bwrap security
  - process isolation bwrap
  - linux containerization bwrap
  - secure program execution bwrap
  - lightweight linux sandbox
  - bwrap command line
  - linux bwrap tutorial
  - application security bwrap
  - bwrap best practices
features:
  - Isolate processes in a controlled environment.
  - Create read-only file system mounts.
  - Restrict access to devices and network resources.
  - Manage process capabilities and privileges.
  - Use tmpfs for temporary files and enhanced security.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bwrap

> Run programs in a lightweight sandbox.
> More information: <https://manned.org/bwrap>.

- Run a program in a read-only environment:

`bwrap --ro-bind / / {{/bin/bash}}`

- Give the environment access to devices, process information and create a `tmpfs` for it:

`bwrap --dev-bind /dev /dev --proc /proc --ro-bind / / --tmpfs /tmp {{/bin/bash}}`
