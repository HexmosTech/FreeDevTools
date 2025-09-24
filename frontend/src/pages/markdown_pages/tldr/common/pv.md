---
title: "Monitor Progress - Control Data Flow with pv | Online Free DevTools by Hexmos"
name: pv
path: /freedevtools/tldr/common/pv
canonical: "https://hexmos.com/freedevtools/tldr/common/pv/"
description: "Control data flow and monitor progress with pv, a powerful pipe viewer for Linux and macOS. Track data transfer speeds and amounts. Free online tool, no registration required."
category: common
keywords:
- pipe viewer linux
- monitor data progress
- pv command example
- linux progress bar
- macos data transfer
- command line progress
- data flow control
- file transfer monitor
- speed monitor command
- data pipe control
features:
- Display data transfer progress in real-time
- Measure data flow speed and amount
- Filter data and track output size
- Attach to running processes for file read progress
- Skip errors while reading erroneous files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pv

> Monitor the progress of data through a pipe.
> More information: <https://manned.org/pv>.

- Print the contents of the file and display a progress bar:

`pv {{path/to/file}}`

- Measure the speed and amount of data flow between pipes (`--size` is optional):

`{{command1}} | pv {{[-s|--size]}} {{expected_amount_of_data_for_eta}} | {{command2}}`

- Filter a file, see both progress and amount of output data:

`pv {{[-cN|--cursor --name]}} in {{path/to/file.txt}} | grep {{pattern}} | pv {{[-cN|--cursor --name]}} out > {{path/to/filtered_file.txt}}`

- Attach to an already running process and see its file reading progress:

`pv {{[-d|--watchfd]}} {{PID}}`

- Read an erroneous file, skip errors as `dd conv=sync,noerror` would:

`pv {{[-EE|--skip-errors --skip-errors]}} {{path/to/faulty_media}} > {{path/to/image.img}}`

- Stop reading after reading specified amount of data, rate limit to 1K/s:

`pv {{[-L|--rate-limit]}} {{1K}} {{[-S|--stop-at-size]}} {{maximum_file_size_to_be_read}}`

- Calculate hash (MD5, SHA1, SHA256, etc) of a large file and show progress:

`pv {{path/to/file}} | {{sha256sum}}`
