---
title: "PE File Analyzer - Inspect PE Files | Online Free DevTools by Hexmos"
name: readpe
path: "/freedevtools/tldr/linux/readpe/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/readpe/"
description: "Analyze PE files with readpe.  Inspect headers, sections, imports, and exports. Free online tool, no registration required."
category: linux
keywords:
  - PE file analyzer
  - PE file inspector
  - executable file analysis
  - Windows executable analysis
  - PE header viewer
  - PE section viewer
  - import table viewer
  - export table viewer
  - PE file information
  - binary file analysis
features:
  - Display comprehensive information about PE files.
  - View all PE file headers (DOS, COFF, Optional).
  - List all sections within a PE file.
  - Display specific headers (DOS, COFF, Optional) on demand.
  - Examine imported and exported functions.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# readpe

> Display information about PE files.
> More information: <https://manned.org/readpe>.

- Display all information about a PE file:

`readpe {{path/to/executable}}`

- Display all the headers present in a PE file:

`readpe --all-headers {{path/to/executable}}`

- Display all the sections present in a PE file:

`readpe --all-sections {{path/to/executable}}`

- Display a specific header from a PE file:

`readpe --header {{dos|coff|optional}} {{path/to/executable}}`

- List all imported functions:

`readpe --imports {{path/to/executable}}`

- List all exported functions:

`readpe --exports {{path/to/executable}}`
