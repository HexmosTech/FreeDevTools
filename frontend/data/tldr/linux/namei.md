---
title: "Path Analyzer - Resolve File Paths on Linux | Online Free DevTools by Hexmos"
name: namei
path: "/freedevtools/tldr/linux/namei/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/namei/"
description: "Analyze file paths with Namei. Resolve symbolic links and identify path issues on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- linux path analyzer
- resolve symbolic links linux
- namei linux command
- linux file path debugging
- file system path resolution
- linux directory traversal
- symbolic link checker
- diagnose path errors linux
- linux file system analyzer
- path resolution tool linux
features:
- Resolve file paths including symbolic links
- Identify 'too many levels of symbolic links' errors
- Display file type mode bits
- Show owner and group name for each file
- Resolve paths without following symlinks
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# namei

> Follows a pathname (which can be a symbolic link) until a terminal point is found (a file/directory/char device etc).
> This program is useful for finding "too many levels of symbolic links" problems.
> More information: <https://manned.org/namei>.

- Resolve the pathnames specified as the argument parameters:

`namei {{path/to/a}} {{path/to/b}} {{path/to/c}}`

- Display the results in a long-listing format:

`namei {{[-l|--long]}} {{path/to/a}} {{path/to/b}} {{path/to/c}}`

- Show the mode bits of each file type in the style of `ls`:

`namei {{[-m|--modes]}} {{path/to/a}} {{path/to/b}} {{path/to/c}}`

- Show owner and group name of each file:

`namei {{[-o|--owners]}} {{path/to/a}} {{path/to/b}} {{path/to/c}}`

- Don't follow symlinks while resolving:

`namei {{[-n|--nosymlinks]}} {{path/to/a}} {{path/to/b}} {{path/to/c}}`
