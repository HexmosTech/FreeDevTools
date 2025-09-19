---
title: "Phing - Build PHP Projects | Online Free DevTools by Hexmos"
name: phing
path: /freedevtools/tldr/common/phing
canonical: "https://hexmos.com/freedevtools/tldr/common/phing/"
description: "Build PHP projects efficiently with Phing, the PHP build tool. Automate tasks, manage dependencies, and streamline your development workflow. Free online tool, no registration required."
category: common
keywords:
- PHP build tool
- Phing build automation
- PHP project management
- Ant build system
- XML build configuration
- Phing task execution
- Continuous integration PHP
- PHP dependency management
- Cross-platform build tool
- Phing deployment automation
features:
- Execute default tasks defined in a build.xml file
- Initialize new build files with custom paths
- Run specific build tasks by name
- Customize builds with properties and listeners
- Log build output to a file for debugging
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# phing

> A PHP build tool based on Apache Ant.
> More information: <https://www.phing.info/guide/chunkhtml/ch03s03.html>.

- Perform the default task in the `build.xml` file:

`phing`

- Initialize a new build file:

`phing {{[-i|--init]}} {{path/to/build.xml}}`

- Perform a specific task:

`phing {{task_name}}`

- Use the given build file path:

`phing {{[-f|-buildfile]}} {{path/to/build.xml}} {{task_name}}`

- Log to the given file:

`phing -logfile {{path/to/log_file}} {{task_name}}`

- Use custom properties in the build:

`phing -D{{property}}={{value}} {{task_name}}`

- Specify a custom listener class:

`phing -listener {{class_name}} {{task_name}}`

- Build using verbose output:

`phing -verbose {{task_name}}`
