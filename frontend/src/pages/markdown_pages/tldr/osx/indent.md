---
title: "Indent - Format C/C++ Code | Online Free DevTools by Hexmos"
name: indent
path: /freedevtools/tldr/osx/indent
canonical: "https://hexmos.com/freedevtools/tldr/osx/indent/"
description: "Format C/C++ code with Indent. Improve code readability and consistency with this powerful command-line tool. Free online tool, no registration required."
category: osx
keywords:
  - C/C++ formatter
  - code indentation
  - source code beautifier
  - command line indent
  - indent Linux
  - indent macOS
  - Berkeley style formatter
  - K&R style formatter
  - whitespace formatting
  - code style enforcement
features:
  - Format C/C++ code according to Berkeley style
  - Format C/C++ code according to Kernighan & Ritchie (K&R) style
  - Insert or delete whitespace in C/C++ code
  - Improve code readability and consistency
  - Enforce specific coding styles via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# indent

> Change the appearance of a C/C++ program by inserting or deleting whitespace.
> More information: <https://keith.github.io/xcode-man-pages/indent.1.html>.

- Format C/C++ source according to the Berkeley style:

`indent {{path/to/source_file.c}} {{path/to/indented_file.c}} -nbad -nbap -bc -br -c33 -cd33 -cdb -ce -ci4 -cli0 -di16 -fc1 -fcb -i4 -ip -l75 -lp -npcs -nprs -psl -sc -nsob -ts8`

- Format C/C++ source according to the style of Kernighan & Ritchie (K&R):

`indent {{path/to/source_file.c}} {{path/to/indented_file.c}} -nbad -bap -nbc -br -c33 -cd33 -ncdb -ce -ci4 -cli0 -cs -d0 -di1 -nfc1 -nfcb -i4 -nip -l75 -lp -npcs -nprs -npsl -nsc -nsob`
