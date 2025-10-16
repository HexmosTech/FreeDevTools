---
title: "SQL Injection Exploit - Detect SQL Flaws | Online Free DevTools by Hexmos"
name: sqlmap
path: "/freedevtools/tldr/common/sqlmap/"
canonical: "https://hexmos.com/freedevtools/tldr/common/sqlmap/"
description: "Detect SQL injection flaws and vulnerabilities with SQLmap. Quickly exploit database vulnerabilities using this free online tool, no registration required."
category: common
keywords:
- SQL injection exploit
- database vulnerability scanner
- web application security
- SQLmap injection tool
- automated SQL injection
- penetration testing SQL
- command line SQL scanner
- web security testing tool
- common platform sqlmap
- SQL database attack
features:
- Detect SQL injection vulnerabilities in web applications
- Exploit SQL injection flaws automatically
- Support multiple database management systems
- Perform various injection techniques (e.g., boolean-based blind, time-based blind)
- Support HTTP authentication methods
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sqlmap

> Detect and exploit SQL injection flaws.
> More information: <https://sqlmap.org>.

- Run sqlmap against a single target URL:

`python sqlmap.py {{[-u|--url]}} "{{http://www.example.com/vuln.php?id=1}}"`

- Send data in a POST request (`--data` implies POST request):

`python sqlmap.py {{[-u|--url]}} "{{http://www.example.com/vuln.php}}" --data="{{id=1}}"`

- Change the parameter delimiter (& is the default):

`python sqlmap.py {{[-u|--url]}} "{{http://www.example.com/vuln.php}}" --data="{{query=foobar;id=1}}" --param-del="{{;}}"`

- Select a random `User-Agent` from `./txt/user-agents.txt` and use it:

`python sqlmap.py {{[-u|--url]}} "{{http://www.example.com/vuln.php}}" --random-agent`

- Provide user credentials for HTTP protocol authentication:

`python sqlmap.py {{[-u|--url]}} "{{http://www.example.com/vuln.php}}" --auth-type {{Basic}} --auth-cred "{{testuser:testpass}}"`
