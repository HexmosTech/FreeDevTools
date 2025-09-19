---
title: "Protect Branches - Control GitHub Branches | Online Free DevTools by Hexmos"
name: protector
path: /freedevtools/tldr/common/protector
canonical: "https://hexmos.com/freedevtools/tldr/common/protector/"
description: "Control GitHub branches protection with Protector. Protect or unprotect branches using regular expressions for comprehensive repository management. Free online tool, no registration required."
category: common
keywords:
- GitHub branch protection
- repository protection rules
- branch management CLI
- regex branch control
- GitHub automation tool
- repository security configuration
- protector command line
- dry run branch protection
- unprotect GitHub branches
- GitHub repository tool
features:
- Protect multiple branches using regular expressions.
- Enable dry run mode for previewing protection actions.
- Unprotect branches by deleting protection rules.
- Target specific GitHub repositories using organization/repository syntax.
- Automate branch protection workflows via command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# protector

> Protect or unprotect branches on GitHub repositories.
> More information: <https://github.com/jcgay/protector>.

- Protect branches of a GitHub repository (create branch protection rules):

`protector {{branches_regex}} -repos {{organization/repository}}`

- Use the dry run to see what would be protected (can also be used for freeing):

`protector -dry-run {{branches_regex}} -repos {{organization/repository}}`

- Free branches of a GitHub repository (delete branch protection rules):

`protector -free {{branches_regex}} -repos {{organization/repository}}`
