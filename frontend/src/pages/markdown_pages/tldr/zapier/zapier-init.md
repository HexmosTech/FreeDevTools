---
title: "Create Zapier Integration - Initialize with Zapier CLI | Free DevTools"
name: zapier-init
path: /freedevtools/tldr/common/zapier-init
canonical: "https://hexmos.com/freedevtools/tldr/common/zapier-init/"
description: "Create a Zapier integration with Zapier init command. Quickly bootstrap new integrations using templates for authentication and data handling. Free online tool, no registration required."
category: common
keywords:
- zapier integration
- zapier cli
- zapier init command
- zapier platform
- zapier development
- integration development
- zapier template
- api integration
- automation workflow
- zapier webhook
features:
- Initialize new Zapier integrations
- Use pre-built integration templates
- Debug Zapier integration initialization
- Specify a directory for the integration
- Supports various authentication methods
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zapier init

> Initialize a new Zapier integration.
> More information: <https://platform.zapier.com/reference/cli#init>.

- Initialize a new Zapier integration:

`zapier init {{path/to/directory}}`

- Initialize a new Zapier integration with a specific template:

`zapier init {{path/to/directory}} {{[-t|--template]}} {{basic-auth|callback|custom-auth|digest-auth|dynamic-dropdown|files|minimal|oauth1-trello|oauth2|search-or-create|session-auth|typescript}}`

- Show extra debugging output:

`zapier init {{[-d|--debug]}}`
