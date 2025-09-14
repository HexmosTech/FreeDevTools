---
title: "Analyze PHP Code - phploc Code Metrics | Free DevTools"
name: phploc
path: /freedevtools/tldr/php/phploc
canonical: "https://hexmos.com/freedevtools/tldr/php/phploc/"
description: "Analyze PHP code with phploc, a code metrics tool. Measure project size and structure quickly. Free online tool, no registration required."
category: common
keywords:
- PHP code analysis
- PHP code metrics
- phploc metrics tool
- PHP project size
- PHP code structure
- PHP code analyzer
- PHP code complexity
- PHP code statistics
- Command line PHP analysis
- PHP quality assurance
features:
- Analyze PHP project code size and structure
- Exclude specific files or directories from analysis
- Generate CSV or XML reports of code metrics
- Count PHPUnit test case classes and methods
- Customize analyzed files using glob patterns
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# phploc

> Quickly measure the size and analyzing the structure of a PHP project.
> More information: <https://github.com/sebastianbergmann/phploc>.

- Analyze a directory and print the result:

`phploc {{path/to/directory}}`

- Include only specific files from a comma-separated list (globs are allowed):

`phploc {{path/to/directory}} --names '{{path/to/file1,path/to/file2,...}}'`

- Exclude specific files from a comma-separated list (globs are allowed):

`phploc {{path/to/directory}} --names-exclude '{{path/to/file1,path/to/file2,...}}'`

- Exclude a specific directory from analysis:

`phploc {{path/to/directory}} --exclude {{path/to/exclude_directory}}`

- Log the results to a specific CSV file:

`phploc {{path/to/directory}} --log-csv {{path/to/file}}`

- Log the results to a specific XML file:

`phploc {{path/to/directory}} --log-xml {{path/to/file}}`

- Count PHPUnit test case classes and test methods:

`phploc {{path/to/directory}} --count-tests`
