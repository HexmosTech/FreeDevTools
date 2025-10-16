---
title: "Fuzz Websites - Discover Vulnerabilities with ffuf | Online Free DevTools by Hexmos"
name: ffuf
path: "/freedevtools/tldr/common/ffuf/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ffuf/"
description: "Discover website vulnerabilities with ffuf. Perform fast web fuzzing and enumerate directories using command-line. Free online tool, no registration required."
category: common
keywords:
- web fuzzing
- website vulnerability scanner
- directory enumeration
- ffuf command
- go fuzzer
- url fuzzing
- subdomain enumeration
- web server discovery
- web application security
- command-line fuzzer
features:
- Enumerate directories and files on web servers
- Fuzz subdomains to discover hidden web applications
- Customize requests with headers, methods, and data
- Filter results based on HTTP status codes
- Support multiple wordlists with different fuzzing modes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ffuf

> A fast web fuzzer written in Go.
> The `FUZZ` keyword is used as a placeholder. `ffuf` will try to hit the URL by replacing the word `FUZZ` with every word in the wordlist.
> More information: <https://github.com/ffuf/ffuf#usage>.

- Enumerate directories using [c]olored output and a [w]ordlist specifying a target [u]RL:

`ffuf -c -w {{path/to/wordlist.txt}} -u {{http://example.com/FUZZ}}`

- Enumerate webservers of subdomains by changing the position of the keyword:

`ffuf -w {{path/to/subdomains.txt}} -u {{http://FUZZ.example.com}}`

- Fuzz with specified [t]hreads (default: 40) and pro[x]ying the traffic and save [o]utput to a file:

`ffuf -o -w {{path/to/wordlist.txt}} -u {{http://example.com/FUZZ}} -t {{500}} -x {{http://127.0.0.1:8080}}`

- Fuzz a specific [H]eader ("Name: Value") and [m]atch HTTP status [c]odes:

`ffuf -w {{path/to/wordlist.txt}} -u {{http://example.com}} -H "{{Host: FUZZ}}" -mc {{200}}`

- Fuzz with specified HTTP method and [d]ata, while [f]iltering out comma separated status [c]odes:

`ffuf -w {{path/to/postdata.txt}} -X {{POST}} -d "{{username=admin\&password=FUZZ}}" -u {{http://example.com/login.php}} -fc {{401,403}}`

- Fuzz multiple positions with multiple wordlists using different modes:

`ffuf -w {{path/to/keys:KEY}} -w {{path/to/values:VALUE}} -mode {{pitchfork|clusterbomb}} -u {{http://example.com/id?KEY=VALUE}}`

- Proxy requests through a HTTP MITM pro[x]y (such as Burp Suite or `mitmproxy`):

`ffuf -w {{path/to/wordlist}} -x {{http://127.0.0.1:8080}} -u {{http://example.com/FUZZ}}`
