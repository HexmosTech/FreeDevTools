---
title: "Generate Elasticsearch SAML Metadata - Configure IDP | Free DevTools"
name: elasticsearch-saml-metadata
path: /freedevtools/tldr/elasticsearch/elasticsearch-saml-metadata
canonical: "https://hexmos.com/freedevtools/tldr/elasticsearch/elasticsearch-saml-metadata/"
description: "Generate Elasticsearch SAML metadata with elasticsearch-saml-metadata. Create SP metadata for configuring a SAML Identity Provider. Free online tool, no registration required."
category: common
keywords:
- elasticsearch saml metadata
- saml service provider metadata
- elasticsearch idp configuration
- saml identity provider
- elasticsearch security realm
- saml metadata generation
- elasticsearch realm configuration
- sp metadata generator
- security assertion markup language
- elasticsearch authentication
features:
- Generate SAML metadata for a specified realm.
- Output SAML metadata to standard output (stdout).
- Save generated SAML metadata to a file.
- Support configuring SAML Identity Providers via command line.
- Display help information about command options.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# elasticsearch-saml-metadata

> Generate SAML Service Provider metadata for configuring a SAML Identity Provider.
> More information: <https://www.elastic.co/guide/en/elasticsearch/reference/current/saml-metadata.html>.

- Generate SAML metadata for a specific realm and print it to `stdout`:

`elasticsearch-saml-metadata --realm {{realm_name}}`

- Generate SAML metadata and write it to a specific file:

`elasticsearch-saml-metadata --realm {{realm_name}} --out {{path/to/file.xml}}`

- Display help:

`elasticsearch-saml-metadata {{[-h|--help]}}`
