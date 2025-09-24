---
title: "Microsoft Edge - Control Web Browser with CLI | Online Free DevTools by Hexmos"
name: microsoft-edge
path: /freedevtools/tldr/common/microsoft-edge
canonical: "https://hexmos.com/freedevtools/tldr/common/microsoft-edge/"
description: "Control Microsoft Edge web browser with command-line interface. Automate browsing tasks, launch in private mode, and configure proxy settings. Free online tool, no registration required."
category: common
keywords:
- Edge browser control
- Web browser automation
- Chromium command line
- Microsoft Edge CLI
- Windows browser command
- InPrivate mode launch
- Proxy server configuration
- Web security disabling
- Application mode browsing
- Custom Edge profile
features:
- Open URLs or files in Microsoft Edge
- Launch Edge in InPrivate browsing mode
- Start Edge in application mode without toolbars
- Configure a proxy server for browsing sessions
- Open Edge with a custom user profile directory
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# microsoft-edge

> Modern web browser developed by Microsoft based on the Chromium web browser developed by Google.
> This command is available instead as `msedge` for Windows.
> Note: Additional command arguments from `chromium` may also be usable to control Microsoft Edge.
> More information: <https://microsoft.com/edge>.

- Open a specific URL or file:

`microsoft-edge {{https://example.com|path/to/file.html}}`

- Open in InPrivate mode:

`microsoft-edge --inprivate {{example.com}}`

- Open in a new window:

`microsoft-edge --new-window {{example.com}}`

- Open in application mode (without toolbars, URL bar, buttons, etc.):

`microsoft-edge --app={{https://example.com}}`

- Use a proxy server:

`microsoft-edge --proxy-server="{{socks5://hostname:66}}" {{example.com}}`

- Open with a custom profile directory:

`microsoft-edge --user-data-dir={{path/to/directory}}`

- Open without CORS validation (useful to test an API):

`microsoft-edge --user-data-dir={{path/to/directory}} --disable-web-security`

- Open with a DevTools window for each tab opened:

`microsoft-edge --auto-open-devtools-for-tabs`
