---
title: "Rename Files - Control Filenames with Rename Util | Free DevTools"
name: rename.util
path: /freedevtools/tldr/linux/rename.util
canonical: "https://hexmos.com/freedevtools/tldr/linux/rename.util/"
description: "Control filenames with Rename Files Util. Easily rename multiple files using substitutions, change extensions, and prepend names. Free online tool, no registration required."
category: linux
keywords:
  - filename renamer
  - batch rename files
  - mass rename files
  - file name changer
  - file rename utility
  - linux rename command
  - util-linux rename
  - command line file rename
  - bulk file renaming
  - rename util linux
features:
  - Rename multiple files with substitutions
  - Dry-run renames to preview changes
  - Prevent overwriting existing files
  - Change file extensions quickly
  - Prepend text to multiple filenames
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rename

> Rename multiple files.
> WARNING: This command will overwrite files without prompting unless the dry-run option is used.
> Note: This page refers to the command from the `util-linux` package.
> More information: <https://manned.org/rename>.

- Rename files using simple substitutions (substitute 'foo' with 'bar' wherever found):

`rename {{foo}} {{bar}} {{*}}`

- Dry-run - display which renames would occur without performing them:

`rename {{[-vn|--verbose --no-act]}} {{foo}} {{bar}} {{*}}`

- Do not overwrite existing files:

`rename {{[-o|--no-overwrite]}} {{foo}} {{bar}} {{*}}`

- Change file extensions:

`rename {{.ext}} {{.bak}} {{*.ext}}`

- Prepend "foo" to all filenames in the current directory:

`rename {{''}} {{'foo'}} {{*}}`

- Rename a group of increasingly numbered files zero-padding the numbers up to 3 digits:

`rename {{foo}} {{foo00}} {{foo?}} && rename {{foo}} {{foo0}} {{foo??}}`
