---
title: "Control Firefox - Browse the Web | Free DevTools"
name: firefox
path: /freedevtools/tldr/common/firefox
canonical: "https://hexmos.com/freedevtools/tldr/common/firefox/"
description: "Control browsing with Firefox using command-line options. Launch, search, and debug with this open-source browser. Free online tool, no registration required."
category: common
keywords:
- web browser command line
- firefox command line
- firefox browser control
- linux firefox
- macos firefox
- browser automation
- web browser options
- private browsing firefox
- firefox headless screenshot
- firefox profile management
features:
- Launch Firefox with a specific URL.
- Open a new Firefox window or private window.
- Search the web from the command line.
- Run Firefox in safe mode with disabled extensions.
- Take a screenshot of a web page in headless mode.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# firefox

> A free and open source web browser.
> More information: <https://wiki.mozilla.org/Firefox/CommandLineOptions>.

- Launch Firefox and open a web page:

`firefox {{https://www.duckduckgo.com}}`

- Open a new window:

`firefox --new-window {{https://www.duckduckgo.com}}`

- Open a private (incognito) window:

`firefox --private-window`

- Search for "wikipedia" using the default search engine:

`firefox --search "{{wikipedia}}"`

- Launch Firefox in safe mode, with all extensions disabled:

`firefox --safe-mode`

- Take a screenshot of a web page in headless mode:

`firefox --headless --screenshot {{path/to/output_file.png}} {{https://example.com/}}`

- Use a specific profile to allow multiple separate instances of Firefox to run at once:

`firefox --profile {{path/to/directory}} {{https://example.com/}}`

- Set Firefox as the default browser:

`firefox --setDefaultBrowser`
