---
title: "Create Zapier Integrations - Automate Workflows | Online Free DevTools by Hexmos"
name: zapier
path: "/freedevtools/tldr/zapier/zapier/"
canonical: "https://hexmos.com/freedevtools/tldr/zapier/zapier/"
description: "Create Zapier integrations with Zapier CLI. Automate workflows and connect apps effortlessly using the command line interface. Free online tool, no registration required."
category: common
keywords:
- Zapier integration
- Zapier automation
- Zapier CLI
- Workflow automation
- Zapier trigger
- Zapier create
- Zapier search
- Zapier resource
- Zapier push
- Zapier test
features:
- Initialize new Zapier integrations from templates
- Scaffold triggers, creates, searches, and resources
- Test and validate Zapier integrations locally
- Build and upload integrations to the Zapier platform
- Automate app connections via Zapier workflows
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zapier

> Create, automate, and manage zapier integrations.
> Some subcommands such as `build`, `init`, `scaffold`, `push`, `test`, etc. have their own usage documentation.
> More information: <https://platform.zapier.com/reference/cli>.

- Connect to a Zapier account:

`zapier login`

- Initialize a new Zapier integration with a project template:

`zapier init {{path/to/directory}}`

- Add a starting trigger, create, search, or resource to your integration:

`zapier scaffold {{trigger|create|search|resource}} {{name}}`

- Test an integration:

`zapier test`

- Build and upload an integration to Zapier:

`zapier push`

- Display help:

`zapier help`

- Display help for a specific command:

`zapier help {{command}}`
