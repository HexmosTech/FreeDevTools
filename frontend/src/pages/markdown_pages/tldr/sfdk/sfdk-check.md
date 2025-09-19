---
title: "SFDK Check - Perform Quality Checks | Online Free DevTools by Hexmos"
name: sfdk-check
path: /freedevtools/tldr/sfdk/sfdk-check
canonical: "https://hexmos.com/freedevtools/tldr/sfdk/sfdk-check/"
description: "Perform quality checks with SFDK Check. Validate your Sailfish OS applications, manage test suites, and ensure application quality using command line. Free online tool, no registration required."
category: common
keywords:
- sfdk check
- sailfishos quality check
- sfdk test suite
- sailfish application validation
- sfdk command line interface
- sailfish sdk check
- qtcreator sfdk
- sfdk build validation
- sailfishos development
- sfdk testing levels
features:
- List available test suites for Sailfish OS applications.
- Execute all or essential quality checks on Sailfish OS projects.
- Add specific testing levels to the quality check process.
- Remove unwanted testing levels from the check configuration.
- Include custom test suites in the quality check execution.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sfdk check

> Performs quality checks.
> More information: <https://github.com/sailfishos/sailfish-qtcreator/blob/master/share/qtcreator/sfdk/modules/20-building-mb2/doc/command.cmake.adoc>.

- Display test suites:

`sfdk check --list-suites`

- Run all or essential test suites:

`sfdk check`

- Add testing level to the check:

`sfdk check {{[-l|--levels]}} +{{level}}`

- Remove testing level from the check:

`sfdk check {{[-l|--levels]}} -{{level}}`

- Add testing suite to the check:

`sfdk check {{[-s|--suites]}} +{{suite}}`

- Remove testing suite from the check:

`sfdk check {{[-s|--suites]}} -{{suite}}`
