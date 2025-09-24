---
title: "Choco Push - Deploy NuGet Packages | Online Free DevTools by Hexmos"
name: choco-push
path: /freedevtools/tldr/windows/choco-push
canonical: "https://hexmos.com/freedevtools/tldr/windows/choco-push/"
description: "Deploy NuGet packages swiftly with Choco Push. Streamline your software distribution workflow by pushing packages to your feeds. Free online tool, no registration required."
category: windows
keywords:
- NuGet package deploy
- Chocolatey push command
- Windows package management
- NuGet repository upload
- Choco package deployment
- Chocolatey package feed
- Command-line package push
- Package server deployment
- Windows application deployment
- NuGet package uploader
features:
- Push NuGet packages to specified feeds
- Configure deployment timeout settings
- Streamline software distribution process
- Automate package feed updates
- Supports command-line package deployment
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# choco push

> Push a compiled NuGet package (`nupkg`) to a package feed.
> More information: <https://docs.chocolatey.org/en-us/create/commands/push>.

- Push a compiled `nupkg` to the specified feed:

`choco push {{[-s|--source]}} {{https://push.chocolatey.org/}}`

- Push a compiled `nupkg` to the specified feed with a timeout in seconds (default is 2700):

`choco push {{[-s|--source]}} {{https://push.chocolatey.org/}} {{[--timeout|--execution-timeout]}} {{500}}`
