---
title: "Control rbash Shell - Restrict Bash Commands | Online Free DevTools by Hexmos"
name: rbash
path: /freedevtools/tldr/common/rbash
canonical: "https://hexmos.com/freedevtools/tldr/common/rbash/"
description: "Control shell commands with rbash. Restrict user access to Bash environment and enhance system security. Free online tool, no registration required."
category: common
keywords:
- restricted bash shell
- rbash command
- linux shell security
- command restriction
- bash environment control
- shell access control
- linux security hardening
- secure shell scripting
- command-line restriction
- unix shell lockdown
features:
- Restrict command execution in interactive sessions
- Prevent changing the working directory
- Disable redirecting command output
- Block modification of environment variables
- Limit shell script functionality
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rbash

> Restricted Bash shell, equivalent to `bash --restricted`.
> Does not permit changing the working directory, redirecting command output, or modifying environment variables, among other things.
> See also: `histexpand` for history expansion.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#The-Restricted-Shell>.

- Start an interactive shell session:

`rbash`

- Execute a command and then exit:

`rbash -c "{{command}}"`

- Execute a script:

`rbash {{path/to/script.sh}}`

- Execute a script, printing each command before executing it:

`rbash -x {{path/to/script.sh}}`

- Execute commands from a script, stopping at the first error:

`rbash -e {{path/to/script.sh}}`

- Read and execute commands from `stdin`:

`rbash -s`
