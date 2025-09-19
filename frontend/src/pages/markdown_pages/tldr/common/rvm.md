---
title: "Manage Ruby Environments - Control RVM | Online Free DevTools by Hexmos"
name: rvm
path: /freedevtools/tldr/common/rvm
canonical: "https://hexmos.com/freedevtools/tldr/common/rvm/"
description: "Manage multiple Ruby versions with RVM. Effortlessly install, switch, and uninstall Ruby environments. Free online tool, no registration required."
category: common
keywords:
- ruby version manager
- rvm ruby
- ruby environment manager
- rvm install
- rvm use
- rvm uninstall
- rvm requirements
- rvm upgrade
- ruby version control
- rvm list
features:
- Install specific Ruby versions easily
- List installed Ruby versions
- Switch between different Ruby environments
- Set a default Ruby version
- Show required dependencies for different OS
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rvm

> Easily installing, managing, and working with multiple ruby environments.
> More information: <https://rvm.io>.

- Install one or more versions of Ruby:

`rvm install {{version1 version2 ...}}`

- Display a list of installed versions:

`rvm list`

- Use a specific version of Ruby:

`rvm use {{version}}`

- Set the default Ruby version:

`rvm --default use {{version}}`

- Upgrade a version of Ruby to a new version:

`rvm upgrade {{current_version}} {{new_version}}`

- Uninstall a version of Ruby and keep its sources:

`rvm uninstall {{version}}`

- Remove a version of Ruby and its sources:

`rvm remove {{version}}`

- Show specific dependencies for your OS:

`rvm requirements`
