---
title: "Gunicorn Server - Run Python Web Apps | Free DevTools"
name: gunicorn
path: /freedevtools/tldr/common/gunicorn
canonical: "https://hexmos.com/freedevtools/tldr/common/gunicorn/"
description: "Run Python web apps easily with Gunicorn HTTP server. Configure ports, workers, and enable HTTPS for secure deployments. Free online tool, no registration required."
category: common
keywords:
- python wsgi server
- gunicorn web app deployment
- gunicorn http server
- gunicorn python server
- gunicorn configuration
- gunicorn command line
- gunicorn reverse proxy
- gunicorn worker process
- gunicorn https configuration
- gunicorn localhost
features:
- Run Python web applications
- Configure server port and address
- Enable automatic live reloading
- Manage worker processes and threads
- Configure HTTPS with certificates
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gunicorn

> Python WSGI HTTP Server.
> More information: <https://docs.gunicorn.org/en/latest/run.html>.

- Run Python web app:

`gunicorn {{import.path:app_object}}`

- Listen on port 8080 on localhost:

`gunicorn {{[-b|--bind]}} {{localhost}}:{{8080}} {{import.path:app_object}}`

- Turn on live reload:

`gunicorn --reload {{import.path:app_object}}`

- Use 4 worker processes for handling requests:

`gunicorn {{[-w|--workers]}} {{4}} {{import.path:app_object}}`

- Use 4 worker threads for handling requests:

`gunicorn --threads {{4}} {{import.path:app_object}}`

- Run app over HTTPS:

`gunicorn --certfile {{cert.pem}} --keyfile {{key.pem}} {{import.path:app_object}}`
