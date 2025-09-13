---
title: "Cradle Install - Install Framework Components | Free DevTools"
name: cradle-install
path: /freedevtools/tldr/common/cradle-install
canonical: "https://hexmos.com/freedevtools/tldr/common/cradle-install/"
description: "Install Cradle framework components with Cradle Install. Streamline project setup and component management effortlessly. Free online tool, no registration required."
category: common
keywords:
- cradle install
- php framework install
- component installer
- cradle components
- php project setup
- database configuration
- cradle migrations
- package updates
- command line installer
- framework automation
features:
- Install Cradle framework components interactively
- Forcefully overwrite existing files during installation
- Skip SQL migrations during install process
- Skip package updates and versioning
- Specify database connection details for installation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cradle install

> Install the Cradle PHP framework components.
> More information: <https://cradlephp.github.io/docs/3.B.-Reference-Command-Line-Tools.html#install>.

- Install Cradle's components (User will be prompted for further details):

`cradle install`

- Forcefully overwrite files:

`cradle install {{[-f|--force]}}`

- Skip running SQL migrations:

`cradle install --skip-sql`

- Skip running package updates:

`cradle install --skip-versioning`

- Use specific database details:

`cradle install -h {{hostname}} -u {{username}} -p {{password}}`
