---
title: "Control Valet - Manage Local Development Sites | Free DevTools"
name: valet
path: /freedevtools/tldr/osx/valet
canonical: "https://hexmos.com/freedevtools/tldr/osx/valet/"
description: "Control local development sites with Valet. Quickly serve projects and create local tunnels on macOS. Free online tool, no registration required."
category: osx
keywords:
- valet local development
- valet macOS
- valet site hosting
- valet local tunnels
- valet park sites
- valet share project
- valet laravel
- macOS development
- local site hosting
- valet ngrok
features:
- Start the Valet daemon for site hosting
- Register directories for automatic site discovery
- Serve individual sites by linking application names
- Share local projects through Ngrok tunnels
- View a list of 'parked' directories
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# valet

> A Laravel development environment that allows hosting sites via local tunnels on `http://<example>.test`.
> More information: <https://laravel.com/docs/valet>.

- Start the valet daemon:

`valet start`

- Register the current working directory as a path that Valet should search for sites:

`valet park`

- View 'parked' paths:

`valet paths`

- Serve a single site instead of an entire directory:

`valet link {{application_name}}`

- Share a project via an Ngrok tunnel:

`valet share`
