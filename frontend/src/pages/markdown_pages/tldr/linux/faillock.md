---
title: "Faillock - Manage Login Failures | Free DevTools"
name: faillock
path: /freedevtools/tldr/linux/faillock
canonical: "https://hexmos.com/freedevtools/tldr/linux/faillock/"
description: "Manage login failures with Faillock.  View and reset authentication failure records for individual users or all users. Free online tool, no registration required."
category: linux
keywords:
  - login failure management
  - authentication failure records
  - user login tracking
  - faillock command
  - linux security audit
  - system security tool
  - account lockout monitoring
  - failed login detection
  - user access control
  - security log analysis
features:
  - List login failures for the current user.
  - Reset login failure records for the current user.
  - List login failures for all users (requires sudo).
  - List login failures for a specific user (requires sudo).
  - Reset login failure records for a specific user (requires sudo).
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# faillock

> Display and modify authentication failure record files.
> More information: <https://manned.org/faillock>.

- List login failures of the current user:

`faillock`

- Reset the failure records of the current user:

`faillock --reset`

- List login failures of all users:

`sudo faillock`

- List login failures of the specified user:

`sudo faillock --user {{user}}`

- Reset the failure records of the specified user:

`sudo faillock --user {{user}} --reset`
