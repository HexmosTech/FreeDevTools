---
title: "Configure Authconfig - System Authentication | Online Free DevTools by Hexmos"
name: authconfig
path: "/freedevtools/tldr/linux/authconfig/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/authconfig/"
description: "Configure system authentication with Authconfig. Secure your Linux system by enabling or disabling various authentication methods. Free online tool, no registration required."
category: linux
keywords:
- "linux authconfig"
- "system authentication configuration"
- "password hashing algorithm"
- "LDAP authentication linux"
- "NIS configuration linux"
- "kerberos authentication linux"
- "winbind authentication linux"
- "active directory authentication linux"
- "local authorization linux"
- "linux security configuration"
features:
- "Configure password hashing algorithms"
- "Enable or disable LDAP authentication"
- "Enable Network Information Service (NIS)"
- "Enable Kerberos authentication"
- "Enable Winbind (Active Directory) authentication"
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# authconfig

> Configure system authentication resources.
> More information: <https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/system-level_authentication_guide/authconfig-install>.

- Display the current configuration (or dry run):

`authconfig --test`

- Configure the server to use a different password hashing algorithm:

`authconfig --update --passalgo={{algorithm}}`

- Enable LDAP authentication:

`authconfig --update --enableldapauth`

- Disable LDAP authentication:

`authconfig --update --disableldapauth`

- Enable Network Information Service (NIS):

`authconfig --update --enablenis`

- Enable Kerberos:

`authconfig --update --enablekrb5`

- Enable Winbind (Active Directory) authentication:

`authconfig --update --enablewinbindauth`

- Enable local authorization:

`authconfig --update --enablelocauthorize`
