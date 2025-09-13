---
title: "Generate Certificates - Control ACME DNS with acme.sh | Free DevTools"
name: acme.sh
path: /freedevtools/tldr/common/acme.sh
canonical: "https://hexmos.com/freedevtools/tldr/common/acme.sh/"
description: "Generate SSL certificates with acme.sh, a Let's Encrypt client. Automate DNS challenges and secure domains easily. Free online tool, no registration required."
category: common
keywords:
- acme.sh certificate
- letsencrypt client
- ssl certificate generator
- acme dns challenge
- acme.sh webroot
- acme.sh standalone
- acme.sh nginx
- acme.sh apache
- acme.sh wildcard certificate
- acme certificate renewal
features:
- Issue certificates via webroot mode.
- Automate certificate issuance via DNS API.
- Integrate with Nginx and Apache configurations.
- Automatically renew certificates with specified commands.
- Issue certificates for multiple domains in standalone mode.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# acme.sh

> Shell script implementing ACME client protocol, an alternative to `certbot`.
> See also: `acme.sh dns`.
> More information: <https://github.com/acmesh-official/acme.sh>.

- Issue a certificate using webroot mode:

`acme.sh --issue {{[-d|--domain]}} {{example.com}} {{[-w|--webroot]}} /{{path/to/webroot}}`

- Issue a certificate for multiple domains using standalone mode using port 80:

`acme.sh --issue --standalone {{[-d|--domain]}} {{example.com}} {{[-d|--domain]}} {{www.example.com}}`

- Issue a certificate using standalone TLS mode using port 443:

`acme.sh --issue --alpn {{[-d|--domain]}} {{example.com}}`

- Issue a certificate using a working Nginx configuration:

`acme.sh --issue --nginx {{[-d|--domain]}} {{example.com}}`

- Issue a certificate using a working Apache configuration:

`acme.sh --issue --apache {{[-d|--domain]}} {{example.com}}`

- Issue a wildcard (\*) certificate using an automatic DNS API mode:

`acme.sh --issue --dns {{dns_cf}} {{[-d|--domain]}} {{*.example.com}}`

- Install certificate files into the specified locations (useful for automatic certificate renewal):

`acme.sh {{[-i|--install-cert]}} {{[-d|--domain]}} {{example.com}} --key-file /{{path/to/example.com.key}} --fullchain-file /{{path/to/example.com.cer}} --reloadcmd "{{systemctl force-reload nginx}}"`
