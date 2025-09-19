---
title: "Nohup - Execute Commands Persistently | Online Free DevTools by Hexmos"
name: nohup
path: /freedevtools/tldr/common/nohup
canonical: "https://hexmos.com/freedevtools/tldr/common/nohup/"
description: "Execute commands persistently with Nohup. Prevent command termination after terminal closure and ensure background process continuation. Free online tool, no registration required."
category: common
keywords:
- background process execution
- terminal disconnection command
- persistent process launcher
- nohup command execution
- linux background process
- unix process persistence
- detached process execution
- nohup shell script
- background job management
- command line nohup
features:
- Run commands that persist after terminal closure
- Launch processes in the background using nohup
- Execute shell scripts without terminal dependency
- Redirect command output to a specified file
- Prevent process termination due to terminal signals
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nohup

> Allows for a process to live when the terminal gets killed.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/nohup-invocation.html>.

- Run a process that can live beyond the terminal:

`nohup {{command}} {{argument1 argument2 ...}}`

- Launch `nohup` in background mode:

`nohup {{command}} {{argument1 argument2 ...}} &`

- Run a shell script that can live beyond the terminal:

`nohup {{path/to/script.sh}} &`

- Run a process and write the output to a specific file:

`nohup {{command}} {{argument1 argument2 ...}} > {{path/to/output_file}} &`
