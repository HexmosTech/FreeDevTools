---
title: "File Check - Validate Files with Patterns | Free DevTools"
name: filecheck
path: /freedevtools/tldr/common/filecheck
canonical: "https://hexmos.com/freedevtools/tldr/common/filecheck/"
description: "Validate files with FileCheck using flexible pattern matching. Check input file content, customize prefixes, and verify LLVM code. Free online tool, no registration required."
category: common
keywords:
- file pattern matching
- file content validation
- FileCheck validator
- LLVM file checker
- input file verifier
- pattern file syntax
- stdin file check
- custom check prefix
- directive pattern match
- llvm code validation
features:
- Validate file content against a specified pattern file
- Match input from standard input against patterns
- Use custom prefixes for check directives
- Print good directive pattern matches for debugging
- Integrate with LLVM tools for code validation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# FileCheck

> Flexible pattern matching file verifier.
> It is typically used from LLVM regression tests and forms a part of a `lit` test.
> More information: <https://llvm.org/docs/CommandGuide/FileCheck.html>.

- Match `input_file` content with pattern file `check_file`:

`FileCheck --input-file={{path/to/input_file}} {{path/to/check_file}}`

- Match input from the `stdin` with pattern file `check_file`:

`echo "{{some_text}}" | FileCheck {{path/to/check_file}}`

- Match with the specified custom check `prefix` (Note: The default prefix is `CHECK`):

`echo "{{some_text}}" | FileCheck --check-prefix={{prefix}} {{path/to/check_file}}`

- Print good directive pattern matches:

`echo "{{some_text}}" | FileCheck -v {{path/to/check_file}}`

- Input `llvm_code.ll` into llvm-as, then pipe the output into FileCheck to match:

`llvm-as {{path/to/llvm_code.ll}} | FileCheck {{path/to/check_file}}`
