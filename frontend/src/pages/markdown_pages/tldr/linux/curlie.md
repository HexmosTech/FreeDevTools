---
title: "Send HTTP Requests - Curlie CLI | Free DevTools"
name: curlie
path: /freedevtools/tldr/unknown/curlie
canonical: "https://hexmos.com/freedevtools/tldr/unknown/curlie/"
description: "Send HTTP requests with Curlie, a command-line tool for simplified API interactions. Execute GET, POST requests and customize headers effortlessly. Free online tool, no registration required."
category: unknown
keywords:
- HTTP request command line
- API request tool
- Curlie CLI
- command line HTTP client
- HTTP GET request
- HTTP POST request
- API testing command line
- curl alternative
- command line web request
- HTTP debugging command line
features:
- Send GET requests with custom query parameters
- Send POST requests with data from the command line
- Customize request headers for advanced API interaction
- Execute HTTP requests from the terminal
- Simplify API testing and debugging with command-line interface
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# curlie

> A frontend to `curl` that adds the ease of use of `httpie`.
> More information: <https://github.com/rs/curlie>.

- Send a GET request:

`curlie {{httpbin.org/get}}`

- Send a POST request:

`curlie post {{httpbin.org/post}} {{name=john}} {{age:=25}}`

- Send a GET request with query parameters (e.g. `first_param=5&second_param=true`):

`curlie get {{httpbin.org/get}} {{first_param==5}} {{second_param==true}}`

- Send a GET request with a custom header:

`curlie get {{httpbin.org/get}} {{header-name:header-value}}`
