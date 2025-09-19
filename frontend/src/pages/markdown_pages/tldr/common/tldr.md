---
title: "TLDR - Display Command Help Pages | Online Free DevTools by Hexmos"
name: tldr
path: /freedevtools/tldr/common/tldr
canonical: "https://hexmos.com/freedevtools/tldr/common/tldr/"
description: "Display command help with TLDR. Access concise, community-maintained command documentation instantly. Free online tool, no registration required. Get quick shell documentation."
category: common
keywords:
- command help pages
- tldr pages
- command line documentation
- quick shell help
- tldr client
- linux command help
- macOS command help
- windows command help
- common commands
- simplified man pages
features:
- Display concise command documentation
- Access community-maintained help pages
- Support multiple platforms (Linux, macOS, Windows)
- Update local cache of tldr pages
- List available command examples
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tldr

> Display simple help pages for command-line tools from the tldr-pages project.
> Note: The `--language` and `--list` options are not required by the client specification, but most clients implement them.
> More information: <https://github.com/tldr-pages/tldr/blob/main/CLIENT-SPECIFICATION.md#command-line-interface>.

- Print the tldr page for a specific command (hint: this is how you got here!):

`tldr {{command}}`

- Print the tldr page for a specific subcommand:

`tldr {{command}} {{subcommand}}`

- Print the tldr page for a command in the given language (if available, otherwise fall back to English):

`tldr {{[-L|--language]}} {{language_code}} {{command}}`

- Print the tldr page for a command from a specific platform:

`tldr {{[-p|--platform]}} {{android|common|freebsd|linux|osx|netbsd|openbsd|sunos|windows}} {{command}}`

- Update the local cache of tldr pages:

`tldr {{[-u|--update]}}`

- List all pages for the current platform and `common`:

`tldr {{[-l|--list]}}`

- List all available subcommand pages for a command:

`tldr {{[-l|--list]}} | grep {{command}} | column`

- Print the tldr page for a random command:

`tldr {{[-l|--list]}} | shuf {{[-n|--head-count]}} 1 | xargs tldr`
