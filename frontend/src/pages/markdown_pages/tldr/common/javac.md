---
title: "Java Compiler - Compile Java Code | Online Free DevTools by Hexmos"
name: javac
path: /freedevtools/tldr/common/javac
canonical: "https://hexmos.com/freedevtools/tldr/common/javac/"
description: "Compile Java code with javac. Easily create executable Java programs from source code with this online tool. Free online tool, no registration required."
category: common
keywords:
- java compiler
- java application compiler
- compile java online
- javac command
- java development
- java source code
- class file generation
- cross-platform java
- javac flags
- java command line
features:
- Compile single Java files
- Compile multiple Java files simultaneously
- Compile all Java files in a directory
- Specify output directory for compiled class files
- Generate executable Java bytecode
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# javac

> Java application compiler.
> More information: <https://docs.oracle.com/en/java/javase/20/docs/specs/man/javac.html>.

- Compile a `.java` file:

`javac {{path/to/file.java}}`

- Compile several `.java` files:

`javac {{path/to/file1.java path/to/file2.java ...}}`

- Compile all `.java` files in current directory:

`javac {{*.java}}`

- Compile a `.java` file and place the resulting class file in a specific directory:

`javac -d {{path/to/directory}} {{path/to/file.java}}`
