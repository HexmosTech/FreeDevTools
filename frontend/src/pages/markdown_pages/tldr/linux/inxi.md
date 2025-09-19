---
title: "Generate System Info - inxi Command | Online Free DevTools by Hexmos"
name: inxi
path: /freedevtools/tldr/linux/inxi
canonical: "https://hexmos.com/freedevtools/tldr/linux/inxi/"
description: "Generate system information with inxi command. Quickly debug hardware and software issues on Linux. Free online tool, no registration required."
category: linux
keywords:
- linux system information
- system hardware information
- system debugging tool
- inxi command line tool
- inxi system summary
- linux hardware details
- linux system resources
- system performance analysis
- system diagnostic tool
- linux system information tool
features:
- Display a comprehensive summary of system hardware components
- Show detailed CPU, memory, and disk information
- Filter sensitive user information for privacy
- Print audio and graphics card details
- List distribution repository information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# inxi

> Print a summary of system information and resources for debugging purposes.
> More information: <https://manned.org/inxi>.

- Print a summary of CPU, memory, hard drive and kernel information:

`inxi`

- Print a full description of CPU, memory, disk, network, and process information and filter sensitive information:

`inxi {{[-ez|--expanded --filter]}}`

- Print a summary of CPU information:

`inxi {{[-C|--cpu]}}`

- Print a summary of graphics information:

`inxi {{[-G|--graphics]}}`

- Print a summary of system RAM:

`inxi {{[-m|--memory]}}`

- Print a summary of system audio:

`inxi {{[-A|--audio]}}`

- Print available sensor data:

`inxi {{[-s|--sensors]}}`

- Print information about the distribution's repositories:

`inxi {{[-r|--repos]}}`
