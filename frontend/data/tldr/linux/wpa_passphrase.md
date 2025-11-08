---
title: "Generate WPA-PSK Key - WPA Passphrase Generator | Online Free DevTools by Hexmos"
name: wpa_passphrase
path: "/freedevtools/tldr/linux/wpa_passphrase/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/wpa_passphrase/"
description: "Generate WPA-PSK keys with wpa_passphrase.  This command-line tool securely creates WPA/WPA2 pre-shared keys. Free online tool, no registration required."
category: linux
keywords:
  - wpa passphrase generator
  - wpa psk generator
  - generate wpa key
  - linux wpa passphrase
  - command line wpa key
  - wpa2 passphrase generator
  - create wpa psk
  - network security key generator
  - wifi security key generator
  - passphrase to wpa psk
features:
  - Generates WPA-PSK keys from ASCII passphrases.
  - Accepts passphrases via stdin or command-line arguments.
  - Computes WPA and WPA2 compatible keys.
  - Enhances WiFi network security.
  - Provides a secure method for key generation.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wpa_passphrase

> Generate a WPA-PSK key from an ASCII passphrase for a SSID.
> More information: <https://manned.org/wpa_passphrase.1>.

- Compute and display the WPA-PSK key for a given SSID reading the passphrase from `stdin`:

`wpa_passphrase {{SSID}}`

- Compute and display WPA-PSK key for a given SSID specifying the passphrase as an argument:

`wpa_passphrase {{SSID}} {{passphrase}}`
