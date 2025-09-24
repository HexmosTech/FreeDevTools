---
title: "Deploy Websites - Surge Web Publishing | Online Free DevTools by Hexmos"
name: surge
path: /freedevtools/tldr/common/surge
canonical: "https://hexmos.com/freedevtools/tldr/common/surge/"
description: "Deploy websites instantly with Surge, a simple web publishing tool. Host your static websites and front-end projects quickly. Free online tool, no registration required."
category: common
keywords:
- web publishing
- static website hosting
- surge deployment
- front-end deployment
- command line deployment
- website hosting cli
- surge cli
- single page application deployment
- website deployment tools
- static site hosting
features:
- Deploy websites to surge.sh
- Deploy websites to custom domains
- List existing surge projects
- Remove deployed surge projects (teardown)
- Publish web projects from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# surge

> Simple web publishing.
> More information: <https://surge.sh>.

- Upload a new site to surge.sh:

`surge {{path/to/my_project}}`

- Deploy site to custom domain (note that the DNS records must point to the surge.sh subdomain):

`surge {{path/to/my_project}} {{my_custom_domain.com}}`

- List your surge projects:

`surge list`

- Remove a project:

`surge teardown {{my_custom_domain.com}}`
