---
title: "Chronic - Suppress Command Output | Online Free DevTools by Hexmos"
name: chronic
path: /freedevtools/tldr/common/chronic
canonical: "https://hexmos.com/freedevtools/tldr/common/chronic/"
description: "Suppress command output with Chronic. Only display stdout and stderr if the command fails. Troubleshoot script errors effectively. Free online tool, no registration required."
category: common
keywords:
- command output suppressor
- chronic command display
- stderr output controller
- stdout output controller
- linux error display
- macos error display
- bash command suppressor
- shell script debugger
- script error reporter
- terminal output filter
features:
- Suppresses stdout and stderr on success
- Displays output only on non-zero exit code
- Provides verbose mode for debugging
- Filters output based on stderr content
- Integrates easily into shell scripts
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# chronic

> Display `stdout` and `stderr` of a command if and only if it fails.
> More information: <https://manned.org/chronic>.

- Display `stdout` and `stderr` of the specified command if and only if it produces a non-zero exit code or crashes:

`chronic {{command}} {{option1 option2 ...}}`

- Display `stdout` and `stderr` of the specified command if and only if it produces a non-empty `stderr`:

`chronic -e {{command}} {{option1 option2 ...}}`

- Enable [v]erbose mode:

`chronic -v {{command}} {{option1 option2 ...}}`
