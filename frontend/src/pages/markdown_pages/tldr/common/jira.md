---
title: "Jira - Control Project Issues | Online Free DevTools by Hexmos"
name: jira
path: /freedevtools/tldr/common/jira
canonical: "https://hexmos.com/freedevtools/tldr/common/jira/"
description: "Control Jira project issues efficiently with Jira command-line interface. Manage issues, sprints, and projects from your terminal. Free online tool, no registration required."
category: common
keywords:
- jira issue manager
- jira command line
- jira cli tool
- jira sprint management
- jira project tracker
- issue tracking command
- agile project management cli
- jira api command
- common command line interface
- atlassian jira tool
features:
- List recent Jira issues
- List issues from current sprint
- Create new Jira issues
- Set a parent issue for new Jira issues
- Assign issues to yourself in Jira
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jira

> Interface (third party) for interacting with Jira.
> More information: <https://github.com/ankitpokhrel/jira-cli>.

- List recent issues:

`jira issue list`

- List issues from the current sprint, assigned to me:

`jira sprint list --current -a$(jira me)`

- Create a new issue, optionally set a parent issue:

`jira issue create --parent {{parent}}`
