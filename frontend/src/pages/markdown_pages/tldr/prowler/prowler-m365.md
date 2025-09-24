---
title: "Prowler M365 - Assess Security Configurations | Online Free DevTools by Hexmos"
name: prowler-m365
path: /freedevtools/tldr/prowler/prowler-m365
canonical: "https://hexmos.com/freedevtools/tldr/prowler/prowler-m365/"
description: "Assess Microsoft 365 security configurations with Prowler M365. Identify vulnerabilities and ensure best practices using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- M365 security assessment
- Microsoft 365 security configuration
- Prowler M365 scan
- cloud security auditing
- M365 compliance check
- Microsoft 365 best practices
- Azure AD security audit
- Microsoft 365 security posture
- prowler command line tool
- M365 security vulnerability scanner
features:
- Audit Microsoft 365 security configurations
- Identify potential vulnerabilities in your M365 environment
- Ensure compliance with security best practices
- Authenticate using service principals or Azure CLI
- Run specific M365 security checks
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# prowler m365

> Assess Microsoft 365 (M365) security configurations and best practices.
> See also: `prowler`, `prowler-aws`, `prowler-azure`, `prowler-gcp`, `prowler-kubernetes`, `prowler-github`.
> More information: <https://docs.prowler.com/projects/prowler-open-source/en/latest/>.

- Run Prowler with combined service principal and user credentials:

`prowler m365 --env-auth`

- Authenticate using a service principal:

`prowler m365 --sp-env-auth`

- Authenticate using the Azure CLI:

`prowler m365 --az-cli-auth`

- Authenticate using a browser and specify the tenant ID:

`prowler m365 --browser-auth --tenant-id "{{XXXXXXXX}}"`

- Run a specific Microsoft 365 check:

`prowler m365 {{[-c|--checks]}} {{etcd_enm365_onedrive_sharing_enabledcryption}}`

- Exclude specific checks:

`prowler m365 {{[-e|--excluded-checks]}} {{m365_onedrive_sharing_enabled}}`
