---
title: "Link Objects - Create Executables with ld | Free DevTools"
name: ld
path: /freedevtools/tldr/common/ld
canonical: "https://hexmos.com/freedevtools/tldr/common/ld/"
description: "Link objects instantly with ld, creating executables from object files. Use this linker to combine code and libraries effectively. Free online tool, no registration required."
category: common
keywords:
- object linker
- executable creator
- ld linker
- ELF linker
- linux linker
- dynamic linking
- static linking
- linker flags
- linking libraries
- object file merger
features:
- Link object files into executables
- Create dynamic and static libraries
- Resolve symbol dependencies
- Control linking order
- Specify dynamic linker path
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ld

> Link object files together.
> More information: <https://sourceware.org/binutils/docs/ld.html>.

- Link a specific object file with no dependencies into an executable:

`ld {{path/to/file.o}} {{[-o|--output]}} {{path/to/output_executable}}`

- Link two object files together:

`ld {{path/to/file1.o}} {{path/to/file2.o}} {{[-o|--output]}} {{path/to/output_executable}}`

- Dynamically link an x86_64 program to glibc (file paths change depending on the system):

`ld {{[-o|--output]}} {{path/to/output_executable}} {{[-I|--dynamic-linker]}} /lib/ld-linux-x86-64.so.2 /lib/crt1.o /lib/crti.o -lc {{path/to/file.o}} /lib/crtn.o`
