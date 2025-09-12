---
title: "Docker Daemon - Manage Containers | Free DevTools"
name: dockerd
path: /freedevtools/tldr/linux/dockerd
canonical: "https://hexmos.com/freedevtools/tldr/linux/dockerd/"
description: "Manage Docker containers efficiently with the dockerd daemon.  Start, stop, and configure Docker using command-line options. Free online tool, no registration required."
category: linux
keywords:
  - docker daemon management
  - docker container control
  - dockerd command options
  - docker daemon configuration
  - docker process management
  - docker socket configuration
  - linux docker daemon
  - windows docker daemon
  - macOS docker daemon
  - dockerd debug options
features:
  - Start and stop Docker containers.
  - Configure Docker daemon settings.
  - Manage Docker daemon processes.
  - Specify custom socket locations (UNIX and TCP).
  - Enable debug logging for troubleshooting.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dockerd

> A persistent process to start and manage Docker containers.
> More information: <https://docs.docker.com/reference/cli/dockerd/>.

- Run Docker daemon:

`dockerd`

- Run Docker daemon and configure it to listen to specific sockets (UNIX and TCP):

`dockerd {{[-H|--host]}} unix://{{path/to/tmp.sock}} {{[-H|--host]}} tcp://{{ip}}`

- Run with specific daemon PID file:

`dockerd {{[-p|--pidfile]}} {{path/to/pid_file}}`

- Run in debug mode:

`dockerd {{[-D|--debug]}}`

- Run and set a specific log level:

`dockerd {{[-l|--log-level]}} {{debug|info|warn|error|fatal}}`
