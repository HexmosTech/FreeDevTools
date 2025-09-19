---
title: "Data Recovery with ddrescue - Recover Damaged Devices | Online Free DevTools by Hexmos"
name: ddrescue
path: /freedevtools/tldr/linux/ddrescue
canonical: "https://hexmos.com/freedevtools/tldr/linux/ddrescue/"
description: "Recover data with ddrescue, a powerful command-line data recovery tool for damaged block devices.  Clone disks, create images, and manage recovery processes efficiently. Free online tool, no registration required."
category: linux
keywords:
  - data recovery command
  - disk imaging linux
  - ddrescue data recovery
  - linux data rescue tool
  - command line disk cloning
  - hard drive recovery linux
  - ddrescue image creation
  - data recovery software linux
  - damaged disk recovery
  - rescue damaged partitions
features:
  - Creates disk images from damaged devices
  - Clones disks while handling bad sectors
  - Generates detailed log files for analysis
  - Supports resuming interrupted recovery operations
  - Provides options for force and non-scrape operations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ddrescue

> Data recovery tool that reads data from damaged block devices.
> More information: <https://www.gnu.org/software/ddrescue/manual/ddrescue_manual.html#Invoking-ddrescue>.

- Take an image of a device, creating a log file:

`sudo ddrescue {{/dev/sdb}} {{path/to/image.dd}} {{path/to/log.txt}}`

- Clone Disk A to Disk B, creating a log file:

`sudo ddrescue {{[-f|--force]}} {{[-n|--no-scrape]}} {{/dev/sdX}} {{/dev/sdY}} {{path/to/log.txt}}`
