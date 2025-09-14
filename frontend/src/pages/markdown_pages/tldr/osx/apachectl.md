---
title: "Apachectl - Control Apache Server on macOS | Free DevTools"
name: apachectl
path: /freedevtools/tldr/osx/apachectl
canonical: "https://hexmos.com/freedevtools/tldr/osx/apachectl/"
description: "Control Apache server easily with Apachectl on macOS. Manage Apache's start, stop, and restart functionalities. Free online tool, no registration required."
category: osx
keywords:
- macOS Apache control
- Apache server management
- Apachectl command macOS
- Start Apache macOS
- Stop Apache macOS
- Restart Apache macOS
- HTTP server control macOS
- Apache launchd management
- Apachectl command line
- macOS server administration
features:
- Start the Apache HTTP server on macOS
- Stop the Apache HTTP server on macOS
- Restart the Apache HTTP server on macOS
- Manage the org.apache.httpd launchd job
- Control Apache server from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# apachectl

> Apache HTTP Server control interface for macOS.
> More information: <https://keith.github.io/xcode-man-pages/apachectl.8.html>.

- Start the `org.apache.httpd` launchd job:

`apachectl start`

- Stop the launchd job:

`apachectl stop`

- Stop, then start launchd job:

`apachectl restart`
