---
title: "Show DNS Domain Name - Resolve Hostname | Online Free DevTools by Hexmos"
name: dnsdomainname
path: "/freedevtools/tldr/linux/dnsdomainname/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/dnsdomainname/"
description: "Show DNS domain name by resolving hostname with dnsdomainname. Obtain the fully qualified domain name of your system. Free online tool, no registration required."
category: linux
keywords:
  - dns domain name
  - hostname resolution
  - fqdn
  - system domain name
  - linux dns
  - macos dns
  - show domain name
  - canonical name
  - domain name lookup
  - getaddrinfo
features:
  - Resolve hostname to its DNS domain name
  - Display the system's fully qualified domain name (FQDN)
  - Utilize gethostname and getaddrinfo functions
  - Obtain the canonical name of the system
  - Retrieve the network domain name
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dnsdomainname

> Show the system's DNS domain name.
> Note: The tool uses `gethostname` to get the hostname of the system and then `getaddrinfo` to resolve it into a canonical name.
> More information: <https://www.gnu.org/software/inetutils/manual/inetutils.html#dnsdomainname-invocation>.

- Show the system's DNS domain name:

`dnsdomainname`
