---
title: "Reflex - Watch Files & Rerun Commands | Online Free DevTools by Hexmos"
name: reflex
path: "/freedevtools/tldr/common/reflex/"
canonical: "https://hexmos.com/freedevtools/tldr/common/reflex/"
description: "Watch file changes and rerun commands with Reflex. Automate builds, trigger deployments, and monitor file modifications using command-line interface. Free online tool, no registration required."
category: common
keywords:
- file watcher
- file change monitor
- command runner
- automated build tool
- directory monitor
- file system event handler
- reflex command
- file modification trigger
- command line automation
- go application watcher
features:
- Automatically rerun commands on file changes
- Monitor directory and trigger events
- Specify file patterns using regular expressions
- Ignore specific directories during monitoring
- Substitute filenames in command execution
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# reflex

> Watch a directory and rerun a command when certain files change.
> More information: <https://github.com/cespare/reflex>.

- Rebuild with `make` if any file changes:

`reflex make`

- Compile and run Go application if any `.go` file changes:

`reflex --regex='{{\.go$}}' {{go run .}}`

- Ignore a directory when watching for changes:

`reflex --inverse-regex='{{^dir/}}' {{command}}`

- Run command when reflex starts and restarts on file changes:

`reflex --start-service=true {{command}}`

- Substitute the filename that changed in:

`reflex -- echo {}`
