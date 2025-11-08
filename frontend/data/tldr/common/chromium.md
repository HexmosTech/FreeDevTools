---
title: "Control Chromium - Open Web Pages | Online Free DevTools by Hexmos"
name: chromium
path: "/freedevtools/tldr/common/chromium/"
canonical: "https://hexmos.com/freedevtools/tldr/common/chromium/"
description: "Control Chromium with this command line tool to open web pages and manage browser settings. Debug websites and manage profiles easily. Free online tool, no registration required."
category: common
keywords:
- chromium command line
- web browser automation
- chrome command flags
- chromium incognito mode
- browser proxy settings
- chromium profile manager
- disable web security chromium
- chromium developer tools
- chromium url opener
- chromium new window
features:
- Open URLs and local files in Chromium
- Launch Chromium in incognito mode
- Open Chromium in a new window
- Use a custom proxy server with Chromium
- Disable CORS validation for testing APIs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# chromium

> Open-source web browser principally developed and maintained by Google.
> Note: You may need to replace the `chromium` command with your desired web browser, such as `brave`, `google-chrome`, `opera`, or `vivaldi`.
> More information: <https://www.chromium.org/developers/how-tos/run-chromium-with-flags/>.

- Open a specific URL or file:

`chromium {{https://example.com|path/to/file.html}}`

- Open in incognito mode:

`chromium --incognito {{example.com}}`

- Open in a new window:

`chromium --new-window {{example.com}}`

- Open in application mode (without toolbars, URL bar, buttons, etc.):

`chromium --app={{https://example.com}}`

- Use a proxy server:

`chromium --proxy-server="{{socks5://hostname:66}}" {{example.com}}`

- Open with a custom profile directory:

`chromium --user-data-dir={{path/to/directory}}`

- Open without CORS validation (useful to test an API):

`chromium --user-data-dir={{path/to/directory}} --disable-web-security`

- Open with a DevTools window for each tab opened:

`chromium --auto-open-devtools-for-tabs`
