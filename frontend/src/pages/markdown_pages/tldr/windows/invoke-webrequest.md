---
title: "WebRequest Invoke - Perform HTTP/HTTPS Requests | Free DevTools"
name: invoke-webrequest
path: /freedevtools/tldr/windows/invoke-webrequest
canonical: "https://hexmos.com/freedevtools/tldr/windows/invoke-webrequest/"
description: "Perform HTTP/HTTPS requests with Invoke-WebRequest. Send data in JSON format and manage authentication seamlessly with this powerful command. Free online tool, no registration required."
category: windows
keywords:
- http request windows
- https request windows
- powershell web request
- invoke-webrequest powershell
- windows web client
- powershell http client
- api request powershell
- download file powershell
- post request powershell
- authentication powershell
features:
- Download content from a URL to a file.
- Send form-encoded data using the POST method.
- Include custom headers in web requests.
- Send data in JSON format with appropriate content-type.
- Pass username and password for server authentication.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Invoke-WebRequest

> Performs a HTTP/HTTPS request to the Web.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/invoke-webrequest>.

- Download the contents of a URL to a file:

`Invoke-WebRequest {{http://example.com}} -OutFile {{path\to\file}}`

- Send form-encoded data (POST request of type `application/x-www-form-urlencoded`):

`Invoke-WebRequest -Method Post -Body @{ name='bob' } {{http://example.com/form}}`

- Send a request with an extra header, using a custom HTTP method:

`Invoke-WebRequest -Headers {{@{ X-My-Header = '123' }}} -Method {{PUT}} {{http://example.com}}`

- Send data in JSON format, specifying the appropriate content-type header:

`Invoke-WebRequest -Body {{'{"name":"bob"}'}} -ContentType 'application/json' {{http://example.com/users/1234}}`

- Pass a username and password for server authentication:

`Invoke-WebRequest -Headers @{ Authorization = "Basic "+ [System.Convert]::ToBase64String([System.Text.Encoding]::ASCII.GetBytes("myusername:mypassword")) } {{http://example.com}}`
