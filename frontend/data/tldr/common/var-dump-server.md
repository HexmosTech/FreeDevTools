---
title: "Var Dump Server - Collect Symfony Data | Online Free DevTools by Hexmos"
name: var-dump-server
path: "/freedevtools/tldr/common/var-dump-server/"
canonical: "https://hexmos.com/freedevtools/tldr/common/var-dump-server/"
description: "Collect data with Var Dump Server, a Symfony debugging tool for capturing var dumps. Analyze Symfony application data with ease. Free online tool, no registration required."
category: common
keywords:
- symfony var dump server
- symfony dump server
- var dump collector
- symfony debugging
- data dump analysis
- php var dump server
- symfony var dumper
- symfony development
- common dump server
- application debugging
features:
- Collect data from Symfony VarDumper component
- Output var dumps in HTML format
- Configure host and port for the server
- Analyze application data in real-time
- Debug Symfony applications using command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# var-dump-server

> Symfony dump server.
> Collects data dumped by the Symfony VarDumper component.
> More information: <https://symfony.com/doc/current/components/var_dumper.html#the-dump-server>.

- Start the server:

`var-dump-server`

- Dump the data in an HTML file:

`var-dump-server --format=html > {{path/to/file.html}}`

- Make the server listen on a specific address and port:

`var-dump-server --host {{127.0.0.1:9912}}`
