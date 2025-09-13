---
title: "Check Drupal Code - Detect Deprecations | Free DevTools"
name: drupal-check
path: /freedevtools/tldr/common/drupal-check
canonical: "https://hexmos.com/freedevtools/tldr/common/drupal-check/"
description: "Check Drupal code for deprecations with Drupal-Check. Analyze code quality, exclude directories, and improve Drupal development. Free online tool, no registration required."
category: common
keywords:
- Drupal code check
- PHP deprecation scanner
- Drupal static analysis
- Drupal coding standards
- Drupal code quality
- Drupal project analysis
- Drupal security scan
- Drupal code review
- Drupal code sniffer
- Drupal development tool
features:
- Detect Drupal PHP code deprecations
- Exclude specific directories from checks
- Perform static analysis for coding issues
- Suppress progress bar output
- Analyze entire Drupal projects for errors
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# drupal-check

> Check Drupal PHP code for deprecations.
> More information: <https://github.com/mglaman/drupal-check#usage>.

- Check the code in a specific directory for deprecations:

`drupal-check {{path/to/directory}}`

- Check the code excluding a comma-separated list of directories:

`drupal-check {{[-e|--exclude-dir]}} {{path/to/excluded_directory}},{{path/to/excluded_files/*.php}} {{path/to/directory}}`

- Don't show a progress bar:

`drupal-check --no-progress {{path/to/directory}}`

- Perform static analysis to detect bad coding practices:

`drupal-check {{[-a|--analysis]}} {{path/to/directory}}`
