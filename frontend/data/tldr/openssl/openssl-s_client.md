---
title: "OpenSSL Client - Create TLS Connections | Online Free DevTools by Hexmos"
name: openssl-s_client
path: "/freedevtools/tldr/openssl/openssl-s_client/"
canonical: "https://hexmos.com/freedevtools/tldr/openssl/openssl-s_client/"
description: "Create TLS client connections with OpenSSL s_client. Verify certificates and establish secure communication channels using command-line options. Free online tool, no registration required."
category: common
keywords:
- TLS client creation
- SSL connection establishment
- OpenSSL certificate verification
- Secure communication channel
- HTTPS server certificate chain
- Server Name Indication (SNI)
- OpenSSL client command
- TLS/SSL debugging
- Command line TLS client
- OpenSSL Linux
features:
- Establish secure TLS client connections
- Verify server SSL/TLS certificates
- Set Server Name Indication (SNI)
- Display the complete certificate chain
- Output certificate start and expiry dates
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# openssl s_client

> OpenSSL command to create TLS client connections.
> More information: <https://www.openssl.org/docs/manmaster/man1/openssl-s_client.html>.

- Display the start and expiry dates for a domain's certificate:

`openssl s_client -connect {{host}}:{{port}} 2>/dev/null | openssl x509 -noout -dates`

- Display the certificate presented by an SSL/TLS server:

`openssl s_client -connect {{host}}:{{port}} </dev/null`

- Set the Server Name Indicator (SNI) when connecting to the SSL/TLS server:

`openssl s_client -connect {{host}}:{{port}} -servername {{hostname}}`

- Display the complete certificate chain of an HTTPS server:

`openssl s_client -connect {{host}}:443 -showcerts </dev/null`
