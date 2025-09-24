---
title: "Manage Weblate Projects - Control Localization with WLC | Online Free DevTools by Hexmos"
name: wlc
path: /freedevtools/tldr/common/wlc
canonical: "https://hexmos.com/freedevtools/tldr/common/wlc/"
description: "Manage Weblate projects efficiently with WLC. Control localization workflows, list components and translate strings with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- Weblate project management
- localization project control
- wlc command line tool
- Weblate API access
- translation string management
- localization statistics
- Weblate configuration
- project component listing
- string format conversion
- localization automation
features:
- List projects from a Weblate instance using a configuration file.
- List components within a specific Weblate project.
- Retrieve translations from a component in various formats (text, csv, json, html).
- Display project statistics for Weblate localization projects.
- Manage Weblate localization projects via command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wlc

> Manage localization projects on a Weblate instance.
> More information: <https://docs.weblate.org/en/latest/wlc.html#commands>.

- List projects using a configuration file:

`wlc {{[-c|--config]}} {{path/to/file}} list-projects`

- List components in a project, and override API URL and API key:

`wlc {{[-u|--url]}} {{URL}} {{[-k|--key]}} {{key}} ls {{project}}`

- List translations from a component in a specific format:

`wlc {{[-f|--format]}} {{text|csv|json|html}} ls {{project}}/{{component}}`

- Print statistics for a project:

`wlc stats {{project}}`

- Display help:

`wlc {{[-h|--help]}}`
