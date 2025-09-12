---
title: "Generate Starship Init - Shell Integration | Free DevTools"
name: starship-init
path: /freedevtools/tldr/common/starship-init
canonical: "https://hexmos.com/freedevtools/tldr/common/starship-init/"
description: "Generate shell integration code with Starship Init. Customize your terminal prompt and enhance your command-line experience. Free online tool, no registration required."
category: common
keywords:
- starship init generator
- shell integration code
- terminal prompt customization
- starship config bash
- starship config zsh
- starship prompt fish
- cross-shell prompt
- command-line interface
- prompt configuration
- starship prompt powershell
features:
- Generate shell integration code for various shells
- Customize terminal prompt appearance and behavior
- Integrate Starship with Bash, Zsh, Fish, and other shells
- Append Starship integration code to shell configuration files
- Display help information about Starship init
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# starship init

> Print shell integration code for starship.
> More information: <https://starship.rs>.

- Print the starship integration code for the specified shell:

`starship init {{bash|elvish|fish|ion|powershell|tcsh|zsh}}`

- Append the `starship` integration code to `~/.bashrc`:

`starship init {{bash}} >> {{~/.bashrc}}`

- Append the `starship` integration code to `~/.zshrc`:

`starship init {{zsh}} >> {{~/.zshrc}}`

- Display help:

`starship init --help`
