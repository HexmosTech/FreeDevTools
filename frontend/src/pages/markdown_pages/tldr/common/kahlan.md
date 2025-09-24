---
title: "Kahlan - Execute PHP Tests | Online Free DevTools by Hexmos"
name: kahlan
path: /freedevtools/tldr/common/kahlan
canonical: "https://hexmos.com/freedevtools/tldr/common/kahlan/"
description: "Execute PHP tests efficiently with Kahlan. Run specifications, generate code coverage reports, and customize testing environments easily. Free online tool, no registration required."
category: common
keywords:
- PHP test runner
- PHP BDD testing
- PHP unit testing
- Kahlan test framework
- PHP test execution
- code coverage PHP
- Kahlan configuration
- specification runner PHP
- PHP behavior driven development
- command line testing PHP
features:
- Run specifications from the command line
- Customize test configurations
- Generate code coverage reports
- Specify output reporters for test results
- Execute behavior driven development tests
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kahlan

> A unit and Behaviour Driven Development test framework for PHP.
> More information: <https://kahlan.github.io/docs/cli-options.html>.

- Run all specifications in the "spec" directory:

`kahlan`

- Run specifications using a specific configuration file:

`kahlan --config={{path/to/configuration_file}}`

- Run specifications and output using a reporter:

`kahlan --reporter={{dot|bar|json|tap|verbose}}`

- Run specifications with code coverage (detail can be between 0 and 4):

`kahlan --coverage={{detail_level}}`
