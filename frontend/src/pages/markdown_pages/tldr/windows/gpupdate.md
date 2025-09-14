---
title: "GPupdate - Control Group Policy Updates | Free DevTools"
name: gpupdate
path: /freedevtools/tldr/windows/gpupdate
canonical: "https://hexmos.com/freedevtools/tldr/windows/gpupdate/"
description: "Control Windows Group Policy updates with GPupdate. Force updates, target specific settings, and manage group policies on your Windows system. Free online tool, no registration required."
category: windows
keywords:
- group policy update
- gpupdate command
- windows group policy
- force group policy update
- group policy management
- group policy refresh
- windows gpupdate
- group policy settings
- active directory gpupdate
- command line group policy
features:
- Force immediate group policy updates
- Target specific computer or user policies
- Reapply all group policy settings
- Check for updated group policy settings
- Manage group policies via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gpupdate

> Check and apply Windows Group Policy settings.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/gpupdate>.

- Check and apply updated Group Policy settings:

`gpupdate`

- Specify the target Group Policy settings to check for update:

`gpupdate /target:{{computer|user}}`

- Force all Group Policy settings to be reapplied:

`gpupdate /force`

- Display help:

`gpupdate /?`
