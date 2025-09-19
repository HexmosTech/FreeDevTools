---
title: "Analyze Nginx Configs - Gixy Nginx Analyzer | Online Free DevTools by Hexmos"
name: gixy
path: /freedevtools/tldr/common/gixy
canonical: "https://hexmos.com/freedevtools/tldr/common/gixy/"
description: "Analyze Nginx configurations with Gixy Nginx Analyzer. Detect common errors, security vulnerabilities, and performance issues in your Nginx setup. Free online tool, no registration required."
category: common
keywords:
- nginx configuration analyzer
- nginx config validator
- nginx syntax checker
- nginx security audit
- nginx performance analysis
- gixy nginx linting
- linux nginx configuration
- nginx common mistakes
- nginx vulnerability scanner
- nginx security best practices
features:
- Analyze nginx configuration files for errors
- Detect potential security vulnerabilities in nginx configs
- Identify performance bottlenecks in nginx setup
- Skip specific tests during analysis
- Customize severity levels for analysis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gixy

> Analyze nginx configuration files.
> More information: <https://github.com/yandex/gixy>.

- Analyze nginx configuration (default path: `/etc/nginx/nginx.conf`):

`gixy`

- Analyze nginx configuration but skip specific tests:

`gixy --skips {{http_splitting}}`

- Analyze nginx configuration with the specific severity level:

`gixy {{-l|-ll|-lll}}`

- Analyze nginx configuration files on the specific path:

`gixy {{path/to/configuration_file_1}} {{path/to/configuration_file_2}}`
