---
title: "Format Code with Clang-Format - Auto Code Formatter | Online Free DevTools by Hexmos"
name: clang-format
path: /freedevtools/tldr/clang/clang-format
canonical: "https://hexmos.com/freedevtools/tldr/clang/clang-format/"
description: "Format code automatically with Clang-Format, ensuring consistent code style. Auto-format C/C++/Java/JavaScript code. Free online tool, no registration required."
category: common
keywords:
- C++ code formatter
- C code formatter
- Java code formatter
- JavaScript code formatter
- Objective-C code formatter
- Protobuf code formatter
- C# code formatter
- Clang-format style guide
- LLVM code formatting
- GNU code formatting
features:
- Format code to stdout
- Format code in-place
- Apply predefined coding styles
- Use .clang-format configuration files
- Generate custom .clang-format files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# clang-format

> Auto-format C/C++/Java/JavaScript/Objective-C/Protobuf/C# code.
> More information: <https://clang.llvm.org/docs/ClangFormat.html>.

- Format a file and print the result to `stdout`:

`clang-format {{path/to/file}}`

- Format a file in-place:

`clang-format -i {{path/to/file}}`

- Format a file using a predefined coding style:

`clang-format --style {{LLVM|GNU|Google|Chromium|Microsoft|Mozilla|WebKit}} {{path/to/file}}`

- Format a file using the `.clang-format` file in one of the parent directories of the source file:

`clang-format --style=file {{path/to/file}}`

- Generate a custom `.clang-format` file:

`clang-format --style {{LLVM|GNU|Google|Chromium|Microsoft|Mozilla|WebKit}} --dump-config > {{.clang-format}}`
