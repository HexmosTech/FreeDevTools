---
title: "Apachectl - Control Apache Servers | Free DevTools"
name: apachectl
path: /freedevtools/tldr/unknown/apachectl
canonical: "https://hexmos.com/freedevtools/tldr/unknown/apachectl/"
description: "Control Apache HTTP servers easily with Apachectl. Manage server processes, test configurations, and reload settings. Free online tool, no registration required."
category: unknown
keywords:
- apache server control
- apachectl command
- linux apache manager
- apache server configuration
- apachectl restart command
- apachectl status
- apachectl configtest
- apachectl graceful reload
- apachectl help
- apache server manager
features:
- Start the Apache HTTP server
- Restart the Apache HTTP server
- Stop the Apache HTTP server
- Test Apache configuration validity
- Reload Apache configuration without dropping connections
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# apachectl

> Control an Apache HTTP server.
> More information: <https://manned.org/apachectl>.

- Start the server:

`sudo apachectl start`

- Restart the server:

`sudo apachectl restart`

- Stop the server:

`sudo apachectl stop`

- Test configuration file validity:

`apachectl configtest`

- Check server status (requires the lynx browser):

`apachectl status`

- Reload configuration without dropping connections:

`sudo apachectl graceful`

- Print full Apache configuration (not always supported):

`apachectl -S`

- Display help:

`apachectl -h`
