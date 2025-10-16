---
title: "Download Files - Web Downloader with Wget | Online Free DevTools by Hexmos"
name: wget
path: "/freedevtools/tldr/common/wget/"
canonical: "https://hexmos.com/freedevtools/tldr/common/wget/"
description: "Download files from the web with Wget, a powerful web downloader supporting HTTP, HTTPS, and FTP. Free online tool, no registration required."
category: common
keywords:
- web file downloader
- wget command line
- http downloader
- https downloader
- ftp downloader
- recursive download
- download manager
- linux wget
- macos wget
- wget mirror website
features:
- Download files from specified URLs
- Mirror entire websites recursively
- Limit download speed and connection retries
- Authenticate with HTTP and FTP servers
- Continue interrupted downloads
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wget

> Download files from the Web.
> Supports HTTP, HTTPS, and FTP.
> More information: <https://www.gnu.org/software/wget/manual/wget.html>.

- Download the contents of a URL to a file (named "foo" in this case):

`wget {{https://example.com/foo}}`

- Download the contents of a URL to a file (named "bar" in this case):

`wget {{[-O|--output-document]}} {{bar}} {{https://example.com/foo}}`

- Download a single web page and all its resources with 3-second intervals between requests (scripts, stylesheets, images, etc.):

`wget {{[-pkw|--page-requisites --convert-links --wait]}} 3 {{https://example.com/some_page.html}}`

- Download all listed files within a directory and its sub-directories (does not download embedded page elements):

`wget {{[-mnp|--mirror --no-parent]}} {{https://example.com/some_path/}}`

- Limit the download speed and the number of connection retries:

`wget --limit-rate {{300k}} {{[-t|--tries]}} {{100}} {{https://example.com/some_path/}}`

- Download a file from an HTTP server using Basic Auth (also works for FTP):

`wget --user {{username}} --password {{password}} {{https://example.com}}`

- Continue an incomplete download:

`wget {{[-c|--continue]}} {{https://example.com}}`

- Download all URLs stored in a text file to a specific directory:

`wget {{[-P|--directory-prefix]}} {{path/to/directory}} {{[-i|--input-file]}} {{path/to/URLs.txt}}`
