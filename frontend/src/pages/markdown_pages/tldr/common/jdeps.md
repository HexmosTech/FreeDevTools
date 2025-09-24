---
title: "Analyze Java Dependencies - With jdeps | Online Free DevTools by Hexmos"
name: jdeps
path: /freedevtools/tldr/common/jdeps
canonical: "https://hexmos.com/freedevtools/tldr/common/jdeps/"
description: "Analyze Java dependencies with jdeps. Identify class dependencies, generate summaries, and create DOT files for visualization. Free online tool, no registration required."
category: common
keywords:
- java dependency analysis
- jdeps dependency analyzer
- jar dependency check
- class dependency graph
- java module dependencies
- java code analysis
- dependency visualization
- java runtime analysis
- jar file analyzer
- command line dependency tool
features:
- Analyze dependencies of Java `.jar` or `.class` files.
- Print a summary of dependencies for a `.jar` file.
- Display class-level dependencies in detail.
- Output dependency analysis to DOT files.
- Generate dependency graphs for Java projects.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jdeps

> Java class dependency analyzer.
> More information: <https://docs.oracle.com/en/java/javase/20/docs/specs/man/jdeps.html>.

- Analyze the dependencies of a `.jar` or `.class` file:

`jdeps {{path/to/filename.class}}`

- Print a summary of all dependencies of a specific `.jar` file:

`jdeps {{path/to/filename.jar}} -summary`

- Print all class-level dependencies of a `.jar` file:

`jdeps {{path/to/filename.jar}} -verbose`

- Output the results of the analysis in a DOT file into a specific directory:

`jdeps {{path/to/filename.jar}} -dotoutput {{path/to/directory}}`

- Display help:

`jdeps --help`
