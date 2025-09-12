---
title: "PHPUnit Test Runner - Execute Tests | Free DevTools"
name: phpunit
path: /freedevtools/tldr/common/phpunit
canonical: "https://hexmos.com/freedevtools/tldr/common/phpunit/"
description: "Execute PHPUnit tests with PHPUnit Test Runner. Generate code coverage reports and run tests by group for efficient software testing. Free online tool, no registration required."
category: common
keywords:
- PHPUnit test runner
- PHP unit testing
- PHP testing framework
- PHP code coverage
- PHP unit test execution
- PHP test automation
- command-line testing
- software testing PHP
- PHP developer tools
- PHP quality assurance
features:
- Run PHPUnit tests in a specific directory.
- Execute specific PHP test files.
- Run tests annotated with a specific group.
- Generate HTML coverage reports.
- Automate PHP unit testing process.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# phpunit

> PHPUnit test runner.
> More information: <https://phpunit.de>.

- Run tests in the current directory. Note: Expects you to have a 'phpunit.xml':

`phpunit`

- Run tests in a specific file:

`phpunit {{path/to/TestFile.php}}`

- Run tests annotated with the given group:

`phpunit --group {{name}}`

- Run tests and generate a coverage report in HTML:

`phpunit --coverage-html {{path/to/directory}}`
