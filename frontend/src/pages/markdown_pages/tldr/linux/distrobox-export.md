---
title: "Distrobox Export - Export Apps & Binaries | Online Free DevTools by Hexmos"
name: distrobox-export
path: /freedevtools/tldr/linux/distrobox-export
canonical: "https://hexmos.com/freedevtools/tldr/linux/distrobox-export/"
description: "Export applications and binaries from Distrobox containers with ease. Manage exported services and delete exports. Free online tool, no registration required."
category: linux
keywords:
  - distrobox export command
  - linux container export
  - application export linux
  - binary export linux
  - distrobox app export
  - export linux binaries
  - container to host export
  - distrobox service export
  - manage distrobox exports
  - delete distrobox exports
features:
  - Export applications from containers to the host system.
  - Export binaries from containers to specified host paths.
  - Export services from containers to the host system.
  - Unexport or delete previously exported applications.
  - Manage exported applications and binaries via command-line interface.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# distrobox-export

> Export app/service/binary from container to host OS.
> See also: `distrobox`.
> More information: <https://distrobox.it/usage/distrobox-export>.

- Export an app from the container to the host (the desktop entry/icon will show up in your host system's application list):

`distrobox-export {{[-a|--app]}} {{package}} {{[-ef|--extra-flags]}} "--foreground"`

- Export a binary from the container to the host:

`distrobox-export {{[-b|--bin]}} {{path/to/binary}} {{[-ep|--export-path]}} {{path/to/binary_on_host}}`

- Export a binary from the container to the host (i.e.`$HOME/.local/bin`):

`distrobox-export {{[-b|--bin]}} {{path/to/binary}} {{[-ep|--export-path]}} {{path/to/export}}`

- Export a service from the container to the host (`--sudo` will run the service as root inside the container):

`distrobox-export --service {{package}} {{[-ef|--extra-flags]}} "--allow-newer-config" {{[-S|--sudo]}}`

- Unexport/delete an exported application:

`distrobox-export {{[-a|--app]}} {{package}} {{[-d|--delete]}}`
