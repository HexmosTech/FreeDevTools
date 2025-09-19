---
title: "List Hardware - System Information with lshw | Online Free DevTools by Hexmos"
name: lshw
path: /freedevtools/tldr/linux/lshw
canonical: "https://hexmos.com/freedevtools/tldr/linux/lshw/"
description: "List and view detailed hardware information with lshw.  Generate reports in various formats, including HTML, XML and JSON. Free online tool, no registration required."
category: linux
keywords:
  - linux hardware information
  - lshw command linux
  - system hardware listing
  - hardware details linux
  - linux system report
  - lshw output format
  - hardware configuration linux
  - detailed hardware report
  - linux command lshw
  - hardware inventory linux
features:
  - Generate detailed hardware reports
  - List hardware in tabular format
  - Save output to HTML, XML, or JSON
  - Filter specific hardware classes (e.g., network, storage)
  - Sanitize output to remove sensitive information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lshw

> List detailed information about hardware configurations as root user.
> More information: <https://ezix.org/project/wiki/HardwareLiSter>.

- Launch the X11 GUI (if available):

`sudo lshw -X`

- List all hardware in tabular format:

`sudo lshw -short`

- List multiple class of hardware (all disks and storage controllers) in tabular format:

`sudo lshw {{[-c|-class]}} disk {{[-c|-class]}} storage -short`

- Save all network interfaces to an HTML/XML/JSON file:

`sudo lshw {{[-c|-class]}} network -{{html|xml|json}} > interfaces{{.html|.xml|.json}}`

- List network interfaces without revealing sensitive information (IP addresses, serial numbers, etc.):

`sudo lshw {{[-c|-class]}} network -sanitize`

- List a particular class of hardware:

`sudo lshw {{[-c|-class]}} {{system|bridge|memory|processor|address|storage|disk|tape|bus|network|display|input|printer|multimedia|communication|power|volume|generic}}`
