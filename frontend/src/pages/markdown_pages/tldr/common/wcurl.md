---
title: "Download Files - wcurl Wrapper for Curl | Online Free DevTools by Hexmos"
name: wcurl
path: /freedevtools/tldr/common/wcurl
canonical: "https://hexmos.com/freedevtools/tldr/common/wcurl/"
description: "Download files easily with wcurl, a simple curl wrapper. Retrieve web resources and save them locally. Free online tool, no registration required."
category: common
keywords:
- URL downloader
- command line downloader
- curl wrapper
- wget alternative
- file downloader
- linux downloader
- macos downloader
- web resource retrieval
- HTTP downloader
- HTTPS downloader
features:
- Download files from URLs
- Save downloaded files with custom names
- Use custom curl options
- Resume interrupted downloads
- Display download progress
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wcurl

> A simple wrapper around `curl` to easily download files.
> See also: `curl`.
> More information: <https://curl.se/wcurl/manual.html>.

- Download the contents of a URL to a file indicated by the URL ("foo" in this case):

`wcurl {{https://example.com/foo}}`

- Download the contents of a URL to a file with a specified name:

`wcurl {{[-o|--output]}} {{bar}} {{https://example.com/foo}}`

- Download the contents of a URL, enabling progress bar and defaulting to HTTP/2:

`wcurl --curl-options "--progress-bar --http2" {{https://example.com/foo}}`

- Resume from an interrupted download:

`wcurl --curl-options "--continue-at -" {{https://example.com/foo}}`
