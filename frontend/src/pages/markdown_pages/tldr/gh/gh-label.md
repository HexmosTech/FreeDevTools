---
title: "Create GitHub Labels - Manage repository labels | Free DevTools"
name: gh-label
path: /freedevtools/tldr/gh/gh-label
canonical: "https://hexmos.com/freedevtools/tldr/gh/gh-label/"
description: "Create GitHub labels easily with gh-label. Manage repository labels, clone labels and apply consistent labeling for open source projects. Free online tool, no registration required."
category: common
keywords:
- github label management
- gh label create
- repository label tool
- github label cli
- github actions labels
- github label clone
- label bulk update
- github label sync
- github issue tracking labels
- gh label automation
features:
- List labels in a GitHub repository
- Create new labels with description and color
- Delete existing labels with confirmation
- Update the name and description of labels
- Clone labels from another repository
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gh label

> Work with GitHub labels.
> More information: <https://cli.github.com/manual/gh_label>.

- List labels for the repository in the current directory:

`gh label list`

- View labels for the repository in the current directory in the default web browser:

`gh label list {{[-w|--web]}}`

- Create a label with a specific name, description and color in hexadecimal format for the repository in the current directory:

`gh label create {{name}} {{[-d|--description]}} "{{description}}" {{[-c|--color]}} {{color_hex}}`

- Delete a label for the repository in the current directory, prompting for confirmation:

`gh label delete {{name}}`

- Update the name and description for a specific label for the repository in the current directory:

`gh label edit {{name}} {{[-n|--name]}} {{new_name}} {{[-d|--description]}} "{{description}}"`

- Clone labels from a specific repository into the repository in the current directory:

`gh label clone {{owner}}/{{repository}}`

- Display help for a subcommand:

`gh label {{subcommand}} --help`
