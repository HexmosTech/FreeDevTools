---
title: "Create Journal Entries - Manage Life with jrnl | Free DevTools"
name: jrnl
path: /freedevtools/tldr/common/jrnl
canonical: "https://hexmos.com/freedevtools/tldr/common/jrnl/"
description: "Create journal entries with jrnl, a simple yet effective command-line journal application for personal knowledge management. Free online tool, no registration required."
category: common
keywords:
- journal entry creator
- command line journal
- personal journal tool
- text-based journal
- jrnl journal
- jrnl command line
- linux journal
- macos journal
- command line notes
- private journal
features:
- Insert new entries quickly using the command line
- View entries based on date ranges
- Edit entries tagged with specific keywords
- Filter entries by keywords using boolean operators
- Manage personal thoughts and activities through command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jrnl

> A simple journal application.
> More information: <https://jrnl.sh>.

- Insert a new entry with your editor:

`jrnl`

- Quickly insert a new entry:

`jrnl {{today at 3am}}: {{title}}. {{content}}`

- View the last ten entries:

`jrnl -n {{10}}`

- View everything that happened from the start of last year to the start of last march:

`jrnl -from "{{last year}}" -until {{march}}`

- Edit all entries tagged with "texas" and "history":

`jrnl {{@texas}} -and {{@history}} --edit`
