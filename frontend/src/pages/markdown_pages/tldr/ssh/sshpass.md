---
title: "SSH Password Provider - Automate SSH Logins | Online Free DevTools by Hexmos"
name: sshpass
path: /freedevtools/tldr/ssh/sshpass
canonical: "https://hexmos.com/freedevtools/tldr/ssh/sshpass/"
description: "Automate SSH logins with SSH Password Provider. Securely provide passwords and connect to remote servers from the command line. Free online tool, no registration required."
category: common
keywords:
- ssh password automation
- ssh login automation
- ssh command line password
- ssh password script
- linux sshpass utility
- macos sshpass tool
- ssh automated login
- ssh password provider
- password input ssh
- ssh non-interactive login
features:
- Provide passwords to SSH sessions non-interactively
- Automate SSH login using command line arguments
- Read SSH passwords from files
- Bypass interactive password prompts in SSH scripts
- Execute commands on remote servers with password-based authentication
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sshpass

> An SSH password provider.
> It works by creating a TTY, feeding the password into it, and then redirecting `stdin` to the SSH session.
> More information: <https://manned.org/sshpass>.

- Connect to a remote server using a password supplied on a file descriptor (in this case, `stdin`):

`sshpass -d {{0}} ssh {{user}}@{{hostname}}`

- Connect to a remote server with the password supplied as an option, and automatically accept unknown SSH keys:

`sshpass -p {{password}} ssh -o StrictHostKeyChecking=no {{user}}@{{hostname}}`

- Connect to a remote server using the first line of a file as the password, automatically accept unknown SSH keys, and launch a command:

`sshpass -f {{path/to/file}} ssh -o StrictHostKeyChecking=no {{user}}@{{hostname}} "{{command}}"`
