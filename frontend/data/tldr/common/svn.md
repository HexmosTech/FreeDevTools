---
title: "SVN Control - Manage Code Versions with Subversion | Online Free DevTools by Hexmos"
name: svn
path: "/freedevtools/tldr/common/svn/"
canonical: "https://hexmos.com/freedevtools/tldr/common/svn/"
description: "Control code versions effectively with Subversion (SVN). Manage repositories, commit changes, and track history using this free online tool, no registration required."
category: common
keywords:
- svn version control
- subversion client
- code repository manager
- svn command line
- svn commit tool
- svn update command
- svn checkout utility
- linux svn client
- macos svn client
- windows svn
features:
- Check out code from a remote repository
- Commit local changes to a remote repository
- Update a local working copy with remote changes
- Add files and directories to version control
- View revision history and file modifications
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# svn

> Subversion client tool.
> More information: <https://svnbook.red-bean.com/en/1.7/svn-book.html#svn.ref.svn>.

- Check out a working copy from a repository:

`svn {{[co|checkout]}} {{url/to/repository}}`

- Bring changes from the repository into the working copy:

`svn {{[up|update]}}`

- Put files and directories under version control, scheduling them for addition to repository. They will be added in next commit:

`svn add {{PATH}}`

- Send changes from your working copy to the repository:

`svn {{[ci|commit]}} {{[-m|--message]}} {{commit_log_message}} [{{PATH}}]`

- Display changes from the last 10 revisions, showing modified files for each revision:

`svn log {{[-vl|--verbose --limit]}} {{10}}`

- Display help:

`svn {{[h|help]}}`
