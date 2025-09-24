---
title: "Edit Text with moe - WYSIWYG Editor | Online Free DevTools by Hexmos"
name: moe
path: /freedevtools/tldr/common/moe
canonical: "https://hexmos.com/freedevtools/tldr/common/moe/"
description: "Edit text files instantly with moe, a WYSIWYG ISO-8859-15 text editor. Control file backups and character case options with this command. Free online tool, no registration required."
category: common
keywords:
- ISO-8859-15 text editor
- WYSIWYG text editor
- moe text editor command
- Linux text editor
- Command-line text editor
- ISO-8859-15 encoding
- Text file editor
- Text file backup
- Case-insensitive search
- GNU moe editor
features:
- Open and edit text files
- Create backup files when saving
- Open files in read-only mode
- Edit files without creating backups
- Perform case-insensitive searches
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# moe

> A WYSIWYG text editor for ISO-8859-15 encoded text.
> More information: <https://www.gnu.org/software/moe/moe.html>.

- Open moe and create a backup file (file~) when saving edits:

`moe {{path/to/file}}`

- Open a file as read-only:

`moe {{[-o|--read-only]}} {{path/to/file}}`

- Edit a file without creating backups:

`moe {{[-B|--no-backup]}} {{path/to/file}}`

- Edit a file ignoring case in searches:

`moe {{[-i|--ignore-case]}} {{path/to/file}}`

- Save and Quit:

`<Ctrl x>`
