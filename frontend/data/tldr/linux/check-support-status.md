---
title: "Check Support Status - Identify Debian Package Support | Online Free DevTools by Hexmos"
name: check-support-status
path: "/freedevtools/tldr/linux/check-support-status/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/check-support-status/"
description: "Identify Debian packages with limited or ended support using check-support-status.  Quickly check package support status and avoid vulnerabilities. Free online tool, no registration required."
category: linux
keywords:
  - debian package support checker
  - linux package support status
  - check debian package support
  - debian package lifecycle
  - end of life debian packages
  - identify unsupported debian packages
  - debian package support tool
  - manage debian package support
  - debian package support analysis
  - linux package end of life
features:
  - Displays packages with limited, ended, or soon-to-end support.
  - Filters for packages with ended support only.
  - Suppresses the command output headline.
  - Provides clear output for easy interpretation.
  - Identifies potential security risks from unsupported packages.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# check-support-status

> Identify installed Debian packages for which support has had to be limited or prematurely ended.
> More information: <https://manned.org/check-support-status>.

- Display packages whose support is limited, has already ended or will end earlier than the distribution's end of life:

`check-support-status`

- Display only packages whose support has ended:

`check-support-status --type {{ended}}`

- Skip printing a headline:

`check-support-status --no-heading`
