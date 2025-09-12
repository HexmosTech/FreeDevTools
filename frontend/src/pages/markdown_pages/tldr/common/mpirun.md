---
title: "MPI Run - Execute Parallel Jobs | Free DevTools"
name: mpirun
path: /freedevtools/tldr/common/mpirun
canonical: "https://hexmos.com/freedevtools/tldr/common/mpirun/"
description: "Execute MPI jobs efficiently with MPI Run. Launch parallel processes and manage resources for distributed computing applications. Free online tool, no registration required."
category: common
keywords:
- MPI process execution
- Open MPI parallel jobs
- distributed computing commands
- MPI program launcher
- parallel processing linux
- mpirun command line
- MPI resource management
- high performance computing MPI
- cluster job execution
- scientific computing tools
features:
- Launch MPI applications with specified number of processes
- Execute parallel jobs across multiple nodes
- Oversubscribe resources to run more processes than available cores
- Facilitate distributed computing tasks in Open MPI environments
- Manage and control MPI program execution
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mpirun

> Execute serial and parallel jobs in Open MPI.
> See also: `mpic++`.
> More information: <https://docs.open-mpi.org/en/main/man-openmpi/man1/mpirun.1.html>.

- Execute an Open MPI program:

`mpirun {{path/to/executable}}`

- Execute an Open MPI program with `n` parallel processes:

`mpirun -n {{n}} {{path/to/executable}}`

- Allow more processes than available physical cores:

`mpirun -oversubscribe {{path/to/executable}}`
