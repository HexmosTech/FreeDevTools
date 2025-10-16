---
title: "HTTP Request - Generate HTTP Requests with lwp-request | Online Free DevTools by Hexmos"
name: lwp-request
path: "/freedevtools/tldr/common/lwp-request/"
canonical: "https://hexmos.com/freedevtools/tldr/common/lwp-request/"
description: "Generate HTTP requests with lwp-request, a versatile HTTP client.  Customize headers, authentication, and methods for web interactions. Free online tool, no registration required."
category: common
keywords:
- HTTP request generator
- lwp-request HTTP client
- command-line HTTP tool
- HTTP GET request
- HTTP POST request
- Perl HTTP library
- libwww-perl
- HTTP authentication
- custom user agent
- URL request tool
features:
- Send HTTP GET and POST requests
- Customize HTTP request headers
- Perform HTTP authentication
- Print request headers to the console
- Display response headers and status chain
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lwp-request

> Simple HTTP client.
> Built with libwww-perl.
> More information: <https://metacpan.org/pod/lwp-request>.

- Make a simple GET request:

`lwp-request -m GET {{http://example.com/some/path}}`

- Upload a file with a POST request:

`lwp-request -m POST {{http://example.com/some/path}} < {{path/to/file}}`

- Make a request with a custom user agent:

`lwp-request -H 'User-Agent: {{user_agent}} -m {{METHOD}} {{http://example.com/some/path}}`

- Make a request with HTTP authentication:

`lwp-request -C {{username}}:{{password}} -m {{METHOD}} {{http://example.com/some/path}}`

- Make a request and print request headers:

`lwp-request -U -m {{METHOD}} {{http://example.com/some/path}}`

- Make a request and print response headers and status chain:

`lwp-request -E -m {{METHOD}} {{http://example.com/some/path}}`
