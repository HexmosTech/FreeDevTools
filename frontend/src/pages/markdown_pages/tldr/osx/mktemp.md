---
title: "Create Temporary File - Generate Temp Files | Online Free DevTools by Hexmos"
name: mktemp
path: /freedevtools/tldr/osx/mktemp
canonical: "https://hexmos.com/freedevtools/tldr/osx/mktemp/"
description: "Create temporary files with mktemp. Generate secure temporary files and directories quickly using the command line. Free online tool, no registration required."
category: osx
keywords:
  - temporary file generator
  - temp file creation
  - mktemp command
  - linux temporary file
  - macos temporary file
  - command line temp file
  - temporary directory creation
  - shell script temp file
  - temp file path
  - random filename generator
features:
  - Generate temporary files with random names
  - Create temporary directories
  - Specify a custom directory for temporary files
  - Use a custom filename template
  - Set a custom filename prefix
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mktemp

> Create a temporary file or directory.
> More information: <https://keith.github.io/xcode-man-pages/mktemp.1.html>.

- Create an empty temporary file and print its absolute path:

`mktemp`

- Use a custom directory (defaults to the output of `getconf DARWIN_USER_TEMP_DIR`, or `/tmp`):

`mktemp --tmpdir /{{path/to/tempdir}}`

- Use a custom path template (`X`s are replaced with random alphanumeric characters):

`mktemp {{/tmp/example.XXXXXXXX}}`

- Use a custom file name prefix:

`mktemp -t {{example}}`

- Create an empty temporary directory and print its absolute path:

`mktemp --directory`
