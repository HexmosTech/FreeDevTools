---
title: "Doppler Secrets - Manage Secrets Securely | Free DevTools"
name: doppler-secrets
path: /freedevtools/tldr/common/doppler-secrets
canonical: "https://hexmos.com/freedevtools/tldr/common/doppler-secrets/"
description: "Manage secrets securely with Doppler Secrets. Upload, download, and delete secrets efficiently. Secure secrets management with a free online tool, no registration required."
category: common
keywords:
- doppler secrets management
- secure secrets storage
- secrets upload
- secrets download
- secrets deletion
- env file management
- configuration secrets
- doppler cli
- secrets versioning
- secrets access control
features:
- Retrieve all project secrets
- Get values of specific secrets
- Upload secrets from a file
- Delete specified secrets
- Download secrets as a .env file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# doppler secrets

> Manage your Doppler project's secrets.
> More information: <https://docs.doppler.com/docs/accessing-secrets>.

- Get all secrets:

`doppler secrets`

- Get value(s) of one or more secrets:

`doppler secrets get {{secrets}}`

- Upload a secrets file:

`doppler secrets upload {{path/to/file.env}}`

- Delete value(s) of one or more secrets:

`doppler secrets delete {{secrets}}`

- Download secrets as `.env`:

`doppler secrets download --format=env --no-file > {{path/to/.env}}`
