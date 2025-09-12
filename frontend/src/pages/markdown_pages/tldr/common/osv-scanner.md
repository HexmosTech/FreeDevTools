---
title: "Scan Dependencies - osv-scanner Vulnerability Check | Free DevTools"
name: osv-scanner
path: /freedevtools/tldr/common/osv-scanner
canonical: "https://hexmos.com/freedevtools/tldr/common/osv-scanner/"
description: "Scan dependencies for vulnerabilities with osv-scanner. Detect software vulnerabilities in your projects and SBOMs quickly and easily. Free online tool, no registration required."
category: common
keywords:
- dependency vulnerability scan
- OSV database scanner
- SBOM vulnerability check
- Docker image scan
- package lockfile scan
- software composition analysis
- vulnerability assessment tool
- security scanning
- open source vulnerabilities
- dependency checking
features:
- Scan Docker images for vulnerable dependencies
- Analyze package lockfiles for security vulnerabilities
- Check SBOM files against the OSV database
- Recursively scan directories for dependency information
- Output scan results in JSON format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# osv-scanner

> Scan various mediums for dependencies and matches them against the OSV database.
> More information: <https://osv.dev/about>.

- Scan a Docker image:

`osv-scanner -D {{docker_image_name}}`

- Scan a package lockfile:

`osv-scanner -L {{path/to/lockfile}}`

- Scan an SBOM file:

`osv-scanner -S {{path/to/sbom_file}}`

- Scan multiple directories recursively:

`osv-scanner -r {{directory1 directory2 ...}}`

- Skip scanning Git repositories:

`osv-scanner --skip-git {{-r|-D}} {{target}}`

- Output result in JSON format:

`osv-scanner --json {{-D|-L|-S|-r}} {{target}}`
