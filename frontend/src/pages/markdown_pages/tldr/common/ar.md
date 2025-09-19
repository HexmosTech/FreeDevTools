---
title: "Create Archive Files - Manage Unix Archives | Online Free DevTools by Hexmos"
name: ar
path: /freedevtools/tldr/common/ar
canonical: "https://hexmos.com/freedevtools/tldr/common/ar/"
description: "Create archive files with ar, a powerful tool for managing Unix archives, static libraries, and Debian packages. Free online tool, no registration required."
category: common
keywords:
- Unix archive manager
- ar archive utility
- Debian package creator
- Static library tool
- Archive file extractor
- ar command line tool
- .a archive management
- .deb package manipulation
- Linux archive tool
- macOS archive tool
features:
- Extract members from archive files
- List contents of archive files
- Replace or add files to archives
- Insert object file index
- Create archives with object file index
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ar

> Create, modify, and extract from Unix archives. Typically used for static libraries (`.a`) and Debian packages (`.deb`).
> See also: `tar`.
> More information: <https://manned.org/ar>.

- E[x]tract all members from an archive:

`ar x {{path/to/file.a}}`

- Lis[t] contents in a specific archive:

`ar t {{path/to/file.ar}}`

- [r]eplace or add specific files to an archive:

`ar r {{path/to/file.deb}} {{path/to/debian-binary path/to/control.tar.gz path/to/data.tar.xz ...}}`

- In[s]ert an object file index (equivalent to using `ranlib`):

`ar s {{path/to/file.a}}`

- Create an archive with specific files and an accompanying object file index:

`ar rs {{path/to/file.a}} {{path/to/file1.o path/to/file2.o ...}}`
