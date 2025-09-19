---
title: "Larasail - Manage Laravel Servers | Online Free DevTools by Hexmos"
name: larasail
path: /freedevtools/tldr/linux/larasail
canonical: "https://hexmos.com/freedevtools/tldr/linux/larasail/"
description: "Manage Laravel servers efficiently with Larasail. Deploy, configure, and host Laravel applications on Digital Ocean. Free online tool, no registration required."
category: linux
keywords:
- laravel server management
- digital ocean laravel deployment
- larasail server configuration
- laravel hosting linux
- larasail command line tool
- laravel digital ocean setup
- php server setup
- linux laravel application
- laravel site deployment
- larasail password retrieval
features:
- Deploy Laravel applications to Digital Ocean servers
- Configure servers with necessary Laravel dependencies
- Host multiple Laravel sites on a single server
- Retrieve Larasail user and MySQL passwords
- Set up servers with specific PHP versions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# larasail

> Manage Laravel on Digital Ocean servers.
> More information: <https://github.com/thedevdojo/larasail>.

- Set up the server with Laravel dependencies using the default PHP version:

`larasail setup`

- Set up the server with Laravel dependencies using a specific PHP version:

`larasail setup {{php71}}`

- Add a new Laravel site:

`larasail host {{domain}} {{path/to/site_directory}}`

- Retrieve the Larasail user password:

`larasail pass`

- Retrieve the Larasail MySQL password:

`larasail mysqlpass`
