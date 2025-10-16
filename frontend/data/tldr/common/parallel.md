---
title: "Parallel Command - Run Commands Simultaneously | Online Free DevTools by Hexmos"
name: parallel
path: "/freedevtools/tldr/common/parallel/"
canonical: "https://hexmos.com/freedevtools/tldr/common/parallel/"
description: "Execute commands in parallel with Parallel Command. Accelerate workflows by running tasks on multiple cores. Free online tool, no registration required."
category: common
keywords:
- parallel command execution
- parallel processing linux
- multi core command runner
- parallel task management
- parallel shell scripting
- linux parallel execution
- parallel command line tool
- parallel job scheduler
- gnu parallel commands
- distributed command execution
features:
- Execute commands on multiple CPU cores simultaneously
- Read arguments from standard input for dynamic command generation
- Support replacement strings for flexible command customization
- Distribute tasks across multiple machines via SSH
- Manage job execution on large datasets with block processing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# parallel

> Run commands on multiple CPU cores.
> More information: <https://www.gnu.org/software/parallel/man.html>.

- Gzip several files at once, using all cores:

`parallel gzip ::: {{path/to/file1 path/to/file2 ...}}`

- Read arguments from `stdin`, run 4 jobs at once:

`ls *.txt | parallel {{[-j|--jobs]}} 4 gzip`

- Convert JPEG images to PNG using replacement strings:

`parallel convert {} {.}.png ::: *.jpg`

- Parallel xargs, cram as many args as possible onto one command:

`{{args}} | parallel -X {{command}}`

- Break `stdin` into ~1M blocks, feed each block to `stdin` of new command:

`cat {{big_file.txt}} | parallel --pipe --block 1M {{command}}`

- Run on multiple machines via SSH:

`parallel {{[-S|--sshlogin]}} {{machine1}},{{machine2}} {{command}} ::: {{arg1}} {{arg2}}`

- Download 4 files simultaneously from a text file containing links showing progress:

`parallel {{[-j|--jobs]}} 4 --bar --eta wget {{[-q|--quote]}} {} :::: {{path/to/links.txt}}`

- Print the jobs which `parallel` is running in `stderr`:

`parallel {{[-t|--verbose]}} {{command}} ::: {{args}}`
