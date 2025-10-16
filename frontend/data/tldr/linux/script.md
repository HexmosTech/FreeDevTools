---
title: "Record Terminal - Log Sessions with Script | Online Free DevTools by Hexmos"
name: script
path: "/freedevtools/tldr/linux/script/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/script/"
description: "Record terminal sessions with Script, capturing all output to a file for later review and analysis. Free online tool, no registration required."
category: linux
keywords:
- terminal recording
- session logging
- linux terminal script
- typescript file generator
- command line logging
- bash script recorder
- terminal output capture
- record linux session
- script command linux
- shell session logging
features:
- Record terminal sessions to a file
- Append output to existing log files
- Capture timing information during session recording
- Flush output in real-time as it occurs
- Execute quietly without start and end messages
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# script

> Record all terminal output to a typescript file.
> More information: <https://manned.org/script>.

- Record a new session to a file named `typescript` in the current directory:

`script`

- Stop recording:

`exit`

- Record a new session to a custom filepath:

`script {{path/to/session.out}}`

- Append to an existing file:

`script {{[-a|--append]}} {{logfile.log}}`

- Record timing information (data is outputted to `stderr`):

`script {{[-t|--timing]}} 2> {{path/to/timing_file}}`

- Write out data as soon as it happens:

`script {{[-f|--flush]}} {{path/to/file}}`

- Execute quietly without start and done messages:

`script {{[-q|--quiet]}} {{logfile.log}}`

- Display help:

`script {{[-h|--help]}}`
