---
title: "Generate Website Screenshots - Pageres | Free DevTools"
name: pageres
path: /freedevtools/tldr/common/pageres
canonical: "https://hexmos.com/freedevtools/tldr/common/pageres/"
description: "Generate website screenshots with Pageres. Capture responsive designs across various resolutions and devices. Free online tool, no registration required."
category: common
keywords:
- website screenshot generator
- responsive screenshot capture
- pageres command line
- cross-browser testing
- webpage image export
- screenshot resolution tool
- website snapshot tool
- HTML screenshot tool
- command line screenshot
- headless browser screenshot
features:
- Capture screenshots of multiple URLs at different resolutions.
- Customize the filename template for saved screenshots.
- Target and capture specific elements within a webpage.
- Hide elements on a webpage before capturing the screenshot.
- Capture screenshots of local HTML files.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pageres

> Capture screenshots of websites in various resolutions.
> More information: <https://github.com/sindresorhus/pageres-cli>.

- Take multiple screenshots of multiple URLs at different resolutions:

`pageres {{https://example.com/}} {{https://example2.com/}} {{1366x768}} {{1600x900}}`

- Provide specific options for a URL, overriding global options:

`pageres [{{https://example.com/}} {{1366x768}} --no-crop] [{{https://example2.com/}} {{1024x768}}] {{[-c|--crop]}}`

- Provide a custom filename template:

`pageres {{https://example.com/}} {{1024x768}} --filename={{'<%= date %> - <%= url %>'}}`

- Capture a specific element on a page:

`pageres {{https://example.com/}} {{1366x768}} --selector='{{.page-header}}'`

- Hide a specific element:

`pageres {{https://example.com/}} {{1366x768}} --hide='{{.page-header}}'`

- Capture a screenshot of a local file:

`pageres {{local_file_path.html}} {{1366x768}}`
