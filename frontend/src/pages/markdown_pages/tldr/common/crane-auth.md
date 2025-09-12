---
title: "Crane Auth - Manage Container Registry Credentials | Free DevTools"
name: crane-auth
path: /freedevtools/tldr/common/crane-auth
canonical: "https://hexmos.com/freedevtools/tldr/common/crane-auth/"
description: "Manage container registry credentials with Crane Auth. Log in, log out, and retrieve tokens for secure container management. Free online tool, no registration required."
category: common
keywords:
- container registry authentication
- crane auth login
- docker credential helper
- registry token retrieval
- crane auth logout
- container image authentication
- registry access control
- crane cli authentication
- container security credentials
- google container registry
features:
- Authenticate with container registries using login credentials.
- Retrieve authentication tokens for secure container image access.
- Implement credential helper for automated authentication.
- Log out of container registries to revoke access.
- Manage credentials for multiple container registries.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# crane auth

> Log in or access credentials.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane_auth.md>.

- Execute `crane auth` subcommand:

`crane auth {{subcommand}}`

- Implement credential helper:

`crane auth get {{registry_address}} {{[-h|--help]}}`

- Log in to a registry:

`crane auth login {{registry_address}} {{[-h|--help]}} {{[-p|--password]}} {{password}} {{-password-stdin}} {{[-u|--username]}} {{username}}`

- Log out of a registry:

`crane auth logout {{registry_address}} {{[-h|--help]}}`

- Retrieve a token for a remote repository:

`crane auth token {{registry_address}} {{[-H|--header]}} {{[-h|--help]}} {{[-m|--mount]}} {{scope1 scope2 ...}} --push`

- Display help:

`crane auth {{[-h|--help]}}`
