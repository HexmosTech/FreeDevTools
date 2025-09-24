---
title: "PIO Project - Manage PlatformIO Projects | Online Free DevTools by Hexmos"
name: pio-project
path: /freedevtools/tldr/pio/pio-project
canonical: "https://hexmos.com/freedevtools/tldr/pio/pio-project/"
description: "Manage PlatformIO projects with PIO Project. Initialize projects, configure boards, and customize project settings for seamless embedded development. Free online tool, no registration required."
category: common
keywords:
- platformio project management
- pio project initialization
- pio project configuration
- embedded project creation
- arduino project setup
- esp32 project management
- platformio cli tool
- pio project commands
- iot project development
- embedded systems project
features:
- Initialize new PlatformIO projects
- Configure project settings via command line
- Specify board IDs for project creation
- Print project configurations
- Manage project options dynamically
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pio project

> Manage PlatformIO projects.
> More information: <https://docs.platformio.org/en/latest/core/userguide/project/>.

- Initialize a new PlatformIO project:

`pio project init`

- Initialize a new PlatformIO project in a specific directory:

`pio project init {{[-d|--project-dir]}} {{path/to/project_directory}}`

- Initialize a new PlatformIO project, specifying a board ID:

`pio project init {{[-b|--board]}} {{ATmega328P|uno|...}}`

- Initialize a new PlatformIO based project, specifying one or more project options:

`pio project init {{[-O|--project-option]}} "{{option}}={{value}}" {{[-O|--project-option]}} "{{option}}={{value}}"`

- Print the configuration of a project:

`pio project config`
