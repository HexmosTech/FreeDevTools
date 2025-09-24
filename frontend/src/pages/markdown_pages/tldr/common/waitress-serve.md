---
title: "Serve WSGI Apps - Run Python Apps with Waitress | Online Free DevTools by Hexmos"
name: waitress-serve
path: /freedevtools/tldr/common/waitress-serve
canonical: "https://hexmos.com/freedevtools/tldr/common/waitress-serve/"
description: "Serve Python WSGI applications with Waitress-serve. Deploy Python web apps with customizable ports and threads. Free online tool, no registration required."
category: common
keywords:
- python wsgi server
- waitress server deployment
- python web app deployment
- waitress command line
- wsgi application runner
- python server configuration
- waitress threading
- waitress unix socket
- wsgi http server
- python web server
features:
- Serve Python WSGI applications.
- Configure host and port for serving.
- Deploy applications using Unix sockets.
- Adjust the number of threads for request processing.
- Call factory methods to return WSGI objects.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# waitress-serve

> Pure Python WSGI HTTP Server.
> More information: <https://docs.pylonsproject.org/projects/waitress/en/latest/runner.html>.

- Run a Python web app:

`waitress-serve {{import.path:wsgi_func}}`

- Listen on port 8080 on localhost:

`waitress-serve --listen={{localhost}}:{{8080}} {{import.path:wsgi_func}}`

- Start waitress on a Unix socket:

`waitress-serve --unix-socket={{path/to/socket}} {{import.path:wsgi_func}}`

- Use 4 threads to process requests:

`waitress-serve --threads={{4}} {{import.path:wsgifunc}}`

- Call a factory method that returns a WSGI object:

`waitress-serve --call {{import.path.wsgi_factory}}`

- Use the HTTPS URL scheme:

`waitress-serve --url-scheme={{https}} {{import.path:wsgi_func}}`
