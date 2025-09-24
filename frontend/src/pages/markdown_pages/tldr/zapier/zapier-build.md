---
title: "Zapier Build - Create Integration Package | Online Free DevTools by Hexmos"
name: zapier-build
path: /freedevtools/tldr/zapier/zapier-build
canonical: "https://hexmos.com/freedevtools/tldr/zapier/zapier-build/"
description: "Create Zapier integration packages with Zapier Build. Optimize your integration deployment and manage dependencies efficiently. Free online tool, no registration required."
category: common
keywords:
- zapier build
- zapier integration
- integration package
- zapier cli
- zapier platform
- zapier deployment
- zapier automation
- zapier dependency management
- zip package
- zapier app
features:
- Creates a zip file for Zapier integration deployment.
- Detects and includes necessary dependencies.
- Provides options to disable dependency detection for custom control.
- Enables debugging output for detailed insights.
- Streamlines the packaging process for Zapier apps.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zapier build

> Build a pushable `zip` of a Zapier integration.
> More information: <https://platform.zapier.com/reference/cli#build>.

- Create a build:

`zapier build`

- Disable smart file inclusion (will only include files required by `index.js`):

`zapier build --disable-dependency-detection`

- Show extra debugging output:

`zapier build {{[-d|--debug]}}`
