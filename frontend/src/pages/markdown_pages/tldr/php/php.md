---
title: "PHP Script Execute - Run PHP Code | Online Free DevTools by Hexmos"
name: php
path: /freedevtools/tldr/php/php
canonical: "https://hexmos.com/freedevtools/tldr/php/php/"
description: "Execute PHP scripts efficiently with PHP Script Runner. Easily test syntax, run code snippets, and manage built-in web servers. Free online tool, no registration required."
category: common
keywords:
- php script execution
- php command line
- php syntax checker
- php interactive mode
- php web server
- php extension list
- php configuration info
- php function info
- cli php
- php runner
features:
- Execute PHP scripts from the command line
- Check PHP syntax for errors
- Run PHP code interactively
- Start a built-in PHP web server
- Display installed PHP extensions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# php

> PHP command-line interface.
> More information: <https://php.net>.

- Parse and execute a PHP script:

`php {{path/to/file}}`

- Check syntax on (i.e. [l]int) a PHP script:

`php {{[-l|--syntax-check]}} {{path/to/file}}`

- Run PHP inter[a]ctively:

`php {{[-a|--interactive]}}`

- Run PHP code (Notes: Don't use <? ?> tags; escape double quotes with backslash):

`php {{[-r|--run]}} "{{code}}"`

- Start a PHP built-in web [S]erver in the current directory:

`php {{[-S|--server]}} {{host}}:{{port}}`

- List installed PHP extensions:

`php {{[-m|--modules]}}`

- Display information about the current PHP configuration:

`php {{[-i|--info]}}`

- Display information about a specific function:

`php {{[--rf|--rfunction]}} {{function_name}}`
