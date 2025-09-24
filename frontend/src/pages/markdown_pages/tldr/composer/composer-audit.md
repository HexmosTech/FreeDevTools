---
title: "Composer Audit - Analyze PHP Dependencies | Online Free DevTools by Hexmos"
name: composer-audit
path: /freedevtools/tldr/composer/composer-audit
canonical: "https://hexmos.com/freedevtools/tldr/composer/composer-audit/"
description: "Analyze PHP dependencies with Composer Audit. Detect security vulnerabilities and manage your project's packages effectively. Free online tool, no registration required."
category: common
keywords:
- php dependency analyzer
- composer security audit
- php vulnerability scan
- composer package checker
- php security scanner
- composer dependency check
- php dependency management
- composer security analysis
- php composer audit
- composer package security
features:
- Detect security vulnerabilities in PHP dependencies
- Omit development dependencies from the audit
- Filter vulnerability output by format (table, plain, json, summary)
- Output audit results to a JSON file
- Verify specific packages for security issues
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# composer audit

> Analyze a PHP project's dependencies to detect known security vulnerabilities and list affected packages.
> See also: `composer`.
> More information: <https://getcomposer.org/doc/03-cli.md#audit>.

- Check for security vulnerabilities in your current project:

`composer audit`

- Omit dev dependencies in the audit:

`composer audit --no-dev`

- Filter vulnerabilities by output format:

`composer audit --format {{table|plain|json|summary}}`

- Output audit results to a file in JSON format:

`composer audit --format json > audit_report.json`

- Verify whether a specific package in your project is affected by security issues:

`composer audit {{vendor}}/{{package}}`
