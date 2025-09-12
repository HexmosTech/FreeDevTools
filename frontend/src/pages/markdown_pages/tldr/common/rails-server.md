---
title: "Control Rails Server - Run App with Puma | Free DevTools"
name: rails-server
path: /freedevtools/tldr/common/rails-server
canonical: "https://hexmos.com/freedevtools/tldr/common/rails-server/"
description: "Control Rails server instances with this command. Easily manage ports and environments for development or testing. Free online tool, no registration required."
category: common
keywords:
- rails server control
- rails puma server
- rails web server
- rails development server
- rails server port
- rails server environment
- ruby rails server
- rails server binding
- rails server configuration
- rails server options
features:
- Start a Rails application server.
- Specify the port for the Rails server.
- Set the binding IP address for the server.
- Define the environment to run the server in.
- Display available server options and help information.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rails server

> Serve the Rails app in the current directory using the Puma web server, which comes bundled with Rails.
> More information: <https://guides.rubyonrails.org/command_line.html#bin-rails-server>.

- Run the web server:

`rails server`

- Run the web server on a specified port:

`rails server {{[-p|--port]}} {{port_number}}`

- Run the web server on a specified IP address:

`rails server {{[-b|--binding]}} {{ip_address}}`

- Run the web server on a specified environment:

`rails server {{[-e|--environment]}} {{environment}}`

- Display help:

`rails server {{[-h|--help]}}`
