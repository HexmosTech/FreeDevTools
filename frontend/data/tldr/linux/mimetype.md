---
title: "Determine MIME Type - File Analyzer | Online Free DevTools by Hexmos"
name: mimetype
path: "/freedevtools/tldr/linux/mimetype/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/mimetype/"
description: "Determine file MIME types instantly with the mimetype analyzer.  Identify file formats and get detailed descriptions. Free online tool, no registration required."
category: linux
keywords:
  - mime type detection
  - file type identifier
  - mimetype command line
  - file format analyzer
  - linux mimetype
  - file analysis tool
  - content type determination
  - mime type checker
  - file identification utility
  - command-line file analysis
features:
  - Identifies MIME types from file paths.
  - Provides concise MIME type output without filenames.
  - Offers detailed descriptions of identified MIME types.
  - Supports MIME type determination from stdin input.
  - Displays debug information for advanced troubleshooting.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mimetype

> Automatically determine the MIME type of a file.
> More information: <https://manned.org/mimetype>.

- Print the MIME type of a given file:

`mimetype {{path/to/file}}`

- Display only the MIME type, and not the filename:

`mimetype --brief {{path/to/file}}`

- Display a description of the MIME type:

`mimetype --describe {{path/to/file}}`

- Determine the MIME type of `stdin` (does not check a filename):

`{{command}} | mimetype --stdin`

- Display debug information about how the MIME type was determined:

`mimetype --debug {{path/to/file}}`

- Display all the possible MIME types of a given file in confidence order:

`mimetype --all {{path/to/file}}`

- Explicitly specify the 2-letter language code of the output:

`mimetype --language {{path/to/file}}`
