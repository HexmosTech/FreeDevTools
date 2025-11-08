---
title: "Azure Security Audit - Generate Prowler Reports | Online Free DevTools by Hexmos"
name: prowler-azure
path: "/freedevtools/tldr/prowler/prowler-azure/"
canonical: "https://hexmos.com/freedevtools/tldr/prowler/prowler-azure/"
description: "Audit Azure security with Prowler Azure. Generate compliance reports and identify vulnerabilities in your Azure environment. Free online tool, no registration required."
category: common
keywords:
- azure security audit
- prowler azure assessment
- azure compliance check
- azure vulnerability scan
- azure security best practices
- azure cli security
- azure security report
- cloud security audit
- security assessment azure
- azure prowler command
features:
- Assess Azure security configurations against best practices.
- Generate detailed reports on security compliance status.
- Perform automated audits for Azure subscriptions.
- Identify potential security vulnerabilities in Azure resources.
- Support authentication using Azure CLI, Service Principal, and Managed Identity.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# prowler azure

> Assess Azure security best practices, perform audits, compliance checks, and generate reports.
> See also: `prowler`, `prowler-aws`, `prowler-gcp`, `prowler-kubernetes`, `prowler-m365`, `prowler-github`.
> More information: <https://docs.prowler.com/projects/prowler-open-source/en/latest/>.

- Run the default set of checks on the current Azure account using Azure CLI authentication:

`prowler azure --az-cli-auth`

- Run checks for specific Azure subscriptions:

`prowler azure --az-cli-auth --subscription-ids {{subscription_id1 subscription_id2 ...}}`

- Authenticate using a service principal via environment variables:

`prowler azure --sp-env-auth`

- Authenticate using browser login and specify a tenant ID:

`prowler azure --browser-auth --tenant-id "{{XXXXXXXX}}"`

- Authenticate using a managed identity (e.g. for Azure VM):

`prowler azure --managed-identity-auth`

- Run checks for selected Azure services:

`prowler azure {{[-s|--services]}} {{defender iam ...}}`

- Run a specific Azure check:

`prowler azure {{[-c|--checks]}} {{storage_blob_public_access_level_is_disabled}}`

- Exclude specific checks or services:

`prowler azure {{[-e|--excluded-checks]}} {{storage_blob_public_access_level_is_disabled}} --exclude-services {{defender iam ...}}`
