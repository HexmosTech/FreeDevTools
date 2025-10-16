---
title: "Perlbrew - Manage Perl Versions | Online Free DevTools by Hexmos"
name: perlbrew
path: "/freedevtools/tldr/common/perlbrew/"
canonical: "https://hexmos.com/freedevtools/tldr/common/perlbrew/"
description: "Manage Perl versions effectively with Perlbrew. Install, switch, and list Perl installations. Lightweight and easy to use. Free online tool, no registration required."
category: common
keywords:
- perl version manager
- perl installations manager
- perlbrew install
- perlbrew uninstall
- perlbrew switch
- perl cpan modules
- perlbrew linux
- perlbrew macos
- perl environments
- perlbrew list
features:
- Initialize a Perlbrew environment
- List available Perl versions for installation
- Switch between different Perl installations
- List installed CPAN modules for the current installation
- Clone CPAN modules between installations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# perlbrew

> Manage Perl installations in the home directory.
> See also: `asdf`.
> More information: <https://github.com/gugod/App-perlbrew>.

- Initialize a `perlbrew` environment:

`perlbrew init`

- List available Perl versions:

`perlbrew available`

- Install/uninstall a Perl version:

`perlbrew {{install|uninstall}} {{version}}`

- List perl installations:

`perlbrew list`

- Switch to an installation and set it as default:

`perlbrew switch perl-{{version}}`

- Use the system Perl again:

`perlbrew off`

- List installed CPAN modules for the installation in use:

`perlbrew list-modules`

- Clone CPAN modules from one installation to another:

`perlbrew clone-modules {{source_installation}} {{destination_installation}}`
