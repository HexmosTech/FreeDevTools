---
title: "Validate UTF-8 - Check File Encoding | Online Free DevTools by Hexmos"
name: isutf8
path: /freedevtools/tldr/common/isutf8
canonical: "https://hexmos.com/freedevtools/tldr/common/isutf8/"
description: "Validate UTF-8 encoding with isutf8. Check file encoding and identify invalid UTF-8 characters. Free online tool, no registration required."
category: common
keywords:
- UTF-8 validator
- file encoding checker
- character encoding validation
- text file validator
- linux UTF-8 check
- macos UTF-8 validation
- check UTF-8 compliance
- validate file encoding
- isutf8 command
- command line UTF-8 tool
features:
- Detect invalid UTF-8 sequences in files
- Verify if a file is correctly encoded in UTF-8
- List files with invalid UTF-8 encoding
- Invert the output to list valid UTF-8 files
- Run in quiet mode with exit code indicating status
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# isutf8

> Check whether text files contain valid UTF-8.
> More information: <https://manned.org/isutf8>.

- Check whether the specified files contain valid UTF-8:

`isutf8 {{path/to/file1 path/to/file2 ...}}`

- Print errors using multiple lines:

`isutf8 {{[-v|--verbose]}} {{path/to/file1 path/to/file2 ...}}`

- Do not print anything to `stdout`, indicate the result merely with the exit code:

`isutf8 {{[-q|--quiet]}} {{path/to/file1 path/to/file2 ...}}`

- Only print the names of the files containing invalid UTF-8:

`isutf8 {{[-l|--list]}} {{path/to/file1 path/to/file2 ...}}`

- Same as `--list` but inverted, i.e., only print the names of the files containing valid UTF-8:

`isutf8 {{[-i|--invert]}} {{path/to/file1 path/to/file2 ...}}`
