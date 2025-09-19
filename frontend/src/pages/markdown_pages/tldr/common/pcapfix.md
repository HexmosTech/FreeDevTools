---
title: "Repair PCAP Files - Fix Corrupted Captures | Online Free DevTools by Hexmos"
name: pcapfix
path: /freedevtools/tldr/common/pcapfix
canonical: "https://hexmos.com/freedevtools/tldr/common/pcapfix/"
description: "Repair corrupted PCAP files with Pcapfix. Recover and fix damaged packet captures and PcapNG files. Free online tool, no registration required."
category: common
keywords:
- pcap file repair
- pcapng repair
- packet capture fix
- corrupted pcap recovery
- network analysis repair
- linux pcap repair
- windows pcap repair
- macos pcap repair
- pcap data recovery
- network traffic analysis repair
features:
- Repair damaged PCAP and PcapNG files.
- Perform deep scan repair on PCAP files.
- Output repaired file to a specified location.
- Force treat a file as PcapNG, bypassing auto-detection.
- Display detailed repair process with verbose output.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pcapfix

> Repair damaged or corrupted PCAP and PcapNG files.
> More information: <https://f00l.de/pcapfix/>.

- Repair a PCAP/PCapNG file (Note: For PCAP files, only the first 262144 bytes of each packet are scanned):

`pcapfix {{path/to/file.pcapng}}`

- Repair an entire PCAP file:

`pcapfix --deep-scan {{path/to/file.pcap}}`

- Repair a PCAP/PcapNG file and write the repaired file to the specified location:

`pcapfix --outfile {{path/to/repaired.pcap}} {{path/to/file.pcap}}`

- Treat the specified file as a PcapNG file, ignoring automatic recognition:

`pcapfix --pcapng {{path/to/file.pcapng}}`

- Repair a file and show the process in detail:

`pcapfix --verbose {{path/to/file.pcap}}`
