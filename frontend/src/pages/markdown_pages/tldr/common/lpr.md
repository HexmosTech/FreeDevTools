---
title: "Print Files - Print Documents via Command Line | Online Free DevTools by Hexmos"
name: lpr
path: /freedevtools/tldr/common/lpr
canonical: "https://hexmos.com/freedevtools/tldr/common/lpr/"
description: "Print files efficiently with lpr. Control printer output, specify page ranges, and manage printing options via command line. Free online tool, no registration required."
category: common
keywords:
- command line printing
- linux print command
- cups printing system
- lpr print utility
- print document linux
- command line document printing
- print queue manager
- linux command line tools
- printer management command
- unix printing
features:
- Print files to the default printer.
- Specify the number of copies to print.
- Designate a specific printer for printing.
- Print a specific page or range of pages.
- Print double-sided documents.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lpr

> Print files.
> See also: `lpstat`, `lpadmin`.
> More information: <https://openprinting.github.io/cups/doc/man-lpr.html>.

- Print a file to the default printer:

`lpr {{path/to/file}}`

- Print 2 copies:

`lpr -# {{2}} {{path/to/file}}`

- Print to a named printer:

`lpr -P {{printer}} {{path/to/file}}`

- Print either a single page (e.g. 2) or a range of pages (e.g. 2-16):

`lpr -o page-ranges={{2|2-16}} {{path/to/file}}`

- Print double-sided either in portrait (long) or in landscape (short):

`lpr -o sides={{two-sided-long-edge|two-sided-short-edge}} {{path/to/file}}`

- Set page size (more options may be available depending on setup):

`lpr -o media={{a4|letter|legal}} {{path/to/file}}`

- Print multiple pages per sheet:

`lpr -o number-up={{2|4|6|9|16}} {{path/to/file}}`
