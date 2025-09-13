---
title: "Toolbox Init - Initialize Containers on Linux | Free DevTools"
name: toolbox-init-container
path: /freedevtools/tldr/linux/toolbox-init-container
canonical: "https://hexmos.com/freedevtools/tldr/linux/toolbox-init-container/"
description: "Initialize Linux containers quickly with Toolbox Init. Streamline container setup and enhance development environments with ease. Free online tool, no registration required."
category: linux
keywords:
- linux container initialization
- toolbox container setup
- container environment configuration
- gid assignment linux
- uid assignment linux
- linux home directory setup
- container media link creation
- container mnt link creation
- monitor host process linux
- linux shell configuration
features:
- Initialize a running toolbox container.
- Set the group ID (GID) for the container.
- Configure the home directory for the container.
- Create links for media and mount points.
- Monitor the host system from within the container.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# toolbox init-container

> Initialize a running `toolbox` container.
> This command should not be executed by the user, and cannot be run on the host.
> More information: <https://manned.org/toolbox-init-container.1>.

- Initialize a running toolbox:

`toolbox init-container --gid {{gid}} --home {{home}} --home-link --media-link --mnt-link --monitor-host --shell {{shell}} --uid {{uid}} --user {{user}}`
