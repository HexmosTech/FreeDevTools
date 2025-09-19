---
title: "Pacman Deptest - Check Package Dependencies | Online Free DevTools by Hexmos"
name: pacman-deptest
path: /freedevtools/tldr/linux/pacman-deptest
canonical: "https://hexmos.com/freedevtools/tldr/linux/pacman-deptest/"
description: "Check package dependencies with Pacman Deptest. Identify unsatisfied Linux dependencies and verify version requirements. Free online tool, no registration required."
category: linux
keywords:
- linux package dependency checker
- pacman deptest linux
- pacman dependency check
- linux package version checker
- arch linux dependencies
- manjaro dependencies
- check missing linux dependencies
- verify pacman dependencies
- pacman package dependencies
- linux package management
features:
- Check for missing package dependencies
- Verify minimum package version requirements
- Identify unmet dependencies before installation
- List unsatisfied dependency package names
- Test dependency satisfaction for multiple packages
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pacman --deptest

> Check each dependency specified and return a list of dependencies that are not currently satisfied on the system.
> See also: `pacman`.
> More information: <https://manned.org/pacman.8>.

- Print the package names of the dependencies that are not installed:

`pacman -T {{package1 package2 ...}}`

- Check if the installed package satisfies the given minimum version:

`pacman -T "{{bash>=5}}"`

- Check if a later version of a package is installed:

`pacman -T "{{bash>5}}"`

- Display [h]elp:

`pacman -Th`
