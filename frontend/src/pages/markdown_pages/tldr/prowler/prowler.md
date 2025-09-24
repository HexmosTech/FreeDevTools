---
title: "Audit Security - Prowler Compliance Checks | Online Free DevTools by Hexmos"
name: prowler
path: /freedevtools/tldr/prowler/prowler
canonical: "https://hexmos.com/freedevtools/tldr/prowler/prowler/"
description: "Audit security best practices with Prowler across AWS, Azure, GCP and Kubernetes. Perform compliance checks and generate security assessments. Free online tool, no registration required."
category: common
keywords:
- cloud security audit
- AWS security assessment
- Azure security compliance
- GCP security benchmark
- Kubernetes security audit
- prowler security checks
- security best practices
- cloud compliance scanner
- cybersecurity audit tool
- prowler open source
features:
- Audit AWS, Azure, GCP, and Kubernetes security configurations
- Generate compliance reports in multiple formats (CSV, JSON-ASFF, HTML)
- Filter findings by status (PASS, FAIL, MANUAL)
- List available security checks for specific cloud providers
- Execute audits in verbose mode for detailed output
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# prowler

> Performs security best practices assessments, audits and compliance checks across AWS, Azure, Google Cloud, and Kubernetes.
> See also: `prowler-aws`, `prowler-azure`, `prowler-gcp`, `prowler-kubernetes`, `prowler-m365`, `prowler-github`.
> More information: <https://docs.prowler.com/projects/prowler-open-source/en/latest/>.

- Run an AWS, Azure, GCP, Kubernetes - as provider - audit with default checks:

`prowler {{provider}}`

- Show all available checks for a specific provider:

`prowler {{provider}} {{[-l|--list-checks]}}`

- Show all available services for a specific provider:

`prowler {{provider}} --list-services`

- Generate output in multiple formats, including JSON-ASFF for AWS Security Hub:

`prowler {{provider}} --output-modes {{csv,json-asff,html,...}}`

- Execute in verbose mode:

`prowler {{provider}} --verbose`

- Filter findings by status:

`prowler {{provider}} --status {{PASS,FAIL,MANUAL}}`

- Display help:

`prowler --help`

- Display version:

`prowler {{[-v|--version]}}`
