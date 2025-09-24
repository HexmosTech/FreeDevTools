---
title: "Print Text - Format Text Output with Zsh | Online Free DevTools by Hexmos"
name: print.zsh
path: /freedevtools/tldr/common/print.zsh
canonical: "https://hexmos.com/freedevtools/tldr/common/print.zsh/"
description: "Format text output quickly with Zsh Print. Control text formatting, add newlines, and enable backslash escapes for enhanced shell scripting. Free online tool, no registration required."
category: common
keywords:
- zsh print command
- shell text formatting
- zsh string output
- zsh command line print
- zsh echo alternative
- zsh escape sequences
- zsh newline control
- linux print formatting
- macos print command
- zsh scripting output
features:
- Print text with specified formatting
- Control newline characters in output
- Enable backslash escapes for special characters
- Print arguments using printf-style formatting
- Suppress trailing newline in printed output
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# print

> Z Shell (`zsh`) builtin. Prints arguments, similar to `echo`.
> See also: `echo`, `printf`, `zsh`.
> More information: <https://zsh.sourceforge.io/Doc/Release/Shell-Builtin-Commands.html>.

- Print input:

`print "Hello" "World"`

- Print separated by newline(s):

`print -l "Line1" "Line 2" "Line3"`

- Print without trailing newline:

`print -n "Hello"; print "World"`

- Enable backslash escapes:

`print -e "Line 1\nLine2"`

- Print arguments as described by `printf` (for greater portability across shells, consider using the `printf` command instead):

`print -f "%s is %d years old.\n" "Alice" 30`
