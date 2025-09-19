---
title: "Control minidlna - Stream Media with DLNA | Online Free DevTools by Hexmos"
name: minidlna
path: /freedevtools/tldr/common/minidlna
canonical: "https://hexmos.com/freedevtools/tldr/common/minidlna/"
description: "Control media streaming with minidlna. Configure and manage your DLNA server to stream media to smart TVs. Free online tool, no registration required."
category: common
keywords:
- DLNA media server
- UPnP AV server
- media streaming linux
- minidlna configuration
- linux media server
- smart TV streaming
- DLNA server configuration
- media server control
- network media streaming
- linux streaming server
features:
- Start the minidlna daemon with default settings
- Specify a custom configuration file for minidlna
- Force a database rescan on minidlna startup
- Run minidlna in foreground for debugging
- Specify a custom media directory for minidlna
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# minidlna

> ReadyMedia (formerly MiniDLNA) is a lightweight media server compatible with DLNA/UPnP-AV clients.
> Used to stream media to smart TVs, consoles, and other DLNA-compatible devices.
> Configuration is typically done via the `minidlna.conf` file.
> More information: <https://manned.org/minidlna>.

- Start the MiniDLNA daemon using the default configuration at `/etc/minidlna.conf`:

`minidlna`

- Start MiniDLNA with a specific configuration file:

`minidlna -f {{path/to/minidlna.conf}}`

- Force a database rescan on startup:

`minidlna -R`

- Run MiniDLNA in the foreground (useful for debugging):

`minidlna -d`

- Enable verbose debug output:

`minidlna -d -v`

- Specify a custom media directory (overrides config):

`minidlna -m {{path/to/media}}`

- Specify a custom database directory:

`minidlna -P {{path/to/pidfile}}`

- Specify a custom log file path:

`minidlna -l {{path/to/logfil.log}}`
