---
title: "SSL Scan - Check SSL/TLS Protocols | Online Free DevTools by Hexmos"
name: sslscan
path: "/freedevtools/tldr/common/sslscan/"
canonical: "https://hexmos.com/freedevtools/tldr/common/sslscan/"
description: "Check SSL/TLS protocols with SSL Scan. Analyze server configurations and identify vulnerabilities with ease. Free online tool, no registration required."
category: common
keywords:
- ssl scan
- tls scan
- ssl tls protocol scan
- server ssl scan
- common ssl scan
- linux ssl scan
- macos ssl scan
- check ssl ciphers
- openssl scanner
- network security scan
features:
- Test SSL/TLS protocols on a server
- Scan a specified port for SSL/TLS vulnerabilities
- Display certificate information of a server
- Analyze server configurations for supported ciphers
- Identify potential security weaknesses in SSL/TLS setups
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sslscan

> Check SSL/TLS protocols and ciphers supported by a server.
> More information: <https://github.com/rbsec/sslscan>.

- Test a server on port 443:

`sslscan {{example.com}}`

- Test a specified port:

`sslscan {{example.com}}:{{465}}`

- Show certificate information:

`testssl --show-certificate {{example.com}}`
