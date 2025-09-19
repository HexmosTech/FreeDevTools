---
title: "Scan Directories - Analyze Web Servers with dirb | Online Free DevTools by Hexmos"
name: dirb
path: /freedevtools/tldr/linux/dirb
canonical: "https://hexmos.com/freedevtools/tldr/linux/dirb/"
description: "Analyze directories with dirb, a web content scanner for identifying hidden files and directories. Discover vulnerabilities and improve security. Free online tool, no registration required."
category: linux
keywords:
- web directory scanner
- directory brute force
- web server analysis
- dirb linux
- web content discovery
- web application security
- hidden directory finder
- website vulnerability scanning
- web server directory listing
- linux command line tool
features:
- Scan web servers for hidden files and directories
- Utilize custom wordlists for targeted scanning
- Perform non-recursive scans of web servers
- Customize HTTP requests with user-agent and cookies
- Identify potential security vulnerabilities on web applications
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dirb

> Scan HTTP-based webservers for directories and files.
> More information: <https://manned.org/dirb>.

- Scan a webserver using the default wordlist:

`dirb {{https://example.org}}`

- Scan a webserver using a custom wordlist:

`dirb {{https://example.org}} {{path/to/wordlist.txt}}`

- Scan a webserver non-recursively:

`dirb {{https://example.org}} -r`

- Scan a webserver using a specified user-agent and cookie for HTTP-requests:

`dirb {{https://example.org}} -a {{user_agent_string}} -c {{cookie_string}}`
