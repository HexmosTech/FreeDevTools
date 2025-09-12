---
title: "Execute Typescript - Control Shell Scripts in Real-Time | Free DevTools"
name: scriptlive
path: /freedevtools/tldr/linux/scriptlive
canonical: "https://hexmos.com/freedevtools/tldr/linux/scriptlive/"
description: "Execute typescript files in real-time with scriptlive. Replay shell sessions and control timing using a timing file. Free online tool, no registration required."
category: linux
keywords:
- typescript execution
- real-time shell script
- script replay
- timing file playback
- shell session analysis
- linux script control
- command line typescript
- terminal recording
- scriptlive timing
- typescript automation
features:
- Execute typescript files with precise timing
- Control shell script execution speed
- Replay typescript files created with `script --log-in`
- Limit the maximum delay between commands
- Simulate interactive terminal sessions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# scriptlive

> Execute a typescript created by the `script` command in real-time.
> See also: `script`.
> More information: <https://manned.org/scriptlive>.

- Execute a typescript in real-time:

`scriptlive {{path/to/timing_file}} {{path/to/typescript}}`

- Execute a typescript at double the original speed:

`scriptlive {{path/to/timing_file}} {{path/to/typescript}} --divisor 2`

- Execute a typescript created using `--log-in` option of `script`:

`scriptlive --log-in {{path/to/stdin_log_file}} {{path/to/typescript}}`

- Execute a typescript waiting at most 2 seconds between each command:

`scriptlive {{path/to/timing_file}} {{path/to/typescript}} --maxdelay 2`
