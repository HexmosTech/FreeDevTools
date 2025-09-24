---
title: "Generate Bug Reports - Reportbug Tool | Online Free DevTools by Hexmos"
name: reportbug
path: /freedevtools/tldr/linux/reportbug
canonical: "https://hexmos.com/freedevtools/tldr/linux/reportbug/"
description: "Generate bug reports with Reportbug, a powerful Debian bug reporting tool. Simplify issue reporting and contribute to open-source projects with this tool. Free online tool, no registration required."
category: linux
keywords:
  - Debian bug report
  - Generate Debian bug reports
  - Debian issue reporting
  - Linux bug reporting
  - Command line bug reporting tool
  - Package bug report
  - System issue report
  - Reportbug Debian
  - Report bug Linux
  - Debian problem reporting
features:
  - Generate bug reports for specific Debian packages
  - Report general system issues unrelated to specific packages
  - Save bug reports to a file instead of sending them immediately
  - Submit bug reports via email
  - Simplify Debian bug reporting process
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
