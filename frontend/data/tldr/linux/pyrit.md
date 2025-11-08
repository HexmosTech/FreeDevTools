---
title: "Pyrit WPA/WPA2 Cracker - Crack Passwords with Pyrit | Online Free DevTools by Hexmos"
name: pyrit
path: "/freedevtools/tldr/linux/pyrit/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pyrit/"
description: "Crack WPA/WPA2 passwords efficiently with Pyrit.  This powerful command-line tool utilizes computational power for fast cracking. Free online tool, no registration required."
category: linux
keywords:
  - WPA2 password cracker
  - WPA password cracking
  - pyrit command line
  - network security auditing
  - wireless password recovery
  - password cracking tool
  - linux password cracker
  - command line password cracker
  - pyrit benchmark analysis
  - packet capture analysis
features:
  - Analyze packet capture files (.cap, .pcap) for password cracking
  - Import and export password databases
  - Utilize multiple cores for accelerated cracking
  - Benchmark system performance for optimal cracking speed
  - Perform batch password translation using pre-shared keys
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pyrit

> WPA/WPA2 cracking tool using computational power.
> More information: <https://manned.org/pyrit>.

- Display system cracking speed:

`pyrit benchmark`

- List available cores:

`pyrit list_cores`

- Set [e]SSID:

`pyrit -e "{{ESSID}}" create_essid`

- [r]ead and analyze a specific packet capture file:

`pyrit -r {{path/to/file.cap|path/to/file.pcap}} analyze`

- Read and [i]mport passwords to the current database:

`pyrit -i {{path/to/file}} {{import_unique_passwords|unique_passwords|import_passwords}}`

- Exp[o]rt passwords from database to a specific file:

`pyrit -o {{path/to/file}} export_passwords`

- Translate passwords with Pired Master Keys:

`pyrit batch`

- [r]ead the capture file and crack the password:

`pyrit -r {{path/to/file}} attack_db`
