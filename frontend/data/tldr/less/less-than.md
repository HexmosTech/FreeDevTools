---
title: "Redirect Input - Control Input Streams | Online Free DevTools by Hexmos"
name: less-than
path: "/freedevtools/tldr/less/less-than/"
canonical: "https://hexmos.com/freedevtools/tldr/less/less-than/"
description: "Control input streams with Redirect Input (<). Manipulate stdin with files, here documents, and here strings. Free online tool, no registration required."
category: common
keywords:
- stdin redirection
- bash input redirection
- command line input
- here document
- here string
- file redirection
- process substitution
- file descriptor redirection
- linux input stream
- input stream control
features:
- Redirect file content to stdin
- Pass multiline text to stdin using here documents
- Pass strings to stdin using here strings
- Redirect command output to a file descriptor
- Disregard leading tabs in here documents
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# <

> Redirect data to `stdin`.
> More information: <https://gnu.org/software/bash/manual/bash.html#Redirecting-Input>.

- Redirect a file to `stdin` (achieves the same effect as `cat file.txt |`):

`{{command}} < {{path/to/file.txt}}`

- Create a here document and pass that into `stdin` (requires a multiline command):

`{{command}} << {{EOF}} <Enter> {{multiline_text}} <Enter> {{EOF}}`

- Create a here string and pass that into `stdin` (achieves the same effect as `echo string |`):

`{{command}} <<< {{string}}`

- Process data from a file and write the output to another file:

`{{command}} < {{path/to/file.txt}} > {{path/to/file2.txt}}`

- Write a here document into a file:

`cat << {{EOF}} > {{path/to/file.txt}} <Enter> {{multiline_data}} <Enter> {{EOF}}`

- Disregard leading tabs (good for scripts with indentation but does not work for spaces):

`cat <<- {{EOF}} > {{path/to/file.txt}} <Enter> {{multiline_data}} <Enter> {{EOF}}`

- Pass command output to a program as a file descriptor:

`diff <({{command1}}) <({{command2}})`

- Open a persistent file descriptor:

`exec {{3}}<{{path/to/file}}`
