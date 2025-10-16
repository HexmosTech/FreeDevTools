---
title: "Git SVN - Control Subversion with Git | Online Free DevTools by Hexmos"
name: git-svn
path: "/freedevtools/tldr/git/git-svn/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-svn/"
description: "Control Subversion repositories with Git SVN. Bidirectional operation and seamless integration between Git and Subversion. Free online tool, no registration required."
category: common
keywords:
- git svn bridge
- svn git conversion
- subversion git migration
- git svn client
- git svn repository
- git svn commit
- git svn rebase
- git svn clone
- git svn fetch
- version control migration
features:
- Clone Subversion repositories into Git.
- Commit Git changes back to Subversion.
- Fetch updates from a remote SVN repository.
- Rebase a local Git clone against a remote SVN repository.
- Manage bidirectional operation between Subversion and Git.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git svn

> Bidirectional operation between a Subversion repository and Git.
> More information: <https://git-scm.com/docs/git-svn>.

- Clone an SVN repository:

`git svn clone {{https://example.com/subversion_repo}} {{local_dir}}`

- Clone an SVN repository starting at a given revision number:

`git svn clone {{[-r|--revision]}} {{1234}}:HEAD {{https://svn.example.net/subversion/repo}} {{local_dir}}`

- Update local clone from the remote SVN repository:

`git svn rebase`

- Fetch updates from the remote SVN repository without changing the Git HEAD:

`git svn fetch`

- Commit back to the SVN repository:

`git svn commit`
