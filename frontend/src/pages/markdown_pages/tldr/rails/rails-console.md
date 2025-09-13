---
title: "Rails Console - Interact with Rails Applications | Free DevTools"
name: rails-console
path: /freedevtools/tldr/common/rails-console
canonical: "https://hexmos.com/freedevtools/tldr/common/rails-console/"
description: "Interact with Rails applications using Rails Console. Debug, test, and manage your application's data directly. Free online tool, no registration required."
category: common
keywords:
- rails console interaction
- rails application debugging
- rails data management
- rails environment control
- rails sandbox mode
- ruby rails console
- rails command line interface
- rails application testing
- rails development console
- rails production console
features:
- Start a Rails console session.
- Execute commands in a Rails application environment.
- Roll back data modifications in sandbox mode.
- Specify the Rails environment to use.
- Access application models and data.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rails console

> Interact with a Rails application.
> More information: <https://guides.rubyonrails.org/command_line.html#bin-rails-console>.

- Start the Rails console:

`rails console`

- Start the Rails console and roll back all data modifications on exit:

`rails console {{[-s|--sandbox]}}`

- Start the Rails console on a specified environment:

`rails console {{[-e|--environment]}} {{dev|test|production|...}}`

- Display help:

`rails console {{[-h|--help]}}`
