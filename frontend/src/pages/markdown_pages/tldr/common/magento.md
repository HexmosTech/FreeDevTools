---
title: "Magento Manager - Control PHP Framework | Online Free DevTools by Hexmos"
name: magento
path: /freedevtools/tldr/common/magento
canonical: "https://hexmos.com/freedevtools/tldr/common/magento/"
description: "Manage Magento PHP framework configurations with Magento Manager. Enable/disable modules, upgrade database and deploy static content with ease. Free online tool, no registration required."
category: common
keywords:
- magento framework manager
- magento module management
- magento database upgrade
- magento static content deploy
- magento command line interface
- php magento configuration
- magento module enable disable
- magento maintenance mode
- linux magento management
- macos magento management
features:
- Enable and disable Magento modules
- Upgrade Magento database schema
- Deploy Magento static assets
- Enable and disable Magento maintenance mode
- List all available Magento commands
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# magento

> Manage the Magento PHP framework.
> More information: <https://experienceleague.adobe.com/en/docs/commerce-operations/tools/cli-reference/commerce-on-premises>.

- Enable one or more modules:

`magento module:enable {{module1 module2 ...}}`

- Disable one or more modules:

`magento module:disable {{module1 module2 ...}}`

- Update the database after enabling modules:

`magento setup:upgrade`

- Update code and dependency injection configuration:

`magento setup:di:compile`

- Deploy static assets:

`magento setup:static-content:deploy`

- Enable maintenance mode:

`magento maintenance:enable`

- Disable maintenance mode:

`magento maintenance:disable`

- List all available commands:

`magento list`
