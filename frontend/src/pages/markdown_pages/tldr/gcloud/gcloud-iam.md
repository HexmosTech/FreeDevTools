---
title: "Manage IAM - Configure Access with gcloud-iam | Online Free DevTools by Hexmos"
name: gcloud-iam
path: /freedevtools/tldr/gcloud/gcloud-iam
canonical: "https://hexmos.com/freedevtools/tldr/gcloud/gcloud-iam/"
description: "Configure Identity and Access Management (IAM) with gcloud-iam. Create service accounts, manage roles, and control permissions effortlessly. Free online tool, no registration required."
category: common
keywords:
- gcloud iam
- gcloud iam roles
- gcloud iam service accounts
- gcloud iam policy
- google cloud iam
- iam roles management
- service account creation
- cloud identity access management
- iam binding configuration
- gcloud command line iam
features:
- List grantable IAM roles for resources
- Create custom IAM roles for organizations or projects
- Create new service accounts
- Add IAM policy bindings to service accounts
- List service account keys
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gcloud iam

> Configure Identity and Access Management (IAM) preferences and service accounts.
> See also: `gcloud`.
> More information: <https://cloud.google.com/sdk/gcloud/reference/iam>.

- List IAM grantable roles for a resource:

`gcloud iam list-grantable-roles {{resource}}`

- Create a custom role for a organization or project:

`gcloud iam roles create {{role_name}} --{{organization|project}} {{organization|project_id}} --file {{path/to/role.yaml}}`

- Create a service account for a project:

`gcloud iam service-accounts create {{name}}`

- Add an IAM policy binding to a service account:

`gcloud iam service-accounts add-iam-policy-binding {{service_account_email}} --member {{member}} --role {{role}}`

- Replace existing IAM policy binding:

`gcloud iam service-accounts set-iam-policy {{service_account_email}} {{policy_file}}`

- List a service account's keys:

`gcloud iam service-accounts keys list --iam-account {{service_account_email}}`
