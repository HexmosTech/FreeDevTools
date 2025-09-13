---
title: "Generate Git Co-Author - Add Co-Authors to Commits | Free DevTools"
name: git-coauthor
path: /freedevtools/tldr/common/git-coauthor
canonical: "https://hexmos.com/freedevtools/tldr/common/git-coauthor/"
description: "Generate Git co-authors with git-coauthor. Easily add multiple authors to your Git commits and maintain accurate attribution. Free online tool, no registration required."
category: common
keywords:
- git co-author
- git multi-author
- git commit author
- git commit co-author
- command line git co-author
- git authorship management
- git commit history
- git-extras
- linux git co-author
- macos git co-author
features:
- Add a co-author to the last Git commit
- Modify the existing commit author list
- Integrate with git-extras commands
- Provide a simple interface for managing commit authorship
- Support multiple co-authors per commit
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git coauthor

> Add another author to the latest commit. Since this command rewrites the Git history, `--force` will be needed when pushing next time.
> Part of `git-extras`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-coauthor>.

- Insert an additional author to the last Git commit:

`git coauthor {{name}} {{name@example.com}}`
