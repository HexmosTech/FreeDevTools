---
title: "Git Push - Control Git Remote with jj | Online Free DevTools by Hexmos"
name: jj-git-push
path: /freedevtools/tldr/jj/jj-git-push
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-git-push/"
description: "Control Git remotes effortlessly with jj Git Push. Manage bookmarks and revisions efficiently. Free online tool, no registration required."
category: common
keywords:
- git push command
- jj git push
- git remote control
- git bookmark management
- git revision pushing
- git push automation
- git command line
- jj command line
- git bookmark push
- git revision control
features:
- Push bookmarks to Git remotes
- Create new bookmarks for changes
- Push all tracked bookmarks
- Push revisions by name
- Control Git repositories from jj
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jj git push

> Push to a Git remote.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-git-push>.

- Push a bookmark to the given remote (defaults to `git.push` setting):

`jj git push {{[-b|--bookmark]}} {{bookmark}} --remote {{remote}}`

- Push a new bookmark:

`jj git push {{[-b|--bookmark]}} {{bookmark}} {{[-N|--allow-new]}}`

- Push all tracked bookmarks:

`jj git push --tracked`

- Push all bookmarks (including new bookmarks):

`jj git push --all`

- Push all bookmarks pointing to given revisions:

`jj git push {{[-r|--revisions]}} {{revset}}`

- Push changes/commits by creating new bookmarks (Name format is as per `templates.git_push_bookmark` setting, defaults to `"push-" ++ change_id.short()`):

`jj git push {{[-c|--change]}} {{revset}}`

- Push a revision with the given name:

`jj git push --named {{name}}={{revision}}`
