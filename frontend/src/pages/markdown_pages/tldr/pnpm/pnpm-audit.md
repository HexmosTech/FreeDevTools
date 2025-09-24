---
title: "PNPM Audit - Scan Dependencies for Vulnerabilities | Online Free DevTools by Hexmos"
name: pnpm-audit
path: /freedevtools/tldr/pnpm/pnpm-audit
canonical: "https://hexmos.com/freedevtools/tldr/pnpm/pnpm-audit/"
description: "Scan dependencies for vulnerabilities with PNPM Audit. Secure your project by identifying security issues in packages. Free online tool, no registration required."
category: common
keywords:
- pnpm audit
- pnpm security scan
- node security audit
- javascript vulnerability check
- npm audit alternative
- package security analysis
- dependency vulnerability scan
- pnpm dependency check
- node package audit
- fix package vulnerabilities
features:
- Detect security vulnerabilities in project dependencies
- Automatically fix identified vulnerabilities
- Generate security audit reports in JSON format
- Audit only development or production dependencies
- Filter advisories by severity level
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pnpm audit

> Scan project dependencies.
> Check for known security issues with the installed packages.
> More information: <https://pnpm.io/cli/audit>.

- Identify vulnerabilities in the project:

`pnpm audit`

- Automatically fix vulnerabilities:

`pnpm audit fix`

- Generate a security report in JSON format:

`pnpm audit --json > {{path/to/audit-report.json}}`

- Audit only dev dependencies:

`pnpm audit {{[-D|--dev]}}`

- Audit only production dependencies:

`pnpm audit {{[-P|--prod]}}`

- Exclude optional dependencies from the audit:

`pnpm audit --no-optional`

- Ignore registry errors during the audit process:

`pnpm audit --ignore-registry-errors`

- Filter advisories by severity (low, moderate, high, critical):

`pnpm audit --audit-level {{severity}}`
