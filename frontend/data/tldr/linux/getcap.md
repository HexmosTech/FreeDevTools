---
title: "Getcap - Display File Capabilities | Online Free DevTools by Hexmos"
name: getcap
path: "/freedevtools/tldr/linux/getcap/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/getcap/"
description: "Display file capabilities with Getcap. Easily check file access rights and security attributes. Free online tool, no registration required."
category: linux
keywords:
- linux getcap
- file capability checker
- linux file permissions
- getcap command linux
- access control list linux
- display file attributes
- linux security attributes
- getcap file access
- file security linux
- linux access rights
features:
- Display capabilities of specified files
- Recursively list capabilities in directories
- Show all entries, even without capabilities
- Identify file capabilities on Linux
- Analyze file access control lists
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# getcap

> Display the name and capabilities of each specified file.
> More information: <https://manned.org/getcap>.

- Get capabilities for the given files:

`getcap {{path/to/file1 path/to/file2 ...}}`

- Get capabilities for all the files recursively under the given directories:

`getcap -r {{path/to/directory1 path/to/directory2 ...}}`

- Display all searched entries even if no capabilities are set:

`getcap -v {{path/to/file1 path/to/file2 ...}}`
