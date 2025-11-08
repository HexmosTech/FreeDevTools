---
title: "RBTools Post - Manage Review Board Submissions | Online Free DevTools by Hexmos"
name: rbt
path: "/freedevtools/tldr/common/rbt/"
canonical: "https://hexmos.com/freedevtools/tldr/common/rbt/"
description: "Manage Review Board submissions with RBTools Post. Submit changes, view diffs, and patch code easily. Free online tool, no registration required."
category: common
keywords:
- Review Board submission
- RBTools command line
- RBTools post changes
- code review automation
- diff generation
- patch application
- repository setup
- RBCommons integration
- pre-commit hooks
- code review process
features:
- Post changes to Review Board for review.
- Display the diff that will be sent to Review Board.
- Land code changes into a local branch.
- Patch your local tree with a change from a review request.
- Set up RBTools to work with a repository.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rbt

> RBTools, a set of tools for working with Review Board and RBCommons.
> More information: <https://www.reviewboard.org/docs/rbtools/dev/>.

- Post changes to Review Board:

`rbt post {{change_number}}`

- Display the diff that will be sent to Review Board:

`rbt diff`

- Land a change in a local branch or on a review request:

`rbt land {{branch_name}}`

- Patch your tree with a change on a review request:

`rbt patch {{review_request_id}}`

- Set up RBTool to talk to a repository:

`rbt setup-repo`
