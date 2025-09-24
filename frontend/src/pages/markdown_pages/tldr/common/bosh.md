---
title: "BOSH Manager - Deploy BOSH Directors | Online Free DevTools by Hexmos"
name: bosh
path: /freedevtools/tldr/common/bosh
canonical: "https://hexmos.com/freedevtools/tldr/common/bosh/"
description: "Deploy and manage BOSH directors with BOSH Manager. Simplify cloud deployment, configure stemcells, and manage virtual machines efficiently. Free online tool, no registration required."
category: common
keywords:
- BOSH director deployment
- cloud deployment manager
- stemcell management
- BOSH virtual machine management
- BOSH CLI tool
- cloud configuration tool
- BOSH environment management
- BOSH deployment automation
- bosh
- ubuntu
features:
- Deploy and manage BOSH directors in various environments.
- Configure and manage stemcells for BOSH deployments.
- Manage virtual machines within BOSH-managed deployments.
- Upload stemcells from local files or URLs.
- Display the current cloud configuration of a BOSH environment.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bosh

> Deploy and manage the BOSH director.
> More information: <https://bosh.io/docs/cli-v2/>.

- Create local alias for director in a specific environment:

`bosh alias-env {{environment_name}} {{[-e|--environment]}} {{ip_address|URL}} --ca-cert {{ca_certificate}}`

- List environments:

`bosh environments`

- Log in to the director:

`bosh login {{[-e|--environment]}} {{environment}}`

- List deployments:

`bosh {{[-e|--environment]}} {{environment}} deployments`

- List environment virtual machines in a deployment:

`bosh {{[-e|--environment]}} {{environment}} vms {{[-d|--deployment]}} {{deployment}}`

- SSH into virtual machine:

`bosh {{[-e|--environment]}} {{environment}} ssh {{virtual_machine}} {{[-d|--deployment]}} {{deployment}}`

- Upload stemcell:

`bosh {{[-e|--environment]}} {{environment}} upload-stemcell {{stemcell_file|url}}`

- Show current cloud config:

`bosh {{[-e|--environment]}} {{environment}} cloud-config`
