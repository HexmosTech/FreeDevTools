---
title: "Logstash Configuration Validator - Validate & Debug ETL Pipelines | Online Free DevTools by Hexmos"
name: logstash
path: /freedevtools/tldr/common/logstash
canonical: "https://hexmos.com/freedevtools/tldr/common/logstash/"
description: "Validate Logstash configuration files with ease.  Debug and test your Elasticsearch Logstash pipelines before deployment. Free online tool, no registration required."
category: common
keywords:
  - logstash configuration validation
  - logstash pipeline validation
  - logstash syntax checker
  - logstash etl pipeline debugging
  - logstash elasticsearch integration
  - logstash configuration testing
  - logstash config file validator
  - logstash error detection
  - logstash data pipeline analysis
  - logstash command line validation
features:
  - Validate Logstash configuration files for syntax errors.
  - Identify semantic issues within your Logstash configuration.
  - Simulate data flow to detect pipeline configuration problems.
  - Provide detailed error messages with line numbers for easy debugging.
  - Test Logstash configurations locally before deployment to Elasticsearch.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# logstash

> An Elasticsearch ETL (extract, transform and load) tool.
> Commonly used to load data from various sources (such as databases and log files) into Elasticsearch.
> More information: <https://www.elastic.co/products/logstash>.

- Check validity of a Logstash configuration:

`logstash --configtest --config {{logstash_config.conf}}`

- Run Logstash using configuration:

`sudo logstash --config {{logstash_config.conf}}`

- Run Logstash with the most basic inline configuration string:

`sudo logstash -e 'input {} filter {} output {}'`
