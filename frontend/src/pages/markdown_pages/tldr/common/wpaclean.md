---
title: "WPAclean - Clean Capture Files | Free DevTools"
name: wpaclean
path: /freedevtools/tldr/common/wpaclean
canonical: "https://hexmos.com/freedevtools/tldr/common/wpaclean/"
description: "Clean WiFi capture files with WPAclean. Extract 4-way handshakes and beacons from pcap files for security analysis. Free online tool, no registration required."
category: common
keywords:
- wifi capture clean
- pcap handshake extract
- wpa handshake capture
- 802.11 capture filter
- aircrack-ng wpaclean
- wifi security analysis
- network packet analysis
- wifi password cracking
- linux network tools
- beacon frame extraction
features:
- Extract 4-way handshake from capture files
- Filter beacon frames from pcap files
- Clean multiple capture files simultaneously
- Save cleaned capture data to a new file
- Reduce capture file size for easier analysis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wpaclean

> Clean capture files to get only the 4-way handshake and a beacon.
> Part of Aircrack-ng network software suite.
> More information: <https://manned.org/wpaclean.1>.

- Clean capture and save only the 4-way handshake and a beacon in the result:

`wpaclean {{path/to/result.cap}} {{path/to/capture.cap}}`

- Clean multiple captures and save 4-way handshakes and beacons in the result:

`wpaclean {{path/to/result.cap}} {{path/to/capture1.cap path/to/capture2.cap ...}}`
