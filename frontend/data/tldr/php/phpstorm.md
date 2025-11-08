---
title: "Open PHP Files - Edit Code with PHPStorm | Online Free DevTools by Hexmos"
name: phpstorm
path: "/freedevtools/tldr/php/phpstorm/"
canonical: "https://hexmos.com/freedevtools/tldr/php/phpstorm/"
description: "Edit PHP files efficiently with PHPStorm. Open files, view differences, and navigate to specific lines for debugging. Free online tool, no registration required."
category: common
keywords:
- PHP IDE
- PHP code editor
- PHP development environment
- PHPStorm editor
- JetBrains PHPStorm
- PHP debugging tool
- Code difference viewer
- Open PHP file
- PHP code navigation
- Cross-platform PHP IDE
features:
- Open directories and files in PHPStorm from the command line
- Specify line numbers to open files at specific locations
- Compare two files to view differences within PHPStorm
- Launch PHPStorm from the command line with specified parameters
- Integrate with terminal-based workflows for efficient coding
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# phpstorm

> A cross-platform IDE for PHP based on the JetBrains IntelliJ platform.
> More information: <https://www.jetbrains.com/help/phpstorm/working-with-the-ide-features-from-command-line.html#arguments>.

- Open a specific directory:

`phpstorm {{path/to/directory}}`

- Open a file:

`phpstorm {{path/to/file}}`

- Open a file at a specific line:

`phpstorm --line {{line_number}} {{path/to/file}}`

- View the differences between two files:

`phpstorm diff {{path/to/left_file}} {{path/to/right_file}}`
