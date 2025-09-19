---
title: "Create Elasticsearch Token - Enroll Nodes & Kibana | Online Free DevTools by Hexmos"
name: elasticsearch-create-enrollment-token
path: /freedevtools/tldr/elasticsearch/elasticsearch-create-enrollment-token
canonical: "https://hexmos.com/freedevtools/tldr/elasticsearch/elasticsearch-create-enrollment-token/"
description: "Create Elasticsearch enrollment tokens with elasticsearch-create-enrollment-token. Securely enroll new Elasticsearch nodes and Kibana instances. Free online tool, no registration required."
category: common
keywords:
- Elasticsearch enrollment token
- Elasticsearch node enrollment
- Elasticsearch Kibana enrollment
- Elasticsearch security token
- Elasticsearch cluster setup
- Elasticsearch configuration
- Enrollment token generator
- Elasticsearch CLI tools
- Elasticsearch deployment
- Elasticsearch security
features:
- Generate enrollment tokens for Elasticsearch nodes
- Generate enrollment tokens for Kibana instances
- Enroll new nodes securely
- Customize Elasticsearch URL for Kibana enrollment
- Display verbose output for debugging
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# elasticsearch-create-enrollment-token

> Create enrollment tokens for Elasticsearch nodes and Kibana instances.
> More information: <https://www.elastic.co/guide/en/elasticsearch/reference/current/create-enrollment-token.html>.

- Create an enrollment token for adding a new Elasticsearch node:

`elasticsearch-create-enrollment-token {{[-s|--scope]}} node`

- Create an enrollment token for adding a new Kibana instance:

`elasticsearch-create-enrollment-token {{[-s|--scope]}} kibana`

- Create an enrollment token and display verbose output:

`elasticsearch-create-enrollment-token {{[-s|--scope]}} node --verbose`

- Create an enrollment token for a Kibana instance with a custom Elasticsearch URL:

`elasticsearch-create-enrollment-token {{[-s|--scope]}} kibana --url "{{IP}}"`

- Display help:

`elasticsearch-create-enrollment-token {{[-h|--help]}}`
