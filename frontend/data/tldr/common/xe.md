---
title: "Execute Command - Control Process Execution with xe | Online Free DevTools by Hexmos"
name: xe
path: "/freedevtools/tldr/common/xe/"
canonical: "https://hexmos.com/freedevtools/tldr/common/xe/"
description: "Control process execution instantly with xe. Execute commands on each line of input, parallelize execution, and manage shellscripts. Free online tool, no registration required."
category: common
keywords:
- command line execution
- parallel process execution
- shellscript execution
- xargs alternative
- xe command
- line processing
- linux command execution
- macos command execution
- batch command execution
- input line processing
features:
- Execute commands for each input line
- Substitute placeholders in commands
- Join multiple lines into a single command
- Limit the number of parallel processes
- Execute shellscripts with line processing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xe

> Execute a command once for each line piped from another command or file.
> More information: <https://github.com/leahneukirchen/xe/blob/master/README>.

- Run a command once for each line of input data as arguments:

`{{arguments_source}} | xe {{command}}`

- Execute the commands, replacing any occurrence of the placeholder (marked as `{}`) with the input line:

`{{arguments_source}} | xe {{command}} {} {{optional_extra_arguments}}`

- Execute a shellscript, joining every `N` lines into a single call:

`echo -e 'a\nb' | xe -N{{2}} -s 'echo $2 $1'`

- Delete all files with a `.backup` extension:

`find . -name {{'*.backup'}} | xe rm -v`

- Run up to `max-jobs` processes in parallel; the default is 1. If `max-jobs` is 0, xe will run as many processes as cpu cores:

`{{arguments_source}} | xe -j {{max-jobs}} {{command}}`
