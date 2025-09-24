---
title: "Sc_warts2pcap - Create PCAP from Warts | Online Free DevTools by Hexmos"
name: sc_warts2pcap
path: /freedevtools/tldr/common/sc_warts2pcap
canonical: "https://hexmos.com/freedevtools/tldr/common/sc_warts2pcap/"
description: "Create PCAP files from Warts data using sc_warts2pcap. Convert warts data to PCAP format easily. Free online tool, no registration required."
category: common
keywords:
- Warts to PCAP converter
- PCAP file generation
- Network traffic analysis
- Scamper warts processing
- Tbit data conversion
- Sting data conversion
- Sniff data conversion
- Warts data extraction
- PCAP timestamp sorting
- Network packet analysis
features:
- Convert warts data to PCAP format
- Support tbit, sting, and sniff warts objects
- Sort packets by timestamp
- Process multiple warts files into a single PCAP
- Extract network packets from warts data
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sc_warts2pcap

> Write packets included in `warts` object to a PCAP file.
> This is only possible for tbit, sting and sniff.
> More information: <https://www.caida.org/catalog/software/scamper/>.

- Convert the data from several `warts` files into one PCAP file:

`sc_warts2pcap -o {{path/to/output.pcap}} {{path/to/file1.warts path/to/file2.warts ...}}`

- Convert the data from a `warts` file into a PCAP file and sort the packets by timestamp:

`sc_warts2pcap -s -o {{path/to/output.pcap}} {{path/to/file.warts}}`
