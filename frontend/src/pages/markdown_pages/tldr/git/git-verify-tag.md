---
title: "Git Verify Tag - Check GPG Signatures | Online Free DevTools by Hexmos"
name: git-verify-tag
path: /freedevtools/tldr/git/git-verify-tag
canonical: "https://hexmos.com/freedevtools/tldr/git/git-verify-tag/"
description: "Check Git tags for GPG signatures with Git Verify Tag. Ensure code integrity and verify authorship of tags. Free online tool, no registration required."
category: common
keywords:
- Git verify tag
- Git GPG signature check
- Git tag verification
- Git code signing
- Git commit integrity
- Git security
- Git tag authenticity
- Git command line tools
- Git repository management
- Git tag verification linux
features:
- Verify GPG signatures of Git tags
- Ensure the authenticity of tagged releases
- Detect unsigned or tampered Git tags
- Display verbose details about tag signatures
- Output raw signature data for further analysis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git verify-tag

> Check for GPG verification of tags.
> If a tag wasn't signed, an error will occur.
> More information: <https://git-scm.com/docs/git-verify-tag>.

- Check tags for a GPG signature:

`git verify-tag {{tag1 optional_tag2 ...}}`

- Check tags for a GPG signature and show details for each tag:

`git verify-tag {{tag1 optional_tag2 ...}} {{[-v|--verbose]}}`

- Check tags for a GPG signature and print the raw details:

`git verify-tag {{tag1 optional_tag2 ...}} --raw`
