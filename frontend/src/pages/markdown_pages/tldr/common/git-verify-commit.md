---
title: "Verify Git Commit - Check GPG Signatures | Free DevTools"
name: git-verify-commit
path: /freedevtools/tldr/common/git-verify-commit
canonical: "https://hexmos.com/freedevtools/tldr/common/git-verify-commit/"
description: "Verify Git commits with git-verify-commit. Check GPG signatures and ensure commit integrity. Free online tool, no registration required."
category: common
keywords:
- git commit signature verification
- gpg signature check git
- verify git history integrity
- git commit authenticity check
- git commit security
- git commit trust verification
- linux git commit
- macos git commit
- verify commit gpg
- git commit verify command
features:
- Checks commits for GPG signatures
- Verifies the authenticity of Git commits
- Displays detailed information about signed commits
- Prints raw details of verified commits
- Supports verification of multiple commits at once
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git verify-commit

> Check for GPG verification of commits.
> If no commits are verified, nothing will be printed, regardless of options specified.
> More information: <https://git-scm.com/docs/git-verify-commit>.

- Check commits for a GPG signature:

`git verify-commit {{commit_hash1 optional_commit_hash2 ...}}`

- Check commits for a GPG signature and show details of each commit:

`git verify-commit {{commit_hash1 optional_commit_hash2 ...}} {{[-v|--verbose]}}`

- Check commits for a GPG signature and print the raw details:

`git verify-commit {{commit_hash1 optional_commit_hash2 ...}} --raw`
