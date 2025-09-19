---
title: "Create GitHub Issues - Manage Repository Issues | Online Free DevTools by Hexmos"
name: gh-issue-create
path: /freedevtools/tldr/gh/gh-issue-create
canonical: "https://hexmos.com/freedevtools/tldr/gh/gh-issue-create/"
description: "Create GitHub issues efficiently with gh-issue-create. Assign users, add labels, and manage issue content directly from the command line. Free online tool, no registration required."
category: common
keywords:
- github issue creation
- github issue management
- github cli issue
- gh issue create command
- github repository issue
- github command line tool
- issue tracker github
- github issue assignee
- github issue labels
- github issue body
features:
- Create issues directly from the command line
- Assign users to issues during creation
- Add labels to issues for categorization
- Define issue title and body content
- Open issue creation in a web browser
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gh issue create

> Create GitHub issues on a repository.
> More information: <https://cli.github.com/manual/gh_issue_create>.

- Create a new issue against the current repository interactively:

`gh issue create`

- Create a new issue with the `bug` label interactively:

`gh issue create {{[-l|--label]}} "{{bug}}"`

- Create a new issue interactively and assign it to the specified users:

`gh issue create {{[-a|--assignee]}} {{user1,user2,...}}`

- Create a new issue with a title, body and assign it to the current user:

`gh issue create {{[-t|--title]}} "{{title}}" {{[-b|--body]}} "{{body}}" {{[-a|--assignee]}} "{{@me}}"`

- Create a new issue interactively, reading the body text from a file:

`gh issue create {{[-F|--body-file]}} {{path/to/file}}`

- Create a new issue in the default web browser:

`gh issue create {{[-w|--web]}}`

- Display help:

`gh issue create --help`
