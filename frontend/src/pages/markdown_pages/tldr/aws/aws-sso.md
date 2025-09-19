---
title: "AWS SSO - Manage AWS Credentials | Online Free DevTools by Hexmos"
name: aws-sso
path: /freedevtools/tldr/aws/aws-sso
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-sso/"
description: "Manage AWS Single Sign-On credentials with AWS SSO. Secure access to AWS resources and simplify identity management. Free online tool, no registration required."
category: common
keywords:
- aws sso
- aws credentials
- aws identity management
- aws single sign-on
- aws cli sso
- aws access tokens
- aws account management
- aws role management
- aws sso login
- aws sso logout
features:
- Start and refresh AWS SSO access tokens
- End AWS SSO session and clear cached tokens
- List accessible AWS accounts
- List roles for a specified AWS account
- Retrieve short-term credentials for a specific account
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws sso

> Manage access to AWS resources using Single Sign-On (SSO) credentials.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sso/index.html>.

- Start SSO session and refresh access tokens. Requires setup using `aws configure sso`:

`aws sso login`

- End SSO session and clear cached access tokens:

`aws sso logout`

- List all AWS accounts accessible to the user:

`aws sso list-accounts`

- List all roles accessible to the user for a given AWS account:

`aws sso list-account-roles --account-id {{account}} --access-token {{token}}`

- Retrieve short-term credentials for a specific account:

`aws get-role-credentials --account-id {{account}} --role-name {{role}} --access-token {{token}}`
