---
title: "PSSH Control - Parallel SSH Execution | Online Free DevTools by Hexmos"
name: pssh
path: /freedevtools/tldr/common/pssh
canonical: "https://hexmos.com/freedevtools/tldr/common/pssh/"
description: "Control parallel SSH connections with PSSH. Execute commands on multiple servers simultaneously for efficient system administration. Free online tool, no registration required."
category: common
keywords:
- parallel ssh execution
- pssh command line
- remote server control
- linux server management
- unix parallel execution
- ssh batch commands
- parallel process execution
- distributed command execution
- server automation tool
- batch ssh tool
features:
- Execute commands on multiple hosts simultaneously
- Distribute commands via SSH in parallel
- Specify host lists from a file
- Manage SSH connections with custom arguments
- Limit the number of parallel connections
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pssh

> Parallel SSH program.
> More information: <https://manned.org/pssh>.

- Run a command on two hosts, and print its output on each server inline:

`pssh {{[-i|--inline]}} {{[-H|--host]}} "{{host1}} {{host2}}" {{hostname --ip-addresses}}`

- Run a command and save the output to separate files:

`pssh {{[-H|--host]}} {{host1}} {{[-H|--host]}} {{host2}} {{[-o|--outdir]}} {{path/to/output_dir}} {{hostname --ip-addresses}}`

- Run a command on multiple hosts, specified in a new-line separated file:

`pssh {{[-i|--inline]}} {{[-h|--hosts]}} {{path/to/hosts_file}} {{hostname --ip-addresses}}`

- Run a command as root (this asks for the root password):

`pssh {{[-i|--inline]}} {{[-h|--hosts]}} {{path/to/hosts_file}} {{[-A|--askpass]}} {{[-l|--user]}} {{root_username}} {{hostname --ip-addresses}}`

- Run a command with extra SSH arguments:

`pssh {{[-i|--inline]}} {{[-h|--hosts]}} {{path/to/hosts_file}} {{[-x|--extra-arg]}} "{{-O VisualHostKey=yes}}" {{hostname --ip-addresses}}`

- Run a command limiting the number of parallel connections to 10:

`pssh {{[-i|--inline]}} {{[-h|--hosts]}} {{path/to/hosts_file}} {{[-p|-par]}} {{10}} '{{cd dir; ./script.sh; exit}}'`
