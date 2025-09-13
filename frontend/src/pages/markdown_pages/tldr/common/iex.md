---
title: "IEx Shell - Control Elixir Interactions | Free DevTools"
name: iex
path: /freedevtools/tldr/common/iex
canonical: "https://hexmos.com/freedevtools/tldr/common/iex/"
description: "Control Elixir code interactions with IEx Shell. Start interactive sessions, load projects, and manage history. Free online tool, no registration required."
category: common
keywords:
- elixir interactive shell
- iex elixir console
- erlang shell history
- mix project loader
- elixir debugging tool
- command line interface elixir
- elixir code runner
- elixir interactive session
- iex command options
- elixir shell scripting
features:
- Start interactive Elixir sessions
- Enable command history in sessions
- Load and run Mix project files
- Execute Elixir code snippets
- Debug Elixir applications interactively
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# iex

> IEx is the interactive shell for Elixir.
> More information: <https://manned.org/iex>.

- Start an interactive session:

`iex`

- Start a session that remembers history:

`iex --erl "-kernel shell_history enabled"`

- Start and load Mix project files:

`iex -S mix`
