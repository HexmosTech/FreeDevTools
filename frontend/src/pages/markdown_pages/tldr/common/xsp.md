---
title: "Control ASP.NET Server - Launch Web Apps with xsp | Online Free DevTools by Hexmos"
name: xsp
path: /freedevtools/tldr/common/xsp
canonical: "https://hexmos.com/freedevtools/tldr/common/xsp/"
description: "Launch ASP.NET web applications easily with xsp. Control your Mono web server configuration and specify address and port. Free online tool, no registration required."
category: common
keywords:
- asp.net server launcher
- mono web server control
- xsp command line
- asp.net application deployment
- web server configuration linux
- mono server address configuration
- asp.net server port control
- linux asp.net development
- mono application deployment
- web server address specification
features:
- Launch ASP.NET web applications using Mono's xsp server.
- Specify the IP address to listen on.
- Define the port number for the server to use.
- Run the server on all available interfaces.
- Control server configurations from the command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xsp

> Mono ASP.NET Web Server.
> More information: <https://www.mono-project.com/docs/web/aspnet/>.

- Listen on all interfaces (`0.0.0.0`) and port `8080`:

`xsp`

- Listen on a specific IP address and port:

`xsp --address {{127.0.0.1}} --port {{8000}}`
