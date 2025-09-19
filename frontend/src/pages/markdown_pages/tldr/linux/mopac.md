---
title: "MOPAC Quantum Chemistry - Perform Semiempirical Calculations | Online Free DevTools by Hexmos"
name: mopac
path: /freedevtools/tldr/linux/mopac
canonical: "https://hexmos.com/freedevtools/tldr/linux/mopac/"
description: "Perform semiempirical quantum chemistry calculations with MOPAC.  This free online tool utilizes the NDDO approximation for molecular orbital calculations. No registration required."
category: linux
keywords:
  - mopac calculations
  - semiempirical quantum chemistry
  - molecular orbital calculations
  - NDDO approximation
  - computational chemistry
  - quantum chemistry software
  - mopac input file
  - .mop file processing
  - scientific computing
  - chemistry simulation
features:
  - Performs semiempirical quantum chemical calculations using the NDDO approximation.
  - Processes input files in .mop, .dat, and .arc formats.
  - Calculates molecular orbitals and energies.
  - Supports various Hamiltonians (e.g., PM7).
  - Outputs results to specified files.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mopac

> MOPAC (Molecular Orbital PACkage) is a semiempirical quantum chemistry program based on Dewar and Thiel's NDDO approximation.
> More information: <https://github.com/openmopac/mopac>.

- Perform calculations according to an input file (`.mop`, `.dat`, and `.arc`):

`mopac {{path/to/input_file}}`

- Minimal working example with HF that writes to the current directory and streams the output file:

`touch test.out; echo "PM7\n#comment\n\nH 0.95506 0.05781 -0.03133\nF 1.89426 0.05781 -0.03133" > test.mop; mopac test.mop & tail {{[-f|--follow]}} test.out`
