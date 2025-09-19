---
title: "Speedtest - Measure Network Speed | Online Free DevTools by Hexmos"
name: speedtest-rs
path: /freedevtools/tldr/speedtest/speedtest-rs
canonical: "https://hexmos.com/freedevtools/tldr/speedtest/speedtest-rs/"
description: "Measure network speed with Speedtest-rs. Test download and upload speeds using the command line. Get a shareable link of results. Free online tool, no registration required."
category: common
keywords:
- network speed test
- command line speedtest
- speedtest.net CLI
- internet speed checker
- bandwidth test
- download speed test
- upload speed test
- latency test CLI
- speedtest linux
- speedtest macos
features:
- Test download and upload speeds
- List speedtest.net servers by distance
- Generate shareable results image
- Display basic output information
- Run download or upload test only
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# speedtest-rs

> An unofficial Rust-based tool for testing network speeds using speedtest.net, limited to HTTP Legacy Fallback.
> More information: <https://github.com/nelsonjchen/speedtest-rs>.

- Run a full speed test (download and upload):

`speedtest-rs`

- Display a list of `speedtest.net` servers sorted by distance:

`speedtest-rs --list`

- Run a download test only:

`speedtest-rs --no-upload`

- Run an upload test only:

`speedtest-rs --no-download`

- Generate a shareable link to the test results image:

`speedtest-rs --share`

- Display basic output information only:

`speedtest-rs --simple`
