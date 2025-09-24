---
title: "Detect GitHub Stars - Astronomer Bot Detection | Online Free DevTools by Hexmos"
name: astronomer
path: /freedevtools/tldr/common/astronomer
canonical: "https://hexmos.com/freedevtools/tldr/common/astronomer/"
description: "Detect illegitimate GitHub stars with Astronomer, identifying bot accounts and star inflation. Analyze star patterns and generate comparative reports to assess repository health. Free online tool, no registration required."
category: common
keywords:
  - GitHub star bot detection
  - GitHub bot account scanner
  - GitHub star analysis tool
  - illegitimate GitHub star identifier
  - repository star pattern analysis
  - GitHub repository health check
  - Astronomer GitHub command
  - GitHub star inflation detection
  - GitHub star count verification
  - automated GitHub star detection
features:
  - Scan GitHub repositories for potentially illegitimate stars.
  - Identify bot accounts artificially inflating star counts.
  - Analyze star patterns to detect suspicious activity and trends.
  - Generate comparative reports highlighting potential bot activity across repositories.
  - Specify the maximum number of stars to scan within a repository for optimized analysis.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# astronomer

> Detect illegitimate stars from bot accounts on GitHub projects.
> More information: <https://github.com/Ullaakut/astronomer>.

- Scan a repository:

`astronomer {{tldr-pages/tldr-node-client}}`

- Scan the maximum amount of stars in the repository:

`astronomer {{tldr-pages/tldr-node-client}} --stars {{50}}`

- Scan a repository including comparative reports:

`astronomer {{tldr-pages/tldr-node-client}} --verbose`
