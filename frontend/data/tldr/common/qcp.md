---
title: "Qcp - Copy Files with Editor | Online Free DevTools by Hexmos"
name: qcp
path: "/freedevtools/tldr/common/qcp/"
canonical: "https://hexmos.com/freedevtools/tldr/common/qcp/"
description: "Copy files easily with Qcp using your default text editor. Define source and target filenames quickly for efficient transfers. Free online tool, no registration required."
category: common
keywords:
- file copy editor
- qcp file transfer
- command line file copy
- linux file copy
- macos file copy
- copy files using editor
- text editor file copy
- batch file copy
- file rename command
- flexible file transfer
features:
- Copy a single file using an editor
- Copy multiple files using wildcards
- Customize source and target positions in the editor
- Support batch file copying
- Define filenames using your default text editor
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qcp

> Copy files using the default text editor to define the filenames.
> More information: <https://manned.org/qcp>.

- Copy a single file (open an editor with the source filename on the left and the target filename on the right):

`qcp {{source_file}}`

- Copy multiple JPEG files:

`qcp {{*.jpg}}`

- Copy files, but swap the positions of the source and the target filenames in the editor:

`qcp {{[-o|--option]}} swap {{*.jpg}}`
