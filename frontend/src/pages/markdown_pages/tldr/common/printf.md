---
title: "Format Text - Printf Command | Online Free DevTools by Hexmos"
name: printf
path: /freedevtools/tldr/common/printf
canonical: "https://hexmos.com/freedevtools/tldr/common/printf/"
description: "Format text with Printf, a powerful command-line utility. Control output formatting for strings, numbers, and variables in shell scripts. Free online tool, no registration required."
category: common
keywords:
- format text command
- string formatting linux
- number formatting shell
- printf formatting examples
- linux printf tutorial
- shell printf formatting
- printf environment variables
- bash printf command
- printf hexadecimal output
- printf octal conversion
features:
- Format strings with variable interpolation
- Print numbers in various formats (decimal, hex, octal)
- Use escape sequences for special characters and colors
- Store formatted output in variables
- Control output using format specifiers
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# printf

> Format and print text.
> See also: `echo`.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/printf-invocation.html>.

- Print a text message:

`printf "{{%s\n}}" "{{Hello world}}"`

- Print an integer in bold blue:

`printf "{{\e[1;34m%.3d\e[0m\n}}" {{42}}`

- Print a float number with the Unicode Euro sign:

`printf "{{\u20AC %.2f\n}}" {{123.4}}`

- Print a text message composed with environment variables:

`printf "{{var1: %s\tvar2: %s\n}}" "{{$VAR1}}" "{{$VAR2}}"`

- Store a formatted message in a variable (does not work on Zsh):

`printf -v {{myvar}} {{"This is %s = %d\n" "a year" 2016}}`

- Print a hexadecimal, octal and scientific number:

`printf "{{hex=%x octal=%o scientific=%e}}" 0x{{FF}} 0{{377}} {{100000}}`
