---
title: "Dolt Commit - Save Changes in Dolt Repositories | Online Free DevTools by Hexmos"
name: dolt-commit
path: /freedevtools/tldr/dolt/dolt-commit
canonical: "https://hexmos.com/freedevtools/tldr/dolt/dolt-commit/"
description: "Commit changes with Dolt using the dolt commit command. Easily save staged changes, specify authors, and manage database versions. Free online tool, no registration required."
category: common
keywords:
- Dolt commit
- Dolt version control
- Dolt database commit
- Commit Dolt tables
- Dolt commit message
- Dolt commit author
- Dolt commit date
- Dolt SQL commit
- Dolt data versioning
- Dolt repository save
features:
- Commit staged changes to a Dolt repository.
- Specify a commit message for a Dolt commit.
- Commit all unstaged changes in Dolt.
- Set a specific date for a Dolt commit.
- Define the author of a Dolt commit.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dolt commit

> Commit staged changes to tables.
> More information: <https://docs.dolthub.com/cli-reference/cli#dolt-commit>.

- Commit all staged changes, opening the editor specified by `$EDITOR` to enter the commit message:

`dolt commit`

- Commit all staged changes with the specified message:

`dolt commit {{[-m|--message]}} "{{commit_message}}"`

- Stage all unstaged changes to tables before committing:

`dolt commit {{[-a|--all]}}`

- Use the specified ISO 8601 commit date (defaults to current date and time):

`dolt commit --date "{{2021-12-31T00:00:00}}"`

- Use the specified author for the commit:

`dolt commit --author "{{author_name}} <{{author_email}}>"`

- Allow creating an empty commit, with no changes:

`dolt commit --allow-empty`

- Ignore foreign key warnings:

`dolt commit {{[-f|--force]}}`
