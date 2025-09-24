---
title: "Mutagen Sync - Create Real-time File Synchronization | Online Free DevTools by Hexmos"
name: mutagen
path: /freedevtools/tldr/common/mutagen
canonical: "https://hexmos.com/freedevtools/tldr/common/mutagen/"
description: "Create real-time synchronization with Mutagen, a network forwarding tool. Achieve efficient development workflows by syncing files and forwarding network ports. Free online tool, no registration required."
category: common
keywords:
- file synchronization
- real-time sync
- mutagen sync
- network forwarding
- remote development
- docker sync
- cross-platform synchronization
- file transfer
- container synchronization
- developer workflow
features:
- Synchronize files between local and remote directories
- Synchronize files between local and Docker containers
- Terminate running synchronization sessions
- Start and stop Mutagen projects
- List running sessions for a Mutagen project
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mutagen

> Real-time file synchronization and network forwarding tool.
> More information: <https://mutagen.io/documentation/introduction/>.

- Start a synchronization session between a local directory and a remote host:

`mutagen sync create --name={{session_name}} /{{path/to/local/directory}}/ {{user}}@{{host}}:/{{path/to/remote/directory}}/`

- Start a synchronization session between a local directory and a Docker container:

`mutagen sync create --name={{session_name}} /{{path/to/local/directory}}/ docker://{{user}}@{{container_name}}/{{path/to/remote/directory}}/`

- Stop a running session:

`mutagen sync terminate {{session_name}}`

- Start a project:

`mutagen project start`

- Stop a project:

`mutagen project terminate`

- List running sessions for the current project:

`mutagen project list`
