---
title: "AWS STS - Generate Temporary Credentials | Online Free DevTools by Hexmos"
name: aws-sts
path: /freedevtools/tldr/aws/aws-sts
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-sts/"
description: "Generate temporary AWS credentials with AWS STS for secure access. Use Security Token Service for IAM roles and federated users. Free online tool, no registration required."
category: common
keywords:
- aws sts
- aws security token service
- iam role credentials
- temporary aws credentials
- aws assume role
- aws get caller identity
- aws access keys
- aws security
- cli credentials
- aws federation
features:
- Generate temporary AWS credentials for IAM roles
- Assume a specific IAM role for secure access
- Retrieve caller identity for operation auditing
- Enable federated user access to AWS resources
- Secure AWS access using short-term credentials
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aws sts

> Security Token Service (STS) allows to request temporary credentials for (IAM) users or federated users.
> More information: <https://docs.aws.amazon.com/cli/latest/reference/sts/>.

- Get temporary security credentials to access specific AWS resources:

`aws sts assume-role --role-arn {{aws_role_arn}}`

- Get an IAM user or role whose credentials are used to call the operation:

`aws sts get-caller-identity`
