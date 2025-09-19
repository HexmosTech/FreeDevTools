---
title: "PHP Code Style Fixer - Format PHP Code | Online Free DevTools by Hexmos"
name: php-cs-fixer
path: /freedevtools/tldr/php/php-cs-fixer
canonical: "https://hexmos.com/freedevtools/tldr/php/php-cs-fixer/"
description: "Format PHP code automatically with php-cs-fixer. Enforce coding standards, improve code readability and maintainability. Free online tool, no registration required."
category: common
keywords:
- PHP code formatting
- PHP code style fixer
- PHP coding standards
- PHP linter
- Command-line code formatter
- PHP code beautifier
- PHP code cleanup
- PHP code analysis
- PHP static analysis
- PHP code quality
features:
- Automatically fix PHP code style issues.
- Enforce specific coding rules.
- Lint code without applying changes using dry-run.
- Output results in various formats (txt, json, xml).
- List files that require code style fixing.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# php-cs-fixer

> Automatic coding style fixer for PHP.
> More information: <https://github.com/FriendsOfPHP/PHP-CS-Fixer>.

- Execute code style fixing in the current directory:

`php-cs-fixer fix`

- Execute code style fixing for a specific directory:

`php-cs-fixer fix {{path/to/directory}}`

- Execute code style linting without applying changes:

`php-cs-fixer fix --dry-run`

- Execute code style fixes using specific rules:

`php-cs-fixer fix --rules={{rules}}`

- Display the rules that have been applied:

`php-cs-fixer fix --verbose`

- Output the results in a different format:

`php-cs-fixer fix --format={{txt|json|xml|checkstyle|junit|gitlab}}`

- Display files that require fixing:

`php-cs-fixer list-files`

- Describe a rule or ruleset:

`php-cs-fixer describe {{rule}}`
