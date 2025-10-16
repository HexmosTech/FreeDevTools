---
title: "Generate Machine ID - Setup System with systemd | Online Free DevTools by Hexmos"
name: systemd-machine-id-setup
path: "/freedevtools/tldr/linux/systemd-machine-id-setup/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-machine-id-setup/"
description: "Generate a unique machine ID with systemd-machine-id-setup. Configure system identity and ensure proper system initialization. Free online tool, no registration required."
category: linux
keywords:
  - machine ID generator
  - systemd machine ID
  - linux machine ID
  - system ID configuration
  - systemd configuration tool
  - machine ID setup
  - etc machine id
  - unique system identifier
  - systemd-machine-id-setup
  - linux system identification
features:
  - Generate a new machine ID
  - Print the current machine ID
  - Set the image policy for machine ID generation
  - Output results in JSON format
  - Operate on a disk image to set the machine ID
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# systemd-machine-id-setup

> Initialize the machine ID stored in `/etc/machine-id` at install time with a provisioned or randomly generated ID.
> Note: Always use `sudo` to execute these commands as they require elevated privileges.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-machine-id-setup.html>.

- Print the generated or committed machine ID:

`systemd-machine-id-setup --print`

- Specify an image policy:

`systemd-machine-id-setup --image-policy {{your_policy}}`

- Display the output as JSON:

`sudo systemd-machine-id-setup --json pretty`

- Operate on a disk image instead of a directory tree:

`systemd-machine-id-setup --image /{{path/to/image}}`
