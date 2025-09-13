---
title: "SSH Command - Securely Connect to Remote Servers | Free DevTools"
name: ssh
path: /freedevtools/tldr/common/ssh
canonical: "https://hexmos.com/freedevtools/tldr/common/ssh/"
description: "Securely connect to remote servers with SSH Command. Use advanced options like port forwarding and jumping to manage connections. Free online tool, no registration required."
category: common
keywords:
- ssh remote access
- secure shell command
- ssh tunneling
- ssh port forwarding
- linux ssh client
- macos ssh client
- ssh jumphost
- ssh key authentication
- ssh command line
- secure remote connection
features:
- Establish secure connections to remote systems.
- Forward ports for secure tunneling.
- Connect through jump hosts to access internal servers.
- Authenticate with private keys for enhanced security.
- Execute commands remotely with TTY allocation.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ssh

> Secure Shell is a protocol used to securely log onto remote systems.
> It can be used for logging or executing commands on a remote server.
> More information: <https://man.openbsd.org/ssh>.

- Connect to a remote server:

`ssh {{username}}@{{remote_host}}`

- Connect to a remote server with a specific identity (private key):

`ssh -i {{path/to/key_file}} {{username}}@{{remote_host}}`

- Connect to a remote server with IP `10.0.0.1` and using a specific [p]ort (Note: `10.0.0.1` can be shortened to `10.1`):

`ssh {{username}}@10.0.0.1 -p {{2222}}`

- Run a command on a remote server with a [t]ty allocation allowing interaction with the remote command:

`ssh {{username}}@{{remote_host}} -t {{command}} {{command_arguments}}`

- SSH tunneling: [D]ynamic port forwarding (SOCKS proxy on `localhost:1080`):

`ssh -D {{1080}} {{username}}@{{remote_host}}`

- SSH tunneling: Forward a specific port (`localhost:9999` to `example.org:80`) along with disabling pseudo-[T]ty allocation and executio[N] of remote commands:

`ssh -L {{9999}}:{{example.org}}:{{80}} -N -T {{username}}@{{remote_host}}`

- SSH [J]umping: Connect through a jumphost to a remote server (Multiple jump hops may be specified separated by comma characters):

`ssh -J {{username}}@{{jump_host}} {{username}}@{{remote_host}}`

- Close a hanged session:

`<Enter><~><.>`
