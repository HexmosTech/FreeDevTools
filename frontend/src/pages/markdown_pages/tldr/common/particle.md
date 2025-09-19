---
title: "Particle Control - Interact with IoT Devices | Online Free DevTools by Hexmos"
name: particle
path: /freedevtools/tldr/common/particle
canonical: "https://hexmos.com/freedevtools/tldr/common/particle/"
description: "Control Particle IoT devices effortlessly with Particle CLI. Compile projects, flash firmware, and execute functions remotely. Free online tool, no registration required."
category: common
keywords:
- particle cli control
- iot device management
- firmware flashing tool
- particle project compiler
- remote device update
- device function execution
- particle cloud interaction
- iot command line interface
- particle device list
- particle setup tool
features:
- Compile Particle IoT projects for various device types
- Flash firmware to Particle devices remotely or via serial
- Execute functions on connected Particle devices
- List available Particle devices associated with an account
- Create new Particle projects interactively from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# particle

> Interact with Particle devices.
> More information: <https://docs.particle.io/tutorials/developer-tools/cli>.

- Log in or create an account for the Particle CLI:

`particle setup`

- Display a list of devices:

`particle list`

- Create a new Particle project interactively:

`particle project create`

- Compile a Particle project:

`particle compile {{device_type}} {{path/to/source_code.ino}}`

- Update a device to use a specific app remotely:

`particle flash {{device_name}} {{path/to/program.bin}}`

- Update a device to use the latest firmware via serial:

`particle flash --serial {{path/to/firmware.bin}}`

- Execute a function on a device:

`particle call {{device_name}} {{function_name}} {{function_arguments}}`
