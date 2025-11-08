---
title: "Edit Text - Control Text Files with ed | Online Free DevTools by Hexmos"
name: ed
path: "/freedevtools/tldr/common/ed/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ed/"
description: "Edit text files directly with ed, the original Unix text editor. Replace strings, navigate lines, and modify content efficiently. Free online tool, no registration required."
category: common
keywords:
- text editor command
- unix text editor
- linux text editor
- ed command
- gnu ed
- file editing tool
- command line text editor
- regex replace
- search and replace text
- batch text edit
features:
- Edit files from the command line
- Perform regex based find and replace
- Start interactive editor sessions
- Control exit status behavior
- Execute commands without diagnostics
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ed

> The original Unix text editor.
> See also: `awk`, `sed`.
> More information: <https://www.gnu.org/software/ed/manual/ed_manual.html>.

- Start an interactive editor session with an empty document:

`ed`

- Start an interactive editor session with an empty document and a specific prompt:

`ed {{[-p|--prompt]}} '{{> }}'`

- Start an interactive editor session with user-friendly errors:

`ed {{[-v|--verbose]}}`

- Start an interactive editor session with an empty document and without diagnostics, byte counts and '!' prompt:

`ed {{[-q|--quiet]}} {{[-s|--script]}}`

- Start an interactive editor session without exit status change when command fails:

`ed {{[-l|--loose-exit-status]}}`

- Edit a specific file (this shows the byte count of the loaded file):

`ed {{path/to/file}}`

- Replace a string with a specific replacement for all lines:

`,s/{{regex}}/{{replacement}}/g<Enter>`

- Exit `ed`:

`q<Enter>`
