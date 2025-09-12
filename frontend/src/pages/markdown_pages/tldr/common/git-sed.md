---
title: "Replace Text with git-sed - Edit Files | Free DevTools"
name: git-sed
path: /freedevtools/tldr/common/git-sed
canonical: "https://hexmos.com/freedevtools/tldr/common/git-sed/"
description: "Replace text effortlessly with git-sed. Edit files within your Git repository directly from the command line. Free online tool, no registration required."
category: common
keywords:
- git text replace
- sed text replace
- git sed command
- git file editor
- git replace pattern
- git find replace
- linux sed git
- bash git sed
- git commit changes
- git directory replace
features:
- Replace text in files within a Git repository
- Commit changes after text replacement
- Use regular expressions for pattern matching
- Replace text in files within a specified directory
- Perform find and replace operations on Git controlled files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git sed

> Replace patterns in git-controlled files using sed.
> Part of `git-extras`.
> More information: <https://manned.org/git-sed>.

- Replace the specified text in the current repository:

`git sed '{{find_text}}' '{{replace_text}}'`

- Replace the specified text and then commit the resulting changes with a standard commit message:

`git sed -c '{{find_text}}' '{{replace_text}}'`

- Replace the specified text, using `regex`:

`git sed -f g '{{find_text}}' '{{replace_text}}'`

- Replace a specific text in all files under a given directory:

`git sed '{{find_text}}' '{{replace_text}}' -- {{path/to/directory}}`
