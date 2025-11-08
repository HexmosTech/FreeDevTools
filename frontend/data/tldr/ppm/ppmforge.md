---
title: "Generate Fractals with ppmforge - Image Creation | Online Free DevTools by Hexmos"
name: ppmforge
path: "/freedevtools/tldr/ppm/ppmforge/"
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmforge/"
description: "Generate fractal images instantly with ppmforge. Craft clouds, planets, and starry skies using command line options for image creation. Free online tool, no registration required."
category: common
keywords:
- fractal image generator
- ppmforge image creation
- ppm image generator
- cloud image generator
- planet image generator
- starry sky generator
- netpbm image tools
- command line image tool
- ppm fractal generator
- image rendering linux
features:
- Generate planet-like fractal images.
- Create cloud and night sky fractal images.
- Customize mesh size for fractal generation.
- Control the tilt of planet fractals.
- Adjust the light angle on planet fractals.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ppmforge

> Generate fractals resembling clouds, planets and starry skies.
> More information: <https://netpbm.sourceforge.net/doc/ppmforge.html>.

- Generate an image of a planet:

`ppmforge > {{path/to/image.ppm}}`

- Generate an image of clouds or the night sky:

`ppmforge -{{night|clouds}} > {{path/to/image.ppm}}`

- Use a custom mesh size and dimension for fractal generation and specify the dimensions of the output:

`ppmforge {{[-m|-mesh]}} {{512}} {{[-d|-dimension]}} {{2.5}} {{[-x|-xsize]}} {{1000}} {{[-y|-ysize]}} {{1000}} > {{path/to/image.ppm}}`

- Control the tilt and the angle from which the generated planet is illuminated:

`ppmforge {{[-t|-tilt]}} {{-15}} {{[-ho|-hour]}} {{12}} > {{path/to/image.ppm}}`
