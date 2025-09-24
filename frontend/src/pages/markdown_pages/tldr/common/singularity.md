---
title: "Singularity - Manage Containers | Online Free DevTools by Hexmos"
name: singularity
path: /freedevtools/tldr/common/singularity
canonical: "https://hexmos.com/freedevtools/tldr/common/singularity/"
description: "Manage Singularity containers with Singularity command. Build, run, and execute commands within containers effortlessly. Free online tool, no registration required."
category: common
keywords:
- singularity container management
- linux containerization
- singularity image building
- container runtime environment
- singularity shell access
- singularity exec command
- singularity recipe creation
- container image pull
- sylabs cloud containers
- containerized application deployment
features:
- Build singularity images from recipes
- Pull images from remote registries like Sylabs Cloud
- Execute commands inside a singularity container
- Start an interactive shell within a container
- Run the default script within a container image
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# singularity

> Manage Singularity containers and images.
> More information: <https://singularity-docs.readthedocs.io/en/latest/#commands>.

- Download a remote image from Sylabs Cloud:

`singularity pull --name {{image.sif}} {{library://godlovedc/funny/lolcow:latest}}`

- Rebuild a remote image using the latest Singularity image format:

`singularity build {{image.sif}} {{docker://godlovedc/lolcow}}`

- Start a container from an image and get a shell inside it:

`singularity shell {{image.sif}}`

- Start a container from an image and run a command:

`singularity exec {{image.sif}} {{command}}`

- Start a container from an image and execute the internal runscript:

`singularity run {{image.sif}}`

- Build a singularity image from a recipe file:

`sudo singularity build {{image.sif}} {{recipe}}`
