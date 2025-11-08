---
title: "SFDK Init - Create Sailfish OS Projects | Online Free DevTools by Hexmos"
name: sfdk-init
path: "/freedevtools/tldr/sfdk/sfdk-init/"
canonical: "https://hexmos.com/freedevtools/tldr/sfdk/sfdk-init/"
description: "Create Sailfish OS projects quickly with SFDK Init. Generate project templates and customize builders for your Sailfish OS development. Free online tool, no registration required."
category: common
keywords:
- Sailfish OS project initialization
- SFDK project creation
- Sailfish SDK development
- Qt project template
- command line project initialization
- Sailfish OS builder configuration
- SFDK init command
- Sailfish application development
- command line interface
- project scaffolding
features:
- Initialize Sailfish OS projects with specified types
- Customize projects with specific builders
- Force initialization in non-empty directories
- List available Sailfish OS project types
- Generate new project templates quickly
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sfdk init

> Initializes a new project.
> More information: <https://github.com/sailfishos/sailfish-qtcreator/blob/master/share/qtcreator/sfdk/modules/15-building-init/doc/command.init.adoc>.

- Initialize a new project of the given type:

`sfdk init {{[-t|--type]}} {{type}}`

- Initialize a new project with a specified builder:

`sfdk init {{[-t|--type]}} {{type}} {{[-b|--builder]}} {{builder}}`

- Initialize a new project ignoring non-empty directory:

`sfdk init {{[-t|--type]}} {{type}} --force`

- List available project types:

`sfdk init {{[-l|--list-types]}}`
