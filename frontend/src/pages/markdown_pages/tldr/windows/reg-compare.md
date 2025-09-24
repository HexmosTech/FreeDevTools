---
title: "Reg Compare - Compare Registry Keys | Online Free DevTools by Hexmos"
name: reg-compare
path: /freedevtools/tldr/windows/reg-compare
canonical: "https://hexmos.com/freedevtools/tldr/windows/reg-compare/"
description: "Compare Registry Keys with Reg Compare, a powerful Windows command line tool. Analyze registry differences and matches effortlessly. Free online tool, no registration required."
category: windows
keywords:
- windows registry comparison
- registry key compare
- reg compare windows
- windows registry difference checker
- registry analysis tool
- command line registry tool
- windows registry command
- registry key comparison windows
- reg compare tool
- windows reg compare
features:
- Compare all values under specified registry keys
- Compare a specific value under two registry keys
- Compare all subkeys and values for two registry keys
- Output only the matches between specified keys
- Output the differences and matches between specified keys
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# reg compare

> Compare keys and their values in the registry.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/reg-compare>.

- Compare all values under a specific key with another key:

`reg compare {{key_name1}} {{key_name2}}`

- Compare a specific [v]alue under two keys:

`reg compare {{key_name1}} {{key_name2}} /v {{value}}`

- Compare all [s]ubkeys and values for two keys:

`reg compare {{key_name1}} {{key_name2}} /s`

- Only [o]utput the matches ([s]ame) between the specified keys:

`reg compare {{key_name1}} {{key_name2}} /os`

- [o]utput the differences and matches ([a]ll) between the specified keys:

`reg compare {{key_name1}} {{key_name2}} /oa`

- Compare two keys, [o]utputting [n]othing:

`reg compare {{key_name1}} {{key_name2}} /on`
