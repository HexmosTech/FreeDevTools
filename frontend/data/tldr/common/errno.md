---
title: "Lookup Errno - Find Error Codes and Descriptions | Online Free DevTools by Hexmos"
name: errno
path: "/freedevtools/tldr/common/errno/"
canonical: "https://hexmos.com/freedevtools/tldr/common/errno/"
description: "Lookup errno names and descriptions with Errno. Quickly identify error codes and their meanings on Linux/macOS systems. Free online tool, no registration required."
category: common
keywords:
- errno lookup
- error code lookup
- linux errno
- macos errno
- system error codes
- errno descriptions
- errno to string
- error number lookup
- errno list
- moreutils errno
features:
- Lookup errno descriptions by name or code
- List all errno names, codes, and descriptions
- Search errno descriptions for specific text
- Search errno descriptions across all locales
- Identify system errors from command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# errno

> Look up errno names and descriptions.
> More information: <https://joeyh.name/code/moreutils/>.

- Lookup errno description by name or code:

`errno {{name|code}}`

- List all errno names, codes, and descriptions:

`errno {{[-l|--list]}}`

- Search for code whose description contains all of the given text:

`errno {{[-s|--search]}} {{text}}`

- Search for code whose description contains all of the given text (all locales):

`errno {{[-S|--search-all-locales]}} {{text}}`
