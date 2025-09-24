---
title: "Bluebuild - Generate Container Images | Online Free DevTools by Hexmos"
name: bluebuild
path: /freedevtools/tldr/linux/bluebuild
canonical: "https://hexmos.com/freedevtools/tldr/linux/bluebuild/"
description: "Generate container images with Bluebuild. Build Containerfiles, validate recipes, and create custom ISOs from your recipe.yml. Free online tool, no registration required."
category: linux
keywords:
- Container image builder
- Linux container tools
- Recipe based image generation
- Bluebuild Containerfile creator
- YAML recipe validation
- ISO image generator
- Container development Linux
- Custom Linux images
- Containerfile automation
- Bluebuild image tooling
features:
- Build container images from YAML recipes
- Validate Containerfile recipes before building
- Generate Containerfiles from recipes
- Generate ISO images directly from recipes
- Automate container image creation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bluebuild

> Build Containerfiles and custom images based on your `recipe.yml`.
> More information: <https://github.com/blue-build/cli>.

- Build a recipe:

`bluebuild build {{path/to/recipe.yml}}`

- Validate a recipe:

`bluebuild validate {{path/to/recipe.yml}}`

- Generate a Containerfile:

`bluebuild generate {{[-o|--output]}} {{Containerfile}} {{path/to/recipe.yml}}`

- Generate an ISO from a recipe:

`bluebuild generate-iso --output-dir {{path/to/output_directory}} --iso-name {{iso_name.iso}} recipe {{path/to/recipe.yml}}`

- Display help:

`bluebuild {{[-h|--help]}}`
