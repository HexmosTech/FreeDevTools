---
title: "HTTP Probe - Check Server Status | Free DevTools"
name: httprobe
path: /freedevtools/tldr/http/httprobe
canonical: "https://hexmos.com/freedevtools/tldr/http/httprobe/"
description: "Probe HTTP and HTTPS server status with httprobe. Identify working web servers and troubleshoot connection issues. Free online tool, no registration required."
category: common
keywords:
- HTTP probe
- HTTPS probe
- Web server status check
- Domain checker
- URL probing
- Connection testing
- Port scanner
- Network analysis
- httprobe command line
- server accessibility check
features:
- Detect working HTTP and HTTPS servers from a list of domains.
- Prioritize HTTPS checks before HTTP checks.
- Probe custom ports using specified protocols.
- Verify server status using command line interface.
- Determine server accessibility for network troubleshooting.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# httprobe

> Take a list of domains and probe for working HTTP and HTTPS servers.
> More information: <https://github.com/tomnomnom/httprobe>.

- Probe a list of domains from a text file:

`cat {{input_file}} | httprobe`

- Only check for HTTP if HTTPS is not working:

`cat {{input_file}} | httprobe --prefer-https`

- Probe additional ports with a given protocol:

`cat {{input_file}} | httprobe -p {{https:2222}}`

- Display help:

`httprobe --help`
