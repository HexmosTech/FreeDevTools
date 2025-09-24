---
title: "Ruff Linter - Check Python Code | Online Free DevTools by Hexmos"
name: ruff-check
path: /freedevtools/tldr/ruff/ruff-check
canonical: "https://hexmos.com/freedevtools/tldr/ruff/ruff-check/"
description: "Lint Python code efficiently with Ruff Linter. Find and fix errors to improve code quality using a fast, modern tool. Free online tool, no registration required."
category: common
keywords:
- Python linter
- Ruff linter
- Python code checker
- Python code analysis
- Python static analysis
- Python error detection
- Python code formatting
- Python code quality
- Python style guide
- Python rule enforcement
features:
- Lint Python files and directories for errors.
- Apply suggested fixes automatically to correct code.
- Watch files for changes and re-lint continuously.
- Enable or disable specific linting rules.
- Add `# noqa` directives to ignore existing rule violations.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ruff check

> An extremely fast Python linter. `check` is the default command - it can be omitted everywhere.
> If no files or directories are specified, the current working directory is used by default.
> More information: <https://docs.astral.sh/ruff/linter>.

- Run the linter on the given files or directories:

`ruff check {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Apply the suggested fixes, modifying the files in-place:

`ruff check --fix`

- Run the linter and re-lint on change:

`ruff check --watch`

- Only enable the specified rules (or all rules), ignoring the configuration file:

`ruff check --select {{ALL|rule_code1,rule_code2,...}}`

- Additionally enable the specified rules:

`ruff check --extend-select {{rule_code1,rule_code2,...}}`

- Disable the specified rules:

`ruff check --ignore {{rule_code1,rule_code2,...}}`

- Ignore all existing violations of a rule by adding `# noqa` directives to all lines that violate it:

`ruff check --select {{rule_code}} --add-noqa`
