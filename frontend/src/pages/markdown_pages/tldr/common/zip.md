---
title: "Zip Archive - Package and Compress Files | Free DevTools"
name: zip
path: "/freedevtools/tldr/common/zip"
canonical: "https://hexmos.com/freedevtools/tldr/common/zip/"
description: "Package and compress files with Zip Archive. Create, update, and manage zip files easily using command-line. Free online tool, no registration required."
category: common
keywords:
- "zip archive creation"
- "file compression"
- "zip file management"
- "linux zip command"
- "macos zip utility"
- "archive management command"
- "compressed file packaging"
- "zip file encryption"
- "split zip archive"
- "zip file extraction"
features:
- "Add files and directories to a zip archive."
- "Remove files and directories from a zip archive."
- "Exclude specific files and directories from an archive."
- "Create zip archives with specific compression levels."
- "Create encrypted zip archives with password protection."
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zip

> Package and compress (archive) files into a Zip archive.
> See also: `unzip`.
> More information: <https://manned.org/zip>.

- Add files/directories to a specific archive:

`zip {{[-r|--recurse-paths]}} {{path/to/compressed.zip}} {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Remove files/directories from a specific archive:

`zip {{[-d|--delete]}} {{path/to/compressed.zip}} {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Archive files/directories excluding specified ones:

`zip {{[-r|--recurse-paths]}} {{path/to/compressed.zip}} {{path/to/file_or_directory1 path/to/file_or_directory2 ...}} {{[-x|--exclude]}} {{path/to/excluded_files_or_directories}}`

- Archive files/directories with a specific compression level (`0` - the lowest, `9` - the highest):

`zip {{[-r|--recurse-paths]}} -{{0..9}} {{path/to/compressed.zip}} {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Create an encrypted archive with a specific password:

`zip {{[-re|--recurse-paths --encrypt]}} {{path/to/compressed.zip}} {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Archive files/directories to a multi-part split Zip archive (e.g. 3 GB parts):

`zip {{[-rs|--recurse-paths --split-size]}} {{3g}} {{path/to/compressed.zip}} {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Print a specific archive contents:

`zip {{[-sf|--split-size --freshen]}} {{path/to/compressed.zip}}`
