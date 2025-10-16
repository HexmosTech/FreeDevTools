---
title: "Control SELinux - Set Enforcing Mode | Online Free DevTools by Hexmos"
name: setenforce
path: "/freedevtools/tldr/linux/setenforce/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/setenforce/"
description: "Control SELinux mode with the setenforce command.  Switch between enforcing and permissive modes easily for enhanced security. Free online tool, no registration required."
category: linux
keywords:
  - selinux control command
  - selinux enforcing mode
  - selinux permissive mode
  - linux security command
  - setenforce linux
  - system security management
  - linux system administration
  - selinux management tool
  - command line security
  - security policy control
features:
  - Quickly toggles SELinux between enforcing and permissive modes.
  - Allows for immediate changes in SELinux security context.
  - Provides a simple command-line interface for managing SELinux.
  - Enables testing of SELinux rules in permissive mode before enforcing.
  - Offers a crucial tool for system administrators to manage Linux security.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# setenforce

> Toggle SELinux between enforcing and permissive modes.
> To enable or disable SELinux, edit `/etc/selinux/config` instead.
> See also: `getenforce`, `semanage-permissive`.
> More information: <https://manned.org/setenforce>.

- Put SELinux in enforcing mode:

`setenforce {{1|Enforcing}}`

- Put SELiunx in permissive mode:

`setenforce {{0|Permissive}}`
