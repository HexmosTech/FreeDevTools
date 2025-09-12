---
title: "AWS IAM - Control Access to AWS Resources | Free DevTools"
name: aws-iam
path: /freedevtools/tldr/common/aws-iam
canonical: "https://hexmos.com/freedevtools/tldr/common/aws-iam/"
description: "Control AWS resource access with AWS IAM. Manage users, policies, and groups securely using command line. Free online tool, no registration required."
category: common
keywords:
- aws iam management
- aws identity access management
- aws iam command line
- aws iam list users
- aws iam list policies
- aws iam get group
- aws iam access keys
- aws iam policy description
- aws iam user management
- aws cli iam
features:
- List and manage IAM users
- List and manage IAM policies
- List and manage IAM groups
- Retrieve users within specific IAM groups
- Describe IAM policies based on ARN
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws iam

> Interact with Identity and Access Management (IAM), a web service for securely controlling access to AWS services.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/iam/index.html>.

- List users:

`aws iam list-users`

- List policies:

`aws iam list-policies`

- List groups:

`aws iam list-groups`

- Get users in a group:

`aws iam get-group --group-name {{group_name}}`

- Describe an IAM policy:

`aws iam get-policy --policy-arn arn:aws:iam::aws:policy/{{policy_name}}`

- List access keys:

`aws iam list-access-keys`

- List access keys for a specific user:

`aws iam list-access-keys --user-name {{user_name}}`

- Display help:

`aws iam help`
