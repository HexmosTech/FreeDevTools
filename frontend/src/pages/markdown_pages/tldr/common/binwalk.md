---
title: "Analyze Binaries - Firmware Analysis with Binwalk | Online Free DevTools by Hexmos"
name: binwalk
path: /freedevtools/tldr/common/binwalk
canonical: "https://hexmos.com/freedevtools/tldr/common/binwalk/"
description: "Analyze firmware binaries with Binwalk. Extract embedded files, analyze entropy, and identify file signatures for reverse engineering. Free online tool, no registration required."
category: common
keywords:
- firmware analysis
- binary analysis tool
- embedded system security
- file signature identification
- entropy analysis tool
- reverse engineering tool
- binwalk analysis
- linux binary analysis
- firmware extraction
- embedded file recovery
features:
- Extract embedded files from firmware images
- Analyze binary entropy for anomalies
- Identify file signatures within binaries
- Recursively unpack nested archives and filesystems
- Scan binaries for malicious code and vulnerabilities
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# binwalk

> Firmware Analysis Tool.
> More information: <https://github.com/ReFirmLabs/binwalk>.

- Scan a binary file:

`binwalk {{path/to/binary}}`

- Extract files from a binary, specifying the output directory:

`binwalk {{[-e|--extract]}} {{[-C|--directory]}} {{output_directory}} {{path/to/binary}}`

- Recursively extract files from a binary limiting the recursion depth to 2:

`binwalk {{[-e|--extract]}} {{[-M|--matryoshka]}} {{[-d|--depth]}} {{2}} {{path/to/binary}}`

- Extract files from a binary with the specified file signature:

`binwalk {{[-D|--dd]}} '{{png image:png}}' {{path/to/binary}}`

- Analyze the entropy of a binary, saving the plot with the same name as the binary and `.png` extension appended:

`binwalk {{[-E|--entropy]}} {{[-J|--save]}} {{path/to/binary}}`

- Combine entropy, signature and opcodes analysis in a single command:

`binwalk {{[-E|--entropy]}} {{[-B|--signature]}} {{[-A|--opcodes]}} {{path/to/binary}}`
