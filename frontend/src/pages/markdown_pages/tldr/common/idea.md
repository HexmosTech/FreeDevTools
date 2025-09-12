---
title: "IntelliJ IDEA - Open Projects & Diff Files | Free DevTools"
name: idea
path: /freedevtools/tldr/common/idea
canonical: "https://hexmos.com/freedevtools/tldr/common/idea/"
description: "Open projects and compare files with IntelliJ IDEA command-line tool. Enhance Java and Kotlin development workflow with this powerful IDE integration. Free online tool, no registration required."
category: common
keywords:
- IntelliJ IDEA command line
- Java IDE launcher
- Kotlin IDE launcher
- Open IntelliJ project CLI
- IntelliJ diff tool command
- IntelliJ merge tool command
- Code inspection CLI
- IntelliJ IDEA Linux
- IntelliJ IDEA MacOS
- IntelliJ IDEA Windows
features:
- Open projects in IntelliJ IDEA from the command line
- Compare up to three files using the IntelliJ IDEA diff viewer
- Perform two-way file merges using the IntelliJ IDEA merge dialog
- Run code inspections on a project from the terminal
- Launch the IntelliJ IDEA IDE
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# idea

> JetBrains Java and Kotlin IDE.
> More information: <https://www.jetbrains.com/help/idea/working-with-the-ide-features-from-command-line.html>.

- Open the current directory in IntelliJ IDEA:

`idea {{path/to/directory}}`

- Open a specific file or directory in IntelliJ IDEA:

`idea {{path/to/file_or_directory}}`

- Open the diff viewer to compare up to 3 files:

`idea diff {{path/to/file1 path/to/file2 path/to/optional_file3}}`

- Open the merge dialog to perform a two-way file merge:

`idea merge {{path/to/file1}} {{path/to/file2}} {{path/to/output}}`

- Run code inspections on a project:

`idea inspect {{path/to/project_directory}} {{path/to/inspection_profile}} {{path/to/output}}`
