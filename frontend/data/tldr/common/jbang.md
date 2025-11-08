---
title: "Create Java Programs - Run Source Code with Jbang | Online Free DevTools by Hexmos"
name: jbang
path: "/freedevtools/tldr/common/jbang/"
canonical: "https://hexmos.com/freedevtools/tldr/common/jbang/"
description: "Create Java programs instantly with Jbang. Run self-contained source code directly without compiling. Free online tool, no registration required."
category: common
keywords:
- java program creator
- jbang java runner
- java source code execution
- java scripting tool
- jbang script manager
- java command line runner
- java code snippet runner
- linux java execution
- macos java execution
- cross platform java scripting
features:
- Initialize Java classes and scripts easily
- Run Java code snippets without compilation
- Install scripts directly onto the user's PATH
- Manage and run Java programs from the command line
- Edit and debug scripts in various IDEs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jbang

> Easily create, edit and run self-contained source-only Java programs.
> See also: `java`.
> More information: <https://www.jbang.dev/documentation/jbang/latest/cli/jbang.html>.

- Initialize a simple Java class:

`jbang init {{path/to/file.java}}`

- Initialize a Java class (useful for scripting):

`jbang init --template={{cli}} {{path/to/file.java}}`

- Use `jshell` to explore and use a script and any dependencies in a REPL editor:

`jbang run --interactive`

- Setup a temporary project to edit a script in an IDE:

`jbang edit --open={{codium|code|eclipse|idea|netbeans|gitpod}} {{path/to/script.java}}`

- Run a Java code snippet (Java 9 and later):

`{{echo 'Files.list(Paths.get("/etc")).forEach(System.out::println);'}} | jbang -`

- Run command-line application:

`jbang {{path/to/file.java}} {{command}} {{arg1 arg2 ...}}`

- Install a script on the user's `$PATH`:

`jbang app install --name {{command_name}} {{path/to/script.java}}`

- Install a specific version of JDK to be used with `jbang`:

`jbang jdk install {{version}}`
