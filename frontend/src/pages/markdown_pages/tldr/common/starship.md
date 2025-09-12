---
title: "Starship Prompt - Customize Shell Prompts | Free DevTools"
name: starship
path: /freedevtools/tldr/common/starship
canonical: "https://hexmos.com/freedevtools/tldr/common/starship/"
description: "Customize shell prompts with Starship. Configure shell prompts, integrate across multiple shells, and enhance terminal experience with this blazing-fast tool. Free online tool, no registration required."
category: common
keywords:
- starship prompt customization
- cross-shell prompt manager
- terminal prompt configuration
- bash prompt starship
- zsh prompt starship
- powershell prompt starship
- fish prompt starship
- starship configuration manager
- custom shell theme
- starship module configuration
features:
- Customize prompts for various shells (bash, zsh, powershell, etc.)
- Analyze and explain prompt rendering components and time
- Generate shell-specific integration code for Starship
- Print and manage Starship configuration settings
- Create bug reports with system and configuration information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# starship

> The minimal, blazing-fast, and infinitely customizable prompt for any shell.
> Some subcommands such as `init` have their own usage documentation.
> More information: <https://starship.rs>.

- Print the starship integration code for the specified shell:

`starship init {{bash|elvish|fish|ion|powershell|tcsh|zsh|nu|xonsh|cmd}}`

- Explain each part of the current prompt and show the time taken to render them:

`starship explain`

- Print the computed starship configuration (use `--default` to print default configuration instead):

`starship print-config`

- List supported modules:

`starship module --list`

- Edit the starship configuration in the default editor:

`starship config`

- Create a bug report GitHub issue pre-populated with information about the system and starship configuration:

`starship bug-report`

- Print the completion script for the specified shell:

`starship completions {{bash|elvish|fish|powershell|zsh}}`

- Display help for a subcommand:

`starship {{subcommand}} --help`
