---
title: "Azure Term - Manage Marketplace Agreements | Free DevTools"
name: az-term
path: /freedevtools/tldr/common/az-term
canonical: "https://hexmos.com/freedevtools/tldr/common/az-term/"
description: "Manage Azure marketplace agreements efficiently with Azure Term. Accept terms, show product details, and automate deployments via the CLI. Free online tool, no registration required."
category: common
keywords:
- azure marketplace agreements
- azure cli terms
- az term command
- azure deployment automation
- marketplace ordering api
- azure agreement management
- azure subscription terms
- azure resource manager terms
- azure cli marketplace
- azure product deployment
features:
- Display marketplace agreement details.
- Accept marketplace terms programmatically.
- Automate deployment workflows.
- Verify marketplace compliance.
- Manage azure subscriptions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az term

> Manage marketplace agreement with marketplaceordering.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/term>.

- Print marketplace terms:

`az term show --product "{{product_identifier}}" --plan "{{plan_identifier}}" --publisher "{{publisher_identifier}}"`

- Accept marketplace terms:

`az term accept --product "{{product_identifier}}" --plan "{{plan_identifier}}" --publisher "{{publisher_identifier}}"`
