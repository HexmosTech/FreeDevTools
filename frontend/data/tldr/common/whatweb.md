---
title: "Scan Websites - Identify Technologies with WhatWeb | Online Free DevTools by Hexmos"
name: whatweb
path: "/freedevtools/tldr/common/whatweb/"
canonical: "https://hexmos.com/freedevtools/tldr/common/whatweb/"
description: "Scan websites and identify technologies with WhatWeb. Discover web server software, programming languages, and CMS versions. Free online tool, no registration required."
category: common
keywords:
- website scanner
- web technology identifier
- web server detection
- cms version detection
- whatweb scanner
- web reconnaissance
- web fingerprinting
- website technology analysis
- linux web scan
- command line web scanner
features:
- Identify web technologies used by a website
- Scan multiple targets simultaneously
- Read target websites from a file
- Perform aggressive scans for detailed information
- List available plugins and their details
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# whatweb

> Next-generation web scanner.
> More information: <https://morningstarsecurity.com/research/whatweb>.

- Scan websites/targets for web technologies:

`whatweb {{website1 website2 ...}}`

- Read targets/websites from a file:

`whatweb {{[-i|--input-file]}} {{targets_file}}`

- Scan a website/target in verbose mode:

`whatweb {{[-v|--verbose]}} {{example.com}}`

- Run an aggressive scan on a website:

`whatweb {{[-a|--aggression]}} 3 {{example.com}}`

- Scan a network and suppress errors:

`whatweb --no-errors {{192.168.0.0/24}}`

- List plugins:

`whatweb {{[-l|--list-plugins]}}`

- List plugin details:

`whatweb {{[-I|--info-plugins]}} {{plugin_name}}`
