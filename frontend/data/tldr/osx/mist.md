---
title: "macOS Installer Tool - Download macOS Installers | Online Free DevTools by Hexmos"
name: mist
path: "/freedevtools/tldr/osx/mist/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/mist/"
description: "Download macOS Installers with MIST - macOS Installer Super Tool. Easily manage macOS versions and prepare installation media. Free online tool, no registration required."
category: osx
keywords:
  - macOS Installer Download
  - macOS Firmware Download
  - Apple Silicon Firmware
  - Intel macOS Installer
  - Universal macOS Installer
  - macOS Version List
  - macOS Beta Installer
  - MIST CLI tool
  - macOS installer management
  - macOS DMG downloader
features:
  - List available macOS firmwares and installers.
  - Download specific macOS versions by name or build number.
  - Export installer lists to CSV files.
  - Filter compatible installers for current hardware.
  - Include beta versions in installer listings.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mist

> MIST - macOS Installer Super Tool.
> Automatically download macOS Firmwares/Installers.
> More information: <https://github.com/ninxsoft/mist-cli>.

- List all available macOS Firmwares for Apple Silicon Macs:

`mist list firmware`

- List all available macOS Installers for Intel Macs, including Universal Installers for macOS Big Sur and later:

`mist list installer`

- List all macOS Installers that are compatible with this Mac, including Universal Installers for macOS Big Sur and later:

`mist list installer --compatible`

- List all available macOS Installers for Intel Macs, including betas, also including Universal Installers for macOS Big Sur and later:

`mist list installer --include-betas`

- List only the latest macOS Sonoma Installer for Intel Macs, including Universal Installers for macOS Big Sur and later:

`mist list installer --latest "macOS Sonoma"`

- List and export macOS Installers to a CSV file:

`mist list installer --export "/{{path/to/export.csv}}"`

- Download the latest macOS Sonoma Firmware for Apple Silicon Macs, with a custom name:

`mist download firmware "macOS Sonoma" --firmware-name "{{Install %NAME% %VERSION%-%BUILD%.ipsw}}"`

- Download a specific macOS Installer version for Intel Macs, including Universal Installers for macOS Big Sur and later:

`mist download installer "{{13.5.2}}" application`
