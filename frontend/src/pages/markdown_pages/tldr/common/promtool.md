---
title: "Promtool Validator - Validate Prometheus Configs | Online Free DevTools by Hexmos"
name: promtool
path: /freedevtools/tldr/common/promtool
canonical: "https://hexmos.com/freedevtools/tldr/common/promtool/"
description: "Validate Prometheus configurations with Promtool. Ensure rule and config file validity, and check metric consistency using command line. Free online tool, no registration required."
category: common
keywords:
- Prometheus configuration validator
- PromQL rule checker
- Prometheus metrics linter
- YAML configuration analyzer
- Alerting rule verifier
- Monitoring system debugger
- Prometheus config tester
- Command-line configuration tool
- Time series database validator
- Promtool command line
features:
- Checks Prometheus configuration file validity.
- Validates Prometheus rule files for syntax errors.
- Analyzes Prometheus metrics for consistency.
- Supports unit testing for Prometheus rules.
- Detects errors in PromQL expressions.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# promtool

> Tooling for the Prometheus monitoring system.
> More information: <https://prometheus.io/docs/prometheus/latest/getting_started/>.

- Check if the configuration files are valid or not (if present report errors):

`promtool check config {{config_file.yml}}`

- Check if the rule files are valid or not (if present report errors):

`promtool check rules {{rules_file.yml}}`

- Pass Prometheus metrics over `stdin` to check them for consistency and correctness:

`curl --silent {{http://example.com:9090/metrics/}} | promtool check metrics`

- Unit tests for rules config:

`promtool test rules {{test_file.yml}}`
