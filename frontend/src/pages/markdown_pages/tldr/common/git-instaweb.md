---
title: "Launch GitWeb Server - Control Git Repository Web Interface | Free DevTools"
name: git-instaweb
path: /freedevtools/tldr/common/git-instaweb
canonical: "https://hexmos.com/freedevtools/tldr/common/git-instaweb/"
description: "Control your Git repository web interface with git-instaweb. Launch a local GitWeb server and browse your repository in a web browser. Free online tool, no registration required."
category: common
keywords:
- git web server
- git instaweb server
- git repository web interface
- git web browser
- git local server
- git http server
- git web ui
- git command line server
- git repository browser
- git web development
features:
- Launch a GitWeb server for easy repository browsing.
- Configure server port and host.
- Choose HTTP daemon (lighttpd, apache2, etc.).
- Automatically launch a web browser.
- Start, stop, or restart the GitWeb server.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git instaweb

> Helper to launch a GitWeb server.
> More information: <https://git-scm.com/docs/git-instaweb>.

- Launch a GitWeb server for the current Git repository:

`git instaweb --start`

- Listen only on localhost:

`git instaweb --start {{[-l|--local]}}`

- Listen on a specific port:

`git instaweb --start {{[-p|--port]}} {{1234}}`

- Use a specified HTTP daemon:

`git instaweb --start {{[-d|--httpd]}} {{lighttpd|apache2|mongoose|plackup|webrick}}`

- Also auto-launch a web browser:

`git instaweb --start {{[-b|--browser]}}`

- Stop the currently running GitWeb server:

`git instaweb --stop`

- Restart the currently running GitWeb server:

`git instaweb --restart`
