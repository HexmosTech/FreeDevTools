---
title: "Flow Type Checker - Validate JavaScript Code | Free DevTools"
name: flow
path: /freedevtools/tldr/common/flow
canonical: "https://hexmos.com/freedevtools/tldr/common/flow/"
description: "Validate JavaScript code with Flow Type Checker. Enhance code quality and catch errors early with static typing. Free online tool, no registration required."
category: common
keywords:
- javascript type checker
- flow static analysis
- flow type validation
- javascript code analysis
- flow command line
- javascript linting
- flow type coverage
- javascript static typing
- common command
- flow check
features:
- Check JavaScript code for type errors
- List files being checked by Flow
- Run batch type coverage checks
- Display line-by-line type coverage statistics
- Enhance JavaScript code quality
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# flow

> A static type checker for JavaScript.
> More information: <https://flow.org/en/docs/cli/>.

- Run a flow check:

`flow`

- Check which files are being checked by flow:

`flow ls`

- Run a type coverage check on all files in a directory:

`flow batch-coverage --show-all --strip-root {{path/to/directory}}`

- Display line-by-line type coverage stats:

`flow coverage --color {{path/to/file.jsx}}`
