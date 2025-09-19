---
title: "Manage GitHub Secrets - Secure Repositories | Online Free DevTools by Hexmos"
name: gh-secret
path: /freedevtools/tldr/gh/gh-secret
canonical: "https://hexmos.com/freedevtools/tldr/gh/gh-secret/"
description: "Manage GitHub secrets securely with gh-secret. Protect sensitive data, control repository access, and automate deployments. Free online tool, no registration required."
category: common
keywords:
- github secret management
- repository secret control
- github cli secret
- gh secret command
- github actions secrets
- secret key rotation
- organization secrets management
- github secrets encryption
- command line secrets
- access control secrets
features:
- List secrets for repositories and organizations
- Set secrets for current repository from command line
- Set secrets from files securely
- Assign organization secrets to specific repositories
- Remove secrets from repositories and organizations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gh secret

> Manage GitHub secrets.
> More information: <https://cli.github.com/manual/gh_secret>.

- List secret keys for the current repository:

`gh secret list`

- List secret keys for a specific organization:

`gh secret list {{[-o|--org]}} {{organization}}`

- List secret keys for a specific repository:

`gh secret list {{[-R|--repo]}} {{owner}}/{{repository}}`

- Set a secret for the current repository (user will be prompted for the value):

`gh secret set {{name}}`

- Set a secret from a file for the current repository:

`gh secret set {{name}} < {{path/to/file}}`

- Set an organization secret for specific repositories:

`gh secret set {{name}} {{[-o|--org]}} {{organization}} {{[-r|--repos]}} {{repository1,repository2}}`

- Remove a secret for the current repository:

`gh secret remove {{name}}`

- Remove a secret for a specific organization:

`gh secret remove {{name}} {{[-o|--org]}} {{organization}}`
