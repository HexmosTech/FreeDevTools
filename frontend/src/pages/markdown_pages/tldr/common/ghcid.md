---
title: "GHCID Compiler - Control Haskell Compilation | Free DevTools"
name: ghcid
path: /freedevtools/tldr/common/ghcid
canonical: "https://hexmos.com/freedevtools/tldr/common/ghcid/"
description: "Control Haskell compilation with GHCID. Instantly recompile code on file changes and debug Haskell projects using command line. Free online tool, no registration required."
category: common
keywords:
- Haskell compiler
- GHCID haskell
- Haskell development
- Haskell IDE
- Real-time compilation
- Haskell reload
- Haskell watcher
- GHCID command line
- Linux haskell
- MacOS haskell
features:
- Recompiles Haskell code on file changes
- Displays compile errors and warnings
- Executes custom actions on file save
- Writes GHC compiler output to a file
- Executes REPL commands on each file save
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ghcid

> Simple and efficient CLI IDE for Haskell that reloads code on file changes.
> Continuously displays compile errors, warnings, and test results.
> More information: <https://github.com/ndmitchell/ghcid>.

- Start `ghcid` and monitor a Haskell file for changes:

`ghcid {{path/to/Main.hs}}`

- Start `ghcid` with a specific command, such as loading a Stack or Cabal project:

`ghcid --command "{{stack ghci Main.hs}}"`

- Run an action (default `main`) on each file save:

`ghcid --run={{action}} {{path/to/Main.hs}}`

- Set maximum height and width (default to console height and width):

`ghcid --height={{height}} --width={{width}} {{path/to/Main.hs}}`

- Write full GHC compiler output to a file:

`ghcid --outputfile={{path/to/output_file.txt}} {{path/to/Main.hs}}`

- Execute REPL commands (eg. `-- $> 1+1`) on each file save:

`ghcid --allow-eval {{path/to/Main.hs}}`
