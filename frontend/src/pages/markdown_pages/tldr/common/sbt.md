---
title: "Create Scala Builds - Manage Java Projects with sbt | Free DevTools"
name: sbt
path: /freedevtools/tldr/common/sbt
canonical: "https://hexmos.com/freedevtools/tldr/common/sbt/"
description: "Create Scala builds effortlessly with sbt, the build tool for Scala and Java projects. Manage dependencies, compile code, and run tests efficiently. Free online tool, no registration required."
category: common
keywords:
- scala build tool
- java project manager
- sbt build system
- scala dependency management
- java build automation
- sbt scala compiler
- sbt java compiler
- sbt giter8 template
- sbt testing framework
- sbt command line
features:
- Start an interactive Scala REPL session.
- Create new Scala projects from Giter8 templates.
- Compile and run comprehensive project tests.
- Delete generated build files from the target directory.
- Compile main Scala and Java source code.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sbt

> Build tool for Scala and Java projects.
> More information: <https://www.scala-sbt.org/1.x/docs/>.

- Start a REPL (interactive shell):

`sbt`

- Create a new Scala project from an existing Giter8 template hosted on GitHub:

`sbt new {{scala/hello-world.g8}}`

- Compile and run all tests:

`sbt test`

- Delete all generated files in the `target` directory:

`sbt clean`

- Compile the main sources in `src/main/scala` and `src/main/java` directories:

`sbt compile`

- Use the specified version of sbt:

`sbt -sbt-version {{version}}`

- Use a specific jar file as the sbt launcher:

`sbt -sbt-jar {{path}}`

- List all sbt options:

`sbt -h`
