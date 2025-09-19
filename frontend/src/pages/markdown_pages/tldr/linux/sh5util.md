---
title: "HDF5 Merge Tool - Merge HDF5 Files | Online Free DevTools by Hexmos"
name: sh5util
path: /freedevtools/tldr/linux/sh5util
canonical: "https://hexmos.com/freedevtools/tldr/linux/sh5util/"
description: "Merge HDF5 files efficiently with sh5util. Aggregate data from multiple HDF5 files into a single file. Free online tool, no registration required."
category: linux
keywords:
- HDF5 merge
- HDF5 combine
- HDF5 data aggregation
- Slurm HDF5
- sacct_gather_profile HDF5
- HDF5 extraction
- Linux HDF5 merge
- Cluster data HDF5
- Job profiling HDF5
- sh5util command
features:
- Merge HDF5 files produced by sacct_gather_profile plugin
- Extract data series from merged HDF5 files
- Extract specific data items from all nodes in a merged job file
- Aggregate HDF5 data from multiple nodes
- Supports job ID and step ID specification
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sh5util

> Merge HDF5 files produced by the `sacct_gather_profile` plugin.
> More information: <https://slurm.schedmd.com/sh5util.html>.

- Merge HDF5 files produced on each allocated node for the specified job or step:

`sh5util {{[-j|--jobs]}} {{job_id|job_id.step_id}}`

- Extract one or more data series from a merged job file:

`sh5util {{[-j|--jobs]}} {{job_id|job_id.step_id}} {{[-E|--extract]}} {{[-i|--input]}} {{path/to/file.h5}} {{[-s|--series]}} {{Energy|Filesystem|Network|Task}}`

- Extract one data item from all nodes in a merged job file:

`sh5util {{[-j|--jobs]}} {{job_id|job_id.step_id}} {{[-I|--item-extract]}} {{[-s|--series]}} {{Energy|Filesystem|Network|Task}} {{[-d|--data]}} {{data_item}}`
