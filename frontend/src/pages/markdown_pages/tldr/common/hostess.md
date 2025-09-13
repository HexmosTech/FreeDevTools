---
title: "Host File Manager - Control Host Names with Hostess | Free DevTools"
name: hostess
path: /freedevtools/tldr/common/hostess
canonical: "https://hexmos.com/freedevtools/tldr/common/hostess/"
description: "Control host names easily with Hostess. Manage your /etc/hosts file to map domains to IP addresses. Free online tool, no registration required."
category: common
keywords:
- host file manager
- etc/hosts editor
- domain name manager
- ip address mapper
- linux host file
- macos host file
- hostname resolver
- hostess command
- local domain manager
- host file configuration
features:
- Add custom domain to IP address mappings
- Remove specific domains from host file
- Disable domains without removing them
- List all domains, IPs, and status information
- Manage /etc/hosts file directly from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hostess

> Manage the `/etc/hosts` file.
> More information: <https://github.com/cbednarski/hostess>.

- List domains, target IP addresses and on/off status:

`hostess list`

- Add a domain pointing to your machine to your hosts file:

`hostess add {{local.example.com}} {{127.0.0.1}}`

- Remove a domain from your hosts file:

`hostess del {{local.example.com}}`

- Disable a domain (but don't remove it):

`hostess off {{local.example.com}}`
