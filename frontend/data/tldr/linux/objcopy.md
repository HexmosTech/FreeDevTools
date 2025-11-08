---
title: "Objcopy - Copy Object Files | Online Free DevTools by Hexmos"
name: objcopy
path: "/freedevtools/tldr/linux/objcopy/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/objcopy/"
description: "Copy and transform object files with objcopy.  Manage sections, strip debugging info, and convert between formats. Free online tool, no registration required."
category: linux
keywords:
  - object file copy
  - objcopy command
  - object file conversion
  - binary file manipulation
  - section copying objcopy
  - linux objcopy
  - objcopy stripping
  - object file translation
  - debug info removal objcopy
  - binary file modification
features:
  - Copy entire object files to new locations.
  - Translate object files between different formats.
  - Remove all symbol information from object files.
  - Strip debugging information from object files for smaller sizes.
  - Copy only specific sections from a source object file.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# objcopy

> Copy the contents of an object file to another file.
> More information: <https://manned.org/objcopy>.

- Copy data to another file:

`objcopy {{path/to/source_file}} {{path/to/target_file}}`

- Translate object files from one format to another:

`objcopy --input-target={{input_format}} --output-target {{output_format}} {{path/to/source_file}} {{path/to/target_file}}`

- Strip all symbol information from the file:

`objcopy --strip-all {{path/to/source_file}} {{path/to/target_file}}`

- Strip debugging information from the file:

`objcopy --strip-debug {{path/to/source_file}} {{path/to/target_file}}`

- Copy a specific section from the source file to the destination file:

`objcopy --only-section {{section}} {{path/to/source_file}} {{path/to/target_file}}`
