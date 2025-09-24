---
title: "Generate UUIDs - Create Unique Identifiers | Online Free DevTools by Hexmos"
name: uuid
path: /freedevtools/tldr/linux/uuid
canonical: "https://hexmos.com/freedevtools/tldr/linux/uuid/"
description: "Generate Universally Unique Identifiers (UUIDs) with this command-line tool.  Create UUID versions 1, 4, and 5, specify formats, and decode existing UUIDs. Free online tool, no registration required."
category: linux
keywords:
  - uuid generator
  - uuid v4 generator
  - uuid v5 generator
  - uuid decoder
  - command line uuid
  - uuid generation tool
  - uuid linux
  - uuid mac
  - generate unique id
  - unique identifier generator
features:
  - Generate UUID version 1 identifiers.
  - Generate UUID version 4 identifiers.
  - Generate multiple UUID version 4 identifiers at once.
  - Specify the output format (BIN, STR, SIV) for generated UUIDs.
  - Decode existing UUIDs.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# uuid

> Generate and decode Universally Unique Identifiers (UUID).
> See also: `uuidgen`.
> More information: <https://manned.org/uuid>.

- Generate a UUIDv1 (based on time and system's hardware address, if present):

`uuid`

- Generate a UUIDv4 (based on random data):

`uuid -v {{4}}`

- Generate multiple UUIDv4 identifiers at once:

`uuid -v {{4}} -n {{number_of_uuids}}`

- Generate a UUIDv4 and specify the output format:

`uuid -v {{4}} -F {{BIN|STR|SIV}}`

- Generate a UUIDv4 and write the output to a file:

`uuid -v {{4}} -o {{path/to/file}}`

- Generate a UUIDv5 (based on the supplied object name) with a specified namespace prefix:

`uuid -v {{5}} ns:{{DNS|URL|OID|X500}} {{object_name}}`

- Decode a given UUID:

`uuid -d {{uuid}}`
