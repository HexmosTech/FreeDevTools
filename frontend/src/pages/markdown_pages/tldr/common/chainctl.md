---
title: "Chainctl - Control Chainguard Platform | Online Free DevTools by Hexmos"
name: chainctl
path: /freedevtools/tldr/common/chainctl
canonical: "https://hexmos.com/freedevtools/tldr/common/chainctl/"
description: "Control the Chainguard platform with chainctl. Manage images, packages, and authentication. Authenticate and manage access. Free online tool, no registration required."
category: common
keywords:
- chainctl command
- chainguard cli
- container image management
- package version management
- platform authentication
- cli authentication
- image repository list
- package version list
- command line interface
- security platform
features:
- Authenticate to Chainguard platform
- List available container images
- List image repositories
- Examine image tag history
- List package version data
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# chainctl

> The official CLI for Chainguard.
> More information: <https://edu.chainguard.dev/chainguard/chainctl/chainctl-docs/chainctl/>.

- Authenticate to the Chainguard Platform:

`chainctl auth login`

- Logout from the Chainguard Platform:

`chainctl auth logout`

- Check which version you have installed:

`chainctl version`

- Update to the latest version:

`chainctl update`

- List images available to your account:

`chainctl images list`

- List image repositories available to your account:

`chainctl images repos list`

- Examine the history of an image tag in chainctl (e.g., image=python tag=3):

`chainctl images history {{image}}:{{tag}}`

- List package version data from repositories available to your account (e.g., package_name=go):

`chainctl packages versions list {{package_name}}`
