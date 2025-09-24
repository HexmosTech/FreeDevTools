---
title: "Uvicorn Server - Run Python ASGI Apps | Online Free DevTools by Hexmos"
name: uvicorn
path: /freedevtools/tldr/uv/uvicorn
canonical: "https://hexmos.com/freedevtools/tldr/uv/uvicorn/"
description: "Run asynchronous Python ASGI applications with Uvicorn Server. Deploy web apps, enable live reload, and configure worker processes. Free online tool, no registration required."
category: common
keywords:
- python asgi server
- uvicorn server configuration
- asgi application deployment
- python web app server
- uvicorn live reload
- uvicorn worker processes
- python server https
- uvicorn command line
- python asynchronous web server
- python web server deployment
features:
- Run Python ASGI web applications
- Configure host and port for server listening
- Enable live reload for development
- Configure number of worker processes
- Enable HTTPS with certificate and key files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# uvicorn

> Python ASGI HTTP Server, for asynchronous projects.
> More information: <https://www.uvicorn.org/settings/>.

- Run Python web app:

`uvicorn {{import.path:app_object}}`

- Listen on port 8080 on localhost:

`uvicorn --host {{localhost}} --port {{8080}} {{import.path:app_object}}`

- Turn on live reload:

`uvicorn --reload {{import.path:app_object}}`

- Use 4 worker processes for handling requests:

`uvicorn --workers {{4}} {{import.path:app_object}}`

- Run app over HTTPS:

`uvicorn --ssl-certfile {{cert.pem}} --ssl-keyfile {{key.pem}} {{import.path:app_object}}`
