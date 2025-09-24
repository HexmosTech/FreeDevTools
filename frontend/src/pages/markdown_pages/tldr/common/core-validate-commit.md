---
title: "Validate Commit - Validate Node.js Commits | Online Free DevTools by Hexmos"
name: core-validate-commit
path: /freedevtools/tldr/common/core-validate-commit
canonical: "https://hexmos.com/freedevtools/tldr/common/core-validate-commit/"
description: "Validate commit messages with core-validate-commit for Node.js. Ensure code quality with commit validation. Free online tool, no registration required."
category: common
keywords:
- Node.js commit validation
- Commit message validator
- Core validate commit
- Git commit message linting
- Node.js contribution guidelines
- Command line commit validation
- Validate git commits
- Node.js commit checker
- Commit style guide enforcement
- Node.js core contribution
features:
- Validate commit messages against Node.js core guidelines
- Check for correct commit formatting
- List available validation rules
- Verify Node.js subsystem declarations
- Generate tap format output for CI integration
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# core-validate-commit

> Validate commit messages for Node.js core.
> More information: <https://github.com/nodejs/core-validate-commit>.

- Validate the current commit:

`core-validate-commit`

- Validate a specific commit:

`core-validate-commit {{commit_hash}}`

- Validate a range of commits:

`git rev-list {{commit_hash}}..HEAD | xargs core-validate-commit`

- List all validation rules:

`core-validate-commit {{[-l|--list]}}`

- List all valid Node.js subsystems:

`core-validate-commit {{[-ls|--list-subsystem]}}`

- Validate the current commit formatting the output in tap format:

`core-validate-commit {{[-t|--tap]}}`

- Display help:

`core-validate-commit {{[-h|--help]}}`
