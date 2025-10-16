---
title: "Security Checker - Validate PHP Dependencies | Online Free DevTools by Hexmos"
name: security-checker
path: "/freedevtools/tldr/common/security-checker/"
canonical: "https://hexmos.com/freedevtools/tldr/common/security-checker/"
description: "Validate PHP dependencies with Security Checker to find vulnerabilities. Analyze composer.lock files and identify security risks. Free online tool, no registration required."
category: common
keywords:
- php security checker
- composer lock validator
- dependency vulnerability scanner
- php dependency security analysis
- security risk assessment php
- security checker sensiolabs
- php security audit
- composer security analysis
- php vulnerability scan
- command line php security
features:
- Check project dependencies for security vulnerabilities
- Validate composer.lock file integrity
- Output results in JSON format
- Identify vulnerable php packages
- Analyze dependency security risks
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# security-checker

> Check if a PHP application uses dependencies with known security vulnerabilities.
> More information: <https://github.com/sensiolabs/security-checker>.

- Look for security issues in the project dependencies (based on the `composer.lock` file in the current directory):

`security-checker security:check`

- Use a specific `composer.lock` file:

`security-checker security:check {{path/to/composer.lock}}`

- Return results as a JSON object:

`security-checker security:check --format=json`
