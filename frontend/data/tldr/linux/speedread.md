---
title: "Speed Read Text - Increase Reading Speed with RSVP | Online Free DevTools by Hexmos"
name: speedread
path: "/freedevtools/tldr/linux/speedread/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/speedread/"
description: "Increase reading speed with Speed Read Text, a terminal-based RSVP reader.  Control your reading pace with adjustable WPM and multi-word display. Free online tool, no registration required."
category: linux
keywords:
  - text speed reader
  - RSVP reader
  - terminal speed reading
  - command line speed reader
  - rapid serial visual presentation
  - speed reading software
  - text reading optimization
  - wpm adjustment tool
  - line resume reader
  - multi-word display reader
features:
  - Read text files at adjustable words-per-minute (WPM) speeds.
  - Resume reading from a specific line number.
  - Display multiple words simultaneously for enhanced reading flow.
  - Dynamically adjust reading speed by 10% increments during a session.
  - Pause reading and display context lines for improved comprehension.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# speedread

> A simple terminal-based open source Spritz-alike.
> Shows input text as a per-word RSVP (rapid serial visual presentation) aligned on optimal reading points, which allows reading text at a much more rapid pace than usual as the eye can stay fixed on a single place.
> More information: <https://github.com/pasky/speedread>.

- Read a text file at a specific speed:

`cat {{path/to/file.txt}} | speedread -wpm {{250}}`

- Resume from a specific line:

`cat {{path/to/file.txt}} | speedread -resume {{5}}`

- Show multiple words at a time:

`cat {{path/to/file.txt}} | speedread -multiword`

- Slow down by 10% during the reading session:

`<[>`

- Speed up by 10% during the reading session:

`<]>`

- Pause, and show the last few lines as context:

`<Space>`
