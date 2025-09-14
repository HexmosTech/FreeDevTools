---
title: "Acquire AWS Credentials - Google SSO Auth | Free DevTools"
name: aws-google-auth
path: /freedevtools/tldr/aws/aws-google-auth
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-google-auth/"
description: "Acquire AWS credentials with aws-google-auth. Easily manage temporary STS credentials using Google Apps SSO. Free online tool, no registration required."
category: common
keywords:
- AWS credentials acquisition
- Google SSO authentication
- STS credentials management
- AWS temporary credentials
- Google Apps federation
- SAML role resolution
- CLI authentication tool
- aws-google-auth command line
- Google identity provider
- AWS security token service
features:
- Authenticate AWS via Google SSO
- Acquire temporary AWS credentials
- Resolve AWS account aliases
- Specify credentials duration
- Select AWS role interactively
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws-google-auth

> Acquire AWS temporary (STS) credentials using Google Apps as a federated (Single Sign-On) provider.
> More information: <https://github.com/cevoaustralia/aws-google-auth>.

- Log in with Google SSO using the specified username IDP and SP identifiers and set the credentials duration to one hour:

`aws-google-auth {{[-u|--username]}} {{example@example.com}} {{[-I|--idp-id]}} {{$GOOGLE_IDP_ID}} {{[-S|--sp-id]}} {{$GOOGLE_SP_ID}} {{[-d|--duration]}} {{3600}}`

- Log in asking which role to use (in case of several available SAML roles):

`aws-google-auth {{[-u|--username]}} {{example@example.com}} {{[-I|--idp-id]}} {{$GOOGLE_IDP_ID}} {{[-S|--sp-id]}} {{$GOOGLE_SP_ID}} {{[-d|--duration]}} {{3600}} {{[-a|--ask-role]}}`

- Resolve aliases for AWS accounts:

`aws-google-auth {{[-u|--username]}} {{example@example.com}} {{[-I|--idp-id]}} {{$GOOGLE_IDP_ID}} {{[-S|--sp-id]}} {{$GOOGLE_SP_ID}} {{[-d|--duration]}} {{3600}} {{[-a|--ask-role]}} --resolve-aliases`

- Display help:

`aws-google-auth {{[-h|--help]}}`
