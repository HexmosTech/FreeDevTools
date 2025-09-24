---
title: "ACM PCA - Manage AWS Private Certificates | Online Free DevTools by Hexmos"
name: aws-acm-pca
path: /freedevtools/tldr/aws/aws-acm-pca
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-acm-pca/"
description: "Manage AWS Private Certificates with ACM PCA. Create, describe, list, and revoke certificates using the AWS command line. Free online tool, no registration required."
category: common
keywords:
- aws acm pca certificate authority
- aws acm pca private certificate
- aws acm pca command line
- acm pca certificate management
- aws certificate authority management
- aws acm pca revoke certificate
- aws acm pca create certificate
- aws acm pca cli
- aws acm pca openssl
- aws acm pca certificate signing request
features:
- Create and manage private certificate authorities in AWS
- Issue certificates from a private certificate authority
- Revoke certificates based on serial number and reason
- Retrieve certificate details using the ARN
- Update certificate authority configurations and statuses
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aws acm-pca

> AWS Certificate Manager Private Certificate Authority.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/acm-pca/index.html>.

- Create a private certificate authority:

`aws acm-pca create-certificate-authority --certificate-authority-configuration {{ca_config}} --idempotency-token {{token}} --permanent-deletion-time-in-days {{number}}`

- Describe a private certificate authority:

`aws acm-pca describe-certificate-authority --certificate-authority-arn {{ca_arn}}`

- List private certificate authorities:

`aws acm-pca list-certificate-authorities`

- Update a certificate authority:

`aws acm-pca update-certificate-authority --certificate-authority-arn {{ca_arn}} --certificate-authority-configuration {{ca_config}} --status {{status}}`

- Delete a private certificate authority:

`aws acm-pca delete-certificate-authority --certificate-authority-arn {{ca_arn}}`

- Issue a certificate:

`aws acm-pca issue-certificate --certificate-authority-arn {{ca_arn}} --certificate-signing-request {{cert_signing_request}} --signing-algorithm {{algorithm}} --validity {{validity}}`

- Revoke a certificate:

`aws acm-pca revoke-certificate --certificate-authority-arn {{ca_arn}} --certificate-serial {{serial}} --reason {{reason}}`

- Get certificate details:

`aws acm-pca get-certificate --certificate-authority-arn {{ca_arn}} --certificate-arn {{cert_arn}}`
