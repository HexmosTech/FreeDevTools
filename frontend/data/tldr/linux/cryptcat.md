---
title: "Cryptcat - Encrypt Network Connections | Online Free DevTools by Hexmos"
name: cryptcat
path: "/freedevtools/tldr/linux/cryptcat/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/cryptcat/"
description: "Encrypt network connections with Cryptcat. Securely transmit data over networks using encryption. Free online tool, no registration required."
category: linux
keywords:
- encrypted network connection
- secure data transfer
- cryptcat linux
- network encryption tool
- command line encryption
- network security
- tcp encryption
- port scanning linux
- proxy tool linux
- secure communication linux
features:
- Encrypt data streams over TCP/IP networks
- Listen for encrypted connections on specified ports
- Connect to remote hosts using encryption
- Perform port scanning with verbose output
- Act as a proxy to forward encrypted data streams
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cryptcat

> Cryptcat is netcat with encryption capabilities.
> More information: <https://manned.org/cryptcat>.

- [l]isten on a specified [p]ort and print any data received:

`cryptcat -k {{password}} -l -p {{port}}`

- Connect to a certain port:

`cryptcat -k {{password}} {{ip_address}} {{port}}`

- Specify the timeout ([w]):

`cryptcat -k {{password}} -w {{timeout_in_seconds}} {{ip_address}} {{port}}`

- Scan ([z]) the open ports of a specified host:

`cryptcat -v -z {{ip_address}} {{port}}`

- Act as proxy and forward data from a local TCP port to the given remote host:

`cryptcat -k {{password}} -l -p {{local_port}} | cryptcat -k {{password}} {{hostname}} {{remote_port}}`
