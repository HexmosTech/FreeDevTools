---
title: "Run PlatformIO - Build Project Targets | Free DevTools"
name: pio-run
path: /freedevtools/tldr/common/pio-run
canonical: "https://hexmos.com/freedevtools/tldr/common/pio-run/"
description: "Build project targets instantly with PlatformIO Run. Compile, link, and upload firmware to various embedded platforms. Free online tool, no registration required."
category: common
keywords:
- PlatformIO build tool
- PlatformIO project targets
- PlatformIO compile firmware
- PlatformIO upload firmware
- embedded system build
- IoT device programming
- PlatformIO environment configuration
- platformio.ini configuration
- PlatformIO target selection
- PlatformIO automated testing
features:
- Compile and link code for multiple embedded platforms
- Specify target environments for builds
- List available project targets for inspection
- Execute specific targets within a project
- Utilize custom configuration files for project settings
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pio run

> Run PlatformIO project targets.
> More information: <https://docs.platformio.org/en/latest/core/userguide/cmd_run.html>.

- List all available project targets:

`pio run --list-targets`

- List all available project targets of a specific environment:

`pio run --list-targets {{[-e|--environment]}} {{environment}}`

- Run all targets:

`pio run`

- Run all targets of specified environments:

`pio run {{[-e|--environment]}} {{environment1}} {{[-e|--environment]}} {{environment2}}`

- Run specified targets:

`pio run {{[-t|--target]}} {{target1}} {{[-t|--target]}} {{target2}}`

- Run the targets of a specified configuration file:

`pio run {{[-c|--project-conf]}} {{path/to/platformio.ini}}`
