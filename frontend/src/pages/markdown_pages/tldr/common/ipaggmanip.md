---
title: "IP Aggregation Manipulation - Control Aggregate Stats | Free DevTools"
name: ipaggmanip
path: "/freedevtools/tldr/common/ipaggmanip"
canonical: "https://hexmos.com/freedevtools/tldr/common/ipaggmanip/"
description: "Control IP aggregation data with IP Aggregation Manipulation. Efficiently manipulate, filter, and analyze network data. Free online tool, no registration required."
category: common
keywords:
- IP aggregation manipulation
- aggregate statistics tool
- network data manipulation
- IP address aggregation
- data summarization Linux
- packet analysis tool
- traffic analysis tool
- network statistics Linux
- aggregate data filter
- IP address grouping
features:
- Combine aggregate labels based on high-order bits
- Remove labels below a specified byte count threshold
- Output a random sample of filtered labels
- Posterize counts to binary (0 or 1)
- Filter network data efficiently
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ipaggmanip

> Manipulate aggregate statistics produced by `ipaggcreate`.
> More information: <https://manned.org/ipaggmanip>.

- Combine labels equal in their high-order bits:

`ipaggmanip {{[-p|--prefix]}} {{16}} {{path/to/file}}`

- Remove labels with a count smaller than a given number of bytes and output a random sample of such labels:

`ipaggmanip --cut-smaller {{100}} --cull-labels {{5}} {{path/to/file}}`

- Replace each label's count with 1 if it is non-zero:

`ipaggmanip {{[-P|--posterize]}} {{path/to/file}}`
