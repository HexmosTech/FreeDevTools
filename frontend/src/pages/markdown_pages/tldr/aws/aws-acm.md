---
title: "Manage AWS Certificates - Control ACM | Online Free DevTools by Hexmos"
name: aws-acm
path: /freedevtools/tldr/aws/aws-acm
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-acm/"
description: "Manage AWS certificates with ACM. Automate certificate lifecycle management, and improve security using command line. Free online tool, no registration required."
category: common
keywords:
- aws certificate manager
- aws acm certificate
- aws ssl certificate
- aws certificate import
- aws certificate request
- aws certificate delete
- aws acm cli
- aws certificate validation
- aws certificate arn
- aws certificate details
features:
- Import SSL/TLS certificates into ACM.
- List and describe existing AWS certificates.
- Request new certificates from AWS Certificate Manager.
- Delete unwanted or expired certificates.
- Update certificate options within AWS ACM.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aws acm

> AWS Certificate Manager.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/acm/index.html>.

- Import a certificate:

`aws acm import-certificate --certificate-arn {{certificate_arn}} --certificate {{certificate}} --private-key {{private_key}} --certificate-chain {{certificate_chain}}`

- List certificates:

`aws acm list-certificates`

- Describe a certificate:

`aws acm describe-certificate --certificate-arn {{certificate_arn}}`

- Request a certificate:

`aws acm request-certificate --domain-name {{domain_name}} --validation-method {{validation_method}}`

- Delete a certificate:

`aws acm delete-certificate --certificate-arn {{certificate_arn}}`

- List certificate validations:

`aws acm list-certificates --certificate-statuses {{status}}`

- Get certificate details:

`aws acm get-certificate --certificate-arn {{certificate_arn}}`

- Update certificate options:

`aws acm update-certificate-options --certificate-arn {{certificate_arn}} --options {{options}}`
