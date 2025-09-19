---
title: "Network Interference Tests - Run ooniprobe | Online Free DevTools by Hexmos"
name: ooniprobe
path: /freedevtools/tldr/common/ooniprobe
canonical: "https://hexmos.com/freedevtools/tldr/common/ooniprobe/"
description: "Run network interference tests with ooniprobe to measure network performance and detect censorship. Free online tool, no registration required."
category: common
keywords:
- network interference tests
- censorship detection
- network performance analysis
- website blocking detection
- app blocking detection
- ooniprobe tests
- internet censorship analysis
- network diagnosis tool
- network measurement tool
- linux ooniprobe
features:
- Test website and app blocking
- Measure network speed and performance
- List available network tests
- Show detailed test information in JSON format
- Check website availability from a list
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ooniprobe

> Open Observatory of Network Interference (OONI).
> Test the blocking of websites and apps. Measure the speed and performance of your network.
> More information: <https://ooni.org/support/ooni-probe-cli/>.

- List all tests performed:

`ooniprobe list`

- Show information about a specific test:

`ooniprobe list {{7}}`

- Run all available tests:

`ooniprobe run all`

- Perform a specific test:

`ooniprobe run {{performance}}`

- Check the availability of a specific website:

`ooniprobe run websites --input {{https://ooni.org/}}`

- Check the availability of all websites listed in a file:

`ooniprobe run websites --input-file {{path/to/my-websites.txt}}`

- Display detailed information about a test in JSON format:

`ooniprobe show {{9}}`
