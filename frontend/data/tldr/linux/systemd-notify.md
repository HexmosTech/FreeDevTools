---
title: "Systemd-notify - Control Service Status | Online Free DevTools by Hexmos"
name: systemd-notify
path: "/freedevtools/tldr/linux/systemd-notify/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-notify/"
description: "Control systemd service status with systemd-notify. Notify service manager, signal readiness and provide custom messages. Free online tool, no registration required."
category: linux
keywords:
  - systemd notify
  - service status notification
  - systemd service manager
  - linux systemd
  - systemd-notify command
  - service startup completion
  - daemon status changes
  - systemctl status
  - systemd readiness signal
  - systemd custom status
features:
  - Notify systemd about service startup completion
  - Signal service readiness to systemd
  - Provide custom status messages to systemd
  - Update service status information
  - Control systemd service notifications
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# systemd-notify

> Notify the service manager about start-up completion and other daemon status changes.
> This command is useless outside systemd service scripts.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-notify.html>.

- Notify systemd that the service has completed its initialization and is fully started. It should be invoked when the service is ready to accept incoming requests:

`systemd-notify --booted`

- Signal to systemd that the service is ready to handle incoming connections or perform its tasks:

`systemd-notify --ready`

- Provide a custom status message to systemd (this information is shown by `systemctl status`):

`systemd-notify --status "{{Add custom status message here...}}"`
