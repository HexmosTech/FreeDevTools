---
title: "Control Calibre Server - Distribute E-books | Online Free DevTools by Hexmos"
name: calibre-server
path: "/freedevtools/tldr/common/calibre-server/"
canonical: "https://hexmos.com/freedevtools/tldr/common/calibre-server/"
description: "Control your Calibre server and share ebooks with calibre-server. Manage ebook distribution over a network with ease. Free online tool, no registration required."
category: common
keywords:
- calibre ebook server
- ebook server distribution
- calibre server command line
- ebook network sharing
- calibre library server
- calibre ebook management
- ebook server password
- calibre server port
- calibre server linux
- calibre server command
features:
- Start a Calibre ebook server.
- Specify a custom port for the server.
- Set a username and password for server access.
- Distribute ebooks over a local network.
- Manage access to your Calibre library.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# calibre-server

> A server application to distribute e-books over a network.
> Note: E-books must already be imported into the library using the GUI or the `calibredb` CLI.
> Part of the Calibre e-book library.
> More information: <https://manual.calibre-ebook.com/generated/en/calibre-server.html>.

- Start a server to distribute e-books. Access at <http://localhost:8080>:

`calibre-server`

- Start server on different port. Access at <http://localhost:port>:

`calibre-server --port {{port}}`

- Password protect the server:

`calibre-server --username {{username}} --password {{password}}`
