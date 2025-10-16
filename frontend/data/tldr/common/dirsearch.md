---
title: "Dirsearch Scanner - Discover Web Paths | Online Free DevTools by Hexmos"
name: dirsearch
path: "/freedevtools/tldr/common/dirsearch/"
canonical: "https://hexmos.com/freedevtools/tldr/common/dirsearch/"
description: "Discover hidden web paths with Dirsearch Scanner.  Uncover vulnerabilities and sensitive files with this powerful web enumeration tool. Free online tool, no registration required."
category: common
keywords:
- web path scanner
- website directory scanner
- directory brute force
- web application security
- web server scanner
- directory enumeration
- forced browsing tool
- web vulnerability scanner
- directory listing scanner
- web file finder
features:
- Scan web servers for common paths and extensions.
- Scan multiple web servers from a list of URLs.
- Scan for user-defined paths using custom wordlists.
- Authenticate scans using HTTP cookies.
- Utilize the HEAD HTTP method for faster scanning.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dirsearch

> Web path scanner.
> More information: <https://github.com/maurosoria/dirsearch>.

- Scan a web server for common paths with common extensions:

`dirsearch {{[-u|--url]}} {{url}} --extensions-list`

- Scan a list of web servers for common paths with given file extensions:

`dirsearch {{[-l|--url-list]}} {{path/to/url-list.txt}} {{[-e|--extensions]}} {{php,jsp,aspx,...}}`

- Scan a web server for user-defined paths with common extensions:

`dirsearch {{[-u|--url]}} {{url}} --extensions-list {{[-w|--wordlists]}} {{path/to/url-paths1.txt,path/to/url-paths2.txt,...}}`

- Scan a web server using a cookie:

`dirsearch {{[-u|--url]}} {{url}} {{[-e|--extensions]}} {{php}} --cookie {{cookie}}`

- Scan a web server using the `HEAD` HTTP method:

`dirsearch {{[-u|--url]}} {{url}} {{[-e|--extensions]}} {{php}} {{[-m|--http-method]}} {{HEAD}}`

- Scan a web server, saving the results to a `.json` file:

`dirsearch {{[-u|--url]}} {{url}} {{[-e|--extensions]}} {{php}} --json-report {{path/to/report.json}}`
