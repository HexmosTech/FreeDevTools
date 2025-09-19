---
title: "Pest Tests - Run PHP Tests Simply | Online Free DevTools by Hexmos"
name: pest
path: /freedevtools/tldr/common/pest
canonical: "https://hexmos.com/freedevtools/tldr/common/pest/"
description: "Run PHP tests simply with Pest, a delightful PHP Testing Framework. Effortlessly execute tests, manage groups, and generate coverage reports. Free online tool, no registration required."
category: common
keywords:
- pest php tests
- php testing framework
- php unit testing
- pest testing commands
- coverage report generator
- mutation testing php
- php test runner
- parallel php testing
- pest cli tool
- php test automation
features:
- Initialize a standard Pest configuration.
- Run tests in the current directory.
- Execute tests based on group annotations.
- Generate coverage reports for your PHP code.
- Run tests in parallel for faster execution.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pest

> A PHP testing framework with a focus on simplicity.
> More information: <https://pestphp.com/docs/cli-api-reference>.

- Initialize a standard Pest configuration in the current directory:

`pest --init`

- Run tests in the current directory:

`pest`

- Run tests annotated with the given group:

`pest --group {{name}}`

- Run tests and print the coverage report to `stdout`:

`pest --coverage`

- Run tests with coverage and fail if the coverage is less than the minimum percentage:

`pest --coverage --min={{80}}`

- Run tests in parallel:

`pest --parallel`

- Run tests with mutations:

`pest --mutate`
