---
title: "Download Image Galleries - with gallery-dl | Online Free DevTools by Hexmos"
name: gallery-dl
path: /freedevtools/tldr/common/gallery-dl
canonical: "https://hexmos.com/freedevtools/tldr/common/gallery-dl/"
description: "Download image galleries effortlessly with gallery-dl. Extract images from various image hosting sites and online collections. Free online tool, no registration required."
category: common
keywords:
- image gallery downloader
- online image extractor
- gallery-dl command line
- image hosting scraper
- gallery downloader Linux
- gallery downloader macOS
- gallery downloader Windows
- image collection downloader
- batch image downloader
- website image scraper
features:
- Download images from multiple image hosting sites.
- Save downloaded images to a specified directory.
- Retrieve cookies for authentication on websites.
- Extract direct URLs of images from authenticated sites.
- Filter manga chapters by number and language.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gallery-dl

> Download image galleries and collections from several image hosting sites.
> More information: <https://github.com/mikf/gallery-dl>.

- Download images from the specified URL:

`gallery-dl "{{url}}"`

- Save images to a specific directory:

`gallery-dl --destination {{path/to/directory}} "{{url}}"`

- Retrieve pre-existing cookies from your web browser (useful for sites that require login):

`gallery-dl --cookies-from-browser {{browser}} "{{url}}"`

- Get the direct URL of an image from a site supporting authentication with username and password:

`gallery-dl --get-urls --username {{username}} --password {{password}} "{{url}}"`

- Filter manga chapters by chapter number and language:

`gallery-dl --chapter-filter "{{10 <= chapter < 20}}" --option "lang={{language_code}}" "{{url}}"`
