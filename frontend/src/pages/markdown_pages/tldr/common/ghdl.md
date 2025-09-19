---
title: "VHDL Simulator - Simulate VHDL Designs | Online Free DevTools by Hexmos"
name: ghdl
path: /freedevtools/tldr/common/ghdl
canonical: "https://hexmos.com/freedevtools/tldr/common/ghdl/"
description: "Simulate VHDL designs with GHDL. Analyze, elaborate, and run VHDL code easily using the command line. Free online tool, no registration required."
category: common
keywords:
- VHDL simulator
- VHDL design simulation
- GHDL VHDL compiler
- VHDL code analysis
- VHDL waveform generation
- VHDL syntax checker
- VHDL object file creation
- open source VHDL tool
- VHDL development tool
- cross-platform VHDL
features:
- Simulate VHDL designs from the command line
- Analyze VHDL code for syntax and semantic errors
- Elaborate VHDL designs into executable models
- Generate waveform files for debugging
- Support multiple VHDL versions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ghdl

> Open-source simulator for the VHDL language.
> More information: <https://ghdl.github.io/ghdl/>.

- Analyze a VHDL source file and produce an object file:

`ghdl -a {{filename.vhdl}}`

- Elaborate a design (where `design` is the name of a configuration unit, entity unit or architecture unit):

`ghdl -e {{design}}`

- Run an elaborated design:

`ghdl -r {{design}}`

- Run an elaborated design and dump output to a waveform file:

`ghdl -r {{design}} --wave={{output.ghw}}`

- Check the syntax of a VHDL source file:

`ghdl -s {{filename.vhdl}}`

- Display help:

`ghdl --help`
