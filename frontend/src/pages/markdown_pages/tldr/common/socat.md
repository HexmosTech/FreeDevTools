---
title: "Socat Relay - Create Network Connections | Online Free DevTools by Hexmos"
name: socat
path: /freedevtools/tldr/common/socat
canonical: "https://hexmos.com/freedevtools/tldr/common/socat/"
description: "Create network connections with Socat Relay. Transfer data, forward ports, and listen for connections with this versatile tool. Free online tool, no registration required."
category: common
keywords:
- socket relay
- network connection
- port forwarding
- data transfer
- linux socat
- socat command
- tcp relay
- udp relay
- ssl connection
- multicast send receive
features:
- Listen for incoming network connections
- Transfer data between two endpoints
- Forward local ports to remote hosts
- Send data using multicast
- Receive data from multicast groups
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# socat

> Multipurpose relay (SOcket CAT).
> More information: <http://www.dest-unreach.org/socat/>.

- Listen to a port, wait for an incoming connection and transfer data to STDIO:

`sudo socat - TCP-LISTEN:8080,fork`

- Listen on a port using SSL and print to STDOUT:

`sudo socat OPENSSL-LISTEN:4433,reuseaddr,cert=./cert.pem,cafile=./ca.cert.pem,key=./key.pem,verify=0 STDOUT`

- Create a connection to a host and port, transfer data in STDIO to connected host:

`sudo socat - TCP4:www.example.com:80`

- Forward incoming data of a local port to another host and port:

`sudo socat TCP-LISTEN:80,fork TCP4:www.example.com:80`

- Send data with multicast routing scheme:

`{{echo "Hello Multicast"}} | socat - UDP4-DATAGRAM:{{224.0.0.1}}:{{5000}}`

- Receive data from a multicast:

`socat - UDP4-RECVFROM:{{5000}}`
