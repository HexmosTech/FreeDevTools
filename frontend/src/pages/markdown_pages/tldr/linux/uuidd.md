---
title: "Generate UUIDs - UUID Generator Command | Online Free DevTools by Hexmos"
name: uuidd
path: /freedevtools/tldr/linux/uuidd
canonical: "https://hexmos.com/freedevtools/tldr/linux/uuidd/"
description: "Generate UUIDs with the uuidd command-line tool.  Create random or time-based UUIDs easily and efficiently. Free online tool, no registration required."
category: linux
keywords:
  - uuid generator
  - uuid command
  - uuid random
  - uuid time-based
  - uuid linux
  - generate uuid
  - create uuid
  - uuid daemon
  - random uuid generator
  - time-based uuid generator
features:
  - Generates random UUIDs.
  - Generates a bulk number of random UUIDs.
  - Generates time-based UUIDs using system time and MAC address.
  - Provides command-line interface for easy use.
  - Offers flexibility with different UUID generation options.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# uuidd

> Daemon for generating UUIDs.
> More information: <https://manned.org/uuidd>.

- Generate a random UUID:

`uuidd {{[-r|--random]}}`

- Generate a bulk number of random UUIDs:

`uuidd {{[-r|--random]}} {{[-n|--uuids]}} {{number_of_uuids}}`

- Generate a time-based UUID, based on the current time and MAC address of the system:

`uuidd {{[-t|--time]}}`
