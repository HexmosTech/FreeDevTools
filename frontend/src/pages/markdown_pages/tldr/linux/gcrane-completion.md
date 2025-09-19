---
title: "Generate gcrane Completion Scripts | Online Free DevTools by Hexmos"
name: gcrane-completion
path: /freedevtools/tldr/linux/gcrane-completion
canonical: "https://hexmos.com/freedevtools/tldr/linux/gcrane-completion/"
description: "Generate shell completion scripts with gcrane. Simplify command-line interactions and improve productivity using autocompletion. Free online tool, no registration required."
category: linux
keywords:
  - gcrane completion bash
  - gcrane completion zsh
  - gcrane completion fish
  - gcrane completion powershell
  - container registry autocompletion
  - shell script generation
  - command line completion script
  - container tool completion
  - docker autocompletion
  - Kubernetes completion
features:
  - Generate autocompletion scripts for bash
  - Generate autocompletion scripts for zsh
  - Generate autocompletion scripts for fish
  - Generate autocompletion scripts for powershell
  - Disable completion descriptions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gcrane completion

> Generate the autocompletion script for gcrane for the specified shell.
> The available shells are `bash`, `fish`, `powershell`, and `zsh`.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/gcrane/README.md>.

- Generate the autocompletion script for your shell:

`gcrane completion {{shell_name}}`

- Disable completion descriptions:

`gcrane completion {{shell_name}} --no-descriptions`

- Load completions in your current shell session (bash/zsh):

`source <(gcrane completion bash/zsh)`

- Load completions in your current shell session (fish):

`gcrane completion fish | source`

- Load completions for every new session (bash):

`gcrane completion bash > /etc/bash_completion.d/gcrane`

- Load completions for every new session (zsh):

`gcrane completion zsh > "${fpath[1]}/_gcrane"`

- Load completions for every new session (fish):

`gcrane completion fish > ~/.config/fish/completions/gcrane.fish`

- Display help:

`gcrane completion {{shell_name}} {{[-h|--help]}}`
