---
title: "FIO - Control Disk I/O Performance | Online Free DevTools by Hexmos"
name: fio
path: "/freedevtools/tldr/common/fio/"
canonical: "https://hexmos.com/freedevtools/tldr/common/fio/"
description: "Control disk I/O performance with FIO. Analyze throughput and latency using customizable workloads for storage benchmarking. Free online tool, no registration required."
category: common
keywords:
- disk I/O tester
- storage benchmark tool
- performance analysis tool
- random read test
- sequential write test
- fio command line
- linux storage io
- block device benchmark
- iops measurement
- latency testing tool
features:
- Execute random and sequential I/O operations.
- Simulate various workload patterns.
- Measure disk throughput and latency.
- Generate detailed performance reports.
- Convert job files to command-line options.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fio

> Flexible I/O tester: do an I/O action spawning multiple threads or processes.
> More information: <https://fio.readthedocs.io/en/latest/fio_doc.html>.

- Test random reads:

`fio --filename={{path/to/file}} --direct=1 --rw=randread --bs=4k --ioengine=libaio --iodepth=256 --runtime=120 --numjobs=4 --time_based --group_reporting --name={{job_name}} --eta-newline=1 --readonly`

- Test sequential reads:

`fio --filename={{path/to/file}} --direct=1 --rw=read --bs=4k --ioengine=libaio --iodepth=256 --runtime=120 --numjobs=4 --time_based --group_reporting --name={{job_name}} --eta-newline=1 --readonly`

- Test random read/write:

`fio --filename={{path/to/file}} --direct=1 --rw=randrw --bs=4k --ioengine=libaio --iodepth=256 --runtime=120 --numjobs=4 --time_based --group_reporting --name={{job_name}} --eta-newline=1`

- Test with parameters from a job file:

`fio {{path/to/job_file}}`

- Convert a specific job file to command-line options:

`fio --showcmd {{path/to/job_file}}`
