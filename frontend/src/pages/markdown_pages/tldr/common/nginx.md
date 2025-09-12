---
title: "Nginx Web Server - Control Configuration | Free DevTools"
name: nginx
path: /freedevtools/tldr/common/nginx
canonical: "https://hexmos.com/freedevtools/tldr/common/nginx/"
description: "Control Nginx web server configuration with ease. Configure, test, and reload your server setup without downtime. Free online tool, no registration required."
category: common
keywords:
- nginx web server
- nginx configuration
- nginx server control
- web server configuration
- nginx linux
- nginx reload
- nginx test configuration
- web server linux
- nginx command line
- nginx online
features:
- Start Nginx server with default configuration.
- Load custom configuration files.
- Test Nginx configuration without affecting running server.
- Reload Nginx configuration with no downtime.
- Specify a prefix for relative paths in configuration.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nginx

> Nginx web server.
> More information: <https://nginx.org/en/>.

- Start server with the default configuration file:

`nginx`

- Start server with a custom configuration file:

`nginx -c {{configuration_file}}`

- Start server with a prefix for all relative paths in the configuration file:

`nginx -c {{configuration_file}} -p {{prefix/for/relative/paths}}`

- Test the configuration without affecting the running server:

`nginx -t`

- Reload the configuration by sending a signal with no downtime:

`nginx -s reload`
