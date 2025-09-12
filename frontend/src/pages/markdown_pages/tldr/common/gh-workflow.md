---
title: "GitHub Workflow - Manage Actions | Free DevTools"
name: gh-workflow
path: /freedevtools/tldr/common/gh-workflow
canonical: "https://hexmos.com/freedevtools/tldr/common/gh-workflow/"
description: "Manage GitHub Actions workflows with gh-workflow. View, run, and control workflow executions. Free online tool, no registration required."
category: common
keywords:
- github actions workflow
- github workflow manager
- github cli workflow
- github ci/cd workflow
- workflow automation github
- github workflow run
- github workflow view
- github workflow list
- github workflow enable
- github workflow disable
features:
- View the latest jobs for a specific workflow
- Display the YAML definition of a workflow
- Run manual workflows with specified parameters
- Enable or disable GitHub Actions workflows
- List available workflow files in a repository
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gh workflow

> List, view, and run GitHub Actions workflows.
> More information: <https://cli.github.com/manual/gh_workflow>.

- Interactively select a workflow to view the latest jobs for:

`gh workflow view`

- View a specific workflow in the default browser:

`gh workflow view {{id|workflow_name|filename.yml}} {{[-w|--web]}}`

- Display the YAML definition of a specific workflow:

`gh workflow view {{id|workflow_name|filename.yml}} {{[-y|--yaml]}}`

- Display the YAML definition for a specific Git branch or tag:

`gh workflow view {{id|workflow_name|filename.yml}} {{[-r|--ref]}} {{branch|tag_name}} {{[-y|--yaml]}}`

- List workflow files (use `--all` to include disabled workflows):

`gh workflow list`

- Run a manual workflow with parameters:

`gh workflow run {{id|workflow_name|filename.yml}} {{--raw-field param1=value1 --raw-field param2=value2 ...}}`

- Run a manual workflow using a specific branch or tag with JSON parameters from `stdin`:

`echo '{{{"param1": "value1", "param2": "value2", ...}}}' | gh workflow run {{id|workflow_name|filename.yml}} {{[-r|--ref]}} {{branch|tag_name}}`

- Enable or disable a specific workflow:

`gh workflow {{enable|disable}} {{id|workflow_name|filename.yml}}`
