---
title: "Netcat (nc) - Control Network Connections | Online Free DevTools by Hexmos"
name: nc
path: "/freedevtools/tldr/common/nc/"
canonical: "https://hexmos.com/freedevtools/tldr/common/nc/"
description: "Control network connections easily with Netcat (nc). Send, receive, and scan data across networks. A versatile command-line tool for network debugging. Free online tool, no registration required."
category: common
keywords:
- network connection control
- nc command line tool
- tcp port scanner
- network stream redirection
- socket listener tool
- netcat file transfer
- network debugging tool
- linux network utility
- macos network utility
- command line netcat
features:
- Redirect input/output over network streams
- Listen on TCP ports for incoming connections
- Scan TCP ports for open services
- Execute shell commands through network connections
- Forward data between local and remote ports
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nc

> Redirect I/O into a network stream through this versatile tool.
> More information: <https://manned.org/nc>.

- Start a listener on the specified TCP port and send a file into it:

`nc -l -p {{port}} < {{filename}}`

- Connect to a target listener on the specified port and receive a file from it:

`nc {{host}} {{port}} > {{received_filename}}`

- Scan the open TCP ports of a specified host:

`nc -v -z -w {{timeout_in_seconds}} {{host}} {{start_port}}-{{end_port}}`

- Start a listener on the specified TCP port and provide your local shell access to the connected party (this is dangerous and can be abused):

`nc -l -p {{port}} -e {{shell_executable}}`

- Connect to a target listener and provide your local shell access to the remote party (this is dangerous and can be abused):

`nc {{host}} {{port}} -e {{shell_executable}}`

- Act as a proxy and forward data from a local TCP port to the given remote host:

`nc -l -p {{local_port}} | nc {{host}} {{remote_port}}`

- Send an HTTP GET request:

`echo -e "GET / HTTP/1.1\nHost: {{host}}\n\n" | nc {{host}} 80`
