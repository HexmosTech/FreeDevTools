---
title: "Control REPL Commands - rlwrap Line Editing | Online Free DevTools by Hexmos"
name: rlwrap
path: "/freedevtools/tldr/common/rlwrap/"
canonical: "https://hexmos.com/freedevtools/tldr/common/rlwrap/"
description: "Control REPL command line editing with rlwrap, enhancing functionality. Add persistent history and prompt completion to any REPL. Free online tool, no registration required."
category: common
keywords:
- REPL command control
- line editing tool
- persistent history repl
- prompt completion repl
- rlwrap line editor
- rlwrap completion
- rlwrap history
- command line editing
- repl wrapper linux
- repl wrapper macos
features:
- Add line editing to REPL commands
- Maintain persistent command history
- Enable prompt completion for REPLs
- Support ANSI color codes in prompts
- Facilitate case-sensitive filename completion
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rlwrap

> Add line editing, persistent history and prompt completion to a REPL command.
> More information: <https://manned.org/rlwrap>.

- Run a REPL command with line editing, persistent history and prompt completion:

`rlwrap {{command}}`

- Use all words seen on input and output for prompt completion:

`rlwrap {{[-r|--remember]}} {{command}}`

- Better prompt completion if prompts contain ANSI colour codes:

`rlwrap {{[-A|--ansi-colour-aware]}} {{command}}`

- Enable filename completion (case sensitive):

`rlwrap {{[-c|--complete-filenames]}} {{command}}`

- Add coloured prompts, use colour name, or an ASCI-conformant colour specification. Use an uppercase colour name for bold styling:

`rlwrap {{[-p|--prompt-colour=]}}{{black|red|green|yellow|blue|cyan|purple|white|colour_spec}} {{command}}`
