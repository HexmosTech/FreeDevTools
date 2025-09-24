---
title: "Runtime Manager - Control Language Versions with Mise | Online Free DevTools by Hexmos"
name: mise
path: /freedevtools/tldr/common/mise
canonical: "https://hexmos.com/freedevtools/tldr/common/mise/"
description: "Control language runtime versions with Mise. Install, manage, and switch between Node.js, Python, Ruby, and Go versions easily. Free online tool, no registration required."
category: common
keywords:
- runtime manager
- language version manager
- node.js version manager
- python version manager
- ruby version manager
- go version manager
- java version manager
- mise runtime
- cli runtime management
- environment variable manager
features:
- Install specific language runtime versions
- Manage global and local runtime versions
- Set environment variables in configuration
- Install and manage plugins
- List available runtime versions for installation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mise

> Manage language runtimes like Node.js, Python, Ruby, Go, Java, etc and various tools.
> More information: <https://mise.jdx.dev>.

- List all available plugins:

`mise plugins list-all`

- Install a plugin:

`mise plugins add {{name}}`

- List runtime versions available for install:

`mise ls-remote {{name}}`

- Install a specific version of a package:

`mise install {{name}}@{{version}}`

- Set global version for a package:

`mise use --global {{name}}@{{version}}`

- Set local version for a package:

`mise use {{name}}@{{version}}`

- Set environment variable in configuration:

`mise set {{variable}}={{value}}`

- Pass plugin options:

`mise use {{name}}\[{{option1}}={{option1_value}},{{option2}}={{option2_value}}\]@{{version}}`
