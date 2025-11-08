---
title: "Create Temporary Files - mktemp Command | Online Free DevTools by Hexmos"
name: mktemp
path: "/freedevtools/tldr/common/mktemp/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mktemp/"
description: "Create temporary files instantly with mktemp. Manage temporary file paths and directories with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- temporary file creation
- command line temp file
- linux mktemp command
- macos mktemp command
- temporary directory generator
- file path manipulation
- shell script temp file
- bash temporary file
- mktemp file utility
- alphanumeric file generation
features:
- Generate a temporary file with a unique name
- Create temporary directories with custom paths
- Utilize custom templates for file naming
- Specify a custom directory for temporary files
- Output the absolute path of the created file or directory
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mktemp

> Create a temporary file or directory.
> More information: <https://man.openbsd.org/mktemp.1>.

- Create an empty temporary file and print its absolute path:

`mktemp`

- Use a custom directory if `$TMPDIR` is not set (the default is platform-dependent, but usually `/tmp`):

`mktemp -p /{{path/to/tempdir}}`

- Use a custom path template (`X`s are replaced with random alphanumeric characters):

`mktemp {{/tmp/example.XXXXXXXX}}`

- Use a custom file name template:

`mktemp -t {{example.XXXXXXXX}}`

- Create an empty temporary directory and print its absolute path:

`mktemp -d`
