---
title: "GCP Diagnostics - Troubleshoot Google Cloud with gcpdiag | Online Free DevTools by Hexmos"
name: gcpdiag
path: /freedevtools/tldr/common/gcpdiag
canonical: "https://hexmos.com/freedevtools/tldr/common/gcpdiag/"
description: "Troubleshoot your GCP infrastructure with gcpdiag. Analyze logs, metrics, and configurations to identify and resolve issues quickly. Free online tool, no registration required."
category: common
keywords:
- GCP diagnostics tool
- Google Cloud troubleshooting
- gcpdiag lint
- GCP log analysis
- GCP metric analysis
- Cloud Shell diagnostics
- Cloud platform troubleshooting
- GCP configuration validation
- GCP security audit
- Infrastructure diagnostics
features:
- Diagnose Google Cloud project issues based on predefined rules
- Validate GCP project configurations against best practices
- Analyze GCP logs for errors and anomalies
- Search GCP metrics for performance bottlenecks
- Authenticate using service account keys for secure access
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gcpdiag

> Google Cloud Platform troubleshooting and diagnostics tool.
> Run in a Docker container or in GCP Cloudshell.
> More information: <https://github.com/GoogleCloudPlatform/gcpdiag>.

- Run `gcpdiag` on your project, returning all rules:

`gcpdiag lint --project={{gcp_project_id}}`

- Hide rules that are ok:

`gcpdiag lint --project={{gcp_project_id}} --hide-ok`

- Authenticate using a service account private key file:

`gcpdiag lint --project={{gcp_project_id}} --auth-key {{path/to/private_key}}`

- Search logs and metrics from a number of days back (default: 3 days):

`gcpdiag lint --project={{gcp_project_id}} --within-days {{number}}`

- Display help:

`gcpdiag lint --help`
