---
title: "Discover SMB Shares - Scan Network SMB with nmblookup | Free DevTools"
name: nmblookup
path: /freedevtools/tldr/common/nmblookup
canonical: "https://hexmos.com/freedevtools/tldr/common/nmblookup/"
description: "Discover SMB shares with nmblookup. Find SMB servers, troubleshoot network connections and verify NetBIOS names. Free online tool, no registration required."
category: common
keywords:
- SMB shares discovery
- Network share scanning
- NetBIOS name lookup
- Samba server discovery
- Windows network browsing
- Linux network shares
- MacOS network browsing
- SMB network troubleshooting
- Network connectivity test
- nmblookup command line
features:
- Discover SMB shares on a network.
- Resolve NetBIOS names to IP addresses.
- Identify SMB servers in the local network.
- Find Samba servers and their services.
- Check network connectivity for SMB shares.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nmblookup

> Discover SMB shares.
> More information: <https://www.samba.org/samba/docs/current/man-html/nmblookup.1.html>.

- Find hosts in the local network with SMB shares:

`nmblookup {{[-S|--status]}} '*'`

- Find hosts in the local network with SMB shares run by SAMBA:

`nmblookup {{[-S|--status]}} __SAMBA__`
