---
title: "Detect Laptop - Identify Device Type | Online Free DevTools by Hexmos"
name: laptop-detect
path: /freedevtools/tldr/linux/laptop-detect
canonical: "https://hexmos.com/freedevtools/tldr/linux/laptop-detect/"
description: "Identify if a system is a laptop or desktop with laptop-detect.  Determine device type quickly and easily. Free online tool, no registration required."
category: linux
keywords:
  - laptop detection command
  - system type detection
  - device type identifier
  - linux laptop detection
  - bash laptop detection
  - shell script laptop detection
  - portable device detection
  - desktop detection script
  - identify laptop command line
  - os detection script
features:
  - Determines if the system is a laptop or desktop.
  - Returns an exit code of 0 for laptops and 1 for desktops.
  - Provides verbose output specifying the detected device type.
  - Offers a simple command-line interface.
  - Displays the version number of the script.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# laptop-detect

> Attempt to determine if the script is running on a laptop or desktop.
> More information: <https://gitlab.com/debiants/laptop-detect>.

- Return an exit status of 0 if the current device is likely a laptop, else returns 1:

`laptop-detect`

- Print the type of device that the current system is detected as:

`laptop-detect --verbose`

- Display version:

`laptop-detect --version`
