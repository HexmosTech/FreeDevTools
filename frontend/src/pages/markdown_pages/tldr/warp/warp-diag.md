---
title: "WARP Diagnostic - Generate System Information | Free DevTools"
name: warp-diag
path: /freedevtools/tldr/warp/warp-diag
canonical: "https://hexmos.com/freedevtools/tldr/warp/warp-diag/"
description: "Generate system diagnostic reports with WARP Diagnostic. Capture WARP connection details and system configuration information for troubleshooting. Free online tool, no registration required."
category: common
keywords:
- WARP diagnostic report
- Cloudflare WARP diagnostics
- system information zip
- network connection analysis
- warp-cli diagnostics
- debug information generator
- connection status report
- timestamped diagnostic file
- Cloudflare WARP feedback
- WARP connectivity troubleshooting
features:
- Generate a comprehensive system configuration Zip file.
- Include a timestamp in the output diagnostic file name.
- Save diagnostic reports to a specified directory path.
- Submit feedback directly to Cloudflare WARP development team.
- Diagnose WARP connectivity problems.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# warp-diag

> Diagnostic and feedback tool for Cloudflare's WARP service.
> See also: `warp-cli`.
> More information: <https://developers.cloudflare.com/warp-client/>.

- Generate a Zip file with information about the system configuration and the WARP connection:

`warp-diag`

- Generate a Zip file with debug information including a timestamp to the output filename:

`warp-diag --add-ts`

- Save the output file under a specific directory:

`warp-diag --output {{path/to/directory}}`

- Submit a new feedback to Cloudflare's WARP interactively:

`warp-diag feedback`
