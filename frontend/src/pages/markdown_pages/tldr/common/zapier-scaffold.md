---
title: "Zapier Scaffold - Generate Integration Templates | Free DevTools"
name: zapier-scaffold
path: /freedevtools/tldr/common/zapier-scaffold
canonical: "https://hexmos.com/freedevtools/tldr/common/zapier-scaffold/"
description: "Generate Zapier integration templates with Zapier Scaffold. Quickly create triggers, searches, creates, and resources for your Zapier apps. Free online tool, no registration required."
category: common
keywords:
- Zapier integration scaffold
- Zapier trigger generator
- Zapier create template
- Zapier search template
- Zapier resource template
- Zapier CLI tool
- Zapier integration development
- Zapier app builder
- Zapier app template
- Zapier integration scaffolding
features:
- Scaffold new Zapier triggers
- Scaffold new Zapier creates
- Scaffold new Zapier searches
- Scaffold new Zapier resources
- Customize the destination directory for scaffolded files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zapier scaffold

> Add a starting trigger, create, search, or resource to an integration.
> More information: <https://platform.zapier.com/reference/cli#scaffold>.

- Scaffold a new trigger, create, search, or resource:

`zapier scaffold {{trigger|search|create|resource}} {{noun}}`

- Specify a custom destination directory for the scaffolded files:

`zapier scaffold {{trigger|search|create|resource}} {{noun}} {{[-d|--dest]}}={{path/to/directory}}`

- Overwrite existing files when scaffolding:

`zapier scaffold {{trigger|search|create|resource}} {{noun}} {{[-f|--force]}}`

- Exclude comments from the scaffolded files:

`zapier scaffold {{trigger|search|create|resource}} {{noun}} --no-help`

- Show extra debugging output:

`zapier scaffold {{[-d|--debug]}}`
