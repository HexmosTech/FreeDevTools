---
title: "Create YAA Archives - Compress Files | Free DevTools"
name: yaa
path: /freedevtools/tldr/osx/yaa
canonical: "https://hexmos.com/freedevtools/tldr/osx/yaa/"
description: "Create YAA archives with YAA. Quickly compress and extract files for efficient storage and transfer. Free online tool, no registration required."
category: osx
keywords:
- YAA archive creation
- OSX archive compression
- Archive file extraction
- YAA file packaging
- Command line archiving
- MacOS archive manager
- YAA compression tool
- Archive format conversion
- File archiving on OSX
- Create archive macOS
features:
- Create YAA archives from directories
- Extract contents of YAA archives
- List files within a YAA archive
- Specify compression algorithm for archiving
- Define block size during archive creation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# yaa

> Create and manipulate YAA archives.
> More information: <https://www.manpagez.com/man/1/yaa/>.

- Create an archive from a directory:

`yaa archive -d {{path/to/directory}} -o {{path/to/output_file.yaa}}`

- Create an archive from a file:

`yaa archive -i {{path/to/file}} -o {{path/to/output_file.yaa}}`

- Extract an archive to the current directory:

`yaa extract -i {{path/to/archive_file.yaa}}`

- List the contents of an archive:

`yaa list -i {{path/to/archive_file.yaa}}`

- Create an archive with a specific compression algorithm:

`yaa archive -a {{algorithm}} -d {{path/to/directory}} -o {{path/to/output_file.yaa}}`

- Create an archive with an 8 MB block size:

`yaa archive -b 8m -d {{path/to/directory}} -o {{path/to/output_file.yaa}}`
