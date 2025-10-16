---
title: "Generate Random Numbers - Control Linux RNG with haveged | Online Free DevTools by Hexmos"
name: haveged
path: "/freedevtools/tldr/linux/haveged/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/haveged/"
description: "Generate random numbers on Linux with haveged. Enhance system entropy and control random number generation using command line. Free online tool, no registration required."
category: linux
keywords:
- Random number generator linux
- Linux entropy generator
- Haveged command line
- Hardware random number generator
- RNG management linux
- Secure random number generation
- Linux random data source
- Entropy pool management
- Haveged foreground execution
- Random number file output
features:
- Generate random numbers for enhanced entropy
- Run haveged in foreground mode
- Specify output file path for random data
- Set daemon run level
- Configure collection buffer size
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# haveged

> Hardware-based random number generator.
> More information: <https://manned.org/haveged>.

- Generate a random number:

`sudo haveged`

- Run `haveged` in foreground:

`sudo haveged {{[-F|--Foreground]}}`

- Set file path for output of `haveged`:

`sudo haveged {{[-f|--file]}} {{path/to/file}}`

- Set run level for daemon:

`sudo haveged {{[-r|--run]}} {{runlevel}}`

- Set collection buffer size in kibibyte words:

`sudo haveged {{[-b|--buffer]}} {{buffersizeinKW}}`

- Insert a command to an already running `haveged` process or daemon:

`sudo haveged {{[-c|--command]}} {{command}}`

- Set cache size in kibibyte words:

`sudo haveged {{[-d|--data]}} {{cachesizeinKW}}`

- Set number of bytes to write to the output file:

`sudo haveged {{[-n|--number]}} {{byteamount}}`
