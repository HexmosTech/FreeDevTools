---
title: "Prowler GCP - Assess Google Cloud Security | Free DevTools"
name: prowler-gcp
path: /freedevtools/tldr/common/prowler-gcp
canonical: "https://hexmos.com/freedevtools/tldr/common/prowler-gcp/"
description: "Assess Google Cloud security with Prowler GCP. Audit and check compliance, identify vulnerabilities and improve cloud posture. Free online tool, no registration required."
category: common
keywords:
- GCP security assessment
- Google Cloud security audit
- GCP compliance check
- Prowler GCP scan
- Cloud security best practices
- GCP vulnerability assessment
- gcp cloud posture
- gcp security benchmark
- Google cloud security configuration
- prowler gcp projects
features:
- Scan GCP projects for security vulnerabilities
- Audit GCP configurations against compliance standards
- Identify potential security risks in Google Cloud
- Automate GCP security best practices checks
- Generate detailed security assessment reports for GCP
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# prowler gcp

> Assess Google Cloud Platform (GCP) security best practices, audits, and compliance checks.
> See also: `prowler`, `prowler-aws`, `prowler-azure`, `prowler-kubernetes`, `prowler-m365`, `prowler-github`.
> More information: <https://docs.prowler.com/projects/prowler-open-source/en/latest/>.

- Run the default set of checks on all accessible GCP projects using default user credentials:

`prowler gcp`

- Authenticate using a service account credentials file:

`prowler gcp --credentials-file {{path/to/credentials.json}}`

- Scan specific GCP projects by ID:

`prowler gcp --project-ids {{project_id1 project_id2 ...}}`

- Run checks for selected GCP services:

`prowler gcp {{[-s|--services]}} {{iam compute ...}}`

- Run a specific GCP check:

`prowler gcp {{[-c|--checks]}} {{gcp_storage_bucket_logging_enabled}}`

- Exclude specific checks or services:

`prowler gcp {{[-e|--excluded-checks]}} {{gcp_storage_bucket_logging_enabled}} --exclude-services {{iam compute ...}}`
