---
title: "Audit NPM - Scan Vulnerabilities in Dependencies | Online Free DevTools by Hexmos"
name: npm-audit
path: "/freedevtools/tldr/npm/npm-audit/"
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm-audit/"
description: "Scan NPM package dependencies for vulnerabilities with NPM Audit. Detect security flaws and suggest remediation strategies. Free online tool, no registration required."
category: common
keywords:
- npm audit
- npm vulnerability scanner
- npm security check
- node package manager audit
- javascript dependency audit
- npm security vulnerabilities
- npm audit fix
- npm audit json
- npm security analysis
- npm dependencies security
features:
- Scan project dependencies for known vulnerabilities.
- Automatically fix detected vulnerabilities.
- Force vulnerability fixes in dependencies.
- Update the lock file without modifying node_modules.
- Output audit results in JSON format.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# npm audit

> Scan for known vulnerabilities in project dependencies.
> Reports vulnerabilities and suggests remediation.
> More information: <https://docs.npmjs.com/cli/npm-audit>.

- Scan the project's dependencies for known vulnerabilities:

`npm audit`

- Automatically fix vulnerabilities in the project's dependencies:

`npm audit fix`

- Force an automatic fix to dependencies with vulnerabilities:

`npm audit fix {{[-f|--force]}}`

- Update the lock file without modifying the `node_modules` directory:

`npm audit fix --package-lock-only`

- Perform a dry run. Simulate the fix process without making any changes:

`npm audit fix --dry-run`

- Output audit results in JSON format:

`npm audit --json`

- Configure the audit to only fail on vulnerabilities above a specified severity:

`npm audit --audit-level {{info|low|moderate|high|critical}}`
