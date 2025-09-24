---
title: "FastAPI Runner - Control Uvicorn Apps | Online Free DevTools by Hexmos"
name: fastapi
path: /freedevtools/tldr/common/fastapi
canonical: "https://hexmos.com/freedevtools/tldr/common/fastapi/"
description: "Run FastAPI apps instantly with Uvicorn web server. Control host, port, and app directory for development and production. Free online tool, no registration required."
category: common
keywords:
- fastapi runner
- uvicorn server control
- python web app deployment
- development server with reload
- fastapi development
- api server configuration
- python uvicorn configuration
- web application management
- command line api runner
- fastapi development tool
features:
- Run FastAPI applications with automatic reload.
- Specify custom host and port for the server.
- Set application directory and app variable name.
- Serve FastAPI apps in development mode.
- Display help information for commands.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fastapi

> Run FastAPI apps which uses Uvicorn under the hood.
> More information: <https://manned.org/fastapi>.

- Run a FastAPI app with automatic reload (for development):

`fastapi run {{path/to/file.py}} --reload`

- Serve your app in both development mode:

`fastapi dev {{path/to/file.py}}`

- Specify the host and port to run on:

`fastapi run {{path/to/file.py}} --host {{host_address}} --port {{port}}`

- Set the app variable name (if not `app`) or specify a custom app directory:

`fastapi run {{path/to/file.py}} --app-dir {{path/to/app}} --app {{custom_app_name}}`

- Display help:

`fastapi --help`

- Display help for a subcommand:

`fastapi {{subcommand}} --help`
