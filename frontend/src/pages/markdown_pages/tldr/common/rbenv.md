---
title: "Manage Ruby Versions - Control Environments | Online Free DevTools by Hexmos"
name: rbenv
path: /freedevtools/tldr/common/rbenv
canonical: "https://hexmos.com/freedevtools/tldr/common/rbenv/"
description: "Manage Ruby versions easily with rbenv, a command-line tool for controlling Ruby environments. Install, uninstall, and switch between Ruby versions. Free online tool, no registration required."
category: common
keywords:
- ruby version manager
- rbenv ruby environment
- ruby version control
- rbenv install ruby
- rbenv global version
- rbenv local version
- ruby environment management
- rbenv uninstall ruby
- ruby version switching
- rbenv command line
features:
- Install specific Ruby versions
- Switch between Ruby versions for projects
- Set a global Ruby version for the system
- Uninstall unnecessary Ruby versions
- List available and installed Ruby versions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rbenv

> Easily install Ruby versions and manage application environments.
> See also: `asdf`.
> More information: <https://github.com/rbenv/rbenv>.

- Install a Ruby version:

`rbenv install {{version}}`

- Display a list of the latest stable versions for each Ruby:

`rbenv install --list`

- Display a list of installed Ruby versions:

`rbenv versions`

- Use a specific Ruby version across the whole system:

`rbenv global {{version}}`

- Use a specific Ruby version for an application/project directory:

`rbenv local {{version}}`

- Display the currently selected Ruby version:

`rbenv version`

- Uninstall a Ruby version:

`rbenv uninstall {{version}}`

- Display all Ruby versions that contain the specified executable:

`rbenv whence {{executable}}`
