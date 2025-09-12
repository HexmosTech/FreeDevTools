---
title: "Microsoft Edge - Control Web Browsing with msedge | Free DevTools"
name: msedge
path: /freedevtools/tldr/unknown/msedge
canonical: "https://hexmos.com/freedevtools/tldr/unknown/msedge/"
description: "Control web browsing sessions with Microsoft Edge. Open URLs, manage profiles, and configure proxy settings using the msedge command. Free online tool, no registration required."
category: unknown
keywords:
- web browser command
- edge browser flags
- chromium command line
- msedge url opener
- edge private mode
- edge application mode
- edge proxy settings
- microsoft edge profiles
- msedge devtools
- msedge web security
features:
- Open specific URLs or files in Microsoft Edge
- Launch Microsoft Edge in InPrivate mode for privacy
- Open URLs in a new Microsoft Edge window
- Start Microsoft Edge in application mode for focused use
- Configure and use proxy servers with Microsoft Edge
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# msedge

> Modern web browser developed by Microsoft based on the Chromium web browser developed by Google.
> This command is available instead as `microsoft-edge` for other platforms.
> Note: Additional command arguments from `chromium` may also be usable to control Microsoft Edge.
> More information: <https://microsoft.com/edge>.

- Open a specific URL or file:

`msedge {{https://example.com|path/to/file.html}}`

- Open in InPrivate mode:

`msedge --inprivate {{example.com}}`

- Open in a new window:

`msedge --new-window {{example.com}}`

- Open in application mode (without toolbars, URL bar, buttons, etc.):

`msedge --app {{https://example.com}}`

- Use a proxy server:

`msedge --proxy-server "{{socks5://hostname:66}}" {{example.com}}`

- Open with a custom profile directory:

`msedge --user-data-dir {{path/to/directory}}`

- Open without CORS validation (useful to test an API):

`msedge --user-data-dir {{path/to/directory}} --disable-web-security`

- Open with a DevTools window for each tab opened:

`msedge --auto-open-devtools-for-tabs`
