---
title: "Change File Flags - Control File Attributes | Free DevTools"
name: chflags
path: /freedevtools/tldr/osx/chflags
canonical: "https://hexmos.com/freedevtools/tldr/osx/chflags/"
description: "Change file flags instantly with Chflags. Modify hidden attributes and control file accessibility. Free online tool, no registration required."
category: osx
keywords:
- file flags modifier
- macos file attributes
- osx hidden file manager
- change file permissions
- command line flags editor
- directory flags update
- chflags command mac
- file visibility controller
- file security flags
- uchg flag manager
features:
- Modify file attributes using command line
- Set hidden flags for files and directories
- Recursively apply flags to entire directory structures
- Control file accessibility by changing flags
- Unset flags to revert attribute modifications
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# chflags

> Change file or directory flags.
> More information: <https://keith.github.io/xcode-man-pages/chflags.1.html>.

- Set the `hidden` flag for a file:

`chflags {{hidden}} {{path/to/file}}`

- Unset the `hidden` flag for a file:

`chflags {{nohidden}} {{path/to/file}}`

- Recursively set the `uchg` flag for a directory:

`chflags -R {{uchg}} {{path/to/directory}}`

- Recursively unset the `uchg` flag for a directory:

`chflags -R {{nouchg}} {{path/to/directory}}`
