---
title: "Extract Git Mailinfo - Analyze Email Patches | Online Free DevTools by Hexmos"
name: git-mailinfo
path: /freedevtools/tldr/git/git-mailinfo
canonical: "https://hexmos.com/freedevtools/tldr/git/git-mailinfo/"
description: "Extract email patches and authorship information with Git Mailinfo. Analyze git patches from emails, remove whitespace, and filter body content. Free online tool, no registration required."
category: common
keywords:
- git mailinfo extraction
- git patch analysis
- email patch parsing
- git authorship information
- git email patch utility
- extract git patch data
- git mailinfo command
- git patch whitespace removal
- git email filtering
- git patch authorship tool
features:
- Extract patch data from email messages
- Remove leading and trailing whitespace from patches
- Filter email body content before a scissors line
- Analyze authorship data from patches
- Parse email patches for git repositories
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git mailinfo

> Extract patch and authorship information from a single email message.
> More information: <https://git-scm.com/docs/git-mailinfo>.

- Extract the patch and author data from an email message:

`git mailinfo {{message|patch}}`

- Extract but remove leading and trailing whitespace:

`git mailinfo -k {{message|patch}}`

- Remove everything from the body before a scissors line (e.g. "-->* --") and retrieve the message or patch:

`git mailinfo --scissors {{message|patch}}`
