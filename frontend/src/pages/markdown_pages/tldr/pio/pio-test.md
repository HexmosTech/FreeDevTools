---
title: "PlatformIO Test - Run Project Tests | Online Free DevTools by Hexmos"
name: pio-test
path: "/freedevtools/tldr/pio/pio-test"
canonical: "https://hexmos.com/freedevtools/tldr/pio/pio-test/"
description: "Run PlatformIO tests easily with PlatformIO Test command. Automate testing, debug firmware, and manage environments efficiently. Free online tool, no registration required."
category: common
keywords:
- PlatformIO test automation
- PlatformIO firmware testing
- PlatformIO environment testing
- PlatformIO unit testing
- PlatformIO CI/CD
- PlatformIO build verification
- PlatformIO command line testing
- PlatformIO project validation
- PlatformIO embedded testing
- PlatformIO software testing
features:
- Run tests across multiple PlatformIO environments.
- Filter tests based on a name pattern for targeted testing.
- Ignore tests based on a name pattern to exclude specific tests.
- Specify a custom upload port for firmware uploading.
- Use a custom configuration file for test execution.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pio test

> Run local tests on a PlatformIO project.
> More information: <https://docs.platformio.org/en/latest/core/userguide/cmd_test.html>.

- Run all tests in all environments of the current PlatformIO project:

`pio test`

- Test only specific environments:

`pio test {{[-e|--environment]}} {{environment1}} {{[-e|--environment]}} {{environment2}}`

- Run only tests whose name matches a specific glob pattern:

`pio test {{[-f|--filter]}} "{{pattern}}"`

- Ignore tests whose name matches a specific glob pattern:

`pio test {{[-i|--ignore]}} "{{pattern}}"`

- Specify a port for firmware uploading:

`pio test --upload-port {{upload_port}}`

- Specify a custom configuration file for running the tests:

`pio test {{[-c|--project-conf]}} {{path/to/platformio.ini}}`
