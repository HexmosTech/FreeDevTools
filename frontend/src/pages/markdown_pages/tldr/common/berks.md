---
title: "Manage Cookbooks - Control Chef Cookbooks with Berks | Online Free DevTools by Hexmos"
name: berks
path: /freedevtools/tldr/common/berks
canonical: "https://hexmos.com/freedevtools/tldr/common/berks/"
description: "Control Chef cookbooks efficiently with Berks, a powerful dependency manager. Install, update, and upload cookbooks easily. Free online tool, no registration required."
category: common
keywords:
- chef cookbook manager
- berks cookbook dependency
- ruby berks install
- chef server upload
- berks update cookbook
- berks contingent dependencies
- cookbook management tools
- chef automation tool
- berkshelf cookbook tool
- berks chef automation
features:
- Install cookbook dependencies into a local repository
- Update specific cookbooks and their dependencies
- Upload cookbooks to the Chef server seamlessly
- View and analyze cookbook dependencies effectively
- Automate cookbook management with command-line interface
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# berks

> Chef cookbook dependency manager.
> More information: <https://docs.chef.io/berkshelf.html>.

- Install cookbook dependencies into a local repo:

`berks install`

- Update a specific cookbook and its dependencies:

`berks update {{cookbook}}`

- Upload a cookbook to the Chef server:

`berks upload {{cookbook}}`

- View the dependencies of a cookbook:

`berks contingent {{cookbook}}`
