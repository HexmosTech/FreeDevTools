---
title: "Packer - Build Machine Images | Online Free DevTools by Hexmos"
name: packer
path: /freedevtools/tldr/common/packer
canonical: "https://hexmos.com/freedevtools/tldr/common/packer/"
description: "Build machine images easily with Packer. Automate image creation, validate configurations, and format Packer files. Free online tool, no registration required."
category: common
keywords:
- packer image builder
- automated image creation
- packer configuration validation
- packer file formatting
- machine image automation
- infrastructure as code image
- cloud image generation
- packer hcl format
- packer json build
- packer template validation
features:
- Automates the creation of machine images for various platforms
- Validates Packer configuration files for syntax and errors
- Formats Packer HCL files for readability and consistency
- Enables building images from JSON configurations
- Supports automated image deployment workflows
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# packer

> Build automated machine images.
> More information: <https://developer.hashicorp.com/packer/docs/commands>.

- Build an image:

`packer build {{path/to/config.json}}`

- Check the syntax of a Packer image config:

`packer validate {{path/to/config.json}}`

- Format a Packer image config:

`packer fmt {{path/to/config.pkr.hcl}}`
