---
title: "PPM Image Draw - Create Images with Script | Online Free DevTools by Hexmos"
name: ppmdraw
path: /freedevtools/tldr/ppm/ppmdraw
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmdraw/"
description: "Create images with PPM Image Draw using custom scripts to add lines, text and shapes. Generate customized images using scripting. Free online tool, no registration required."
category: common
keywords:
- ppm image editor
- ppm image draw script
- image creation command line
- ppm image manipulation
- netpbm ppmdraw
- image scripting linux
- ppm text overlay
- draw lines on ppm
- ppm image generator
- ppm scripting tool
features:
- Draw lines and shapes on PPM images
- Add text overlays to PPM images
- Execute custom scripts for image manipulation
- Automate image creation with scripting
- Generate images directly from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ppmdraw

> Draw lines, text and more on a PPM image by executing a script.
> Documentation on the utilized scripting language can be found by following the link below.
> More information: <https://netpbm.sourceforge.net/doc/ppmdraw.html>.

- Draw on the specified PPM image by executing the supplied script:

`ppmdraw -script '{{setpos 50 50; text_here "hello!"; }}' {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Draw on the specified PPM image by executing the script in the specified file:

`ppmdraw -scriptfile {{path/to/script}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`
