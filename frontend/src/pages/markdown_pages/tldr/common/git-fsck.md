---
title: "Validate Git Repository - Check Integrity with git fsck | Free DevTools"
name: git-fsck
path: /freedevtools/tldr/common/git-fsck
canonical: "https://hexmos.com/freedevtools/tldr/common/git-fsck/"
description: "Validate Git repository integrity with git fsck. Verify the validity and connectivity of nodes. Free online tool, no registration required."
category: common
keywords:
- git repository integrity check
- git fsck validation
- git object verification
- git connectivity test
- git data structure validation
- git dangling object detection
- git corrupted repository repair
- git repository health check
- git fsck command line
- git repository troubleshooting
features:
- Verify Git repository integrity
- Detect unreachable objects
- Identify dangling objects
- Check repository connectivity
- List all tags and root nodes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git fsck

> Verify the validity and connectivity of nodes in a Git repository index.
> Does not make any modifications.
> See also: `git gc` for cleaning up dangling blobs.
> More information: <https://git-scm.com/docs/git-fsck>.

- Check the current repository:

`git fsck`

- List all tags found:

`git fsck --tags`

- List all root nodes found:

`git fsck --root`

- Show all unreachable and dangling objects, ignore reflogs, and perform a full integrity check:

`git fsck --dangling --no-reflogs --unreachable --full`

- Check connectivity only (skip object integrity verification):

`git fsck --connectivity-only`
