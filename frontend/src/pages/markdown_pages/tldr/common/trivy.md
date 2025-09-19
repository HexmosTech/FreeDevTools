---
title: "Scan Vulnerabilities - Trivy Security Scanner | Online Free DevTools by Hexmos"
name: trivy
path: /freedevtools/tldr/common/trivy
canonical: "https://hexmos.com/freedevtools/tldr/common/trivy/"
description: "Scan vulnerabilities with Trivy, a comprehensive security scanner for container images and file systems. Identify and fix security issues quickly. Free online tool, no registration required."
category: common
keywords:
- container image scanner
- vulnerability scanning
- security scanner
- trivy scan
- docker image vulnerability scan
- filesystem vulnerability scan
- git repository vulnerability scan
- configuration misconfiguration scan
- iac security scan
- sarif report generation
features:
- Scan Docker images for vulnerabilities and secrets
- Scan file systems for vulnerabilities and misconfigurations
- Scan IaC configurations for misconfigurations
- Scan Git repositories for vulnerabilities up to specific commit
- Generate SARIF reports for detailed vulnerability analysis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# trivy

> Scanner for vulnerabilities in container images, file systems, and Git repositories, as well as for configuration issues.
> More information: <https://aquasecurity.github.io/trivy>.

- Scan a Docker image for vulnerabilities and exposed secrets:

`trivy image {{image:tag}}`

- Scan a Docker image filtering the output by severity:

`trivy image {{[-s|--severity]}} {{HIGH,CRITICAL}} {{alpine:3.15}}`

- Scan a Docker image ignoring any unfixed/unpatched vulnerabilities:

`trivy image --ignore-unfixed {{alpine:3.15}}`

- Scan the filesystem for vulnerabilities and misconfigurations:

`trivy fs --security-checks {{vuln,config}} {{path/to/project_directory}}`

- Scan a IaC (Terraform, CloudFormation, ARM, Helm and Dockerfile) directory for misconfigurations:

`trivy config {{path/to/iac_directory}}`

- Scan a local or remote Git repository for vulnerabilities:

`trivy repo {{path/to/local_repository_directory|remote_repository_URL}}`

- Scan a Git repository up to a specific commit hash:

`trivy repo --commit {{commit_hash}} {{repository}}`

- Generate output with a SARIF template:

`trivy image {{[-f|--format]}} {{template}} {{[-t|--template]}} "{{@sarif.tpl}}" {{[-o|--output]}} {{path/to/report.sarif}} {{image:tag}}`
