---
title: "Format Code - Uncrustify Code | Free DevTools"
name: uncrustify
path: /freedevtools/tldr/common/uncrustify
canonical: "https://hexmos.com/freedevtools/tldr/common/uncrustify/"
description: "Format code with Uncrustify, a powerful source code formatter supporting C, C++, C#, D, Java, and Pawn.  Enhance code readability instantly. Free online tool, no registration required."
category: common
keywords:
- code formatter
- source code formatting
- c++ formatter
- java formatter
- c# formatter
- uncrustify configuration
- code style guide
- clang format
- code beautifier
- indent code
features:
- Format code files automatically
- Support multiple programming languages (C, C++, C#, D, Java, Pawn)
- Utilize custom configuration files for flexible formatting
- Generate new configuration files for personalized settings
- Backup original files before formatting to prevent data loss
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# uncrustify

> C, C++, C#, D, Java and Pawn source code formatter.
> More information: <https://github.com/uncrustify/uncrustify>.

- Format a single file:

`uncrustify -f {{path/to/file.cpp}} -o {{path/to/output.cpp}}`

- Read filenames from `stdin`, and take backups before writing output back to the original filepaths:

`find . -name "*.cpp" | uncrustify -F - --replace`

- Don't make backups (useful if files are under version control):

`find . -name "*.cpp" | uncrustify -F - --no-backup`

- Use a custom configuration file and write the result to `stdout`:

`uncrustify -c {{path/to/uncrustify.cfg}} -f {{path/to/file.cpp}}`

- Explicitly set a configuration variable's value:

`uncrustify --set {{option}}={{value}}`

- Generate a new configuration file:

`uncrustify --update-config -o {{path/to/new.cfg}}`
