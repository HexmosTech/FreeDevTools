---
title: "Dolt Garbage Collection - Clean Unreferenced Data | Online Free DevTools by Hexmos"
name: dolt-gc
path: /freedevtools/tldr/dolt/dolt-gc
canonical: "https://hexmos.com/freedevtools/tldr/dolt/dolt-gc/"
description: "Clean unreferenced data with Dolt Garbage Collection. Optimize repository size and improve performance using efficient data management. Free online tool, no registration required."
category: common
keywords:
- Dolt garbage collection
- Dolt data cleanup
- Dolt repository optimization
- Dolt unreferenced data removal
- Dolt database maintenance
- Dolt storage management
- Dolt data pruning
- Dolt database garbage collector
- Dolt version control optimization
- Dolt CLI garbage collection
features:
- Remove unreferenced data from Dolt repositories
- Optimize repository storage space
- Improve Dolt database performance
- Perform shallow garbage collection for faster cleanup
- Streamline Dolt version control operations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dolt gc

> Search the repository for data that are no longer referenced and no longer needed.
> More information: <https://docs.dolthub.com/cli-reference/cli#dolt-gc>.

- Clean up unreferenced data from the repository:

`dolt gc`

- Initiate a faster but less thorough garbage collection process:

`dolt gc {{[-s|--shallow]}}`
