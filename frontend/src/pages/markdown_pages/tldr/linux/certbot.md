---
title: "Certbot - Obtain SSL Certificates | Online Free DevTools by Hexmos"
name: certbot
path: /freedevtools/tldr/linux/certbot
canonical: "https://hexmos.com/freedevtools/tldr/linux/certbot/"
description: "Obtain and manage SSL certificates with Certbot.  Automate certificate renewal and easily integrate with web servers. Free online tool, no registration required."
category: linux
keywords:
  - ssl certificate generation
  - letsencrypt client
  - ssl certificate renewal
  - automatic ssl certificate
  - web server ssl
  - nginx ssl certbot
  - apache ssl certbot
  - certbot webroot
  - command line ssl
  - certbot tutorial
features:
  - Automatically obtain Let's Encrypt SSL certificates.
  - Renew certificates before expiry.
  - Integrate with Nginx, Apache, and other web servers.
  - Supports various authentication methods (webroot, nginx, apache).
  - Offers dry-run and test certificate options for safe testing.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# certbot

> The Let's Encrypt Agent for automatically obtaining and renewing TLS certificates.
> Successor to `letsencrypt`.
> More information: <https://eff-certbot.readthedocs.io/en/latest/using.html>.

- Obtain a new certificate via webroot authorization, but do not install it automatically:

`sudo certbot certonly --webroot {{[-w|--webroot-path]}} {{path/to/webroot}} {{[-d|--domain]}} {{subdomain.example.com}}`

- Obtain a new certificate via nginx authorization, installing the new certificate automatically:

`sudo certbot --nginx {{[-d|--domain]}} {{subdomain.example.com}}`

- Obtain a new certificate via apache authorization, installing the new certificate automatically:

`sudo certbot --apache {{[-d|--domain]}} {{subdomain.example.com}}`

- Renew all Let's Encrypt certificates that expire in 30 days or less (don't forget to restart any servers that use them afterwards):

`sudo certbot renew`

- Simulate the obtaining of a new certificate, but don't actually save any new certificates to disk:

`sudo certbot --webroot {{[-w|--webroot-path]}} {{path/to/webroot}} {{[-d|--domain]}} {{subdomain.example.com}} --dry-run`

- Obtain an untrusted test certificate instead:

`sudo certbot --webroot {{[-w|--webroot-path]}} {{path/to/webroot}} {{[-d|--domain]}} {{subdomain.example.com}} --test-cert`
