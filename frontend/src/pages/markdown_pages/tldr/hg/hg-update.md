---
title: "Hg Update - Control Mercurial Changesets | Online Free DevTools by Hexmos"
name: hg-update
path: /freedevtools/tldr/hg/hg-update
canonical: "https://hexmos.com/freedevtools/tldr/hg/hg-update/"
description: "Control Mercurial changesets with Hg Update. Revert to specific revisions, discard uncommitted changes and update to specific dates using Mercurial SCM. Free online tool, no registration required."
category: common
keywords:
- Mercurial changeset update
- Mercurial revision control
- Hg version history management
- Hg discard changes
- Hg date-based update
- SCM update tool
- Mercurial update command
- Hg rollback tool
- Hg command line update
- Hg version control
features:
- Update working directory to a specific changeset.
- Revert to a specific revision.
- Discard all uncommitted changes.
- Update to the last commit matching a specific date.
- Update to the tip of the current branch.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hg update

> Update the working directory to a specified changeset.
> More information: <https://www.mercurial-scm.org/help/commands/update>.

- Update to the tip of the current branch:

`hg update`

- Update to the specified revision:

`hg update {{[-r|--rev]}} {{revision}}`

- Update and discard uncommitted changes:

`hg update {{[-C|--clean]}}`

- Update to the last commit matching a specified date:

`hg update {{[-d|--date]}} {{dd-mm-yyyy}}`
