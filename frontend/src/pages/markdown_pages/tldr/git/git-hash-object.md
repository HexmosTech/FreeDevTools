---
title: "Hash Object - Generate Git Object ID | Online Free DevTools by Hexmos"
name: git-hash-object
path: /freedevtools/tldr/git/git-hash-object
canonical: "https://hexmos.com/freedevtools/tldr/git/git-hash-object/"
description: "Generate Git object ID instantly with git-hash-object. Securely compute unique content hashes and store them in Git database. Free online tool, no registration required."
category: common
keywords:
- git hash object
- git object id generator
- git content hash
- git sha1 hash
- git blob hash
- git commit hash
- git tree hash
- git object database
- git file hashing
- git linux command
features:
- Compute object ID from file content
- Store object in git database
- Specify object type (blob, commit, tag, tree)
- Calculate hash from standard input (stdin)
- Generate SHA1 hash for content
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git hash-object

> Computes the unique hash key of content and optionally creates an object with specified type.
> More information: <https://git-scm.com/docs/git-hash-object>.

- Compute the object ID without storing it:

`git hash-object {{path/to/file}}`

- Compute the object ID and store it in the Git database:

`git hash-object -w {{path/to/file}}`

- Compute the object ID specifying the object type:

`git hash-object -t {{blob|commit|tag|tree}} {{path/to/file}}`

- Compute the object ID from `stdin`:

`cat {{path/to/file}} | git hash-object --stdin`
