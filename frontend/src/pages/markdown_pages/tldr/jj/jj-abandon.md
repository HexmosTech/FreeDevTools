---
title: "JJ Abandon - Control Revision History | Free DevTools"
name: jj-abandon
path: /freedevtools/tldr/jj/jj-abandon
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-abandon/"
description: "Control revision history with JJ Abandon. Abandon revisions, rebase descendants, and manage change IDs effectively. Free online tool, no registration required."
category: common
keywords:
- jj abandon revision
- jujutsu abandon revision
- revision history management
- git abandon equivalent
- jj rebase descendants
- jj change ID removal
- jj version control
- jj command line
- jj workflow
- jj revert changes
features:
- Abandon specified revisions.
- Rebase descendants onto parent revisions.
- Remove change IDs from abandoned revisions.
- Retain bookmarks when abandoning revisions.
- Restore descendants' contents after abandoning.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jj abandon

> Abandon a revision, rebasing descendants onto its parent(s).
> Abandoning a revision removes its associated change ID.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-abandon>.

- Abandon revisions specified by given revsets (e.g. `B::D`, `A..D`, `B|C|D`, etc.):

`jj abandon {{revsets}}`

- Abandon revisions, without deleting their bookmarks and moving them to the parent revisions instead:

`jj abandon --retain-bookmarks {{revsets}}`

- Abandon revisions, without modifying the contents of their children:

`jj abandon --restore-descendants {{revsets}}`
