---
title: "Generate Git Bug Reports - Debug System Information | Online Free DevTools by Hexmos"
name: git-bugreport
path: "/freedevtools/tldr/git/git-bugreport/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-bugreport/"
description: "Generate Git bug reports with git-bugreport. Captures debug information to simplify reporting issues. Free online tool, no registration required."
category: common
keywords:
- git bug report
- git debug information
- git system information
- git user information
- git bug reporting
- command line bug report
- git error analysis
- git diagnostic tool
- git troubleshooting
- git debugging
features:
- Generate a comprehensive bug report file.
- Capture system and user-specific debug information.
- Specify an output directory for the report.
- Customize the report filename with a date suffix.
- Aid in diagnosing and reporting Git issues.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git bugreport

> Captures debug information from the system and user, generating a text file to aid in the reporting of a bug in Git.
> More information: <https://git-scm.com/docs/git-bugreport>.

- Create a new bug report file in the current directory:

`git bugreport`

- Create a new bug report file in the specified directory, creating it if it does not exist:

`git bugreport {{[-o|--output-directory]}} {{path/to/directory}}`

- Create a new bug report file with the specified filename suffix in `strftime` format:

`git bugreport {{[-s|--suffix]}} {{%m%d%y}}`
