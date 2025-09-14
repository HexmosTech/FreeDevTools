---
title: "Scamper - Analyze Network Topology and Performance | Free DevTools"
name: scamper
path: /freedevtools/tldr/common/scamper
canonical: "https://hexmos.com/freedevtools/tldr/common/scamper/"
description: "Analyze network topology with Scamper, a tool for actively probing the internet to analyze topology and performance. Free online tool, no registration required."
category: common
keywords:
- network topology analysis
- internet probing
- performance monitoring
- traceroute tool
- network diagnostic
- sc_warts2text conversion
- sc_ttlexp exploration
- network mapping tool
- linux network tools
- command line network analysis
features:
- Perform traceroute to a specified destination
- Execute multiple actions (ping, traceroute) on different targets
- Ping multiple hosts using UDP with incremental port numbers
- Utilize Multipath Discovery Algorithm (MDA) for load-balanced path detection
- Sniff and record specific ICMP packets based on IP address and ID
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# scamper

> Actively probes the Internet in order to analyze topology and performance.
> Includes some tools that start with `sc_`, for example `sc_warts2text` or `sc_ttlexp`.
> More information: <https://www.caida.org/catalog/software/scamper/>.

- Execute the standard option (traceroute) to a destination:

`scamper -i {{192.0.2.1}}`

- Execute two actions (ping and traceroute) on two different targets:

`scamper -I "{{ping}} {{192.0.2.1}}" -I "{{trace}} {{192.0.2.2}}"`

- Ping several hosts with UDP, use a specific port number for the first ping and increase it for each subsequent ping:

`scamper -c "{{ping}} -P {{UDP-dport}} -d {{33434}}" -i {{192.0.2.1}} -i {{192.0.2.2}}`

- Use the Multipath Discovery Algorithm (MDA) to determine the presence of load-balanced paths to the destination and use ICMP echo packets to sample with a maximum of three attempts, write the result to a `warts` file:

`scamper -O {{warts}} -o {{path/to/output.warts}} -I "{{tracelb}} -P {{ICMP-echo}} -q {{3}} {{192.0.2.1}}"`

- Execute a Paris traceroute with ICMP to a destination and save the result in a compressed `warts` file:

`scamper -O {{warts.gz}} -o {{path/to/output.warts}} -I "{{trace}} -P {{icmp-paris}} {{2001:db8:dead:beaf::4}}"`

- Record all ICMP packets that arrive at a specific IP address and have a specific ICMP ID in a `warts` file:

`scamper -O {{warts}} -o {{path/to/output.warts}} -I "sniff -S {{2001:db8:dead:beef::6}} icmp[icmpid] == {{101}}"`
