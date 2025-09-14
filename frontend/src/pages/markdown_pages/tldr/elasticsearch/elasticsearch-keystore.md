---
title: "Elasticsearch Keystore - Manage Secure Settings | Free DevTools"
name: elasticsearch-keystore
path: /freedevtools/tldr/elasticsearch/elasticsearch-keystore
canonical: "https://hexmos.com/freedevtools/tldr/elasticsearch/elasticsearch-keystore/"
description: "Manage secure settings with Elasticsearch Keystore. Secure passwords and credentials with this free online tool, no registration required."
category: common
keywords:
- elasticsearch keystore
- elasticsearch secure settings
- keystore management
- elasticsearch password management
- elasticsearch credentials management
- linux elasticsearch
- macos elasticsearch
- keystore encryption
- elasticsearch secret storage
- command line keystore
features:
- Create new Elasticsearch keystores
- Add secure settings to the keystore
- Remove settings from the Elasticsearch keystore
- Change the Elasticsearch keystore password
- List all settings stored in the keystore
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# elasticsearch-keystore

> Manage secure settings (e.g., passwords, tokens, and credentials) used by Elasticsearch.
> More information: <https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-keystore.html>.

- Create a new keystore (not password-protected):

`elasticsearch-keystore create`

- Create a new password-protected keystore:

`elasticsearch-keystore create -p`

- Add a setting interactively:

`elasticsearch-keystore add {{setting_name}}`

- Add a setting from standard input:

`echo "{{setting_value}}" | elasticsearch-keystore add --stdin {{setting_name}}`

- Remove a setting from the keystore:

`elasticsearch-keystore remove {{setting_name}}`

- Change the keystore password:

`elasticsearch-keystore passwd`

- List all settings stored in the keystore:

`elasticsearch-keystore list`

- Upgrade the keystore format (after an Elasticsearch upgrade):

`elasticsearch-keystore upgrade`
