---
title: "Generate Man Pages - XML2Man Compiler | Online Free DevTools by Hexmos"
name: xml2man
path: /freedevtools/tldr/osx/xml2man
canonical: "https://hexmos.com/freedevtools/tldr/osx/xml2man/"
description: "Generate man pages with XML2Man. Compile MPGL files to mdoc format for documentation. Free online tool, no registration required."
category: osx
keywords:
- XML man page generator
- MPGL to mdoc compiler
- OSX man page creation
- Apple documentation tool
- Command line man page
- MXML to man converter
- Developer tool macOS
- Documentation compiler OSX
- MPGL file processing
- XML2Man tool
features:
- Compile MPGL files to mdoc format
- Generate viewable man pages from XML
- Specify output file for compiled documentation
- Overwrite existing man pages with new output
- Process command, service, and function files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xml2man

> Compile MPGL to mdoc.
> More information: <https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/HeaderDoc/mpgl/mpgl.html>.

- Compile an MPGL file to a viewable man page:

`xml2man {{path/to/command_file.mxml}}`

- Compile an MPGL file to a specific output file:

`xml2man {{path/to/service_file.mxml}} {{path/to/service_file.7}}`

- Compile an MPGL file to a specific output file, overwriting if it already exists:

`xml2man -f {{path/to/function_file.mxml}} {{path/to/function_file.3}}`
