---
title: "Package Utility - Query macOS Installer Packages | Online Free DevTools by Hexmos"
name: pkgutil
path: "/freedevtools/tldr/osx/pkgutil/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/pkgutil/"
description: "Query macOS installer packages with Package Utility (pkgutil). List installed packages, verify signatures, and extract content. Free online tool, no registration required."
category: osx
keywords:
- macos package utility
- pkgutil macos
- macos installer package query
- pkgutil signature verification
- osx package extraction
- macos package listing
- pkgutil list packages
- pkgutil expand package
- pkgutil check signature
- macos package management
features:
- List package IDs for installed packages
- Verify cryptographic signatures of package files
- List files contained within installed packages
- Extract contents of package files to a directory
- Manage and query macOS installer packages
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pkgutil

> Query and manipulate Mac OS X Installer packages and receipts.
> More information: <https://keith.github.io/xcode-man-pages/pkgutil.1.html>.

- List package IDs for all installed packages:

`pkgutil --pkgs`

- Verify cryptographic signatures of a package file:

`pkgutil --check-signature {{path/to/filename.pkg}}`

- List all the files for an installed package given its ID:

`pkgutil --files {{com.microsoft.Word}}`

- Extract the contents of a package file into a directory:

`pkgutil --expand-full {{path/to/filename.pkg}} {{path/to/directory}}`
