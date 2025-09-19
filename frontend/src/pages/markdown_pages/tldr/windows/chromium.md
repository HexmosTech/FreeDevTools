---
title: "Control Chromium Browser - Open URLs with Flags | Online Free DevTools by Hexmos"
name: chromium
path: /freedevtools/tldr/windows/chromium
canonical: "https://hexmos.com/freedevtools/tldr/windows/chromium/"
description: "Control Chromium browser tabs and windows with command-line flags. Launch in incognito mode, set proxies, disable CORS, and more. Free online tool, no registration required."
category: windows
keywords:
  - chromium browser control
  - chromium command flags
  - chromium incognito mode
  - chromium proxy settings
  - chromium disable cors
  - chromium application mode
  - chromium custom profile
  - browser command line
  - web browser automation
  - headless browser
features:
  - Launch Chromium in incognito mode for private browsing
  - Configure Chromium with custom proxy server settings
  - Disable CORS validation for API testing
  - Open specific URLs in application mode without browser UI
  - Utilize custom user data directories for different profiles
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# chromium

> Open-source web browser principally developed and maintained by Google.
> Note: You may need to replace the `chromium` command with your desired web browser, such as `brave`, `google-chrome`, `microsoft-edge`/`msedge`, `opera`, or `vivaldi`.
> More information: <https://www.chromium.org/developers/how-tos/run-chromium-with-flags/>.

- Open a specific URL or file:

`chromium {{https://example.com|path/to/file.html}}`

- Open in incognito mode (use `--inprivate` for Microsoft Edge):

`{{chromium --incognito|msedge --inprivate}} {{example.com}}`

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
