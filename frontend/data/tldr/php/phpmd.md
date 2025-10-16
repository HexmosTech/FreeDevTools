---
title: "Validate PHP Code - Detect Messes with phpmd | Online Free DevTools by Hexmos"
name: phpmd
path: "/freedevtools/tldr/php/phpmd/"
canonical: "https://hexmos.com/freedevtools/tldr/php/phpmd/"
description: "Validate PHP code quality with phpmd and detect potential messes in your codebase. Identify issues with code style, complexity, and more with this free online tool, no registration required."
category: common
keywords:
- PHP code analysis
- PHP mess detection
- PHP code quality
- PHP code review
- PHP static analysis
- Command line PHP linter
- PHP code smells
- PHP coding standards
- PHP potential problems
- PHP code validation
features:
- Scan PHP code for violations of coding standards
- Identify potential code smells and anti-patterns
- Generate reports in XML, text, or HTML format
- Exclude specific directories from analysis
- Specify minimum priority threshold for rules
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# phpmd

> PHP mess detector: check for common potential problems.
> More information: <https://github.com/phpmd/phpmd>.

- Display a list of available rulesets and formats:

`phpmd`

- Scan a file or directory for problems using comma-separated rulesets:

`phpmd {{path/to/file_or_directory}} {{xml|text|html}} {{ruleset1,ruleset2,...}}`

- Specify the minimum priority threshold for rules:

`phpmd {{path/to/file_or_directory}} {{xml|text|html}} {{ruleset1,ruleset2,...}} --minimumpriority {{priority}}`

- Include only the specified extensions in analysis:

`phpmd {{path/to/file_or_directory}} {{xml|text|html}} {{ruleset1,ruleset2,...}} --suffixes {{extensions}}`

- Exclude the specified comma-separated directories:

`phpmd {{path/to/file_or_directory1,path/to/file_or_directory2,...}} {{xml|text|html}} {{ruleset1,ruleset2,...}} --exclude {{directory_patterns}}`

- Output the results to a file instead of `stdout`:

`phpmd {{path/to/file_or_directory}} {{xml|text|html}} {{ruleset1,ruleset2,...}} --reportfile {{path/to/report_file}}`

- Ignore the use of warning-suppressive PHPDoc comments:

`phpmd {{path/to/file_or_directory}} {{xml|text|html}} {{ruleset1,ruleset2,...}} --strict`
