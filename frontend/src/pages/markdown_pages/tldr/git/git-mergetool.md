---
title: "Git Mergetool - Resolve Merge Conflicts | Free DevTools"
name: git-mergetool
path: /freedevtools/tldr/git/git-mergetool
canonical: "https://hexmos.com/freedevtools/tldr/git/git-mergetool/"
description: "Resolve merge conflicts with Git Mergetool. Launch and manage merge tools to fix code conflicts efficiently. Free online tool, no registration required."
category: common
keywords:
- git merge conflict resolution
- git mergetool launch
- git conflict manager
- git merge tool selection
- git diff tool integration
- git command line merge
- git command line conflict resolution
- git conflict resolution linux
- git conflict resolution macos
- git conflict resolution windows
features:
- Launch default merge resolution tools
- List available merge resolution tools
- Specify a merge tool by name
- Suppress prompting for each merge tool invocation
- Use the GUI merge tool explicitly
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git mergetool

> Run merge conflict resolution tools to resolve merge conflicts.
> More information: <https://git-scm.com/docs/git-mergetool>.

- Launch the default merge tool to resolve conflicts:

`git mergetool`

- List valid merge tools:

`git mergetool --tool-help`

- Launch the merge tool identified by a name:

`git mergetool {{[-t|--tool]}} {{tool_name}}`

- Don't prompt before each invocation of the merge tool:

`git mergetool {{[-y|--no-prompt]}}`

- Explicitly use the GUI merge tool (see the `merge.guitool` configuration variable):

`git mergetool {{[-g|--gui]}}`

- Explicitly use the regular merge tool (see the `merge.tool` configuration variable):

`git mergetool --no-gui`
