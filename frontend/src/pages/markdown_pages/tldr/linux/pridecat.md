---
title: "Pridecat - Format Text with Pride Flags | Free DevTools"
name: pridecat
path: /freedevtools/tldr/linux/pridecat
canonical: "https://hexmos.com/freedevtools/tldr/linux/pridecat/"
description: "Format text with Pridecat, adding colorful pride flag patterns.  Customize colors with various flag options including trans, lesbian, and bisexual flags. Free online tool, no registration required."
category: linux
keywords:
  - text formatter pride flags
  - pride flag text colorizer
  - command-line text styling
  - terminal text formatting
  - file formatting pride
  - colorful terminal output
  - pridecat command line
  - lgbtq+ text formatting
  - terminal text effects
  - custom flag text output
features:
  - Prints file contents with pride flag colors.
  - Supports transgender, lesbian, and bisexual flag variations.
  - Allows switching between lesbian and bisexual flags.
  - Modifies background colors of the output.
  - Formats directory listings with pride flag colors.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pridecat

> Like cat but more colorful.
> More information: <https://github.com/lunasorcery/pridecat>.

- Print the contents of a file in pride colors to `stdout`:

`pridecat {{path/to/file}}`

- Print contents of a file in trans colors:

`pridecat {{path/to/file}} {{[--trans|--transgender]}}`

- Alternate between lesbian and bisexual pride flags:

`pridecat {{path/to/file}} --lesbian {{[--bi|--bisexual]}}`

- Print contents of a file with the background colors changed:

`pridecat {{path/to/file}} {{[-b|--background]}}`

- List directory contents in pride flag colors:

`ls | pridecat --{{flag}}`
