---
title: "Create Temporary File - Generate Temp Files with mktemp | Free DevTools"
name: mktemp
path: /freedevtools/tldr/unknown/mktemp
canonical: "https://hexmos.com/freedevtools/tldr/unknown/mktemp/"
description: "Create temporary files with mktemp. Generate unique filenames and directories quickly. Securely manage temporary data. Free online tool, no registration required."
category: unknown
keywords:
- temporary file generator
- temp file creation
- mktemp command
- linux temporary files
- macos temporary files
- temporary directory creation
- unique filename generator
- random file name
- temporary file path
- command line temp file
features:
- Creates temporary files with unique names
- Generates temporary directories
- Uses custom filename templates
- Supports custom temporary directory paths
- Prints the name of a temporary file without creating it
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mktemp

> Create a temporary file or directory.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/mktemp-invocation.html>.

- Create an empty temporary file and print its absolute path:

`mktemp`

- Use a custom directory (defaults to `$TMPDIR`, or `/tmp`):

`mktemp {{[-p |--tmpdir=]}}/{{path/to/tempdir}}`

- Use a custom path template (`X`s are replaced with random alphanumeric characters):

`mktemp {{/tmp/example.XXXXXXXX}}`

- Use a custom file name template:

`mktemp -t {{example.XXXXXXXX}}`

- Create an empty temporary file with the given suffix and print its absolute path:

`mktemp --suffix {{.ext}}`

- Create an empty temporary directory and print its absolute path:

`mktemp {{[-d|--directory]}}`

- Print the name of a temporary file or directory without actually creating it:

`mktemp {{[-u|--dry-run]}}`
