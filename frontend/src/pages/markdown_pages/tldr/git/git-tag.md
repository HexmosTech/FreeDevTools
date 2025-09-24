---
title: "Git Tag - Create and Manage Tags | Online Free DevTools by Hexmos"
name: git-tag
path: /freedevtools/tldr/git/git-tag
canonical: "https://hexmos.com/freedevtools/tldr/git/git-tag/"
description: "Create and manage Git tags with Git Tag. Annotate, delete, and push tags to remote repositories. Free online tool, no registration required."
category: common
keywords:
- git tag
- git create tag
- git list tags
- git delete tag
- git push tag
- git annotated tag
- git tag management
- git tagging
- version control tag
- git tag commit
features:
- Create tags pointing to specific commits
- List all tags in a repository
- Delete existing tags
- Push tags to remote repositories
- Create annotated tags with custom messages
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git tag

> Create, list, delete or verify tags.
> A tag is a static reference to a commit.
> More information: <https://git-scm.com/docs/git-tag>.

- List all tags:

`git tag`

- Create a tag with the given name pointing to the current commit:

`git tag {{tag_name}}`

- Create a tag with the given name pointing to a given commit:

`git tag {{tag_name}} {{commit}}`

- Create an annotated tag with the given message:

`git tag {{tag_name}} {{[-m|--message]}} {{tag_message}}`

- Delete the tag with the given name:

`git tag {{[-d|--delete]}} {{tag_name}}`

- Get updated tags from remote:

`git fetch {{[-t|--tags]}}`

- Push a tag to remote:

`git push origin tag {{tag_name}}`

- List all tags which contain a given commit (HEAD if not specified):

`git tag --contains {{commit}}`
