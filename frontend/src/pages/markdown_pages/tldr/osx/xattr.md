---
title: "Xattr - Control File Attributes | Online Free DevTools by Hexmos"
name: xattr
path: /freedevtools/tldr/osx/xattr
canonical: "https://hexmos.com/freedevtools/tldr/osx/xattr/"
description: "Control file attributes with Xattr on macOS. Easily manage extended filesystem attributes, set quarantine flags, and clear metadata. Free online tool, no registration required."
category: osx
keywords:
- macOS extended attributes
- file attribute manager
- xattr command line
- quarantine flag macOS
- metadata editor macOS
- osx file attributes
- filesystem attribute control
- attribute key value editor
- file metadata remover
- extended attribute cleaner
features:
- List extended attributes of files
- Write extended attributes to files
- Delete specific extended attributes
- Recursively remove attributes from directories
- Clear all extended attributes from files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xattr

> Utility to work with extended filesystem attributes.
> More information: <https://keith.github.io/xcode-man-pages/xattr.1.html>.

- List key:value extended attributes for a given file:

`xattr -l {{file}}`

- Write an attribute for a given file:

`xattr -w {{attribute_key}} {{attribute_value}} {{file}}`

- Delete an attribute from a given file:

`xattr -d {{com.apple.quarantine}} {{file}}`

- Delete all extended attributes from a given file:

`xattr -c {{file}}`

- Recursively delete an attribute in a given directory:

`xattr -rd {{attribute_key}} {{directory}}`
