---
title: "Setfattr - Control File Attributes | Online Free DevTools by Hexmos"
name: setfattr
path: /freedevtools/tldr/linux/setfattr
canonical: "https://hexmos.com/freedevtools/tldr/linux/setfattr/"
description: "Control file attributes with Setfattr.  Manage extended attributes on files easily and efficiently. Free online tool, no registration required."
category: linux
keywords:
  - file attribute management
  - setfattr command
  - linux file attributes
  - extended file attributes
  - manage file metadata
  - set extended attributes
  - remove file attributes
  - linux command line
  - file system metadata
  - command-line tools
features:
  - Set user-defined extended file attributes.
  - Remove specific extended file attributes.
  - Modify existing extended file attributes.
  - Manage file metadata through command-line interface.
  - Works with various file systems supporting extended attributes.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# setfattr

> Set extended file attributes.
> More information: <https://manned.org/setfattr>.

- Set name of attribute for file:

`setfattr {{[-n|--name]}} user.{{attribute_name}} {{path/to/file}}`

- Set a user-defined value of an extended attribute on a file:

`setfattr {{[-n|--name]}} user.{{attribute_name}} {{[-v|--value]}} "{{value}}" {{path/to/file}}`

- Remove a specific attribute of a file:

`setfattr {{[-x|--remove]}} user.{{attribute_name}} {{path/to/file}}`
