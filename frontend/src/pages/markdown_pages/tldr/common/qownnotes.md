---
title: "Manage Markdown Notes - QOwnNotes Editor | Free DevTools"
name: qownnotes
path: /freedevtools/tldr/common/qownnotes
canonical: "https://hexmos.com/freedevtools/tldr/common/qownnotes/"
description: "Manage markdown notes efficiently with QOwnNotes. Organize, edit, and integrate with cloud services for seamless note-taking. Free online tool, no registration required."
category: common
keywords:
- markdown editor
- markdown note taking
- cloud note management
- qownnotes markdown
- linux markdown editor
- macos markdown editor
- cross platform notes
- nextcloud notes
- owncloud notes
- portable markdown editor
features:
- Run QOwnNotes in portable mode
- Dump settings for debugging
- Specify a custom session context
- Trigger menu actions via command line
- Integrate with Nextcloud and ownCloud
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# QOwnNotes

> Markdown note-taking application.
> Optionally integrates with the note-taking applications of Nextcloud and ownCloud.
> See also: `qc` for managing command snippets.
> More information: <https://www.qownnotes.org/getting-started/cli-parameters.html>.

- Run in portable mode:

`QOwnNotes --portable`

- Dump settings and other information about the app and environment in GitHub Markdown:

`QOwnNotes --dump-settings`

- Specify a different context for settings and internal files:

`QOwnNotes --session {{test}}`

- Trigger a menu action after the application was started:

`QOwnNotes --action {{actionShow_Todo_List}}`
