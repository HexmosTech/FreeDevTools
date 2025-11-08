---
title: "Control Cloud-init - Manage Instance Initialization | Online Free DevTools by Hexmos"
name: cloud-init
path: "/freedevtools/tldr/linux/cloud-init/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/cloud-init/"
description: "Control cloud instance initialization with Cloud-init. Automate cloud configuration, manage packages, and run scripts. Free online tool, no registration required."
category: linux
keywords:
  - cloud-init configuration
  - cloud instance initialization
  - cloud configuration management
  - automate cloud setup
  - cloud-init status
  - cloud-init clean
  - query cloud metadata
  - cloud instance automation
  - cloud server initialization
  - cloud bootstrapping
features:
  - Display cloud-init status
  - Query instance metadata
  - Clean cloud-init logs and artifacts
  - Automate cloud instance setup
  - Wait for cloud-init completion
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cloud-init

> Manage cloud instance initialization.
> More information: <https://cloudinit.readthedocs.io/en/latest/reference/cli.html>.

- Display the status of the most recent cloud-init run:

`cloud-init status`

- Wait for cloud-init to finish running and then report status:

`cloud-init status --wait`

- List available top-level metadata keys to query:

`cloud-init query --list-keys`

- Query cached instance metadata for data:

`cloud-init query {{dot_delimited_variable_path}}`

- Clean logs and artifacts to allow cloud-init to rerun:

`cloud-init clean`
