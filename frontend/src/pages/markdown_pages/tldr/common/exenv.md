---
title: "Manage Elixir Versions - Control Environments | Online Free DevTools by Hexmos"
name: exenv
path: /freedevtools/tldr/common/exenv
canonical: "https://hexmos.com/freedevtools/tldr/common/exenv/"
description: "Manage Elixir versions easily with Exenv. Control application environments and switch between Elixir installations seamlessly. Free online tool, no registration required."
category: common
keywords:
- Elixir version manager
- Exenv environment control
- Elixir installation tool
- Beam language versioning
- Erlang environment manager
- Command-line Elixir management
- Application environment switcher
- System-wide Elixir configuration
- Project-specific Elixir setup
- Elixir build plugin support
features:
- List all installed Elixir versions.
- Set a global Elixir version for the system.
- Configure a local Elixir version for a project.
- Display the currently selected Elixir version.
- Install new Elixir versions using elixir-build.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# exenv

> Easily install Elixir versions and manage application environments.
> More information: <https://github.com/mururu/exenv>.

- Display a list of installed versions:

`exenv versions`

- Use a specific version of Elixir across the whole system:

`exenv global {{version}}`

- Use a specific version of Elixir for the current application/project directory:

`exenv local {{version}}`

- Show the currently selected Elixir version:

`exenv {{version}}`

- Install a version of Elixir (requires `elixir-build` plugin <https://github.com/mururu/elixir-build>):

`exenv install {{version}}`
