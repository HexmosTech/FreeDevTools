---
title: "LXC Profile - Manage Container Profiles | Free DevTools"
name: lxc-profile
path: /freedevtools/tldr/unknown/lxc-profile
canonical: "https://hexmos.com/freedevtools/tldr/unknown/lxc-profile/"
description: "Manage LXD container profiles with LXC Profile. Configure, edit, and assign profiles to control container behavior. Free online tool, no registration required."
category: unknown
keywords:
- lxc profile management
- linux container profiles
- lxd profile editor
- container configuration
- lxc profile assign
- lxc profile list
- lxc profile show
- lxc container profile
- lxd profile configuration
- command line container management
features:
- List available LXD container profiles
- Show detailed configuration of a specific profile
- Edit profiles directly in the default editor
- Import profile configuration from a YAML file
- Assign profiles to existing LXD containers
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lxc profile

> Manage profiles for LXD containers.
> More information: <https://documentation.ubuntu.com/lxd/latest/reference/manpages/lxc/profile/>.

- List all available profiles:

`lxc profile list`

- Show the configuration of a specific profile:

`lxc profile show {{profile_name}}`

- Edit a specific profile in the default editor:

`lxc profile edit {{profile_name}}`

- Edit a specific profile importing the configuration values from a file:

`lxc profile edit {{profile_name}} < {{config.yaml}}`

- Launch a new container with specific profiles:

`lxc launch {{container_image}} {{container_name}} {{[-p|--profile]}} {{profile1}} {{[-p|--profile]}} {{profile2}}`

- Change the profiles of a running container:

`lxc profile assign {{container_name}} {{profile1,profile2}}`
