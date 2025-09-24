---
title: "Fisher Plugin Manager - Install Fish Shell Plugins | Online Free DevTools by Hexmos"
name: fisher
path: /freedevtools/tldr/common/fisher
canonical: "https://hexmos.com/freedevtools/tldr/common/fisher/"
description: "Install Fish shell plugins easily with Fisher Plugin Manager. Manage your fish shell configuration and extensions. Free online tool, no registration required."
category: common
keywords:
- fish shell plugin manager
- fish shell extensions
- fish plugin installer
- fisher plugin
- fish shell configuration
- fisher update
- fish remove
- fish list plugins
- fishfile manager
- fish shell themes
features:
- Install fish shell plugins by name
- Manage fish shell plugins from a fishfile
- Update installed fish shell plugins
- Remove fish shell plugins
- List all installed fish shell plugins
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fisher

> Fisher, a fish-shell plugin manager.
> Install plugins by name or from a managed 'fishfile' for bundled installs.
> More information: <https://github.com/jorgebucaran/fisher>.

- Install one or more plugins:

`fisher {{plugin1}} {{plugin2}}`

- Install a plugin from a GitHub gist:

`fisher {{gist_url}}`

- Edit 'fishfile' manually with your favorite editor and install multiple plugins:

`{{editor}} ~/.config/fish/fishfile; fisher`

- List installed plugins:

`fisher ls`

- Update plugins:

`fisher update`

- Remove one or more plugins:

`fisher remove {{plugin1}} {{plugin2}}`
