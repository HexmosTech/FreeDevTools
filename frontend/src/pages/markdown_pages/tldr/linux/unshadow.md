---
title: "Unshadow - Obtain Password File | Online Free DevTools by Hexmos"
name: unshadow
path: /freedevtools/tldr/linux/unshadow
canonical: "https://hexmos.com/freedevtools/tldr/linux/unshadow/"
description: "Obtain password files with Unshadow. Extract password hashes for offline cracking using shadow files and the /etc/passwd file. Free online tool, no registration required."
category: linux
keywords:
  - password file extraction
  - shadow password recovery
  - unix password cracking
  - linux password hash
  - etc/shadow combiner
  - etc/passwd parser
  - john the ripper utility
  - offline password cracker
  - password security audit
  - system password analysis
features:
  - Combine /etc/shadow and /etc/passwd files
  - Extract password hashes from shadow files
  - Generate a single password file for cracking
  - Support for custom shadow and password file paths
  - Facilitate offline password analysis
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# unshadow

> Utility provided by the John the Ripper project to obtain the traditional Unix password file if the system uses shadow passwords.
> More information: <https://www.openwall.com/john/doc/>.

- Combine the `/etc/shadow` and `/etc/passwd` of the current system:

`sudo unshadow /etc/passwd /etc/shadow`

- Combine two arbitrary shadow and password files:

`sudo unshadow {{path/to/passwd}} {{path/to/shadow}}`
