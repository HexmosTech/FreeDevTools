---
title: "Pipe Command - Connect Programs with Vertical Bar | Free DevTools"
name: vertical-bar
path: /freedevtools/tldr/common/vertical-bar
canonical: "https://hexmos.com/freedevtools/tldr/common/vertical-bar/"
description: "Connect programs with the Pipe Command. Chain commands together, redirecting output and error streams. Free online tool, no registration required."
category: common
keywords:
- data piping
- command chaining
- stdout redirection
- stdin input
- stderr redirection
- bash pipe
- shell pipeline
- linux pipe command
- macos pipe command
- vertical bar operator
features:
- Connect stdout of one command to stdin of another
- Redirect stderr along with stdout
- Create complex data processing workflows
- Chain multiple commands together seamlessly
- Simplify data transformations in command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# |

> Pipe data between programs.
> More information: <https://gnu.org/software/bash/manual/bash.html#Pipelines>.

- Pipe `stdout` to `stdin`:

`{{command}} | {{command}}`

- Pipe both `stdout` and `stderr` to `stdin`:

`{{command}} |& {{command}}`
