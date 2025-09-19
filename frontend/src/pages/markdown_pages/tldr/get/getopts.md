---
title: "Parse Shell Options - Control Arguments | Online Free DevTools by Hexmos"
name: getopts
path: /freedevtools/tldr/get/getopts
canonical: "https://hexmos.com/freedevtools/tldr/get/getopts/"
description: "Parse shell options efficiently with Getopts. Control arguments and manage options in your shell scripts. Free online tool, no registration required."
category: common
keywords:
- shell options parser
- bash argument parsing
- getopts command line
- shell scripting options
- linux getopts utility
- command line arguments
- shell option handling
- bash getopts example
- getopts script
- posix getopts standard
features:
- Parse short shell options
- Check for required arguments
- Handle multiple shell options
- Reset option parsing
- Enable silent error handling
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# getopts

> Parse shell options from arguments.
> This command does not support longform options and thus using `getopt` is recommended instead.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-getopts>.

- Check if an option is the first set option in the current context:

`getopts {{x}} {{opt}}; echo ${{opt}}`

- Check if an option is set in a string (specified option must be the first element of the string):

`getopts {{x}} {{opt}} "{{string text}}"; echo ${{opt}}`

- Set an option to require an argument and print them:

`getopts {{x}}: {{opt}}; echo ${{opt}} $OPTARG`

- Check for multiple options:

`while getopts {{xyz}} {{opt}}; do case ${{opt}} in x) {{echo x is set}};; y) {{echo y is set}};; z) {{echo z is set}};; esac; done`

- Set `getopts` to silent mode and handle option errors:

`while getopts :{{x:}} {{opt}}; do case ${{opt}} in x) ;; :) {{echo "Argument required"}};; ?) {{echo "Invalid argument"}} esac;; done`

- Reset `getopts`:

`OPTIND=1`
