---
title: "Burp Suite - Control Web App Security | Online Free DevTools by Hexmos"
name: burpsuite
path: /freedevtools/tldr/linux/burpsuite
canonical: "https://hexmos.com/freedevtools/tldr/linux/burpsuite/"
description: "Control web application security testing with Burp Suite. Analyze requests, intercept traffic, and identify vulnerabilities. Free online tool, no registration required."
category: linux
keywords:
- web application penetration testing
- burpsuite security analysis
- burp suite vulnerability scanner
- web app security testing linux
- intercept http requests burpsuite
- burpsuite proxy configuration
- burp suite extension manager
- network security analysis burpsuite
- web application security audit
- burpsuite command line interface
features:
- Launch Burp Suite with custom configurations
- Start Burp Suite without extensions enabled
- Open and manage specific Burp Suite project files
- Load custom Burp Suite configuration files
- Start Burp Suite with default settings
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# burpsuite

> A GUI based application mainly used in web application penetration testing.
> More information: <https://portswigger.net/burp/documentation/desktop/troubleshooting/launch-from-command-line>.

- Start Burp Suite:

`burpsuite`

- Start Burp Suite using the default configuration:

`burpsuite --use-defaults`

- Open a specific project file:

`burpsuite --project-file={{path/to/file}}`

- Load a specific configuration file:

`burpsuite --config-file={{path/to/file}}`

- Start without extensions:

`burpsuite --disable-extensions`
