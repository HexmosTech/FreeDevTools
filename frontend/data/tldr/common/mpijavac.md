---
title: "Compile Java with mpijavac - MPI Compiler | Online Free DevTools by Hexmos"
name: mpijavac
path: "/freedevtools/tldr/common/mpijavac/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mpijavac/"
description: "Compile Java MPI applications with mpijavac. Streamline parallel computing development by using this compiler wrapper for Open MPI. Free online tool, no registration required."
category: common
keywords:
- MPI Java compiler
- Open MPI Java
- Java MPI compilation
- Parallel computing Java
- mpijavac command
- MPI application development
- Java compiler wrapper
- Linux MPI Java
- MacOS MPI Java
- Distributed computing Java
features:
- Compile Java source files for MPI applications.
- Specify application-specific classpaths for compilation.
- Display flags needed to build MPI Java applications.
- Show flags for compiling MPI Java applications.
- Output the full Java compiler command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mpijavac

> Open MPI compiler wrapper for Java.
> See also: `mpirun`.
> More information: <https://docs.open-mpi.org/en/main/features/java.html#building-java-mpi-applications>.

- Compile a Java source file:

`mpijavac {{path/to/source_file.java}}`

- Pass application-specific classpaths to compiler:

`mpijavac -cp {{path/to/my/app.jar}} {{path/to/source_file.java}}`

- Show the flags necessary to build MPI Java applications:

`mpijavac --showme`

- Show the flags necessary to compile MPI Java applications:

`mpijavac --showme:compile`

- Show full invoked Java compiler command line:

`mpijavac {{path/to/source_file.java}} --showme`
