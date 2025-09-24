---
title: "Dirname - Calculate Parent Directory Path | Online Free DevTools by Hexmos"
name: dirname
path: "/freedevtools/tldr/common/dirname"
canonical: "https://hexmos.com/freedevtools/tldr/common/dirname/"
description: "Calculate parent directory with Dirname. Extract parent paths quickly and efficiently. Free online tool, no registration required."
category: common
keywords:
- parent directory calculator
- directory path extractor
- linux dirname command
- gnu dirname tool
- file path manipulation
- directory path calculation
- command line path tools
- path parent extraction
- path manipulation utils
- directory management commands
features:
- Calculate the parent directory of a given path
- Process multiple paths simultaneously
- Delimit output with a NUL character for xargs compatibility
- Simplify path extraction in shell scripts
- Automate directory manipulation tasks
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dirname

> Calculates the parent directory of a file or directory path.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/dirname-invocation.html>.

- Calculate the parent directory of a given path:

`dirname {{path/to/file_or_directory}}`

- Calculate the parent directory of multiple paths:

`dirname {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Delimit output with a NUL character instead of a newline (useful when combining with `xargs`):

`dirname {{[-z|--zero]}} {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`
