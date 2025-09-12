---
title: "Azure Version - Show CLI Versions | Free DevTools"
name: az-version
path: /freedevtools/tldr/common/az-version
canonical: "https://hexmos.com/freedevtools/tldr/common/az-version/"
description: "Show Azure CLI versions with Az Version. Display module and extension versions for Azure development. Free online tool, no registration required."
category: common
keywords:
- Azure CLI version
- CLI version display
- Azure module version
- Azure extension version
- az version command
- Azure CLI tools
- CLI JSON output
- Azure command line
- Azure Linux
- Azure MacOS
features:
- Display Azure CLI core version
- Show installed module versions
- List installed extension versions
- Output version information in JSON format
- Format version output to table or TSV
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az version

> Shows the current version of Azure CLI modules and extensions.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/reference-index?view=azure-cli-latest#az-version>.

- Show the current version of Azure CLI modules and extensions in JSON format:

`az version`

- Show the current version of Azure CLI modules and extensions in a given format:

`az version {{[-o|--output]}} {{json|table|tsv}}`
