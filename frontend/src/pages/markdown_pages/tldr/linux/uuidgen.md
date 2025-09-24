---
title: "UUID Generator - Generate Unique Identifiers | Online Free DevTools by Hexmos"
name: uuidgen
path: /freedevtools/tldr/linux/uuidgen
canonical: "https://hexmos.com/freedevtools/tldr/linux/uuidgen/"
description: "Generate UUIDs with UUID Generator. Create random, time-based, or namespace-based unique identifiers quickly. Free online tool, no registration required."
category: linux
keywords:
  - UUID generator
  - unique identifier generator
  - UUIDv4 generator
  - UUIDv1 generator
  - UUIDv5 generator
  - random UUID generator
  - time based UUID
  - sha1 UUID
  - command line UUID
  - uuidgen command
features:
  - Generate random UUIDs (v4)
  - Generate time-based UUIDs (v1)
  - Generate namespace-based UUIDs (v5)
  - Generate UUIDs using SHA1 hashing
  - Generate UUIDs with custom namespaces and names
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# uuidgen

> Generate unique identifiers (UUIDs).
> See also: `uuid`.
> More information: <https://manned.org/uuidgen>.

- Create a random UUIDv4:

`uuidgen {{[-r|--random]}}`

- Create a UUIDv1 based on the current time:

`uuidgen {{[-t|--time]}}`

- Create a UUIDv5 of the name with a specified namespace prefix:

`uuidgen {{[-s|--sha1]}} {{[-n|--namespace]}} {{@dns|@url|@oid|@x500}} {{[-N|--name]}} {{object_name}}`
