---
title: "Run JavaScript Tests - Mocha Test Framework | Online Free DevTools by Hexmos"
name: mocha
path: /freedevtools/tldr/common/mocha
canonical: "https://hexmos.com/freedevtools/tldr/common/mocha/"
description: "Run JavaScript tests quickly with Mocha, a versatile testing framework. Execute test suites, debug code, and ensure code quality. Free online tool, no registration required."
category: common
keywords:
- javascript testing
- mocha test framework
- javascript test runner
- mocha command line
- nodejs testing
- unit testing javascript
- integration testing javascript
- mocha grep filter
- mocha watch mode
- javascript test reporter
features:
- Execute JavaScript test suites using Mocha's CLI.
- Run specific tests based on file location or regular expression matching.
- Automatically re-run tests upon JavaScript file changes.
- Customize test output with different reporters (e.g., spec, json).
- Configure test execution via mocha.opts file.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mocha

> A feature-rich JavaScript test framework.
> More information: <https://mochajs.org>.

- Run tests with default configuration or as configured in `mocha.opts`:

`mocha`

- Run tests contained at a specific location:

`mocha {{directory/with/tests}}`

- Run tests that match a specific `grep` pattern:

`mocha --grep {{regex}}`

- Run tests on changes to JavaScript files in the current directory and once initially:

`mocha --watch`

- Run tests with a specific reporter:

`mocha --reporter {{reporter}}`
