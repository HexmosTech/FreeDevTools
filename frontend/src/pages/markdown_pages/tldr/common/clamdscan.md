---
title: "Virus Scan - Scan Files with Clamdscan | Online Free DevTools by Hexmos"
name: clamdscan
path: /freedevtools/tldr/common/clamdscan
canonical: "https://hexmos.com/freedevtools/tldr/common/clamdscan/"
description: "Scan files for viruses instantly with Clamdscan, a command-line antivirus scanner. Protect your system against malware and ensure file integrity. Free online tool, no registration required."
category: common
keywords:
- clamav virus scan
- command line antivirus
- linux virus scanner
- malware detection
- file integrity check
- clamdscan command
- virus scan cli
- clamav scanner
- infected file removal
- security scanning
features:
- Scan files and directories for viruses
- Scan data from standard input
- Move infected files to a quarantine directory
- Remove infected files from the system
- Log scan reports to a file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# clamdscan

> Scan for viruses using the ClamAV Daemon.
> More information: <https://docs.clamav.net/manual/Usage/Scanning.html#clamdscan>.

- Scan a file or directory for vulnerabilities:

`clamdscan {{path/to/file_or_directory}}`

- Scan data from `stdin`:

`{{command}} | clamdscan -`

- Scan the current directory and output only infected files:

`clamdscan --infected`

- Print the scan report to a log file:

`clamdscan --log {{path/to/log_file}}`

- Move infected files to a specific directory:

`clamdscan --move {{path/to/quarantine_directory}}`

- Remove infected files:

`clamdscan --remove`

- Use multiple threads to scan a directory:

`clamdscan --multiscan`

- Pass the file descriptor instead of streaming the file to the daemon:

`clamdscan --fdpass`
