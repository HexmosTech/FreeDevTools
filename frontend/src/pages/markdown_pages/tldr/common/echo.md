---
title: "Print Text - Echo Command | Online Free DevTools by Hexmos"
name: echo
path: /freedevtools/tldr/common/echo
canonical: "https://hexmos.com/freedevtools/tldr/common/echo/"
description: "Print text instantly with the Echo command. Manipulate strings and display environment variables directly from the command line. Free online tool, no registration required."
category: common
keywords:
- echo command
- print text linux
- shell script echo
- bash echo command
- command line print
- string manipulation bash
- environment variables shell
- standard output command
- linux terminal echo
- echo escape characters
features:
- Print text to the console
- Display environment variables
- Suppress trailing newline characters
- Append output to a file
- Interpret backslash escape sequences
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# echo

> Print given arguments.
> See also: `printf`.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/echo-invocation.html>.

- Print a text message. Note: Quotes are optional:

`echo "{{Hello World}}"`

- Print a message with environment variables:

`echo "{{My path is $PATH}}"`

- Print a message without the trailing newline:

`echo -n "{{Hello World}}"`

- Append a message to the file:

`echo "{{Hello World}}" >> {{file.txt}}`

- Enable interpretation of backslash escapes (special characters):

`echo -e "{{Column 1\tColumn 2}}"`

- Print the exit status of the last executed command (Note: In Windows Command Prompt and PowerShell the equivalent commands are `echo %errorlevel%` and `$lastexitcode` respectively):

`echo $?`
