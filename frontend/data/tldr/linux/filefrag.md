---
title: "Filefrag - Analyze File Fragmentation | Online Free DevTools by Hexmos"
name: filefrag
path: "/freedevtools/tldr/linux/filefrag/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/filefrag/"
description: "Analyze file fragmentation with filefrag.  Identify and understand file fragmentation issues on your system using this command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - file fragmentation analysis
  - filefrag command
  - linux file fragmentation
  - check file fragmentation
  - file system fragmentation
  - disk fragmentation analysis
  - filefrag report
  - command-line file analysis
  - file integrity check
  - system file analysis
features:
  - Reports on file fragmentation levels.
  - Allows specifying custom block sizes for analysis.
  - Provides verbose output for detailed information.
  - Offers the ability to synchronize files before analysis.
  - Displays mapping of extended attributes.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# filefrag

> Report how badly fragmented a particular file might be.
> More information: <https://manned.org/filefrag>.

- Display a report for one or more files:

`filefrag {{path/to/file1 path/to/file2 ...}}`

- Display a report using a 1024 byte blocksize:

`filefrag -k {{path/to/file}}`

- Display a report using a certain blocksize:

`filefrag -b{{1024|1K|1M|1G|...}} {{path/to/file}}`

- Sync the file before requesting the mapping:

`filefrag -s {{path/to/file1 path/to/file2 ...}}`

- Display mapping of extended attributes:

`filefrag -x {{path/to/file1 path/to/file2 ...}}`

- Display a report with verbose information:

`filefrag -v {{path/to/file1 path/to/file2 ...}}`
