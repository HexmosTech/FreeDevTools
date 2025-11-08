---
title: "Secure AWS Credentials - Manage with aws-vault | Online Free DevTools by Hexmos"
name: aws-vault
path: "/freedevtools/tldr/aws/aws-vault/"
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-vault/"
description: "Secure AWS credentials management with aws-vault. Store, access, and rotate AWS keys securely in development environments. Free online tool, no registration required."
category: common
keywords:
- aws credentials management
- aws vault secure storage
- aws access keys manager
- aws profile management
- aws cli authentication
- aws credential rotation
- aws key management
- aws session management
- aws multi-factor authentication
- aws development security
features:
- Securely store and access AWS credentials
- Execute commands with temporary AWS credentials
- Login to the AWS Console via the command line
- Rotate AWS credentials for enhanced security
- List and manage AWS profiles and sessions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aws-vault

> A vault for securely storing and accessing AWS credentials in development environments.
> More information: <https://github.com/99designs/aws-vault>.

- Add credentials to the secure keystore:

`aws-vault add {{profile}}`

- Execute a command with AWS credentials in the environment:

`aws-vault exec {{profile}} -- {{aws s3 ls}}`

- Open a browser window and login to the AWS Console:

`aws-vault login {{profile}}`

- List profiles, along with their credentials and sessions:

`aws-vault list`

- Rotate AWS credentials:

`aws-vault rotate {{profile}}`

- Remove credentials from the secure keystore:

`aws-vault remove {{profile}}`
