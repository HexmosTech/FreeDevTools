---
title: "Nikto Scanner - Scan Web Servers | Online Free DevTools by Hexmos"
name: nikto
path: /freedevtools/tldr/common/nikto
canonical: "https://hexmos.com/freedevtools/tldr/common/nikto/"
description: "Scan web servers for vulnerabilities with Nikto Scanner. Perform comprehensive security audits and identify potential weaknesses. Free online tool, no registration required."
category: common
keywords:
- nikto web server scanner
- web vulnerability scanner
- web security audit
- nikto security scan
- web server security
- vulnerability assessment tool
- penetration testing tool
- command line scanner
- web application security
- perl nikto scanner
features:
- Scan web servers for known vulnerabilities
- Identify outdated software versions
- Detect common misconfigurations
- Check for insecure files and directories
- Update plugins and databases for latest threats
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nikto

> Web server scanner which performs tests against web servers for multiple items.
> More information: <https://cirt.net/Nikto2>.

- Perform a basic Nikto scan against a target host:

`perl nikto.pl {{[-h|-host]}} {{192.168.0.1}}`

- Specify the port number when performing a basic scan:

`perl nikto.pl {{[-h|-host]}} {{192.168.0.1}} {{[-p|-port]}} {{443}}`

- Scan ports and protocols with full URL syntax:

`perl nikto.pl {{[-h|-host]}} {{https://192.168.0.1:443/}}`

- Scan multiple ports in the same scanning session:

`perl nikto.pl {{[-h|-host]}} {{192.168.0.1}} {{[-p|-port]}} {{80,88,443}}`

- Update to the latest plugins and databases:

`perl nikto.pl {{[-u|-update]}}`
