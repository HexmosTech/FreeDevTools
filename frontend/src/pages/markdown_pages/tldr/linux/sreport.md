---
title: "Generate sreport - Cluster Reports | Online Free DevTools by Hexmos"
name: sreport
path: /freedevtools/tldr/linux/sreport
canonical: "https://hexmos.com/freedevtools/tldr/linux/sreport/"
description: "Generate comprehensive cluster utilization reports with sreport.  Analyze job sizes and user activity quickly. Free online tool, no registration required."
category: linux
keywords:
  - slurm report generation
  - cluster utilization analysis
  - job accounting data
  - linux cluster management
  - sreport command
  - high-performance computing reports
  - slurm job analysis
  - user resource usage
  - system administration tools
  - slurm reporting tool
features:
  - Generate cluster utilization reports
  - Analyze job sizes and counts
  - Identify users with highest CPU time consumption
  - Show pipe-delimited parsable cluster data
  - Provide detailed reports on jobs, users, and clusters
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sreport

> Generate reports on jobs, users, and clusters from accounting data.
> More information: <https://slurm.schedmd.com/sreport.html>.

- Show pipe delimited cluster utilization data:

`sreport {{[-p|--parsable]}} cluster utilization`

- Show number of jobs run:

`sreport job sizes printjobcount`

- Show users with the highest CPU time use:

`sreport user topuser`
