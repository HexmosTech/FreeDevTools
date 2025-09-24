---
title: "Dirbuster - Brute Force Directories | Online Free DevTools by Hexmos"
name: dirbuster
path: /freedevtools/tldr/linux/dirbuster
canonical: "https://hexmos.com/freedevtools/tldr/linux/dirbuster/"
description: "Brute force directories and filenames with Dirbuster.  Discover hidden files and directories quickly and easily. Free online tool, no registration required."
category: linux
keywords:
  - directory brute forcing
  - website vulnerability scanner
  - web directory scanner
  - file enumeration tool
  - http directory scanner
  - server directory scanner
  - dirbuster command line
  - automated directory discovery
  - penetration testing tool
  - security auditing tool
features:
  - Brute-forces directories and filenames on web servers.
  - Supports custom wordlists for targeted scans.
  - Provides detailed reports of discovered directories and files.
  - Offers both GUI and headless modes for flexible operation.
  - Allows specifying file extensions to narrow the search scope.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dirbuster

> Brute force directories and filenames on servers.
> More information: <https://www.kali.org/tools/dirbuster/>.

- Start in GUI mode:

`dirbuster -u {{http://example.com}}`

- Start in headless (no GUI) mode:

`dirbuster -H -u {{http://example.com}}`

- Set the file extension list:

`dirbuster -e {{txt,html}}`

- Enable verbose output:

`dirbuster -v`

- Set the report location:

`dirbuster -r {{path/to/report.txt}}`
