---
title: "Unlink File - Remove Links | Free DevTools"
name: unlink
path: /freedevtools/tldr/common/unlink
canonical: "https://hexmos.com/freedevtools/tldr/common/unlink/"
description: "Unlink file quickly with Unlink Command. Remove file links, manage filesystem references and free up storage space. Free online tool, no registration required."
category: common
keywords:
- unlink file command
- remove file link
- delete file link
- linux unlink command
- unix unlink command
- macos unlink command
- command line file removal
- filesystem link management
- remove inode link
- file system utility
features:
- Remove a specified file link.
- Delete the last link to a file.
- Free up storage space by unlinking.
- Manage file system references via command line.
- Safely remove file links from the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# unlink

> Remove a link to a file from the filesystem.
> The file contents is lost if the link is the last one to the file.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/unlink-invocation.html>.

- Remove the specified file if it is the last link:

`unlink {{path/to/file}}`
