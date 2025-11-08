---
title: "IBM Cloud Login - Access Cloud Resources | Online Free DevTools by Hexmos"
name: ibmcloud-login
path: "/freedevtools/tldr/common/ibmcloud-login/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ibmcloud-login/"
description: "Access IBM Cloud resources easily with IBM Cloud Login. Securely authenticate and manage your cloud environment. Free online tool, no registration required."
category: common
keywords:
- ibmcloud login
- ibm cloud login cli
- ibmcloud authentication
- ibm cloud api key login
- ibmcloud sso login
- ibmcloud region login
- ibm cloud interactive login
- ibmcloud command line login
- cloud resource access
- ibm cloud security
features:
- Log in to IBM Cloud using interactive prompts.
- Authenticate to a specific IBM Cloud API endpoint.
- Log in with username, password and targeted region.
- Authenticate using an IBM Cloud API key (string or file).
- Log in using a federated ID (single sign-on).
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ibmcloud login

> Log in to the IBM Cloud.
> More information: <https://cloud.ibm.com/docs/cli?topic=cli-ibmcloud_cli#ibmcloud_login>.

- Log in by using an interactive prompt:

`ibmcloud login`

- Log in to a specific API endpoint (default is `cloud.ibm.com`):

`ibmcloud login -a {{api_endpoint}}`

- Log in by providing username, password and the targeted region as parameters:

`ibmcloud login -u {{username}} -p {{password}} -r {{us-south}}`

- Log in with an API key, passing it as an argument:

`ibmcloud login --apikey {{api_key_string}}`

- Log in with an API key, passing it as a file:

`ibmcloud login --apikey @{{path/to/api_key_file}}`

- Log in with a federated ID (single sign-on):

`ibmcloud login --sso`
