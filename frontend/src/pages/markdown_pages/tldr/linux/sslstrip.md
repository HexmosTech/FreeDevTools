---
title: "SSLStrip - Perform SSL Stripping Attacks | Online Free DevTools by Hexmos"
name: sslstrip
path: /freedevtools/tldr/linux/sslstrip
canonical: "https://hexmos.com/freedevtools/tldr/linux/sslstrip/"
description: "Perform SSL stripping attacks with SSLStrip for network security testing.  Intercept and manipulate HTTPS traffic. Free online tool, no registration required."
category: linux
keywords:
  - ssl stripping attack
  - sslstrip command
  - network security testing
  - https interception
  - arp spoofing attack
  - ssl traffic logging
  - command line tool
  - kali linux tool
  - security audit tool
  - penetration testing tool
features:
  - Log only HTTPS POST traffic.
  - Log all SSL traffic to and from the server.
  - Log all SSL and HTTP traffic.
  - Specify custom port for listening.
  - Specify file path for log storage.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sslstrip

> Perform Moxie Marlinspike's Secure Sockets Layer (SSL) stripping attacks.
> Perform an ARP spoofing attack in conjunction.
> More information: <https://www.kali.org/tools/sslstrip/>.

- Log only HTTPS POST traffic on port 10000 by default:

`sslstrip`

- Log only HTTPS POST traffic on port 8080:

`sslstrip --listen={{8080}}`

- Log all SSL traffic to and from the server on port 8080:

`sslstrip --ssl --listen={{8080}}`

- Log all SSL and HTTP traffic to and from the server on port 8080:

`sslstrip --listen={{8080}} --all`

- Specify the file path to store the logs:

`sslstrip --listen={{8080}} --write={{path/to/file}}`

- Display help:

`sslstrip --help`
