---
title: "Exoscale IAM - Manage IAM Roles & API Keys | Online Free DevTools by Hexmos"
name: exo-iam
path: /freedevtools/tldr/exo/exo-iam
canonical: "https://hexmos.com/freedevtools/tldr/exo/exo-iam/"
description: "Manage Exoscale IAM roles and API keys with exo-iam. Securely control access and permissions to your Exoscale resources. Free online tool, no registration required."
category: common
keywords:
- exoscale iam roles
- exoscale api keys
- iam role management
- api key creation
- exoscale cloud security
- iam policy management
- cloud access control
- exoscale cli
- iam policy update
- cloud role based access control
features:
- List all IAM roles within your Exoscale account
- Create new API keys with specific IAM role assignments
- Create new IAM roles based on JSON policy definitions
- Show the policy of an existing IAM role in JSON format
- Update the default Organization IAM policy
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# exo iam

> Manage the Exoscale IAM service.
> More information: <https://community.exoscale.com/product/iam/>.

- List all of the IAM roles:

`exo iam role list`

- Create a new API key:

`exo iam api-key create {{api_key_name}} {{iam_role_name}}`

- Create a new IAM role:

`cat {{path/to/policy.json}} | exo iam role create {{iam_role_name}} --editable --policy -`

- Show the policy of an existing IAM role:

`exo iam role show {{iam_role_name}} --policy {{[-O|--output-format]}} {{json}} | jq .`

- Update the default Organization policy (the default Organization policy will be applied to all of the API keys within the Organization):

`cat {{path/to/policy.json}} | exo iam org-policy update -`
