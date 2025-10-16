---
title: "Manage Trust Policy - Control Security with trust | Online Free DevTools by Hexmos"
name: trust
path: "/freedevtools/tldr/linux/trust/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/trust/"
description: "Control and manage trust policy with the trust command.  List, add, remove, and extract trust anchors and certificates. Free online tool, no registration required."
category: linux
keywords:
  - trust policy management
  - security policy control
  - certificate management tool
  - trust anchor configuration
  - x509 certificate handling
  - digital certificate management
  - command-line security tool
  - trust store manipulation
  - security policy command
  - system trust configuration
features:
  - List items in the trust policy store.
  - Add trust anchors to the store.
  - Remove anchors from the trust policy store.
  - Extract trust policy to a directory.
  - Manage CA anchors and certificates.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# trust

> Operate on the trust policy store.
> More information: <https://manned.org/trust>.

- List trust policy store items:

`trust list`

- List information about specific items in the trust policy store:

`trust list --filter={{blocklist|ca-anchors|certificates|trust-policy}}`

- Store a specific trust anchor in the trust policy store:

`trust anchor {{path/to/certificate.crt}}`

- Remove a specific anchor from the trust policy store:

`trust anchor --remove {{path/to/certificate.crt}}`

- Extract trust policy from the shared trust policy store:

`trust extract --format=x509-directory --filter=ca-anchors {{path/to/directory}}`

- Display help for a subcommand:

`trust {{subcommand}} --help`
