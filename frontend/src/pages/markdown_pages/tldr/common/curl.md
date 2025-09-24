---
title: "Transfer Data with Curl - Command-Line Tool | Online Free DevTools by Hexmos"
name: curl
path: /freedevtools/tldr/common/curl
canonical: "https://hexmos.com/freedevtools/tldr/common/curl/"
description: "Transfer data effortlessly with Curl, a versatile command-line tool for various protocols. Supports HTTP, HTTPS, FTP, SCP, and more. Free online tool, no registration required."
category: common
keywords:
- curl data transfer
- command line curl
- curl http request
- curl https request
- curl ftp transfer
- curl secure copy
- curl command linux
- curl command macos
- curl command windows
- curl protocol transfer
features:
- Perform HTTP GET requests and output to stdout.
- Download files directly from URLs.
- Send form-encoded data via POST requests.
- Customize requests with headers and proxies.
- Resolve hostnames to custom IP addresses.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# curl

> Transfers data from or to a server.
> Supports most protocols, including HTTP, HTTPS, FTP, SCP, etc.
> More information: <https://curl.se/docs/manpage.html>.

- Make an HTTP GET request and dump the contents in `stdout`:

`curl {{https://example.com}}`

- Make an HTTP GET request, follow any `3xx` redirects, and dump the reply headers and contents to `stdout`:

`curl {{[-L|--location]}} {{[-D|--dump-header]}} - {{https://example.com}}`

- Download a file, saving the output under the filename indicated by the URL:

`curl {{[-O|--remote-name]}} {{https://example.com/filename.zip}}`

- Send form-encoded data (POST request of type `application/x-www-form-urlencoded`). Use `--data @file_name` or `--data @'-'` to read from `stdin`:

`curl {{[-X|--request]}} POST {{[-d|--data]}} {{'name=bob'}} {{http://example.com/form}}`

- Send a request with an extra header, using a custom HTTP method and over a proxy (such as BurpSuite), ignoring insecure self-signed certificates:

`curl {{[-k|--insecure]}} {{[-x|--proxy]}} {{http://127.0.0.1:8080}} {{[-H|--header]}} {{'Authorization: Bearer token'}} {{[-X|--request]}} {{GET|PUT|POST|DELETE|PATCH|...}} {{https://example.com}}`

- Send data in JSON format, specifying the appropriate Content-Type header:

`curl {{[-d|--data]}} {{'{"name":"bob"}'}} {{[-H|--header]}} {{'Content-Type: application/json'}} {{http://example.com/users/1234}}`

- Pass client certificate and key for a resource, skipping certificate validation:

`curl {{[-E|--cert]}} {{client.pem}} --key {{key.pem}} {{[-k|--insecure]}} {{https://example.com}}`

- Resolve a hostname to a custom IP address, with verbose output (similar to editing the `/etc/hosts` file for custom DNS resolution):

`curl {{[-v|--verbose]}} --resolve {{example.com}}:{{80}}:{{127.0.0.1}} {{http://example.com}}`
