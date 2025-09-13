---
title: "Java Launcher - Execute Java Programs | Free DevTools"
name: java
path: "/freedevtools/tldr/common/java"
canonical: "https://hexmos.com/freedevtools/tldr/common/java/"
description: "Execute Java programs effortlessly with Java Launcher. Run .class and .jar files and manage classpath settings. Free online tool, no registration required."
category: common
keywords:
- java program execution
- java class launcher
- java jar runner
- java classpath management
- java version display
- command line java
- cross-platform java
- java debugging
- oracle java
- jdk command
features:
- Execute Java .class files
- Run .jar archives
- Specify custom classpath
- Enable remote debugging
- Display java version information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# java

> Java application launcher.
> More information: <https://docs.oracle.com/en/java/javase/20/docs/specs/man/java.html>.

- Execute a Java `.class` file that contains a main method by using just the class name:

`java {{classname}}`

- Execute a Java program and use additional third-party or user-defined classes:

`java -classpath {{path/to/classes1}}:{{path/to/classes2}}:. {{classname}}`

- Execute a `.jar` program:

`java -jar {{filename.jar}}`

- Execute a `.jar` program with debug waiting to connect on port 5005:

`java -agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=*:5005 -jar {{filename.jar}}`

- Display JDK, JRE and HotSpot versions:

`java -version`

- Display help:

`java -help`
