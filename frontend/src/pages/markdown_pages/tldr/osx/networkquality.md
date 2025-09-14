---
title: "Network Quality - Measure Internet Speed | Free DevTools"
name: networkquality
path: /freedevtools/tldr/osx/networkquality
canonical: "https://hexmos.com/freedevtools/tldr/osx/networkquality/"
description: "Measure network quality with networkquality. Analyze upload and download speeds, test network interfaces. Free online tool, no registration required."
category: osx
keywords:
- network speed test
- internet speed test macos
- network diagnostic tool
- macos network troubleshooting
- bandwidth measurement osx
- network performance analysis
- osx network quality check
- command line network test
- network quality metrics
- wifi speed test mac
features:
- Measure network upload and download speeds
- Test network quality for default interface
- Specify a particular network interface for testing
- Conduct sequential upload and download speed tests
- Provide verbose output for detailed analysis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# networkQuality

> Measure the network quality by connecting to the internet.
> More information: <https://support.apple.com/101942>.

- Test the network quality for the default interface:

`networkQuality`

- Test the upload and download speeds sequentially instead of in parallel:

`networkQuality -s`

- Test a specified network interface:

`networkQuality -I {{en0}}`

- Test the network quality with verbose output:

`networkQuality -v`
