---
title: "Volatility - Analyze Memory Dumps with Vol.py | Online Free DevTools by Hexmos"
name: vol.py
path: "/freedevtools/tldr/windows/vol-py/"
canonical: "https://hexmos-com/freedevtools/tldr/windows/vol-py/"
description: "Analyze memory dumps quickly with Vol.py, a volatility framework for forensic analysis. Extract system information and investigate malware. Free online tool, no registration required."
category: windows
keywords:
- memory dump analysis
- volatility framework
- forensic analysis
- RAM dump analyzer
- windows memory analysis
- malware investigation
- memory forensics
- vol.py windows
- memory image analysis
- digital forensics
features:
- Analyze Windows memory dumps for system information
- List active processes from a memory image
- Extract user account hashes from memory
- Identify active network connections from a RAM dump
- Display available Volatility plugins and options
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# vol.py

> Forensics framework used to analyze volatile memory (RAM) dumps.
> With volatility3, plugins are now based on operating system. Examples below will use Windows.
> More information: <https://volatility3.readthedocs.io/en/latest/index.html>.

- Get information about a memory dump file:

`python3 vol.py {{[-f|--filename]}} {{path/to/memory_dump_file}} windows.info`

- List active processes:

`python3 vol.py {{[-f|--filename]}} {{path/to/memory_dump_file}} windows.pslist`

- List hashes of users on system:

`python3 vol.py {{[-f|--filename]}} {{path/to/memory_dump_file}} windows.hashdump`

- List active network connections:

`python3 vol.py {{[-f|--filename]}} {{path/to/memory_dump_file}} windows.netstat`

- Display help:

`python3 vol.py {{[-h|--help]}}`
