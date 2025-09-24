---
title: "Shell Plugin Manager - Control Plugins with Antibody | Online Free DevTools by Hexmos"
name: antibody
path: /freedevtools/tldr/common/antibody
canonical: "https://hexmos.com/freedevtools/tldr/common/antibody/"
description: "Manage shell plugins with Antibody, the fastest plugin manager. Bundle plugins, update bundles, and list installed plugins. Free online tool, no registration required."
category: common
keywords:
- zsh plugin manager
- shell plugin manager
- antibody plugin manager
- zsh plugins bundle
- shell plugins bundle
- zsh plugin update
- shell plugin update
- zsh plugin list
- shell plugin list
- zsh plugin management
features:
- Bundle multiple shell plugins into a single file.
- Update all installed shell plugins.
- List all installed shell plugins.
- Automate the management of shell plugins.
- Load shell plugins statically.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# antibody

> "The fastest" shell plugin manager.
> More information: <https://getantibody.github.io>.

- Bundle all plugins for static loading:

`antibody bundle < {{~/.zsh_plugins.txt}} > {{~/.zsh_plugins.sh}}`

- Update all bundles:

`antibody update`

- List all installed plugins:

`antibody list`
