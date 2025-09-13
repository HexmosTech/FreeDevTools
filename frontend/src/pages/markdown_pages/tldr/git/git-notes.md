---
title: "Control Git Notes - Add & Inspect Object Notes | Free DevTools"
name: git-notes
path: /freedevtools/tldr/git/git-notes
canonical: "https://hexmos.com/freedevtools/tldr/git/git-notes/"
description: "Control git notes with this online tool. Add, inspect, and manage object notes in your Git repository. Free online tool, no registration required."
category: common
keywords:
- git notes management
- git object notes
- git add notes
- git inspect notes
- git command line notes
- git commit notes
- git annotate commits
- git notes append
- git notes edit
- git notes remove
features:
- List notes attached to objects
- Append notes to specific commits
- Edit existing notes
- Copy notes between objects
- Remove notes from objects
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git notes

> Add or inspect object notes.
> More information: <https://git-scm.com/docs/git-notes>.

- List all notes and the objects they are attached to:

`git notes list`

- List all notes attached to a given object (defaults to HEAD):

`git notes list [{{object}}]`

- Show the notes attached to a given object (defaults to HEAD):

`git notes show [{{object}}]`

- Append a note to a specified object (opens the default text editor):

`git notes append {{object}}`

- Append a note to a specified object, specifying the message:

`git notes append --message="{{message_text}}"`

- Edit an existing note (defaults to HEAD):

`git notes edit [{{object}}]`

- Copy a note from one object to another:

`git notes copy {{source_object}} {{target_object}}`

- Remove all the notes added to a specified object:

`git notes remove {{object}}`
