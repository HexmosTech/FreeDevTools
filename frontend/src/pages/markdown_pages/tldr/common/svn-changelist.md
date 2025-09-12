---
title: "SVN Changelist - Control File Lists | Free DevTools"
name: svn-changelist
path: /freedevtools/tldr/common/svn-changelist
canonical: "https://hexmos.com/freedevtools/tldr/common/svn-changelist/"
description: "Control file lists with SVN Changelist. Easily manage and organize changes within your Subversion repository. Free online tool, no registration required."
category: common
keywords:
- SVN changelist manager
- Subversion changelist tool
- SVN file grouping
- SVN change tracking
- SVN commit organizer
- SVN command line changelist
- SVN version control changelist
- SVN commit grouping tool
- Subversion commit organization
- SVN changelist modification
features:
- Add files to a specified SVN changelist
- Remove files from an SVN changelist
- Recursively add directory contents to a changelist
- Remove an entire SVN changelist at once
- Commit changes within a specific SVN changelist
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# svn changelist

> Associate a changelist with a set of files.
> More information: <https://svnbook.red-bean.com/en/1.7/svn-book.html#svn.ref.svn.c.changelist>.

- Add files to a changelist, creating the changelist if it does not exist:

`svn {{[cl|changelist]}} {{changelist_name}} {{path/to/file1 path/to/file2 ...}}`

- Remove files from a changelist:

`svn {{[cl|changelist]}} --remove {{path/to/file1 path/to/file2 ...}}`

- Remove the whole changelist at once:

`svn {{[cl|changelist]}} --remove {{[-R|--recursive]}} --changelist {{changelist_name}} .`

- Add the contents of a space-separated list of directories to a changelist:

`svn {{[cl|changelist]}} {{[-R|--recursive]}} {{changelist_name}} {{path/to/directory1 path/to/directory2 ...}}`

- Commit a changelist:

`svn commit --changelist {{changelist_name}}`
