---
title: "Zapier Convert - Generate CLI Integration | Online Free DevTools by Hexmos"
name: zapier-convert
path: /freedevtools/tldr/zapier/zapier-convert
canonical: "https://hexmos.com/freedevtools/tldr/zapier/zapier-convert/"
description: "Convert Visual Builder integrations to CLI with Zapier Convert. Simplify integration development and debugging with a streamlined command-line tool. Free online tool, no registration required."
category: common
keywords:
- Zapier integration converter
- Visual Builder to CLI conversion
- Zapier CLI tool
- Zapier integration debugging
- Zapier integration management
- Command-line integration generator
- Zapier integration development
- Zapier integration version control
- Node.js integration tools
- Zapier integration migration
features:
- Convert Visual Builder integrations to CLI integrations
- Specify a version during the conversion process
- Debug integration conversion with extra output
- Automate the integration development workflow
- Manage and deploy Zapier integrations via the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zapier convert

> Convert a Visual Builder integration to a CLI integration.
> More information: <https://platform.zapier.com/reference/cli#convert>.

- Convert a visual builder integration:

`zapier convert {{integration_id}} {{path/to/directory}}`

- Convert a visual builder integration with a specific version:

`zapier convert {{integration_id}} {{path/to/directory}} {{[-v|--version]}}={{version}}`

- Show extra debugging output:

`zapier convert --debug`
