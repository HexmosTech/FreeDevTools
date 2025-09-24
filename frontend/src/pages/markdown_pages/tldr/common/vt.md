---
title: "Virus Scan - Analyze Files and URLs with VirusTotal | Online Free DevTools by Hexmos"
name: vt
path: /freedevtools/tldr/common/vt
canonical: "https://hexmos.com/freedevtools/tldr/common/vt/"
description: "Scan for viruses with VirusTotal. Analyze files and URLs for threats with comprehensive reports and malware detection. Free online tool, no registration required."
category: common
keywords:
- virus scan
- malware analysis
- file scan
- url scan
- virustotal api
- threat intelligence
- cybersecurity analysis
- malware detection
- virustotal cli
- command line virus scan
features:
- Scan files for viruses and malware
- Scan URLs for malicious content
- Retrieve detailed analysis reports
- Download files from VirusTotal (premium feature)
- Initialize VirusTotal API key for authentication
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# vt

> Interface for VirusTotal.
> API key from a VirusTotal account is required for this command.
> More information: <https://github.com/VirusTotal/vt-cli>.

- Scan a specific file for viruses:

`vt scan file {{path/to/file}}`

- Scan a URL for viruses:

`vt scan url {{url}}`

- Display information from a specific analysis:

`vt analysis {{file_id|analysis_id}}`

- Download files in encrypted Zip format (requires premium account):

`vt download {{file_id}} --output {{path/to/directory}} --zip --zip-password {{password}}`

- Initialize or re-initialize `vt` to enter API key interactively:

`vt init`

- Display information about a domain:

`vt domain {{url}}`

- Display information for a specific URL:

`vt url {{url}}`

- Display information for a specific IP address:

`vt domain {{ip_address}}`
