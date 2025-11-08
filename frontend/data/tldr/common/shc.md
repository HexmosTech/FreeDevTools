---
title: "SHC Compiler - Compile Shell Scripts | Online Free DevTools by Hexmos"
name: shc
path: "/freedevtools/tldr/common/shc/"
canonical: "https://hexmos.com/freedevtools/tldr/common/shc/"
description: "Compile shell scripts with SHC Compiler. Secure shell scripts by converting them into executables with expiration options. Free online tool, no registration required."
category: common
keywords:
- shell script compiler
- script to executable converter
- shc compiler linux
- shc compiler macos
- shc script obfuscation
- shc script protection
- shc executable generator
- shc expiration date
- shell script security
- compile shell script
features:
- Convert shell scripts to binary executables
- Protect shell script source code from viewing
- Set expiration dates for compiled scripts
- Display custom message upon script expiration
- Create self-contained executable files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# shc

> Generic shell script compiler.
> More information: <https://manned.org/shc>.

- Compile a shell script:

`shc -f {{script}}`

- Compile a shell script and specify an output binary file:

`shc -f {{script}} -o {{binary}}`

- Compile a shell script and set an expiration date for the executable:

`shc -f {{script}} -e {{dd/mm/yyyy}}`

- Compile a shell script and set a message to display upon expiration:

`shc -f {{script}} -e {{dd/mm/yyyy}} -m "{{Please contact your provider}}"`
