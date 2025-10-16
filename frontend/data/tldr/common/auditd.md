---
title: "Auditd - Control Linux Auditing System | Online Free DevTools by Hexmos"
name: auditd
path: "/freedevtools/tldr/common/auditd/"
canonical: "https://hexmos.com/freedevtools/tldr/common/auditd/"
description: "Control Linux auditing system with auditd. Monitor system events and track security-relevant information. Free online tool, no registration required."
category: common
keywords:
- linux auditd
- audit daemon
- system auditing
- security event logging
- audit rules
- auditd configuration
- linux security
- auditd process
- audit log analysis
- auditd monitoring
features:
- Respond to audit utility requests
- Handle kernel notifications
- Start the daemon manually
- Start the daemon in debug mode
- Start the daemon on-demand from launchd
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# auditd

> This responds to requests from the audit utility and notifications from the kernel.
> It should not be invoked manually.
> More information: <https://manned.org/auditd>.

- Start the daemon:

`auditd`

- Start the daemon in debug mode:

`auditd -d`

- Start the daemon on-demand from launchd:

`auditd -l`
