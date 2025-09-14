---
title: "Git Bisect - Find Bug-Inducing Commits | Free DevTools"
name: git-bisect
path: /freedevtools/tldr/git/git-bisect
canonical: "https://hexmos.com/freedevtools/tldr/git/git-bisect/"
description: "Find bug-inducing commits with Git Bisect. Use binary search in Git to identify faulty commits efficiently. Free online tool, no registration required."
category: common
keywords:
- git bisect
- git commit bisect
- git binary search
- git bug finder
- git debug commit
- git error tracking
- git commit history
- git version control bisect
- command line git bisect
- git bisect tool
features:
- Find the commit that introduced a bug using binary search.
- Pinpoint faulty commits in your Git repository.
- Narrow down a commit range to locate the problematic code.
- Skip commits during the bisect process to isolate the issue.
- Log the bisect session to track your progress.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git bisect

> Use binary search to find the commit that introduced a bug.
> Git automatically jumps back and forth in the commit graph to progressively narrow down the faulty commit.
> More information: <https://git-scm.com/docs/git-bisect>.

- Start a bisect session on a commit range bounded by a known buggy commit, and a known clean (typically older) one:

`git bisect start {{bad_commit}} {{good_commit}}`

- For each commit that `git bisect` selects, mark it as "bad" or "good" after testing it for the issue:

`git bisect {{good|bad}}`

- After `git bisect` pinpoints the faulty commit, end the bisect session and return to the previous branch:

`git bisect reset`

- Skip a commit during a bisect (e.g. one that fails the tests due to a different issue):

`git bisect skip`

- Display a log of what has been done so far:

`git bisect log`
