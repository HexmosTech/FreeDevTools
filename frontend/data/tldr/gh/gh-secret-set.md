---
title: "GitHub Secret Set - Create Secrets | Online Free DevTools by Hexmos"
name: gh-secret-set
path: "/freedevtools/tldr/gh/gh-secret-set/"
canonical: "https://hexmos.com/freedevtools/tldr/gh/gh-secret-set/"
description: "Create GitHub secrets with gh-secret-set. Securely store sensitive information for repositories and organizations with ease. Free online tool, no registration required."
category: common
keywords:
- GitHub secrets manager
- GitHub secret set command
- Repository secret management
- Organization secret management
- GitHub CLI secrets
- gh secret set repository
- gh secret set organization
- GitHub secrets best practices
- Secure GitHub workflows
- GitHub actions secrets
features:
- Set secrets for GitHub repositories
- Set secrets for GitHub organizations
- Set secrets from files
- Control secret visibility (private, selected, all)
- Manage secrets via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gh secret set

> Create or update GitHub secrets.
> More information: <https://cli.github.com/manual/gh_secret_set>.

- Set a secret for the current repository (user will be prompted for the value):

`gh secret set {{name}}`

- Set a secret from a file for the current repository:

`gh secret set {{name}} < {{path/to/file}}`

- Set a secret for a specific repository:

`gh secret set {{name}} {{[-b|--body]}} {{value}} {{[-R|--repo]}} {{owner}}/{{repository}}`

- Set an organization secret for specific repositories:

`gh secret set {{name}} {{[-o|--org]}} {{organization}} {{[-r|--repos]}} "{{repository1,repository2,...}}"`

- Set an organization secret with a specific visibility:

`gh secret set {{name}} {{[-o|--org]}} {{organization}} {{[-v|--visibility]}} {{all|private|selected}}`
