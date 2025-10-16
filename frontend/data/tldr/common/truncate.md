---
title: "Truncate - Control File Size | Online Free DevTools by Hexmos"
name: truncate
path: "/freedevtools/tldr/common/truncate/"
canonical: "https://hexmos.com/freedevtools/tldr/common/truncate/"
description: "Control file size with Truncate, a command-line utility. Resize, extend, or shrink files effortlessly. Free online tool, no registration required."
category: common
keywords:
- file size controller
- truncate file size
- linux truncate command
- unix truncate command
- file size manipulator
- truncate command examples
- shrink file size
- extend file size
- truncate command line
- posix truncate
features:
- Shrink file size by a specified amount.
- Extend file size by a specified amount, filling with holes.
- Set a file to a specific size.
- Empty the content of a file.
- Prevent file creation if it doesn't exist during truncation.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# truncate

> Shrink or extend the size of a file to the specified size.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/truncate-invocation.html>.

- Set a size of 10 GB to an existing file, or create a new file with the specified size:

`truncate {{[-s|--size]}} 10G {{path/to/file}}`

- Extend the file size by 50 MiB, fill with holes (which reads as zero bytes):

`truncate {{[-s|--size]}} +50M {{path/to/file}}`

- Shrink the file by 2 GiB, by removing data from the end of file:

`truncate {{[-s|--size]}} -2G {{path/to/file}}`

- Empty the file's content:

`truncate {{[-s|--size]}} 0 {{path/to/file}}`

- Empty the file's content, but do not create the file if it does not exist:

`truncate {{[-cs|--no-create --size]}} 0 {{path/to/file}}`
