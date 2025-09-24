---
title: "Generate Bug Reports with Reportbug - Debian Bug Reporting | Online Free DevTools by Hexmos"
name: reportbug
path: /freedevtools/tldr/linux/reportbug
canonical: "https://hexmos.com/freedevtools/tldr/linux/reportbug/"
description: "Generate Debian bug reports with Reportbug, a powerful command-line tool for simplified issue reporting. Contribute to open-source projects easily. Free online tool, no registration required."
category: linux
keywords:
  - Debian bug report generator
  - Linux bug reporting command
  - Reportbug Debian package
  - Generate Debian system reports
  - Linux system issue reporter
  - Command-line Debian bug report
  - Reportbug Linux command
  - Debian package bug reporting
  - Submit Debian bug reports
  - Linux reportbug tool
features:
  - Generate bug reports for specific Debian packages via command line.
  - Report general system issues unrelated to specific packages using 'reportbug other'.
  - Save bug reports to a file using the --output option before sending.
  - Submit bug reports directly via email using the default configuration.
  - Simplify the Debian bug reporting process for improved developer workflow.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# reportbug

> Bug report tool of Debian distribution.
> More information: <https://manned.org/reportbug>.

- Generate a bug report about a specific package, then send it by e-mail:

`reportbug {{package}}`

- Report a bug that is not about a specific package (general problem, infrastructure, etc.):

`reportbug other`

- Write the bug report to a file instead of sending it by e-mail:

`reportbug {{[-o|--output]}} {{filename}} {{package}}`
