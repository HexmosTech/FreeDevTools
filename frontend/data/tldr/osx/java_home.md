---
title: "Java Home - Control Java Versions on macOS | Online Free DevTools by Hexmos"
name: java_home
path: "/freedevtools/tldr/osx/java_home/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/java_home/"
description: "Control Java versions on macOS with Java Home. List JVMs, specify architecture, and format output in XML. Free online tool, no registration required."
category: osx
keywords:
- java version manager osx
- macos java_home command
- java jvm selector
- java architecture identifier
- java command line tools
- osx java environment
- java development osx
- list java versions mac
- macos jvm management
- java_home xml output
features:
- List installed Java Virtual Machines (JVMs)
- Specify JVM architecture (i386, x86_64)
- Define the task to select JVMs (Applets, WebStart, CommandLine)
- Output JVM information in XML format
- Display help information for the java_home command
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# java_home

> Return a value for $JAVA_HOME or execute command using this variable.
> More information: <https://www.unix.com/man-page/osx/1/java_home>.

- List JVMs based on a specific version:

`java_home --version {{1.5+}}`

- List JVMs based on a specific [arch]itecture:

`java_home --arch {{i386}}`

- List JVMs based on a specific tasks (defaults to `CommandLine`):

`java_home --datamodel {{Applets|WebStart|BundledApp|JNI|CommandLine}}`

- List JVMs in a XML format:

`java_home --xml`

- Display help:

`java_home --help`
