---
title: "Create Gists - Share Code Snippets Online | Online Free DevTools by Hexmos"
name: gist
path: /freedevtools/tldr/common/gist
canonical: "https://hexmos.com/freedevtools/tldr/common/gist/"
description: "Create online Gists easily with gist. Share code snippets and collaborate with others. Free online tool, no registration required. Use the command line for efficient Gist creation."
category: common
keywords:
- code gist creator
- github gist command
- command line gist
- private gist online
- public gist sharing
- gist update tool
- gist from stdin
- gist login command
- gist list command
- gist linux tool
features:
- Create public or private gists from files
- Update existing gists using their IDs
- List user's public and private gists
- Read content from stdin and create a gist
- Log in to gist from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gist

> Upload code to <https://gist.github.com>.
> More information: <https://github.com/defunkt/gist>.

- Log in to gist on this computer:

`gist --login`

- Create a gist from any number of text files:

`gist {{file.txt}} {{file2.txt}}`

- Create a private gist with a description:

`gist --private --description "{{A meaningful description}}" {{file.txt}}`

- Read contents from `stdin` and create a gist from it:

`{{echo "hello world"}} | gist`

- List your public and private gists:

`gist --list`

- List all public gists for any user:

`gist --list {{username}}`

- Update a gist using the ID from URL:

`gist --update {{GIST_ID}} {{file.txt}}`
