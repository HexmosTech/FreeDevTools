---
title: "Create Zapier Integration - Build and Upload with CLI | Online Free DevTools by Hexmos"
name: zapier-push
path: /freedevtools/tldr/zapier/zapier-push
canonical: "https://hexmos.com/freedevtools/tldr/zapier/zapier-push/"
description: "Create Zapier integrations quickly with zapier-push. Build, upload, and manage your Zapier integration from the command line. Free online tool, no registration required."
category: common
keywords:
- zapier integration
- zapier cli
- zapier build
- zapier upload
- zapier deploy
- zapier command line
- zapier push command
- integration development
- zapier automation
- zapier platform
features:
- Build and upload Zapier integrations
- Disable smart file inclusion for controlled deployments
- Enable debug output for enhanced troubleshooting
- Manage integration files with CLI
- Deploy Zapier integrations from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zapier push

> Build and upload a Zapier integration.
> More information: <https://platform.zapier.com/reference/cli#push>.

- Push an integration to Zapier:

`zapier push`

- Disable smart file inclusion (will only include files required by `index.js`):

`zapier push --disable-dependency-detection`

- Show extra debugging output:

`zapier push {{[-d|--debug]}}`
