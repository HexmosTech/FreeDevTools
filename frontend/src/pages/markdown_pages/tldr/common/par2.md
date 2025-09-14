---
title: "Create Parity Archive - File Verification with par2 | Free DevTools"
name: par2
path: "/freedevtools/tldr/common/par2"
canonical: "https://hexmos.com/freedevtools/tldr/common/par2/"
description: "Create parity archive with par2 for file verification and repair. Ensure data integrity with PAR 2.0 compatible archives. Free online tool, no registration required."
category: common
keywords:
- par2 file verification
- par2 parity archive
- PAR 2.0 repair
- data integrity check
- file recovery archive
- archive redundancy creation
- linux par2
- macos par2
- windows par2
- par2 command line
features:
- Create PAR 2.0 compatible parity archives
- Verify file integrity using existing parity archives
- Repair corrupted files with parity data
- Define custom redundancy levels for archives
- Specify number of volume files to create
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# par2

> File verification and repair using PAR 2.0 compatible parity archives (.par2 files).
> More information: <https://github.com/Parchive/par2cmdline/>.

- Create a parity archive with a set percentage level of redundancy:

`par2 create -r{{1..100}} -- {{path/to/file}}`

- Create a parity archive with a chosen number of volume files (in addition to the index file):

`par2 create -n{{1..32768}} -- {{path/to/file}}`

- Verify a file with a parity archive:

`par2 verify -- {{path/to/file.par2}}`

- Repair a file with a parity archive:

`par2 repair -- {{path/to/file.par2}}`
