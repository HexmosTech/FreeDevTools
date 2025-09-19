---
title: "Control Elasticsearch - Manage Cradle Indices | Online Free DevTools by Hexmos"
name: cradle-elastic
path: /freedevtools/tldr/cradle/cradle-elastic
canonical: "https://hexmos.com/freedevtools/tldr/cradle/cradle-elastic/"
description: "Manage Elasticsearch indices for Cradle instances with Cradle Elastic. Flush indices, submit schemas, and populate data quickly and easily. Free online tool, no registration required."
category: common
keywords:
- elasticsearch management
- cradle elasticsearch
- index flushing
- schema submission
- data population
- php elasticsearch
- command line elasticsearch
- cradle php
- elastic index control
- elastic data management
features:
- Flush Elasticsearch indices
- Submit Elasticsearch schemas for packages
- Populate Elasticsearch indices
- Manage indices for specific packages
- Truncate Elasticsearch data
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cradle elastic

> Manage the Elasticsearch instances for a Cradle instance.
> More information: <https://cradlephp.github.io/docs/3.B.-Reference-Command-Line-Tools.html#elastic>.

- Truncate the Elasticsearch index:

`cradle elastic flush`

- Truncate the Elasticsearch index for a specific package:

`cradle elastic flush {{package}}`

- Submit the Elasticsearch schema:

`cradle elastic map`

- Submit the Elasticsearch schema for a specific package:

`cradle elastic map {{package}}`

- Populate the Elasticsearch indices for all packages:

`cradle elastic populate`

- Populate the Elasticsearch indices for a specific package:

`cradle elastic populate {{package}}`
