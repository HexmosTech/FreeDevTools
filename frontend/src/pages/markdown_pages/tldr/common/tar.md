---
title: "Create Tar Archives - Archiving Utility | Online Free DevTools by Hexmos"
name: tar
path: /freedevtools/tldr/common/tar
canonical: "https://hexmos.com/freedevtools/tldr/common/tar/"
description: "Create tar archives with Tar. An archiving utility frequently used with gzip or bzip2 for compression. Free online tool, no registration required."
category: common
keywords:
- tar archive creation
- tar compression utility
- gzip tar archive
- bzip2 tar archive
- linux tar command
- unix tar command
- tar extract files
- tar list contents
- tar file management
- tar archive manager
features:
- Create tar archives from files and directories
- Compress tar archives with gzip or bzip2
- Extract files from tar archives
- List the contents of a tar archive verbosely
- Automatically determine compression program based on file extension
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tar

> Archiving utility.
> Often combined with a compression method, such as `gzip` or `bzip2`.
> More information: <https://www.gnu.org/software/tar/manual/tar.html>.

- [c]reate an archive and write it to a [f]ile:

`tar cf {{path/to/target.tar}} {{path/to/file1 path/to/file2 ...}}`

- [c]reate a g[z]ipped archive and write it to a [f]ile:

`tar czf {{path/to/target.tar.gz}} {{path/to/file1 path/to/file2 ...}}`

- [c]reate a g[z]ipped (compressed) archive from a directory using relative paths:

`tar czf {{path/to/target.tar.gz}} {{[-C|--directory]}} {{path/to/directory}} .`

- E[x]tract a (compressed) archive [f]ile into the current directory [v]erbosely:

`tar xvf {{path/to/source.tar[.gz|.bz2|.xz]}}`

- E[x]tract a (compressed) archive [f]ile into the target directory:

`tar xf {{path/to/source.tar[.gz|.bz2|.xz]}} {{[-C|--directory]}} {{path/to/directory}}`

- [c]reate a compressed archive and write it to a [f]ile, using the file extension to [a]utomatically determine the compression program:

`tar caf {{path/to/target.tar.xz}} {{path/to/file1 path/to/file2 ...}}`

- Lis[t] the contents of a tar [f]ile [v]erbosely:

`tar tvf {{path/to/source.tar}}`

- E[x]tract files matching a pattern from an archive [f]ile:

`tar xf {{path/to/source.tar}} --wildcards "{{*.html}}"`
