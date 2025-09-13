---
title: "Rename Files - Control File Names with Command Line | Free DevTools"
name: rename
path: /freedevtools/tldr/common/rename
canonical: "https://hexmos.com/freedevtools/tldr/common/rename/"
description: "Control file names with Rename Files command. Easily batch rename files using regex patterns on Linux and macOS systems. Free online tool, no registration required."
category: common
keywords:
- file rename command
- batch file rename
- regex file rename
- linux rename files
- macOS rename files
- command line rename
- perl rename files
- file name changer
- bulk rename utility
- rename multiple files
features:
- Rename files using regular expressions
- Perform dry-run to preview changes before renaming
- Change file extensions in bulk
- Convert filenames to lowercase or uppercase
- Replace spaces with underscores in filenames
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rename

> Rename a file or group of files with a `regex`.
> WARNING: This command will overwrite files without prompting unless the dry-run option is used.
> Note: This page refers to the Perl version, also known as `file-rename`.
> More information: <https://manned.org/prename>.

- Replace `from` with `to` in the filenames of the specified files:

`rename 's/{{from}}/{{to}}/' {{*.txt}}`

- Dry-run - display which changes would occur without performing them:

`rename -n 's/{{from}}/{{to}}/' {{*.txt}}`

- Change the extension:

`rename 's/\.{{old}}$/\.{{new}}/' {{*.txt}}`

- Change to lowercase (use `-f` in case-insensitive filesystems):

`rename {{[-f|--force]}} 'y/A-Z/a-z/' {{*.txt}}`

- Capitalize first letter of every word in the name:

`rename {{[-f|--force]}} 's/\b(\w)/\U$1/g' {{*.txt}}`

- Replace spaces with underscores:

`rename 's/\s+/_/g' {{*.txt}}`
