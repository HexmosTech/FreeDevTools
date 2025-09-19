---
title: "Control Clock - Manage System Time | Online Free DevTools by Hexmos"
name: clock
path: /freedevtools/tldr/cisco-ios/clock
canonical: "https://hexmos.com/freedevtools/tldr/cisco-ios/clock/"
description: "Control Cisco IOS system time with Clock, a command for setting time and configuring clock synchronization. Free online tool, no registration required."
category: cisco-ios
keywords:
- cisco ios clock set
- cisco ios clock configuration
- cisco ios clock active prefer
- cisco ios clock passive prefer
- cisco ios clock show
- cisco ios time management
- cisco ios system time
- cisco ios privileged execution
- network time protocol cisco
- cisco ios command reference
features:
- Set the system clock with specific date and time.
- Auto negotiate clock mode for active clock preference.
- Auto negotiate clock mode for passive clock preference.
- Show the current clock mode negotiated by the firmware.
- Manage system time on Cisco IOS devices.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# clock

> Set the system clock.
> More information: <https://www.cisco.com/c/en/us/td/docs/ios/fundamentals/command/reference/cf_book/cf_c1.html#clock>.

- Enter privileged execution mode:

`clock set {{23}}:{{59}}:{{59}} {{31}} {{april}} {{2000}}`

- Auto negotiate with the far end of the link, defaulting to active-clock:

`clock active prefer`

- Auto negotiate with the far end of the link, defaulting to passive-clock:

`clock passive prefer`

- Show the current clock mode negotiated by the firmware:

`clock show interfaces`
