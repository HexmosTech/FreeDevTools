---
title: "Test SSL/TLS - Check Server Security | Online Free DevTools by Hexmos"
name: testssl
path: "/freedevtools/tldr/common/testssl/"
canonical: "https://hexmos.com/freedevtools/tldr/common/testssl/"
description: "Check SSL/TLS protocols with Testssl, ensuring robust server security. Identify vulnerabilities and analyze HTTP headers. Free online tool, no registration required."
category: common
keywords:
- SSL TLS checker
- test SSL protocols
- check TLS ciphers
- server security scanner
- vulnerability assessment
- HTTP header analyzer
- starttls testing
- network security test
- common linux command
- command line ssl
features:
- Test SSL/TLS protocols on a server.
- Check for server vulnerabilities.
- Analyze HTTP security headers.
- Test STARTTLS enabled protocols.
- Scan specific ports for SSL/TLS support.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# testssl

> Check SSL/TLS protocols and ciphers supported by a server.
> More information: <https://testssl.sh/doc/testssl.1.html>.

- Test a server (run every check) on port 443:

`testssl {{example.com}}`

- Test a different port:

`testssl {{example.com:465}}`

- Only check available protocols:

`testssl --protocols {{example.com}}`

- Only check vulnerabilities:

`testssl --vulnerable {{example.com}}`

- Only check HTTP security headers:

`testssl --headers {{example.com}}`

- Test other STARTTLS enabled protocols:

`testssl --starttls {{ftp|smtp|pop3|imap|xmpp|sieve|xmpp-server|telnet|ldap|irc|lmtp|nntp|postgres|mysql}} {{example.com}}:{{port}}`
