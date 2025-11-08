---
title: "Analyze PHP with Psalm - Find Errors | Online Free DevTools by Hexmos"
name: psalm
path: "/freedevtools/tldr/common/psalm/"
canonical: "https://hexmos.com/freedevtools/tldr/common/psalm/"
description: "Analyze PHP code with Psalm, a static analysis tool to detect errors in your applications. Improve code quality and prevent runtime issues. Free online tool, no registration required."
category: common
keywords:
- PHP Static Analysis
- Psalm PHP Analyzer
- PHP Code Error Detection
- PHP Code Validation
- PHP Code Quality
- Psalm Configuration
- PHP Linter
- PHP Static Analysis Tool
- Common PHP Tools
- Command Line PHP Analysis
features:
- Analyze PHP code for errors and potential issues
- Generate Psalm configuration files for projects
- Display statistics about code analysis results
- Customize analysis with specific configuration files
- Run analysis in parallel with multiple threads
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# psalm

> A static analysis tool for finding errors in PHP applications.
> More information: <https://psalm.dev>.

- Generate a Psalm configuration:

`psalm --init`

- Analyze the current working directory:

`psalm`

- Analyze a specific directory or file:

`psalm {{path/to/file_or_directory}}`

- Analyze a project with a specific configuration file:

`psalm --config {{path/to/psalm.xml}}`

- Include informational findings in the output:

`psalm --show-info`

- Analyze a project and display statistics:

`psalm --stats`

- Analyze a project in parallel with 4 threads:

`psalm --threads {{4}}`
