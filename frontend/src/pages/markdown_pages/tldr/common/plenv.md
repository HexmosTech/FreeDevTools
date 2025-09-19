---
title: "Control Perl Versions - plenv Tool | Online Free DevTools by Hexmos"
name: plenv
path: /freedevtools/tldr/common/plenv
canonical: "https://hexmos.com/freedevtools/tldr/common/plenv/"
description: "Control Perl versions easily with plenv. Manage multiple Perl installations and switch between them. Free online tool, no registration required."
category: common
keywords:
- perl version manager
- plenv perl version control
- perl environment manager
- plenv command line
- perl version switcher
- plenv global version
- plenv local version
- plenv shell version
- plenv install perl
- plenv tutorial
features:
- Switch between different Perl versions
- Set global Perl version for the system
- Define local Perl version for projects
- Configure Perl version for current shell session
- List available installed Perl versions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# plenv

> Switch between multiple versions of Perl.
> More information: <https://github.com/tokuhirom/plenv>.

- Show the currently selected Perl version and how it was selected:

`plenv version`

- List all available installed Perl versions:

`plenv versions`

- Set the global Perl version (used unless a local or shell version takes priority):

`plenv global {{version}}`

- Set the local application-specific Perl version (used in the current directory and all directories below it):

`plenv local {{version}}`

- Set the shell-specific Perl version (used for the current session only):

`plenv shell {{version}}`

- Display help:

`plenv`

- Display help for a command:

`plenv help {{command}}`
