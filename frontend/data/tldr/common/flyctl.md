---
title: "Flyctl Control - Manage Fly.io Apps | Online Free DevTools by Hexmos"
name: flyctl
path: "/freedevtools/tldr/common/flyctl/"
canonical: "https://hexmos.com/freedevtools/tldr/common/flyctl/"
description: "Control Fly.io applications easily with Flyctl. Deploy, monitor, and manage your applications using command-line interface. Free online tool, no registration required."
category: common
keywords:
- flyctl control
- flyctl deploy
- flyctl launch
- flyctl status
- flyctl apps list
- flyctl dashboard command
- flyctl version check
- flyctl authentication
- flyctl docker deployment
- flyctl command-line interface
features:
- Deploy applications from a Dockerfile
- List available applications in your Fly account
- Open the Fly Web UI for application management
- View the status of running applications
- Display Flyctl version information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# flyctl

> Tool for flyctl.io.
> More information: <https://github.com/superfly/flyctl>.

- Sign into a Fly account:

`flyctl auth login`

- Launch an application from a specific Dockerfile (the default path is the current working directory):

`flyctl launch --dockerfile {{path/to/dockerfile}}`

- Open the current deployed application in the default web browser:

`flyctl open`

- Deploy the Fly applications from a specific Dockerfile:

`flyctl deploy --dockerfile {{path/to/dockerfile}}`

- Open the Fly Web UI for the current application in a web browser:

`flyctl dashboard`

- List all applications in the logged-in Fly account:

`flyctl apps list`

- View the status of a specific running application:

`flyctl status --app {{app_name}}`

- Display version information:

`flyctl version`
