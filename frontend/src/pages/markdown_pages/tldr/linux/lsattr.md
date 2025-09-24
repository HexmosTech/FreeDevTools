---
title: "List Attributes - Inspect Linux Files | Online Free DevTools by Hexmos"
name: lsattr
path: /freedevtools/tldr/linux/lsattr
canonical: "https://hexmos.com/freedevtools/tldr/linux/lsattr/"
description: "Inspect Linux file attributes with lsattr. Reveal file permissions, flags, and extended attributes. Free online tool, no registration required."
category: linux
keywords:
  - list file attributes
  - linux file attributes
  - lsattr command
  - file system attributes
  - linux permissions
  - file attributes inspector
  - command line lsattr
  - ext4 attributes
  - chmod alternatives
  - chattr alternatives
features:
  - Display file attributes in a directory.
  - Recursively list attributes for files and subdirectories.
  - Show attributes for all files, including hidden ones.
  - Display attributes for directories only.
  - Inspect file flags on Linux filesystems.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lsattr

> List file attributes on a Linux filesystem.
> More information: <https://manned.org/lsattr>.

- Display the attributes of the files in the current directory:

`lsattr`

- List the attributes of files in a particular path:

`lsattr {{path}}`

- List file attributes recursively in the current and subsequent directories:

`lsattr -R`

- Show attributes of all the files in the current directory, including hidden ones:

`lsattr -a`

- Display attributes of directories in the current directory:

`lsattr -d`
