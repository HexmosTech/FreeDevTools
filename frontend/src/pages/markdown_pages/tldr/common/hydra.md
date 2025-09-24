---
title: "Crack Passwords - Brute-Force with Hydra | Online Free DevTools by Hexmos"
name: hydra
path: /freedevtools/tldr/common/hydra
canonical: "https://hexmos.com/freedevtools/tldr/common/hydra/"
description: "Crack passwords instantly with Hydra. Identify weak credentials on various network services, supporting FTP, SSH, HTTP and more. Free online tool, no registration required."
category: common
keywords:
- password cracker
- brute-force attack
- network login
- hydra password
- hydra ftp
- hydra ssh
- hydra http
- password guessing
- network security
- credential hacking
features:
- Guess passwords for multiple protocols
- Test SSH credentials with wordlists
- Crack HTTPS webform logins
- Brute-force FTP authentication
- Attack RDP server login
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hydra

> Online password guessing tool.
> Protocols supported include FTP, HTTP(S), SMTP, SNMP, XMPP, SSH, and more.
> More information: <https://manned.org/hydra>.

- Start Hydra's wizard:

`hydra-wizard`

- Guess SSH credentials using a given username and a list of passwords:

`hydra -l {{username}} -P {{path/to/wordlist.txt}} {{host_ip}} {{ssh}}`

- Guess HTTPS webform credentials using two specific lists of usernames and passwords ("https_post_request" can be like "username=^USER^&password=^PASS^"):

`hydra -L {{path/to/usernames.txt}} -P {{path/to/wordlist.txt}} {{host_ip}} {{https-post-form}} "{{url_without_host}}:{{https_post_request}}:{{login_failed_string}}"`

- Guess FTP credentials using usernames and passwords lists, specifying the number of threads:

`hydra -L {{path/to/usernames.txt}} -P {{path/to/wordlist.txt}} -t {{n_tasks}} {{host_ip}} {{ftp}}`

- Guess MySQL credentials using a username and a passwords list, exiting when a username/password pair is found:

`hydra -l {{username}} -P {{path/to/wordlist.txt}} -f {{host_ip}} {{mysql}}`

- Guess RDP credentials using a username and a passwords list, showing each attempt:

`hydra -l {{username}} -P {{path/to/wordlist.txt}} -V {{rdp://host_ip}}`

- Guess IMAP credentials on a range of hosts using a list of colon-separated username/password pairs:

`hydra -C {{path/to/username_password_pairs.txt}} {{imap://[host_range_cidr]}}`

- Guess POP3 credentials on a list of hosts using usernames and passwords lists, exiting when a username/password pair is found:

`hydra -L {{path/to/usernames.txt}} -P {{path/to/wordlist.txt}} -M {{path/to/hosts.txt}} -F {{pop3}}`
