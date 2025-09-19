---
title: "Lynis Audit - Secure Linux Systems | Online Free DevTools by Hexmos"
name: lynis
path: /freedevtools/tldr/linux/lynis
canonical: "https://hexmos.com/freedevtools/tldr/linux/lynis/"
description: "Secure Linux systems with Lynis Audit. Perform security audits, detect vulnerabilities and improve system hardening. Free online tool, no registration required."
category: linux
keywords:
- linux security audit
- system security scanning
- vulnerability detection
- security hardening tool
- linux system auditing
- cis benchmark compliance
- penetration testing
- dockerfile security scan
- system integrity check
- linux compliance audit
features:
- Audit system security using comprehensive tests.
- Scan Dockerfiles for security vulnerabilities.
- Update Lynis with the latest security definitions.
- Generate security audit reports.
- Perform system hardening recommendations.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lynis

> System and security auditing tool.
> More information: <https://cisofy.com/documentation/lynis/>.

- Check that Lynis is up-to-date:

`sudo lynis update info`

- Run a security audit of the system:

`sudo lynis audit system`

- Run a security audit of a Dockerfile:

`sudo lynis audit dockerfile {{path/to/dockerfile}}`
