---
title: "Cotton - Validate Markdown Test Specifications | Online Free DevTools by Hexmos"
name: cotton
path: /freedevtools/tldr/common/cotton
canonical: "https://hexmos.com/freedevtools/tldr/common/cotton/"
description: "Validate markdown test specifications with Cotton. Quickly run tests, check assertions, and automate documentation testing. Free online tool, no registration required."
category: common
keywords:
- markdown test runner
- test specification validator
- markdown assertion tool
- test documentation automation
- markdown testing framework
- command-line test runner
- cotton test specification
- github markdown tests
- documentation test suite
- common platform testing
features:
- Run markdown test specifications from the command line
- Validate assertions within markdown files
- Disable certificate verification for testing purposes
- Stop execution upon the first test failure
- Specify a base URL for resolving relative paths
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cotton

> Markdown test specification runner.
> More information: <https://github.com/chonla/cotton>.

- Use a specific base URL:

`cotton -u {{base_url}} {{path/to/file.md}}`

- Disable certificate verification (insecure mode):

`cotton -u {{base_url}} -i {{path/to/file.md}}`

- Stop running when a test fails:

`cotton -u {{base_url}} -s {{path/to/file.md}}`
