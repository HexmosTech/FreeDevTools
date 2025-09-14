---
title: "Generate System Information - macchina | Free DevTools"
name: macchina
path: /freedevtools/tldr/common/macchina
canonical: "https://hexmos.com/freedevtools/tldr/common/macchina/"
description: "Generate system information with macchina. Retrieve detailed specifications about your computer's hardware and software configurations. Free online tool, no registration required."
category: common
keywords:
- system information generator
- hardware information tool
- software configuration details
- system specifications tool
- linux system info
- macos system info
- windows system info
- command-line system info
- macchina system information
- computer information tool
features:
- Display system information based on configuration
- Customize output with specified configuration file
- Lengthen uptime, shell, and kernel output details
- Check for system errors and failures
- List artists of ASCII art used in output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# macchina

> Display information about your computer.
> More information: <https://github.com/Macchina-CLI/macchina>.

- List out system information, with either default settings or those specified in your configuration file:

`macchina`

- Specify a custom configuration file path:

`macchina --config {{path/to/configuration_file}}`

- List system information, but lengthen uptime, shell and kernel output:

`macchina --long-uptime --long-shell --long-kernel`

- Check for any errors/system failures encountered when trying to fetch system information:

`macchina --doctor`

- List original artists of all the ASCII art:

`macchina --ascii-artists`
