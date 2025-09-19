---
title: "Convert Filenames - Change Filename Encoding | Online Free DevTools by Hexmos"
name: convmv
path: /freedevtools/tldr/common/convmv
canonical: "https://hexmos.com/freedevtools/tldr/common/convmv/"
description: "Convert filenames easily with convmv, a powerful command-line tool. Change filename encodings, fix character set issues, and batch rename files. Free online tool, no registration required."
category: common
keywords:
- filename encoding converter
- character encoding conversion
- linux filename converter
- batch filename renamer
- filename encoding fixer
- utf8 filename conversion
- latin1 filename conversion
- convmv command line
- filename conversion command
- filename character set
features:
- Convert filenames between different encodings
- Test filename encoding conversion without renaming
- Rename files to the new encoding
- Support batch file processing
- Correct character set problems in filenames
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# convmv

> Convert filenames (NOT file content) from one encoding to another.
> More information: <https://www.j3e.de/linux/convmv/man/>.

- Test filename encoding conversion (don't actually change the filename):

`convmv -f {{from_encoding}} -t {{to_encoding}} {{input_file}}`

- Convert filename encoding and rename the file to the new encoding:

`convmv -f {{from_encoding}} -t {{to_encoding}} --notest {{input_file}}`
