---
title: "Systemd Creds - Manage Service Credentials | Online Free DevTools by Hexmos"
name: systemd-creds
path: /freedevtools/tldr/linux/systemd-creds
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-creds/"
description: "Manage service credentials with Systemd Creds. Encrypt, decrypt, and control access to sensitive data using this powerful command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - systemd credential management
  - linux credential encryption
  - systemd-creds command
  - service credential security
  - linux service credentials
  - systemd encryption decryption
  - command-line credential tool
  - secure service credentials
  - systemd secrets management
  - linux systemd commands
features:
  - Encrypt files and text securely.
  - Decrypt previously encrypted files.
  - Manage credentials with specific names.
  - Set expiration timestamps for credentials.
  - Integrate credentials directly into service files.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemd-creds

> List, show, encrypt and decrypt service credentials.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-creds.html>.

- Encrypt a file and set a specific name:

`systemd-creds encrypt --name {{name}} {{path/to/input_file}} {{path/to/output}}`

- Decrypt the file again:

`systemd-creds decrypt {{path/to/input_file}} {{path/to/output_file}}`

- Encrypt text from `stdin`:

`echo -n {{text}} | systemd-creds encrypt --name {{name}} - {{path/to/output}}`

- Encrypt the text and append it to the service file (the credentials will be available in `$CREDENTIALS_DIRECTORY`):

`echo -n {{text}} | systemd-creds encrypt --name {{name}} --pretty - - >> {{service}}`

- Create a credential that is only valid until the given timestamp:

`systemd-creds encrypt --not-after "{{timestamp}}" {{path/to/input_file}} {{path/to/output_file}}`
