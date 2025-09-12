---
title: "Create Debian Sources - Configure APT with Netselect-apt | Free DevTools"
name: netselect-apt
path: /freedevtools/tldr/linux/netselect-apt
canonical: "https://hexmos.com/freedevtools/tldr/linux/netselect-apt/"
description: "Create Debian sources.list with Netselect-apt. Find the fastest Debian mirror with minimal latency. Free online tool, no registration required."
category: linux
keywords:
- debian sources.list generator
- apt configuration tool
- linux mirror selector
- debian mirror list
- netselect-apt debian
- apt source configuration
- debian package manager
- mirror latency tester
- debian repository list
- fast apt mirrors
features:
- Create sources.list with the lowest latency server
- Specify Debian branch for mirror selection
- Include non-free sections in the generated list
- Look up mirror lists by country
- Configure apt sources automatically
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# netselect-apt

> Create a `sources.list` file for a Debian mirror with the lowest latency.
> More information: <https://manned.org/netselect-apt>.

- Create `sources.list` using the lowest latency server:

`sudo netselect-apt`

- Specify Debian branch, stable is used by default:

`sudo netselect-apt {{testing}}`

- Include non-free section:

`sudo netselect-apt {{[-n|--non-free]}}`

- Specify a country for the mirror list lookup:

`sudo netselect-apt {{[-c|--country]}} {{India}}`
