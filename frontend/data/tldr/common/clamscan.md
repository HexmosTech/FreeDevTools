---
title: "Scan Viruses - Find and Remove Malware with Clamscan | Online Free DevTools by Hexmos"
name: clamscan
path: "/freedevtools/tldr/common/clamscan/"
canonical: "https://hexmos.com/freedevtools/tldr/common/clamscan/"
description: "Scan viruses with Clamscan to detect and remove malware. Analyze files and directories for vulnerabilities efficiently. Free online tool, no registration required."
category: common
keywords:
- virus scan
- malware removal
- clamscan command
- linux virus scanner
- command line scanner
- file vulnerability scan
- directory malware scan
- stdin virus analysis
- quarantine infected files
- remove infected files
features:
- Scan files and directories for viruses
- Recursively scan directories for malware
- Analyze data from stdin for vulnerabilities
- Quarantine or remove infected files
- Output scan reports to a log file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# clamscan

> A virus scanner.
> More information: <https://docs.clamav.net/manual/Usage/Scanning.html#clamscan>.

- Scan a file for vulnerabilities:

`clamscan {{path/to/file}}`

- Scan all files recursively in a specific directory:

`clamscan {{[-r|--recursive]}} {{path/to/directory}}`

- Scan data from `stdin`:

`{{command}} | clamscan -`

- Specify a virus database file or directory of files:

`clamscan {{[-d|--database]}} {{path/to/database_file_or_directory}}`

- Scan the current directory and output only infected files:

`clamscan {{[-i|--infected]}}`

- Print the scan report to a log file:

`clamscan {{[-l|--log]}} {{path/to/log_file}}`

- Move infected files to a specific directory:

`clamscan --move {{path/to/quarantine_directory}}`

- Remove infected files:

`clamscan --remove yes`
