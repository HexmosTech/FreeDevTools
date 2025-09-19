---
title: "Docksal Fin - Control Docksal Projects | Online Free DevTools by Hexmos"
name: fin
path: /freedevtools/tldr/common/fin
canonical: "https://hexmos.com/freedevtools/tldr/common/fin/"
description: "Control your Docksal projects easily with Docksal Fin. Manage containers, view logs, and streamline development workflows. Free online tool, no registration required."
category: common
keywords:
- docksal project management
- docker container control
- fin command line utility
- docksal environment manager
- container log viewer
- docksal cli
- docker development workflow
- command line interface
- docksal project start stop
- container shell access
features:
- Start and stop Docksal projects from the command line.
- Access a shell within a specific Docksal container.
- View the logs of a specific container.
- Follow container logs in real-time.
- Execute commands within the Docksal environment.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fin

> Docksal utility.
> More information: <https://docs.docksal.io/fin/fin/>.

- Start the project in the current directory:

`fin project start`

- Stop the project in the current directory:

`fin project stop`

- Open a shell into a specific container:

`fin bash {{container_name}}`

- Display logs of a specific container:

`fin logs {{container_name}}`

- Display logs of a specific container and follow the log:

`fin logs {{[-f|--follow]}} {{container_name}}`
