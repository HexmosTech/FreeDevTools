---
title: "Asciinema - Record Terminal Sessions | Online Free DevTools by Hexmos"
name: asciinema
path: /freedevtools/tldr/common/asciinema
canonical: "https://hexmos.com/freedevtools/tldr/common/asciinema/"
description: "Record terminal sessions with Asciinema. Create and share recordings of your command-line interactions for documentation or training. Free online tool, no registration required."
category: common
keywords:
- terminal recording
- asciicast recording
- command-line recording
- terminal session recorder
- asciinema cast
- terminal recorder linux
- terminal recorder macos
- asciinema upload
- asciinema play
- cli recording
features:
- Record terminal sessions to a local file
- Play back terminal recordings from local or remote sources
- Upload recordings to asciinema.org
- Limit idle time during recordings
- Print the full output of a recording to the console
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# asciinema

> Record and replay terminal sessions, and optionally share them on <https://asciinema.org>.
> See also: `terminalizer`.
> More information: <https://docs.asciinema.org/manual/cli/usage>.

- Associate the local install of `asciinema` with an asciinema.org account:

`asciinema auth`

- Make a new recording and save it to a local file (finish it with `<Ctrl d>` or type `exit`):

`asciinema rec {{path/to/recording.cast}}`

- Replay a terminal recording from a local file:

`asciinema play {{path/to/recording.cast}}`

- Replay a terminal recording hosted on <https://asciinema.org>:

`asciinema play https://asciinema.org/a/{{cast_id}}`

- Make a new recording, limiting any idle time to at most 2.5 seconds:

`asciinema rec {{[-i|--idle-time-limit]}} 2.5`

- Print the full output of a locally saved recording:

`asciinema cat {{path/to/recording.cast}}`

- Upload a locally saved terminal session to asciinema.org:

`asciinema upload {{path/to/recording.cast}}`
