---
title: "GoldenEye - HTTP DoS Test | Free DevTools"
name: goldeneye.py
path: /freedevtools/tldr/linux/goldeneye.py
canonical: "https://hexmos.com/freedevtools/tldr/linux/goldeneye.py/"
description: "Test HTTP DoS attacks with GoldenEye, a powerful denial-of-service tool. Simulate high-volume requests and stress-test web servers. Free online tool, no registration required."
category: linux
keywords:
- HTTP DoS attack tool
- website denial of service
- linux DoS testing
- goldeneye.py DoS
- web server stress test
- network security testing
- HTTP flooding tool
- DoS attack simulation
- penetration testing linux
- linux security audit
features:
- Perform HTTP denial-of-service attacks on websites.
- Customize user agents and concurrent sockets for testing.
- Bypass SSL certificate verification for testing purposes.
- Enable debug mode for detailed attack analysis.
- Simulate high-volume requests to stress-test web servers.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# goldeneye.py

> A HTTP DoS test tool.
> More information: <https://github.com/jseidl/GoldenEye>.

- Test a specific website:

`./goldeneye.py {{url}}`

- Test a specific website with 100 user agents and 200 concurrent sockets:

`./goldeneye.py {{url}} --useragents 100 --sockets 200`

- Test a specific website without verifying the SSL certificate:

`./goldeneye.py {{url}} --nosslcheck`

- Test a specific website in debug mode:

`./goldeneye.py {{url}} --debug`

- Display help:

`./goldeneye.py --help`
