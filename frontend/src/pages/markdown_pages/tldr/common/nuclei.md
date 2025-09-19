---
title: "Nuclei Scanner - Scan for Vulnerabilities with YAML DSL | Online Free DevTools by Hexmos"
name: nuclei
path: /freedevtools/tldr/common/nuclei
canonical: "https://hexmos.com/freedevtools/tldr/common/nuclei/"
description: "Scan for vulnerabilities quickly with Nuclei Scanner using a simple YAML-based DSL. Identify security flaws and misconfigurations easily. Free online tool, no registration required."
category: common
keywords:
- nuclei vulnerability scanner
- yaml security scanning
- nuclei template engine
- vulnerability assessment tool
- penetration testing scanner
- nuclei http scan
- nuclei dns scan
- nuclei file scan
- nuclei workflow scan
- nuclei security automation
features:
- Scan for vulnerabilities using YAML-based templates
- Update nuclei templates to the latest version
- Run automatic web scans using Wappalyzer technology detection
- Export results to markdown files
- Run scans based on specific template conditions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nuclei

> Fast and customizable vulnerability scanner using a simple YAML-based DSL.
> More information: <https://docs.projectdiscovery.io/tools/nuclei/running>.

- Update `nuclei` templates to the latest released version (downloaded to `~/nuclei-templates` on macOS/Linux or `%USERPROFILE%\nuclei-templates` on Windows):

`nuclei {{[-ut|-update-templates]}}`

- [l]ist all [t]emplates by specific [p]rotocol [t]ype:

`nuclei -tl {{[-pt|-type]}} {{dns|file|http|headless|tcp|workflow|ssl|websocket|whois|code|javascript}}`

- Run an automatic web scan using Wappalyzer technology detection for a specific target [u]RL/host:

`nuclei {{[-as|-automatic-scan]}} {{[-u|-target]}} {{example.com}}`

- Run HTTP [p]rotocol [t]ype templates of specific severity, exporting results to markdown files inside a specific directory:

`nuclei {{[-s|-severity]}} {{high,critical,...}} {{[-pt|-type]}} http {{[-u|-target]}} {{https://example.com}} {{[-me|-markdown-export]}} {{path/to/directory}}`

- Run all templates with a custom rate limit, maximum bulk size, and silent output (only findings shown):

`nuclei {{[-rl|-rate-limit]}} {{150}} {{[-bs|-bulk-size]}} {{25}} {{[-c|-concurrency]}} {{25}} -silent {{[-u|-target]}} {{https://example.com}}`

- Run a specific nuclei-bundled workflow against a target:

`nuclei {{[-w|-workflows]}} {{workflows/wordpress-workflow.yaml}} {{[-u|-target]}} {{https://example.com}}`

- Run one or more specific templates or directory with templates with verbose output in `stderr` and output detected issues/vulnerabilities to a file:

`nuclei {{[-t|-templates]}} {{path/to/nuclei-templates/http}} {{[-u|-target]}} {{https://example.com}} {{[-v|-verbose]}} {{[-o|-output]}} {{path/to/results}}`

- Run a scan based on one or more template conditions:

`nuclei {{[-tc|-template-condition]}} "{{contains(tags, 'xss') && contains(tags, 'cve')}}" {{[-u|-target]}} {{https://example.com}}`
