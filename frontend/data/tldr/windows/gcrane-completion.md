---
title: "Gcrane - Generate Shell Autocompletion | Online Free DevTools by Hexmos"
name: gcrane-completion
path: "/freedevtools/tldr/windows/gcrane-completion/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/gcrane-completion/"
description: "Generate shell autocompletions with Gcrane. Streamline command-line workflows by enabling tab completion for bash, zsh, powershell & fish. Free online tool, no registration required."
category: windows
keywords:
- Crane shell completion
- Container Registry autocompletion
- Windows autocompletion script
- Gcrane bash completion
- Gcrane zsh completion
- Gcrane powershell completion
- Gcrane fish completion
- Docker image completion
- Container command completion
- Command line completion generation
features:
- Generate bash completion scripts
- Generate zsh completion scripts
- Generate powershell completion scripts
- Generate fish completion scripts
- Enable/disable completion descriptions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gcrane completion

> Generate the autocompletion script for gcrane for the specified shell.
> The available shells are `bash`, `fish`, `powershell`, and `zsh`.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/gcrane/README.md>.

- Generate the autocompletion script for your shell:

`gcrane completion {{shell_name}}`

- Disable completion descriptions:

`gcrane completion {{shell_name}} --no-descriptions`

- Load completions in your current shell session (powershell):

`gcrane completion powershell | Out-String | Invoke-Expression`

- Load completions for every new session (powershell):

`gcrane completion powershell | Out-String | Invoke-Expression`

- Display help:

`gcrane completion {{shell_name}} {{[-h|--help]}}`
