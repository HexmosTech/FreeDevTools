---
title: "Manage Projects - proctl License & Language Control | Online Free DevTools by Hexmos"
name: proctl
path: /freedevtools/tldr/linux/proctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/proctl/"
description: "Control project licenses and languages with proctl.  Manage templates, pick from menus, and streamline your workflow. Free online tool, no registration required."
category: linux
keywords:
  - project license manager
  - project language selector
  - license template manager
  - command-line license tool
  - fzf license picker
  - fzf language picker
  - license template creator
  - license remover
  - project configuration tool
  - CLI project management
features:
  - List and select licenses from a FZF menu.
  - List and select languages from a FZF menu.
  - Create and manage license templates.
  - Remove licenses from a project.
  - Delete license templates.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# proctl

> Manage projects licenses and languages, switch between templated licenses.
> More information: <https://github.com/HeCodes2Much/proctl>.

- List available licenses:

`proctl {{[-ll|-list-licenses]}}`

- List available languages:

`proctl {{[-lL|-list-languages]}}`

- Pick a license in a FZF menu:

`proctl {{[-pl|-pick-license]}}`

- Pick a language in a FZF menu:

`proctl {{[-pL|-pick-language]}}`

- Remove all licenses from the current project:

`proctl {{[-r|-remove-license]}}`

- Create a new license template:

`proctl {{[-t|-new-template]}}`

- Delete a license from templates:

`proctl {{[-R|-delete-license]}} {{@license_name1 @license_name2 ...}}`

- Display help:

`proctl {{[-h|-help]}}`
