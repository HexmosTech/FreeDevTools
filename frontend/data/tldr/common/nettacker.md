---
title: "Nettacker - Automate Vulnerability Scans | Online Free DevTools by Hexmos"
name: nettacker
path: "/freedevtools/tldr/common/nettacker/"
canonical: "https://hexmos.com/freedevtools/tldr/common/nettacker/"
description: "Automate vulnerability scanning with Nettacker. Perform port scanning and information gathering on targets. Free online tool, no registration required."
category: common
keywords:
- vulnerability scanner automation
- network scanning tool
- information gathering scanner
- port scan command line
- web application vulnerability scan
- linux vulnerability scanner
- penetration testing automation
- target vulnerability assessment
- security audit tool
- nettacker command
features:
- Automate network vulnerability scans
- Gather information about target systems
- Run port scans on specified targets and ports
- Test for vulnerabilities on web applications
- Generate reports of scan results
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nettacker

> Automate information gathering, vulnerability scanning and eventually generate a report.
> More information: <https://nettacker.readthedocs.io/en/latest/Home/>.

- List all available modules:

`nettacker --show-all-modules`

- Run a port scan on targets:

`nettacker {{[-m|--modules]}} port_scan {{[-i|--targets]}} {{192.168.0.1/24,owasp.org,scanme.org,...}}`

- Run a port scan on specific ports and targets listed in a file (newline separated):

`nettacker {{[-m|--modules]}} port_scan {{[-g|--ports]}} {{22,80,443,...}} {{[-l|--targets-list]}} {{path/to/targets.txt}}`

- Run ping test before scan and then run multiple scan types on target:

`nettacker --ping-before-scan {{[-m|--modules]}} {{port_scan,subdomain_scan,waf_scan,...}} {{[-g|--ports]}} {{80,443}} {{[-i|--targets]}} {{owasp.org}}`
