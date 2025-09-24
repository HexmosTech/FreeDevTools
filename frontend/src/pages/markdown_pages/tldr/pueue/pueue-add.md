---
title: "Pueue Add - Enqueue Tasks | Online Free DevTools by Hexmos"
name: pueue-add
path: /freedevtools/tldr/pueue/pueue-add
canonical: "https://hexmos.com/freedevtools/tldr/pueue/pueue-add/"
description: "Enqueue tasks efficiently with Pueue Add. Manage task dependencies and execution order easily using command line. Free online tool, no registration required."
category: common
keywords:
- pueue task enqueue
- queue task management
- background process scheduler
- command line task runner
- pueue delayed execution
- linux task scheduler
- macos task scheduler
- pueue task dependencies
- pueue group scheduling
- pueue labeled tasks
features:
- Enqueue commands to a task queue
- Specify task dependencies for sequential execution
- Schedule tasks with delays using datetime formats
- Assign tasks to named groups for organized execution
- Add labels to tasks for better identification and management
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pueue add

> Enqueue a task for execution.
> More information: <https://github.com/Nukesor/pueue>.

- Add any command to the default queue:

`pueue add {{command}}`

- Pass a list of flags or arguments to a command when enqueuing:

`pueue add -- {{command --arg -f}}`

- Add a command but do not start it if it's the first in a queue:

`pueue add {{[-s|--stashed]}} -- {{rsync --archive --compress /local/directory /remote/directory}}`

- Add a command to a group and start it immediately, see `pueue group` to manage groups:

`pueue add {{[-i|--immediate]}} {{[-g|--group]}} "{{CPU_intensive}}" -- {{ffmpeg -i input.mp4 frame_%d.png}}`

- Add a command and start it after commands 9 and 12 finish successfully:

`pueue add {{[-a|--after]}} {{9}} {{12}} {{[-g|--group]}} "{{torrents}}" -- {{transmission-cli torrent_file.torrent}}`

- Add a command with a label after some delay has passed, see `pueue enqueue` for valid datetime formats:

`pueue add {{[-l|--label]}} "{{compressing large file}}" {{[-d|--delay]}} "{{wednesday 10:30pm}}" -- "{{7z a compressed_file.7z large_file.xml}}"`
