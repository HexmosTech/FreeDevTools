---
title: "Warts Filter - Select Warts Records | Online Free DevTools by Hexmos"
name: sc_wartsfilter
path: /freedevtools/tldr/common/sc_wartsfilter
canonical: "https://hexmos.com/freedevtools/tldr/common/sc_wartsfilter/"
description: "Select warts records with sc_wartsfilter. Filter specific data by destination or action and output to various formats. Free online tool, no registration required."
category: common
keywords:
- warts data filter
- warts record selection
- warts file analysis
- scamper warts analysis
- caida warts filtering
- warts destination filtering
- warts action filtering
- warts to json conversion
- network measurement data
- warts data extraction
features:
- Filter warts data by destination address
- Filter warts data by IP prefix
- Filter warts data based on action type
- Output filtered data to a new warts file
- Convert filtered warts data to JSON format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sc_wartsfilter

> Select specific records from a `warts` file.
> More information: <https://www.caida.org/catalog/software/scamper/>.

- Filter all data records that had specific destinations and write them to a separate file:

`sc_wartsfilter -i {{path/to/input.warts}} -o {{path/to/output.warts}} -a {{192.0.2.5}} -a {{192.0.2.6}}`

- Filter all records that had certain destinations in a prefix and write them to a separate file:

`sc_wartsfilter -i {{path/to/input.warts}} -o {{path/to/output.warts}} -a {{2001:db8::/32}}`

- Filter all records that using a specific action and output them as JSON:

`sc_wartsfilter -i {{path/to/input.warts}} -t {{ping}} | sc_warts2json`
