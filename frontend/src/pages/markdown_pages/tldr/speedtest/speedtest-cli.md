---
title: "Speedtest CLI - Test Internet Bandwidth | Free DevTools"
name: speedtest-cli
path: /freedevtools/tldr/speedtest/speedtest-cli
canonical: "https://hexmos.com/freedevtools/tldr/speedtest/speedtest-cli/"
description: "Test internet bandwidth with Speedtest CLI. Measure download speed, upload speed and latency using the command line. Free online tool, no registration required."
category: common
keywords:
- internet speed test cli
- command line bandwidth test
- speedtest net cli
- network speed test
- download speed test
- upload speed test
- latency test cli
- connection speed test
- speedtest cli linux
- speedtest cli macos
features:
- Measure internet download speed
- Measure internet upload speed
- Test network latency (ping)
- Display results in bytes
- Output results in JSON format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# speedtest-cli

> Test internet bandwidth using <https://speedtest.net>.
> See also: `speedtest` for the official CLI.
> More information: <https://github.com/sivel/speedtest-cli>.

- Run a speed test:

`speedtest-cli`

- Run a speed test and display values in bytes, instead of bits:

`speedtest-cli --bytes`

- Run a speed test using `HTTPS`, instead of `HTTP`:

`speedtest-cli --secure`

- Run a speed test without performing download tests:

`speedtest-cli --no-download`

- Run a speed test and generate an image of the results:

`speedtest-cli --share`

- List all `speedtest.net` servers, sorted by distance:

`speedtest-cli --list`

- Run a speed test to a specific speedtest.net server:

`speedtest-cli --server {{server_id}}`

- Run a speed test and display the results as JSON (suppresses progress information):

`speedtest-cli --json`
