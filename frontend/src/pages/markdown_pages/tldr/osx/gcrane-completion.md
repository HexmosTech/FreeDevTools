---
title: "Gcrane - Generate Shell Completions | Free DevTools"
name: gcrane-completion
path: /freedevtools/tldr/osx/gcrane-completion
canonical: "https://hexmos.com/freedevtools/tldr/osx/gcrane-completion/"
description: "Generate shell autocompletion scripts with Gcrane. Enhance command-line efficiency and reduce errors with autocompletion suggestions. Free online tool, no registration required."
category: osx
keywords:
  - gcrane shell completion
  - bash completion generator
  - zsh completion generator
  - fish completion generator
  - powershell completion generator
  - command line autocompletion
  - shell script generator
  - cli completion script
  - gcrane autocomplete
  - container registry completion
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

`gcrane completion bash > $(brew --prefix)/etc/bash_completion.d/gcrane`

- Load completions for every new session (zsh):

`gcrane completion zsh > $(brew --prefix)/share/zsh/site-functions/_gcrane`

- Load completions for every new session (fish):

`gcrane completion fish > ~/.config/fish/completions/gcrane.fish`

- Display help:

`gcrane completion {{shell_name}} {{[-h|--help]}}`
