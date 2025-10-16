---
title: "PipeWire Daemon - Control Audio/Video Streaming | Online Free DevTools by Hexmos"
name: pipewire
path: "/freedevtools/tldr/linux/pipewire/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pipewire/"
description: "Control audio and video streaming with PipeWire daemon. Manage configurations, adjust verbosity, and troubleshoot issues using simple commands. Free online tool, no registration required."
category: linux
keywords:
  - pipewire daemon control
  - pipewire configuration management
  - pipewire audio streaming
  - pipewire video streaming
  - pipewire command line
  - linux pipewire
  - pipewire troubleshooting
  - pipewire daemon start
  - pipewire verbosity levels
  - pipewire configuration file
features:
  - Start and manage the PipeWire daemon.
  - Configure PipeWire using custom configuration files.
  - Adjust the daemon's verbosity level for debugging.
  - Access detailed help information via command-line options.
  - Troubleshoot and resolve PipeWire related issues.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pipewire

> Start the PipeWire daemon.
> More information: <https://docs.pipewire.org/page_man_pipewire_1.html>.

- Start the PipeWire daemon:

`pipewire`

- Use a different configuration file:

`pipewire --config {{path/to/file.conf}}`

- Set the verbosity level (error, warn, info, debug or trace):

`pipewire -{{v|vv|...|vvvvv}}`

- Display help:

`pipewire --help`
