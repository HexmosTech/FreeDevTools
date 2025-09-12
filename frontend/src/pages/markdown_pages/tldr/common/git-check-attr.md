---
title: "Git Check-Attr - Inspect File Attributes | Free DevTools"
name: git-check-attr
path: /freedevtools/tldr/common/git-check-attr
canonical: "https://hexmos.com/freedevtools/tldr/common/git-check-attr/"
description: "Inspect file attributes with Git Check-Attr. Quickly determine if attributes are unspecified, set, or unset on your files. Free online tool, no registration required."
category: common
keywords:
- git attribute inspection
- file attribute checker
- git check-attr command
- git repository attributes
- git file metadata
- git attribute status
- git attribute debugging
- git attribute configuration
- command line attribute tool
- cross-platform git attributes
features:
- Determine if a git attribute is set, unset, or unspecified.
- Check attributes for multiple files at once.
- List all attributes for a specific file.
- Inspect specific attribute values.
- Support for cross-platform git environments.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git check-attr

> For every pathname, list if each attribute is unspecified, set, or unset as a gitattribute on that pathname.
> More information: <https://git-scm.com/docs/git-check-attr>.

- Check the values of all attributes on a file:

`git check-attr {{[-a|--all]}} {{path/to/file}}`

- Check the value of a specific attribute on a file:

`git check-attr {{attribute}} {{path/to/file}}`

- Check the values of all attributes on specific files:

`git check-attr {{[-a|--all]}} {{path/to/file1 path/to/file2 ...}}`

- Check the value of a specific attribute on one or more files:

`git check-attr {{attribute}} {{path/to/file1 path/to/file2 ...}}`
