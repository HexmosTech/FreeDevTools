---
title: "Lint PHP Syntax - Parallel PHP Syntax Checker | Free DevTools"
name: parallel-lint
path: /freedevtools/tldr/common/parallel-lint
canonical: "https://hexmos.com/freedevtools/tldr/common/parallel-lint/"
description: "Check PHP syntax with parallel-lint. Detect errors efficiently in your PHP projects using parallel processing. Free online tool, no registration required."
category: common
keywords:
- PHP syntax linter
- parallel PHP linting
- PHP code checker
- PHP syntax validation
- command-line PHP linter
- linux PHP linter
- macos PHP linter
- PHP parallel processing
- PHP error detection
- parallel linting tool
features:
- Checks PHP syntax in parallel
- Supports excluding directories from linting
- Allows specifying file extensions to lint
- Outputs results in JSON format
- Integrates with Git Blame to show error origins
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# parallel-lint

> Check the syntax of PHP files in parallel.
> More information: <https://github.com/JakubOnderka/PHP-Parallel-Lint>.

- Lint a specific directory:

`parallel-lint {{path/to/directory}}`

- Lint a directory using the specified number of parallel processes:

`parallel-lint -j {{processes}} {{path/to/directory}}`

- Lint a directory, excluding the specified directory:

`parallel-lint --exclude {{path/to/excluded_directory}} {{path/to/directory}}`

- Lint a directory of files using a comma-separated list of extension(s):

`parallel-lint -e {{php,html,phpt}} {{path/to/directory}}`

- Lint a directory and output the results as JSON:

`parallel-lint --json {{path/to/directory}}`

- Lint a directory and show Git Blame results for rows containing errors:

`parallel-lint --blame {{path/to/directory}}`
