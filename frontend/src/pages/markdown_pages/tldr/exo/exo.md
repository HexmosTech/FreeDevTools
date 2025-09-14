---
title: "Exoscale Manage - Control Cloud Services | Free DevTools"
name: exo
path: /freedevtools/tldr/exo/exo
canonical: "https://hexmos.com/freedevtools/tldr/exo/exo/"
description: "Manage Exoscale cloud services with Exo CLI. Configure instances, manage storage, and generate autocompletion scripts with ease. Free online tool, no registration required."
category: common
keywords:
- exoscale cli manager
- cloud service management
- exo command-line tool
- exoscale instance control
- storage bucket management
- autocompletion script generation
- cloud infrastructure automation
- exoscale zone listing
- command-line interface
- infrastructure-as-code
features:
- Configure Exoscale command-line interface
- Generate shell autocompletion scripts
- List available zones in JSON format
- Create Compute instances with quiet mode
- List storage bucket names using output templates
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# exo

> Manage the Exoscale services.
> Some subcommands such as `exo compute` have their own usage documentation.
> More information: <https://community.exoscale.com/tools/command-line-interface/>.

- Configure the exo command-line:

`exo config`

- Generate the exo autocompletion script for a specified shell:

`exo completion {{zsh}}`

- List all of the available zones and output them as json:

`exo zone {{[-O|--output-format]}} {{json}}`

- Quietly create a Compute instance in a specific zone (disables the non-essential command output):

`exo compute instance create {{instance_name}} --zone {{zone}} {{[-Q|--quiet]}}`

- List just the name of all of the buckets in the Organization:

`exo storage list {{[-O|--output-template]}} '\{\{ .Name \}\}`

- Display help for a specific sub-command:

`exo {{iam}} {{[-h|--help]}}`
