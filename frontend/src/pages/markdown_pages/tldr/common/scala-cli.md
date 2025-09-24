---
title: "Scala Control - Interact with Scala Code | Online Free DevTools by Hexmos"
name: scala-cli
path: /freedevtools/tldr/common/scala-cli
canonical: "https://hexmos.com/freedevtools/tldr/common/scala-cli/"
description: "Control Scala code development with scala-cli. Compile, run, test, and format Scala scripts with this powerful command-line tool. Free online tool, no registration required."
category: common
keywords:
- scala compiler
- scala runner
- scala tester
- scala formatter
- scala repl
- scala jvm
- scala ide support
- scala build tool
- scala script
- command line scala
features:
- Compile and run Scala scripts.
- Format Scala code in-place.
- Generate project files for IDE integration (VSCode, IntelliJ).
- Start an interactive Scala REPL session.
- Test Scala scripts.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# scala-cli

> Interact with the Scala programming language.
> More information: <https://scala-cli.virtuslab.org/docs/overview/>.

- Start a REPL (interactive shell) using a specific Scala and JVM version:

`scala-cli --scala {{3.1.0}} --jvm {{temurin:17}}`

- Compile and run a Scala script:

`scala-cli run {{path/to/script.scala}}`

- Compile and test a Scala script:

`scala-cli test {{path/to/script.scala}}`

- Format a Scala script, updating the file in-place:

`scala-cli fmt {{path/to/script.scala}}`

- Generate files for IDE (VSCode and IntelliJ) support:

`scala-cli setup-ide {{path/to/script.scala}}`
