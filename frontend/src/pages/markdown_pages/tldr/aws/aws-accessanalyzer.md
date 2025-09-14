---
title: "Access Analyzer - Analyze AWS Resource Policies | Free DevTools"
name: aws-accessanalyzer
path: /freedevtools/tldr/aws/aws-accessanalyzer
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-accessanalyzer/"
description: "Analyze AWS resource policies with Access Analyzer. Identify potential security risks and enforce security best practices. Free online tool, no registration required."
category: common
keywords:
- aws access analyzer
- aws accessanalyzer command
- aws resource policy analysis
- aws security analyzer
- aws iam analyzer
- aws access control
- aws security best practices
- aws policy validation
- aws access analyzer cli
- aws accessanalyzer documentation
features:
- Create and manage Access Analyzers for AWS resources.
- Identify potential security vulnerabilities in resource policies.
- Generate and delete archive rules for Access Analyzer findings.
- List and view details of existing Access Analyzers.
- Update Access Analyzer settings and apply new tags.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws accessanalyzer

> Analyze and review resource policies to identify potential security risks.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/accessanalyzer/index.html>.

- Create a new Access Analyzer:

`aws accessanalyzer create-analyzer --analyzer-name {{analyzer_name}} --type {{type}} --tags {{tags}}`

- Delete an existing Access Analyzer:

`aws accessanalyzer delete-analyzer --analyzer-arn {{analyzer_arn}}`

- Get details of a specific Access Analyzer:

`aws accessanalyzer get-analyzer --analyzer-arn {{analyzer_arn}}`

- List all Access Analyzers:

`aws accessanalyzer list-analyzers`

- Update settings of an Access Analyzer:

`aws accessanalyzer update-analyzer --analyzer-arn {{analyzer_arn}} --tags {{new_tags}}`

- Create a new Access Analyzer archive rule:

`aws accessanalyzer create-archive-rule --analyzer-arn {{analyzer_arn}} --rule-name {{rule_name}} --filter {{filter}}`

- Delete an Access Analyzer archive rule:

`aws accessanalyzer delete-archive-rule --analyzer-arn {{analyzer_arn}} --rule-name {{rule_name}}`

- List all Access Analyzer archive rules:

`aws accessanalyzer list-archive-rules --analyzer-arn {{analyzer_arn}}`
