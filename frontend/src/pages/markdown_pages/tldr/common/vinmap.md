---
title: "Vinmap Scanner - Parallel Network Scanning | Online Free DevTools by Hexmos"
name: vinmap
path: /freedevtools/tldr/common/vinmap
canonical: "https://hexmos.com/freedevtools/tldr/common/vinmap/"
description: "Perform parallel network scanning with Vinmap, speeding up Nmap scans on large networks. Optimize network discovery with this free online tool, no registration required."
category: common
keywords:
- network scanner
- vinmap network scan
- parallel nmap
- nmap multithreading
- subnet scanner
- ip range scanner
- network discovery tool
- linux network scan
- macos network scan
- command line network scanner
features:
- Perform multithreaded Nmap scans
- Split IP ranges into smaller chunks
- Scan subnets in parallel
- Merge XML or JSON Nmap results
- Customize the number of chunks and threads
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vinmap

> A multithreaded Nmap scanner that splits IP ranges into chunks, performs parallel scans, and merges XML or JSON results.
> More information: <https://pypi.org/project/vinmap>.

- Perform a basic scan of a subnet:

`vinmap {{[-ip|--ip_range]}} {{192.168.1.0/24}}`

- Scan a domain with version and OS detection, saving results to a specific file:

`vinmap {{[-ip|--ip_range]}} {{example.com}} {{[-s|--scan_type]}} "-sV -O" -o {{path/to/scan_results.xml}}`

- Scan an IP range using 10 chunks and 20 concurrent threads, uses half of the system's CPU cores if not specified:

`vinmap {{[-ip|--ip_range]}} {{10.0.0.1-10.0.0.255}} {{[-n|--num_chunks]}} 10 {{[-t|--threads]}} 20`

- Output scan results in JSON format:

`vinmap {{[-ip|--ip_range]}} {{192.168.1.1-192.168.1.100}} {{[-f|--format]}} json`

- Scan multiple IPs with default settings and save merged XML output:

`vinmap {{[-ip|--ip_range]}} {{192.168.1.1,192.168.1.2,...}}`
