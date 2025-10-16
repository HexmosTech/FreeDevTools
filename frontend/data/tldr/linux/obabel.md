---
title: "obabel Converter - Translate Chemistry Data | Online Free DevTools by Hexmos"
name: obabel
path: "/freedevtools/tldr/linux/obabel/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/obabel/"
description: "Translate chemistry data with obabel, converting between various formats like .mol, SMILES, and XYZ coordinates. Generate images and 3D models. Free online tool, no registration required."
category: linux
keywords:
  - mol file converter
  - smiles converter
  - xyz converter
  - chemistry data translator
  - chemical structure converter
  - molecule visualization
  - 3D molecule generator
  - chemical file conversion
  - openbabel command line
  - scientific data processing
features:
  - Convert .mol files to XYZ coordinates.
  - Convert SMILES strings to images.
  - Generate 3D .mol files from SMILES strings.
  - Create images from multiple chemical file inputs.
  - Translate between various chemistry data formats.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# obabel

> Translate chemistry-related data.
> More information: <https://open-babel.readthedocs.io/en/latest/Command-line_tools/babel.html>.

- Convert a .mol file to XYZ coordinates:

`obabel {{path/to/file.mol}} -O {{path/to/output_file.xyz}}`

- Convert a SMILES string to a 500x500 picture:

`obabel -:"{{SMILES}}" -O {{path/to/output_file.png}} -xp 500`

- Convert a file of SMILES string to separate 3D .mol files:

`obabel {{path/to/file.smi}} -O {{path/to/output_file.mol}} --gen3D -m`

- Render multiple inputs into one picture:

`obabel {{path/to/file1 path/to/file2 ...}} -O {{path/to/output_file.png}}`
