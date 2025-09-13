---
title: "Git Send Email - Send Patches as Emails | Free DevTools"
name: git-send-email
path: /freedevtools/tldr/common/git-send-email
canonical: "https://hexmos.com/freedevtools/tldr/common/git-send-email/"
description: "Send Git patches as emails with Git Send Email. Review, annotate, and compose patches efficiently. Free online tool, no registration required."
category: common
keywords:
- git send email
- git email patches
- send git commits
- git patch series
- git email workflow
- git commit email
- git send email linux
- git send email macos
- git send email interactive
- git send email annotate
features:
- Send individual or multiple git commits as email patches
- Compose introductory email messages for patch series
- Interactively review and edit patch email content
- Annotate individual patches before sending
- Send patches from specified commits or revision ranges
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git send-email

> Send a collection of patches as emails.
> Patches can be specified as files, directions, or a revision list.
> More information: <https://git-scm.com/docs/git-send-email>.

- Send the last commit in the current branch interactively:

`git send-email -1`

- Send a given commit:

`git send-email -1 {{commit}}`

- Send multiple (e.g. 10) commits in the current branch:

`git send-email {{-10}}`

- Send an introductory email message for the patch series:

`git send-email -{{number_of_commits}} --compose`

- Review and edit the email message for each patch you're about to send:

`git send-email -{{number_of_commits}} --annotate`
