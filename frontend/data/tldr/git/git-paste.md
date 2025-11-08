---
title: "Send Git Paste - Share Commits via Pastebin | Online Free DevTools by Hexmos"
name: git-paste
path: "/freedevtools/tldr/git/git-paste/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-paste/"
description: "Send Git paste with this command to share commits and patches via pastebin services. Simplify code sharing and collaboration. Free online tool, no registration required."
category: common
keywords:
- git paste command
- share git commits
- git pastebin
- git patches
- git code sharing
- linux git paste
- macos git paste
- git extras paste
- command line pastebin
- git commit sharing
features:
- Sends git commit patches to a pastebin service
- Integrates with `pastebinit` for easy sharing
- Shares patches between current branch and its upstream
- Allows selecting specific commits for pasting
- Simplifies collaboration and code sharing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git paste

> Send commits to a pastebin site using `pastebinit`.
> Part of `git-extras`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-paste>.

- Send the patches between the current branch and its upstream to a pastebin using `pastebinit`:

`git paste`

- Pass options to `git format-patch` in order to select a different set of commits (`@^` selects the parent of HEAD, and so the currently checked out commit is sent):

`git paste {{@^}}`
