---
title: "Run Shadowsocks Client - SOCKS5 Proxy | Online Free DevTools by Hexmos"
name: ss-local
path: /freedevtools/tldr/common/ss-local
canonical: "https://hexmos.com/freedevtools/tldr/common/ss-local/"
description: "Run Shadowsocks client as a SOCKS5 proxy with ss-local. Secure your internet traffic and bypass censorship with ease. Free online tool, no registration required."
category: common
keywords:
- shadowsocks client
- socks5 proxy
- proxy client
- ss-local command
- shadowsocks libev
- secure internet traffic
- censorship bypass
- network proxy
- shadowsocks configuration
- proxy server
features:
- Create a SOCKS5 proxy using Shadowsocks protocol.
- Connect to a Shadowsocks server using specified parameters.
- Utilize configuration files for easy setup.
- Support plugin functionality for enhanced obfuscation.
- Enable TCP fast open for improved performance.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ss-local

> Run a Shadowsocks client as a SOCKS5 proxy.
> More information: <https://github.com/shadowsocks/shadowsocks-libev/blob/master/doc/ss-local.asciidoc>.

- Run a Shadowsocks proxy by specifying the host, server port, local port, password, and encryption method:

`ss-local -s {{host}} -p {{server_port}} -l {{local port}} -k {{password}} -m {{encrypt_method}}`

- Run a Shadowsocks proxy by specifying the configuration file:

`ss-local -c {{path/to/config/file.json}}`

- Use a plugin to run the proxy client:

`ss-local --plugin {{plugin_name}} --plugin-opts {{plugin_options}}`

- Enable TCP fast open:

`ss-local --fast-open`
