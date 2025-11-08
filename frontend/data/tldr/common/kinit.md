---
title: "Authenticate Kerberos - Get Tickets with kinit | Online Free DevTools by Hexmos"
name: kinit
path: "/freedevtools/tldr/common/kinit/"
canonical: "https://hexmos.com/freedevtools/tldr/common/kinit/"
description: "Authenticate Kerberos principals with kinit. Obtain and renew tickets for users, services, and applications easily. Free online tool, no registration required."
category: common
keywords:
- Kerberos authentication
- Kerberos ticket
- kinit command
- Kerberos principal
- Kerberos realm
- Ticket granting ticket
- Kerberos keytab
- Linux Kerberos
- MacOS Kerberos
- kinit renew ticket
features:
- Authenticate a user with a Kerberos server
- Obtain a ticket-granting ticket
- Renew an existing Kerberos ticket
- Specify a custom lifetime for a ticket
- Authenticate with a specific keytab file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kinit

> Authenticate a principal with a Kerberos server to gain and cache a ticket.
> Note: A Kerberos principal can be either a user, service, or application.
> More information: <https://web.mit.edu/kerberos/krb5-latest/doc/user/user_commands/kinit.html>.

- Authenticate a user and obtain a ticket-granting ticket:

`kinit {{username}}`

- Renew a ticket-granting ticket:

`kinit -R`

- Specify a lifetime for the ticket:

`kinit -l {{5h}}`

- Specify a total renewable lifetime for the ticket:

`kinit -r {{1w}}`

- Specify a different principal name to authenticate as:

`kinit -p {{principal@REALM}}`

- Specify a different keytab file to authenticate with:

`kinit -t {{path/to/keytab}}`
