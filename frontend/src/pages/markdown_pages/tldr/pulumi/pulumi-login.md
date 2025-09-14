---
title: "Pulumi Login - Manage Cloud Access | Free DevTools"
name: pulumi-login
path: /freedevtools/tldr/pulumi/pulumi-login
canonical: "https://hexmos.com/freedevtools/tldr/pulumi/pulumi-login/"
description: "Manage Pulumi Cloud access with Pulumi Login. Configure and authenticate to your Pulumi account using the CLI. Free online tool, no registration required."
category: common
keywords:
- Pulumi Cloud login
- Infrastructure as Code authentication
- CLI login manager
- Cloud provider access
- Pulumi account management
- Command line authentication
- Pulumi access configuration
- IaC environment setup
- Pulumi local login
- Pulumi self-hosted login
features:
- Authenticate to the Pulumi Cloud
- Configure access to self-hosted Pulumi backends
- Enable local Pulumi usage without cloud connection
- Manage Pulumi account credentials
- Integrate with command-line workflows
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pulumi login

> Log in to the Pulumi cloud.
> More information: <https://www.pulumi.com/docs/iac/cli/commands/pulumi_login/>.

- Log in to the managed Pulumi Cloud backend, defaults to `app.pulumi.cloud`:

`pulumi login`

- Log in to a self-hosted Pulumi Cloud backend on a specified URL:

`pulumi login {{url}}`

- Use Pulumi locally, independent of a Pulumi Cloud:

`pulumi login {{[-l|--local]}}`
