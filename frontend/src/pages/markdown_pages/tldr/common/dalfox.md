---
title: "XSS Scan Automation - Find Vulnerabilities with Dalfox | Online Free DevTools by Hexmos"
name: dalfox
path: /freedevtools/tldr/common/dalfox
canonical: "https://hexmos.com/freedevtools/tldr/common/dalfox/"
description: "Scan for XSS vulnerabilities with Dalfox, a powerful automation tool. Identify and address security risks with efficient URL and file scanning. Free online tool, no registration required."
category: common
keywords:
- XSS vulnerability scanner
- web security scan
- Dalfox XSS tool
- URL vulnerability analysis
- penetration testing
- web application scanner
- command line XSS scan
- XSS automation
- security testing
- open source XSS scanner
features:
- Scan single URLs for XSS vulnerabilities
- Authenticate scans with custom headers
- Scan multiple URLs from a file
- Automate XSS detection
- Perform command-line vulnerability assessments
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dalfox

> A powerful open-source XSS scanner focused on automation.
> More information: <https://dalfox.hahwul.com/docs/usage>.

- Scan a single URL for XSS vulnerabilities:

`dalfox url {{http://example.com}}`

- Scan a URL using a header for authentication:

`dalfox url {{http://example.com}} {{[-H|--header]}} {{'X-My-Header: 123'}}`

- Scan a list of URLs from a file:

`dalfox file {{path/to/file}}`
