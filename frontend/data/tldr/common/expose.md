---
title: "Share Websites - Expose Local Sites with Tunnel | Online Free DevTools by Hexmos"
name: expose
path: "/freedevtools/tldr/common/expose/"
canonical: "https://hexmos.com/freedevtools/tldr/common/expose/"
description: "Share websites instantly with Expose, an open-source tunnel application. Expose your local development servers and preview your work online. Free online tool, no registration required."
category: common
keywords:
- website sharing
- local tunnel
- expose tunnel
- expose local site
- localhost sharing
- development server share
- expose subdomain
- expose share URL
- open source tunnel
- expose server
features:
- Share local directories over the internet
- Assign custom subdomains for shared directories
- Share specific local URLs for immediate access
- Run a local Expose server instance
- Authenticate using a personal API token
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# expose

> An open source tunnel application for sharing websites.
> More information: <https://beyondco.de/docs/expose>.

- Register your authentication token:

`expose token {{token}}`

- Share the current working directory:

`expose`

- Share the current working directory with a specific subdomain:

`expose --subdomain={{subdomain}}`

- Share a local URL:

`expose share {{url}}`

- Run the Expose server:

`expose serve`

- Run the Expose server with a specific hostname:

`expose serve {{hostname}}`
