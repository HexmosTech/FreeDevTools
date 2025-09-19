---
title: "Readlink - Follow Symlinks and Get Information | Online Free DevTools by Hexmos"
name: readlink
path: /freedevtools/tldr/common/readlink
canonical: "https://hexmos.com/freedevtools/tldr/common/readlink/"
description: "Follow symlinks with Readlink. Get the actual file path or the absolute path of symbolic links. Free online tool, no registration required."
category: common
keywords:
- symlink path
- file path information
- resolve symlink
- canonicalize path
- linux symlink
- macos symlink
- common readlink
- symlink target
- file system link
- symbolic link resolution
features:
- Resolve symbolic links to their target files
- Obtain the absolute path of a file through symlinks
- Display the target file pointed to by a symlink
- Follow multiple levels of symbolic links
- Determine if a file is a symbolic link
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# readlink

> Follow symlinks and get symlink information.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/readlink-invocation.html>.

- Get the actual file to which the symlink points:

`readlink {{path/to/file}}`

- Get the absolute path to a file:

`readlink {{[-f|--canonicalize]}} {{path/to/file}}`
