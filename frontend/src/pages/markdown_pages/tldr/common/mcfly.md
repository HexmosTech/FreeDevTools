---
title: "Search Command History - Smart Command Lookup | Online Free DevTools by Hexmos"
name: mcfly
path: /freedevtools/tldr/common/mcfly
canonical: "https://hexmos.com/freedevtools/tldr/common/mcfly/"
description: "Intelligently search command history with McFly, replacing Ctrl+R for smarter command lookup and recall across bash, zsh and fish shells. Free online tool, no registration required."
category: common
keywords:
- command history search
- smart command lookup
- shell history manager
- bash command history
- zsh command history
- fish command history
- command line history
- terminal history
- mcfly command line
- intelligent command recall
features:
- Intelligently search command history using relevance and context.
- Replace default shell history search (Ctrl+R).
- Integrate with bash, zsh, and fish shells.
- Add and manage new commands to the history.
- Transfer history between directories.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mcfly

> A smart command history search and management tool.
> Replaces your default shell history search (`<Ctrl r>`) with an intelligent search engine providing context and relevance to the commands.
> More information: <https://github.com/cantino/mcfly>.

- Print the mcfly integration code for the specified shell:

`mcfly init {{bash|fish|zsh}}`

- Search the history for a command, with 20 results:

`mcfly search --results {{20}} "{{search_terms}}"`

- Add a new command to the history:

`mcfly add "{{command}}"`

- Record that a directory has moved and transfer the historical records from the old path to the new one:

`mcfly move "{{path/to/old_directory}}" "{{path/to/new_directory}}"`

- Train the suggestion engine (developer tool):

`mcfly train`

- Display help for a specific subcommand:

`mcfly help {{subcommand}}`
