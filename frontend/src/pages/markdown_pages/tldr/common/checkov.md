---
title: "Checkov - Validate Infrastructure as Code | Online Free DevTools by Hexmos"
name: checkov
path: /freedevtools/tldr/common/checkov
canonical: "https://hexmos.com/freedevtools/tldr/common/checkov/"
description: "Validate infrastructure as code with Checkov, a powerful static analysis tool. Detect misconfigurations and security vulnerabilities in your IaC. Free online tool, no registration required."
category: common
keywords:
- IaC validation
- Infrastructure as Code security
- Static code analysis
- Terraform security
- CloudFormation security
- Checkov IaC scan
- DevOps security
- Infrastructure automation
- IaC vulnerability scanning
- Security configuration checks
features:
- Scan directories for IaC misconfigurations
- Analyze IaC files for security vulnerabilities
- List available security checks
- Support for multiple IaC languages (Terraform, CloudFormation, etc.)
- Omit code blocks from scan output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# checkov

> Checkov is a static code analysis tool for Infrastructure as Code (IaC).
> It is also a software composition analysis (SCA) tool for images and open source packages.
> More information: <https://www.checkov.io/1.Welcome/Quick%20Start.html>.

- Scan a directory containing IaC (Terraform, Cloudformation, ARM, Ansible, Bicep, Dockerfile, etc):

`checkov --directory {{path/to/directory}}`

- Scan an IaC file, omitting code blocks in the output:

`checkov --compact --file {{path/to/file}}`

- List all checks for all IaC types:

`checkov --list`
