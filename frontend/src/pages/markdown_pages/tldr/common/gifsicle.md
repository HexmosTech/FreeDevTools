---
title: "Gifsicle - Create and Edit GIFs | Online Free DevTools by Hexmos"
name: gifsicle
path: /freedevtools/tldr/common/gifsicle
canonical: "https://hexmos.com/freedevtools/tldr/common/gifsicle/"
description: "Create and edit GIFs effortlessly with Gifsicle, a versatile GIF manipulation tool. Optimize animations, extract frames, and more. Free online tool, no registration required."
category: common
keywords:
- gif editor
- gif optimizer
- gif animation maker
- gif frame extractor
- gif resizer
- gif manipulation
- command line gif tool
- linux gif tool
- macos gif tool
- batch gif processing
features:
- Optimize GIFs for smaller file sizes.
- Extract individual frames from GIF animations.
- Create animated GIFs from multiple image files.
- Modify GIF frames with cropping, scaling, and rotation.
- Batch process multiple GIFs simultaneously.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gifsicle

> Create, edit, manipulate, and get information about GIF files.
> More information: <https://www.lcdf.org/gifsicle>.

- Optimize a GIF as a new file:

`gifsicle {{path/to/input.gif}} {{[-O|--optimize=]}}3 {{[-o|--output]}} {{path/to/output.gif}}`

- Use batch mode (modify each given file in place) and unoptimize a GIF:

`gifsicle {{[-b|--batch]}} {{path/to/input.gif}} {{[-U|--unoptimize]}}`

- Extract a frame from a GIF:

`gifsicle {{path/to/input.gif}} '#{{0}}' > {{path/to/first_frame.gif}}`

- Make a GIF animation from selected GIFs:

`gifsicle {{*.gif}} {{[-d|--delay]}} {{10}} {{[-l|--loop]}} > {{path/to/output.gif}}`

- Reduce file size using lossy compression:

`gifsicle {{[-b|--batch]}} {{path/to/input.gif}} {{[-O|--optimize=]}}3 --lossy={{100}} {{[-k|--colors]}} {{16}} {{[-f|--dither]}}`

- Delete the first 10 frames and all frames after frame 20 from a GIF:

`gifsicle {{[-b|--batch]}} {{path/to/input.gif}} --delete '#{{0-9}}' '#{{20-}}'`

- Modify all frames by cropping them to a rectangle, changing their scale, flipping them, and rotating them:

`gifsicle {{[-b|--batch]}} --crop {{starting_x}},{{starting_y}}+{{rect_width}}x{{rect_height}} --scale {{0.25}} --flip-horizontal --rotate-{{90|180|270}} {{path/to/input.gif}}`
