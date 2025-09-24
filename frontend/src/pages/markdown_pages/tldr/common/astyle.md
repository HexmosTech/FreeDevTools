---
title: "Format Code with AStyle - Indent Source Code | Online Free DevTools by Hexmos"
name: astyle
path: /freedevtools/tldr/common/astyle
canonical: "https://hexmos.com/freedevtools/tldr/common/astyle/"
description: "Format source code with AStyle, ensuring consistent indentation and style. Beautify C, C++, C#, and Java code effortlessly. Free online tool, no registration required."
category: common
keywords:
- source code formatter
- code beautifier
- code indenter
- C++ code formatter
- Java code formatter
- C# code formatter
- astyle formatter
- source code beautification
- command line formatter
- coding style guide
features:
- Format C, C++, C#, and Java source code
- Indent code using spaces or tabs
- Apply predefined code styles (Java, Allman)
- Customize indentation levels
- Create backup copies of original files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# astyle

> Source code indenter, formatter, and beautifier for the C, C++, C# and Java programming languages.
> Upon running, a copy of the original file is created with an ".orig" appended to the original file name.
> More information: <https://astyle.sourceforge.net>.

- Apply the default style of 4 spaces per indent and no formatting changes:

`astyle {{source_file}}`

- Apply the Java style with attached braces:

`astyle --style=java {{path/to/file}}`

- Apply the allman style with broken braces:

`astyle --style=allman {{path/to/file}}`

- Apply a custom indent using spaces. Choose between 2 and 20 spaces:

`astyle --indent=spaces={{number_of_spaces}} {{path/to/file}}`

- Apply a custom indent using tabs. Choose between 2 and 20 tabs:

`astyle --indent=tab={{number_of_tabs}} {{path/to/file}}`
