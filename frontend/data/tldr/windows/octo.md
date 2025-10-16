---
title: "Octo - Deploy Releases | Online Free DevTools by Hexmos"
name: octo
path: "/freedevtools/tldr/windows/octo/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/octo/"
description: "Deploy releases with Octo. Automate software deployments to Octopus Deploy server from the command line. Free online tool, no registration required."
category: windows
keywords:
- Octopus Deploy command line
- Octo CLI
- Windows deployment automation
- Octo create release
- Octo push package
- Octo deploy release
- Octopus Deploy package manager
- Windows Octo tool
- Octo Windows command
- Octopus deployment scripting
features:
- Create Octopus Deploy packages from the command line
- Push packages to an Octopus Deploy repository
- Create new releases within Octopus Deploy projects
- Deploy existing releases to specified environments
- Target specific tenants during deployments
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# octo

> Command-line tools for Octopus Deploy.
> More information: <https://octopus.com/docs/octopus-rest-api/octo.exe-command-line>.

- Create a package:

`octo pack --id={{package}}`

- Push a package to a repository on the Octopus server:

`octo push --package={{package}}`

- Create a release:

`octo create-release --project={{project_name}} --packageversion={{version}}`

- Deploy a release:

`octo deploy-release --project={{project_name}} --packageversion={{version}} --deployto={{environment_name}} --tenant={{deployment_target}}`
