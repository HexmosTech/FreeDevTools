---
title: "Systemd-tmpfiles - Create Temp Files | Free DevTools"
name: systemd-tmpfiles
path: /freedevtools/tldr/linux/systemd-tmpfiles
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-tmpfiles/"
description: "Create temporary files and directories with Systemd-tmpfiles configuration on Linux. Manage volatile files and directories. Free online tool, no registration required."
category: linux
keywords:
- systemd-tmpfiles create files
- systemd-tmpfiles clean directories
- systemd-tmpfiles remove files
- systemd-tmpfiles linux configuration
- systemd-tmpfiles volatile data
- systemd-tmpfiles temporary files
- systemd-tmpfiles systemd service
- systemd-tmpfiles boot process
- systemd-tmpfiles user configuration
- linux systemd-tmpfiles management
features:
- Create temporary files and directories based on configuration.
- Clean up files and directories using age parameters.
- Remove files and directories as specified in the configuration.
- Apply operations for user-specific systemd-tmpfiles configurations.
- Execute lines marked for early boot configuration.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemd-tmpfiles

> Create, delete and clean up volatile and temporary files and directories.
> This command is automatically invoked on boot by systemd services, and running it manually is usually not needed.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-tmpfiles.html>.

- Create files and directories as specified in the configuration:

`systemd-tmpfiles --create`

- Clean up files and directories with age parameters configured:

`systemd-tmpfiles --clean`

- Remove files and directories as specified in the configuration:

`systemd-tmpfiles --remove`

- Apply operations for user-specific configurations:

`systemd-tmpfiles --create --user`

- Execute lines marked for early boot:

`systemd-tmpfiles --create --boot`
