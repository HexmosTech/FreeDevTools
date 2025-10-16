---
title: "SVGR - Generate React Components from SVG | Online Free DevTools by Hexmos"
name: svgr
path: "/freedevtools/tldr/common/svgr/"
canonical: "https://hexmos.com/freedevtools/tldr/common/svgr/"
description: "Generate React components effortlessly with SVGR. Convert SVG files to React code, customize output, and optimize integration. Free online tool, no registration required."
category: common
keywords:
- SVG to React component
- SVG React converter
- React SVG transformation
- SVG component generator
- React component from SVG online
- SVG to JSX converter
- React SVG TypeScript
- Command line SVG converter
- SVG code generator
- SVG React automatic
features:
- Convert SVG files into React components.
- Generate TypeScript React components from SVG.
- Customize filename case during conversion.
- Output React components to a specified directory.
- Skip existing files during batch conversion.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# svgr

> Transform SVGs into React components.
> More information: <https://react-svgr.com>.

- Transform a SVG file into a React component to `stdout`:

`svgr -- {{path/to/file.svg}}`

- Transform a SVG file into a React component using TypeScript to `stdout`:

`svgr --typescript -- {{path/to/file.svg}}`

- Transform a SVG file into a React component using JSX transform to `stdout`:

`svgr --jsx-runtime automatic -- {{path/to/file.svg}}`

- Transform all SVG files from a directory to React components into a specific directory:

`svgr --out-dir {{path/to/output_directory}} {{path/to/input_directory}}`

- Transform all SVG files from a directory to React components into a specific directory skipping already transformed files:

`svgr --out-dir {{path/to/output_directory}} --ignore-existing {{path/to/input_directory}}`

- Transform all SVG files from a directory to React components into a specific directory using a specific case for filenames:

`svgr --out-dir {{path/to/output_directory}} --filename-case {{camel|kebab|pascal}} {{path/to/input_directory}}`

- Transform all SVG files from a directory to React components into a specific directory without generating an index file:

`svgr --out-dir {{path/to/output_directory}} --no-index {{path/to/input_directory}}`
