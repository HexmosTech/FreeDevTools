---
title: "Kotlin Compiler - Compile Kotlin Code | Online Free DevTools by Hexmos"
name: kotlinc
path: /freedevtools/tldr/common/kotlinc
canonical: "https://hexmos.com/freedevtools/tldr/common/kotlinc/"
description: "Compile Kotlin code with kotlinc. Create executable JAR files and run Kotlin scripts with this powerful compiler. Free online tool, no registration required."
category: common
keywords:
- Kotlin compiler
- Kotlin code compiler
- Kotlin script compiler
- Kotlin to jar
- Kotlin command line
- Kotlin REPL
- Kotlin language tools
- Kotlin development
- JVM compiler
- Kotlin runtime
features:
- Compile Kotlin source files into executable code
- Generate self-contained JAR files with included runtime
- Execute Kotlin scripts directly from the command line
- Start an interactive Kotlin REPL shell
- Compile multiple Kotlin files simultaneously
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kotlinc

> Kotlin compiler.
> More information: <https://kotlinlang.org/docs/command-line.html>.

- Start a REPL (interactive shell):

`kotlinc`

- Compile a Kotlin file:

`kotlinc {{path/to/file.kt}}`

- Compile several Kotlin files:

`kotlinc {{path/to/file1.kt path/to/file2.kt ...}}`

- Execute a specific Kotlin Script file:

`kotlinc -script {{path/to/file.kts}}`

- Compile a Kotlin file into a self contained jar file with the Kotlin runtime library included:

`kotlinc {{path/to/file.kt}} -include-runtime -d {{path/to/file.jar}}`
