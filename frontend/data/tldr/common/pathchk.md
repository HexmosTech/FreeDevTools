---
title: "Validate Pathnames - Check Pathnames for Portability | Online Free DevTools by Hexmos"
name: pathchk
path: "/freedevtools/tldr/common/pathchk/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pathchk/"
description: "Validate pathnames with pathchk. Check file and directory paths for portability and validity across various POSIX compliant systems. Free online tool, no registration required."
category: common
keywords:
- pathname validity check
- POSIX pathname check
- file path validator
- directory path validator
- portable pathname check
- GNU coreutils pathchk
- linux pathname check
- macos pathname check
- command line path check
- path naming conventions check
features:
- Check pathnames for valid characters
- Verify pathname length limitations
- Determine pathname portability across POSIX systems
- Identify empty pathnames
- Detect leading dashes in pathnames
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pathchk

> Check the validity and portability of pathnames.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/pathchk-invocation.html>.

- Check pathnames for validity in the current system:

`pathchk {{path1 path2 ...}}`

- Check pathnames for validity on a wider range of POSIX compliant systems:

`pathchk -p {{path1 path2 ...}}`

- Check pathnames for validity on all POSIX compliant systems:

`pathchk {{[-p -P|--portability]}} {{path1 path2 ...}}`

- Only check for empty pathnames or leading dashes (-):

`pathchk -P {{path1 path2 ...}}`
