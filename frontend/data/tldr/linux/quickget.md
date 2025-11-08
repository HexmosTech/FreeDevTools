---
title: "Quickget - Create Quickemu VMs | Online Free DevTools by Hexmos"
name: quickget
path: "/freedevtools/tldr/linux/quickget/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/quickget/"
description: "Create Quickemu virtual machines easily with quickget. Download and prepare OS images, configure VMs, and manage ISO files. Free online tool, no registration required."
category: linux
keywords:
  - quickemu vm creator
  - quickemu image downloader
  - quickemu configuration generator
  - virtual machine builder quickget
  - os image download quickget
  - quickemu iso manager
  - quickget vm setup
  - quickemu build tool
  - virtual machine configuration
  - linux vm creation
features:
  - Downloads and prepares OS images for Quickemu VMs.
  - Creates Quickemu virtual machine configurations.
  - Manages ISO files for various operating systems.
  - Supports multiple operating systems and versions.
  - Allows for selective download of images or configurations.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# quickget

> Download and prepare materials for building a Quickemu virtual machine.
> Note: The parameter "edition" is always optional.
> See also: `quickemu`.
> More information: <https://github.com/quickemu-project/quickemu>.

- Display the list of all supported guest operating systems, versions and variants:

`quickget list`

- Download and create the virtual machine configuration for building a Quickemu virtual machine for an OS:

`quickget {{os}} {{release}} {{edition}}`

- Download configuration for a Windows 11 VM with VirtIO drivers for Windows:

`quickget windows 11`

- Download a macOS recovery image and creates a virtual machine configuration:

`quickget macos {{mojave|catalina|big-sur|monterey|ventura|sonoma}}`

- Show an ISO URL for an operating system:

`quickget --url fedora {{release}} {{edition}}`

- Test if an ISO file is available for an operating system:

`quickget --check nixos {{release}} {{edition}}`

- Download an image without building any VM configuration:

`quickget --download {{os}} {{release}} {{edition}}`

- Create a VM configuration for an OS image:

`quickget --create-config {{os}} {{path/to/iso}}`
