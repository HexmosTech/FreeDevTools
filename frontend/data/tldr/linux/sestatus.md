---
title: "SELinux Status - Control Security Policies | Online Free DevTools by Hexmos"
name: sestatus
path: "/freedevtools/tldr/linux/sestatus/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/sestatus/"
description: "Control SELinux security policies with sestatus. Check current policy status, booleans, and contexts. Free online tool, no registration required."
category: linux
keywords:
- selinux status
- linux selinux
- security policy status
- selinux boolean status
- selinux context
- selinux configuration
- linux security
- security administration
- policy enforcement
- linux command line
features:
- Displays current SELinux status information
- Shows the status of all policy booleans
- Prints file and process security contexts
- Provides a summary of loaded policies
- Reports SELinux policy enforcement mode
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sestatus

> Print the current SELinux status.
> More information: <https://manned.org/sestatus>.

- Print the current status:

`sestatus`

- Print the current states of all policy booleans:

`sestatus -b`

- Print the current file and process contexts:

`sestatus -v`
