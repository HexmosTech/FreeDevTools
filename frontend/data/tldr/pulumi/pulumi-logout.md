---
title: "Pulumi Logout - Secure Cloud Logouts | Online Free DevTools by Hexmos"
name: pulumi-logout
path: "/freedevtools/tldr/pulumi/pulumi-logout/"
canonical: "https://hexmos.com/freedevtools/tldr/pulumi/pulumi-logout/"
description: "Secure cloud logouts with Pulumi Logout. Manage cloud sessions and control access to your Pulumi resources. Free online tool, no registration required."
category: common
keywords:
- Pulumi cloud logout
- Infrastructure as code logout
- IaC cloud session management
- Pulumi CLI logout
- Multi-cloud logout
- Pulumi backend logout
- Cloud credential removal
- Pulumi access control
- IAC Security
- Common CLI commands
features:
- Log out of specific Pulumi cloud backends
- Log out of all cloud backends simultaneously
- Logout from local mode
- Display help information about the logout command
- Manage user sessions for Pulumi deployments
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pulumi logout

> Log out of the Pulumi cloud.
> More information: <https://www.pulumi.com/docs/iac/cli/commands/pulumi_logout/>.

- Log out of a specific cloud backend:

`pulumi logout {{url}}`

- Log out of all backends simultaneously:

`pulumi logout --all`

- Log out of using local mode:

`pulumi logout {{[-l|--local]}}`

- Display help:

`pulumi logout {{[-h|--help]}}`
