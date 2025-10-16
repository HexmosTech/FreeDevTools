---
title: "Plist Converter - Format & Validate Property Lists | Online Free DevTools by Hexmos"
name: plutil
path: "/freedevtools/tldr/osx/plutil/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/plutil/"
description: "Format Property Lists with plutil. Convert plist files between XML, binary, JSON, Swift, and Objective-C formats. Free online tool, no registration required."
category: osx
keywords:
- plist converter
- property list editor
- osx plist editor
- macos plist converter
- plutil command line
- plist xml converter
- plist binary converter
- plist json converter
- plist validation
- plist formatting
features:
- Convert plist files between XML, binary, JSON, Swift, and Objective-C
- Display plist file contents in human-readable format
- Validate plist file syntax and structure
- Overwrite existing plist files with converted formats
- Output converted plist data to standard output
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# plutil

> View, convert, validate, or edit property list ("plist") files.
> More information: <https://keith.github.io/xcode-man-pages/plutil.1.html>.

- Display the contents of one or more plist files in human-readable format:

`plutil -p {{file1.plist file2.plist ...}}`

- Convert one or more plist files to XML format, overwriting the original files in-place:

`plutil -convert xml1 {{file1.plist file2.plist ...}}`

- Convert one or more plist files to binary format, overwriting the original files in-place:

`plutil -convert binary1 {{file1.plist file2.plist ...}}`

- Convert a plist file to a different format, writing to a new file:

`plutil -convert {{xml1|binary1|json|swift|objc}} {{path/to/file.plist}} -o {{path/to/new_file.plist}}`

- Convert a plist file to a different format, writing to `stdout`:

`plutil -convert {{xml1|binary1|json|swift|objc}} {{path/to/file.plist}} -o -`
