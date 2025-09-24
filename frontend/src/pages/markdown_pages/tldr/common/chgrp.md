---
title: "Change Group Ownership - Control File Permissions | Online Free DevTools by Hexmos"
name: chgrp
path: /freedevtools/tldr/common/chgrp
canonical: "https://hexmos.com/freedevtools/tldr/common/chgrp/"
description: "Change group ownership of files and directories with chgrp. Easily manage file permissions on Linux and Unix systems. Free online tool, no registration required."
category: common
keywords:
- file group ownership
- change group linux
- chgrp command
- linux file permissions
- unix group management
- recursive chgrp
- symbolic link chgrp
- file reference chgrp
- group ID management
- file system utilities
features:
- Change the group owner of files and directories
- Recursively modify group ownership for directory contents
- Alter the group owner of symbolic links
- Use a reference file to set group ownership
- Integrate with file system utilities
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# chgrp

> Change group ownership of files and directories.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/chgrp-invocation.html>.

- Change the owner group of a file/directory:

`chgrp {{group}} {{path/to/file_or_directory}}`

- Recursively change the owner group of a directory and its contents:

`chgrp {{[-R|--recursive]}} {{group}} {{path/to/directory}}`

- Change the owner group of a symbolic link:

`chgrp {{[-h|--no-dereference]}} {{group}} {{path/to/symlink}}`

- Change the owner group of a file/directory to match a reference file:

`chgrp --reference {{path/to/reference_file}} {{path/to/file_or_directory}}`
