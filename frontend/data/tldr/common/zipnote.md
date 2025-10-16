---
title: "Zipnote - Edit Zip Archive Comments | Online Free DevTools by Hexmos"
name: zipnote
path: "/freedevtools/tldr/common/zipnote/"
canonical: "https://hexmos.com/freedevtools/tldr/common/zipnote/"
description: "Edit Zip archive comments with Zipnote. Add, view, or extract comments from Zip files. Manage and update archive information easily. Free online tool, no registration required."
category: common
keywords:
- zip archive editor
- zip comment viewer
- zip file comment extractor
- zip file comment updater
- zip archive manager
- command line zip utility
- linux zipnote
- macos zipnote
- windows zipnote
- zip file rename tool
features:
- View comments within a Zip archive.
- Extract Zip archive comments to a text file.
- Add or update comments from a text file.
- Rename files within a Zip archive.
- Modify Zip archive metadata from the command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zipnote

> View, add, or edit a Zip archive's comments.
> Files can also be renamed in the Zip archive.
> More information: <https://manned.org/zipnote>.

- View the comments on a Zip archive:

`zipnote {{path/to/file.zip}}`

- Extract the comments on a Zip archive to a file:

`zipnote {{path/to/file.zip}} > {{path/to/file.txt}}`

- Add/Update comments in a Zip archive from a file:

`zipnote -w {{path/to/file.zip}} < {{path/to/file.txt}}`
