---
title: "HTTP Client - Interact with APIs | Online Free DevTools by Hexmos"
name: http-prompt
path: /freedevtools/tldr/linux/http-prompt
canonical: "https://hexmos.com/freedevtools/tldr/linux/http-prompt/"
description: "Interact with APIs effortlessly using http-prompt, an interactive HTTP client.  Features autocomplete and syntax highlighting for efficient API testing and debugging. Free online tool, no registration required."
category: linux
keywords:
  - HTTP client command
  - interactive HTTP client
  - API testing command
  - HTTP request tool
  - command-line HTTP client
  - terminal HTTP client
  - HTTP prompt autocomplete
  - syntax highlighting HTTP
  - API interaction tool
  - HTTP debugging command
features:
  - Provides interactive command-line interface for making HTTP requests.
  - Offers autocomplete suggestions for commands and URLs.
  - Includes syntax highlighting for improved readability and error detection.
  - Allows for easy session management, resuming previous sessions.
  - Supports custom headers and authentication methods.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# http-prompt

> An interactive HTTP client featuring autocomplete and syntax highlighting.
> More information: <https://github.com/httpie/http-prompt>.

- Launch a session targeting the default URL of <http://localhost:8000> or the previous session:

`http-prompt`

- Launch a session with a given URL:

`http-prompt {{http://example.com}}`

- Launch a session with some initial options:

`http-prompt {{localhost:8000/api}} --auth {{username:password}}`
