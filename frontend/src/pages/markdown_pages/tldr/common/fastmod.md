---
title: "Regex Replacement - Replace Text Fast with fastmod | Free DevTools"
name: fastmod
path: /freedevtools/tldr/common/fastmod
canonical: "https://hexmos.com/freedevtools/tldr/common/fastmod/"
description: "Replace text fast with fastmod, a powerful command-line text replacement tool. Perform quick find and replace operations across your codebase. Free online tool, no registration required."
category: common
keywords:
- regex replacement tool
- find and replace command line
- bulk text replacement
- codebase text modification
- fast text substitution
- sed alternative
- text manipulation tool
- rust regex engine
- cross-platform text editor
- batch file replace
features:
- Replace text using regular expressions
- Perform case-insensitive replacements
- Filter files using glob patterns
- Replace exact strings without regex
- Print changed files after replacement
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fastmod

> A fast partial replacement for the codemod tool, replace and replace all in the whole codebase.
> Regexes are matched by Rust regex crate.
> More information: <https://github.com/facebookincubator/fastmod>.

- Replace a `regex` in all files of the current directory, ignoring files on .ignore and .gitignore:

`fastmod {{regex}} {{replacement}}`

- Replace a `regex` in case-insensitive mode in specific files or directories:

`fastmod --ignore-case {{regex}} {{replacement}} -- {{path/to/file path/to/directory ...}}`

- Replace a `regex` in a specific directory in files filtered with a case-insensitive glob pattern:

`fastmod {{regex}} {{replacement}} --dir {{path/to/directory}} --iglob {{'**/*.{js,json}'}}`

- Replace for an exact string in `.js` or JSON files:

`fastmod --fixed-strings {{exact_string}} {{replacement}} --extensions {{json,js}}`

- Replace for an exact string without prompt for a confirmation (disables `regex`):

`fastmod --accept-all --fixed-strings {{exact_string}} {{replacement}}`

- Replace for an exact string without prompt for a confirmation, printing changed files:

`fastmod --accept-all --print-changed-files --fixed-strings {{exact_string}} {{replacement}}`
