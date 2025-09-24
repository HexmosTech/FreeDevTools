---
title: "Manage Perl Versions with plenv - Command Line Tool | Online Free DevTools by Hexmos"
name: plenv
path: /freedevtools/tldr/common/plenv
canonical: "https://hexmos.com/freedevtools/tldr/common/plenv/"
description: "Manage multiple Perl versions with plenv, a powerful command-line tool.  Switch between Perl installations easily and control your development environment. Free online tool, no registration required."
category: common
keywords:
  - perl version manager
  - plenv perl
  - plenv command line
  - perl version control
  - manage perl versions
  - switch perl versions
  - plenv install
  - plenv global version
  - plenv local version
  - plenv shell version
features:
  - Switch between different Perl versions with ease.
  - Set a global Perl version for system-wide use.
  - Define project-specific Perl versions using local settings.
  - Manage Perl versions for individual shell sessions.
  - List all installed Perl versions for easy reference.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
