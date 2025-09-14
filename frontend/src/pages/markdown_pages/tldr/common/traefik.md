---
title: "Control Traefik - HTTP Reverse Proxy | Free DevTools"
name: traefik
path: /freedevtools/tldr/common/traefik
canonical: "https://hexmos.com/freedevtools/tldr/common/traefik/"
description: "Control HTTP reverse proxy with Traefik. Load balance traffic, configure routes, and manage certificates with this free online tool, no registration required."
category: common
keywords:
- traefik reverse proxy
- http load balancer
- traefik configuration
- traefik docker
- traefik kubernetes
- traefik certificates
- traefik routing
- traefik toml
- traefik command line
- traefik cluster mode
features:
- Start Traefik with default configurations.
- Load custom Traefik configuration files.
- Enable cluster mode for high availability.
- Expose the Traefik web UI for management.
- Configure HTTP routing and load balancing.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# traefik

> An HTTP reverse proxy and load balancer.
> More information: <https://traefik.io>.

- Start the server with the default configuration:

`traefik`

- Start the server with a custom configuration file:

`traefik --ConfigFile {{config_file.toml}}`

- Start the server with cluster mode enabled:

`traefik --cluster`

- Start server with web UI enabled:

`traefik --web`
