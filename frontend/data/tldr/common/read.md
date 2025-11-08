---
title: "Read Input - Retrieve Data from STDIN | Online Free DevTools by Hexmos"
name: read
path: "/freedevtools/tldr/common/read/"
canonical: "https://hexmos.com/freedevtools/tldr/common/read/"
description: "Retrieve data easily with Read Input command. Extract shell input, create arrays, and manage stdin streams with this free online tool, no registration required."
category: common
keywords:
- shell read input
- stdin data retrieval
- bash input command
- command line read
- shell script input
- bash stdin reader
- linux read command
- macos read input
- terminal input capture
- variable assignment bash
features:
- Read data from standard input (stdin)
- Store input as variables in shell scripts
- Read and assign multiple values from stdin
- Control maximum characters read from stdin
- Silently read input without echoing to screen
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# read

> Shell builtin for retrieving data from `stdin`.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-read>.

- Store data that you type from the keyboard:

`read {{variable}}`

- Store each of the next lines you enter as values of an array:

`read -a {{array}}`

- Specify the number of maximum characters to be read:

`read -n {{character_count}} {{variable}}`

- Assign multiple values to multiple variables:

`read {{_ variable1 _ variable2}} <<< "{{The surname is Bond}}"`

- Do not let backslash (\\) act as an escape character:

`read -r {{variable}}`

- Display a prompt before the input:

`read -p "{{Enter your input here: }}" {{variable}}`

- Do not echo typed characters (silent mode):

`read -s {{variable}}`

- Read `stdin` and perform an action on every line:

`while read line; do {{echo|ls|rm|...}} "$line"; done < {{/dev/stdin|path/to/file|...}}`
