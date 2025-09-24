---
title: "atoum Test Runner - Execute PHP Unit Tests | Online Free DevTools by Hexmos"
name: atoum
path: /freedevtools/tldr/common/atoum
canonical: "https://hexmos.com/freedevtools/tldr/common/atoum/"
description: "Execute PHP unit tests effectively with atoum Test Runner. Streamline testing workflows and ensure code reliability. Free online tool, no registration required."
category: common
keywords:
- PHP unit testing framework
- atoum test runner
- PHP testing CLI
- PHP code testing
- Unit test execution
- Code quality assurance
- PHP namespace testing
- Tag-based testing
- Bootstrap file loading
- Configuration file testing
features:
- Run all tests in a project.
- Execute tests based on namespaces.
- Run tests tagged with specific identifiers.
- Load custom bootstrap files for test environments.
- Use configuration files for test parameters.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# atoum

> A simple, modern and intuitive unit testing framework for PHP.
> More information: <https://atoum.readthedocs.io/en/latest/option_cli.html>.

- Initialize a configuration file:

`atoum --init`

- Run all tests:

`atoum`

- Run tests using the specified configuration file:

`atoum {{[-c|--configuration]}} {{path/to/file}}`

- Run a specific test file:

`atoum {{[-f|--files]}} {{path/to/file}}`

- Run a specific directory of tests:

`atoum {{[-d|--directories]}} {{path/to/directory}}`

- Run all tests under a specific namespace:

`atoum {{[-ns|--namespaces]}} {{namespace}}`

- Run all tests with a specific tag:

`atoum {{[-t|--tags]}} {{tag}}`

- Load a custom bootstrap file before running tests:

`atoum {{[-bf|--bootstrap-file]}} {{path/to/file}}`
