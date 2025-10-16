---
title: "Arthas Diagnostic Tool - Java Debugging | Online Free DevTools by Hexmos"
name: arthas
path: "/freedevtools/tldr/arthas/arthas/"
canonical: "https://hexmos.com/freedevtools/tldr/arthas/arthas/"
description: "Java debugging with Arthas Diagnostic Tool. Inspect application behavior, diagnose performance bottlenecks, and troubleshoot runtime issues with ease. Free online tool, no registration required."
category: common
keywords:
- java diagnostic tool
- arthas java debugger
- java performance analyzer
- java troubleshooting tool
- java runtime inspection
- java bytecode analysis
- arthas command line interface
- java application monitoring
- java exception analysis
- arthas java profiling
features:
- Start and connect to an Arthas server instance
- Reconnect to an existing Arthas server on localhost
- Exit the current Arthas client session gracefully
- Terminate the Arthas server and disconnect all clients
- Inspect Java application state and diagnose issues
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# arthas

> Java diagnostic tool.
> See also: `arthas-watch`, `arthas-trace`.
> More information: <https://arthas.aliyun.com/en/>.

- Start Arthas:

`java -jar {{path/to/arthas-boot.jar}}`

- Reconnect Arthas (default port used by Arthas is 3658):

`telnet localhost {{port_number}}`

- Exit the current Arthas client without affecting other clients. equals `exit`、`logout`、`q` command:

`{{exit|quit|logout|q}}`

- Terminate the Arthas server, all the Arthas clients connecting to this server will be disconnected:

`stop`
