---
title: "Generate PPM Image - Create CIE Color Chart | Free DevTools"
name: ppmcie
path: /freedevtools/tldr/ppm/ppmcie
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmcie/"
description: "Create PPM images from CIE color charts with ppmcie. Adjust color systems and illuminant locations. Free online tool, no registration required."
category: common
keywords:
- PPM image generator
- CIE color chart creator
- Image color system conversion
- PPM image REC709
- Color space transformation
- Command-line image tool
- ppmcie color calibration
- Maxwell triangle image
- Linux image processing
- Colorimetry tool
features:
- Generate PPM images of CIE color charts
- Specify different color systems for output
- Define illuminant locations in the chart
- Control dimming outside Maxwell triangle
- Create colorimetric visualizations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ppmcie

> Draw a CIE color chart as a PPM image.
> More information: <https://netpbm.sourceforge.net/doc/ppmcie.html>.

- Draw a CIE color chart using the REC709 color system as a PPM image:

`ppmcie > {{path/to/output.ppm}}`

- Specify the color system to be used:

`ppmcie -{{cie|ebu|hdtv|ntsc|smpte}} > {{path/to/output.ppm}}`

- Specify the location of the individual illuminants:

`ppmcie -{{red|green|blue}} {{xpos ypos}} > {{path/to/output.ppm}}`

- Do not dim the area outside the Maxwell triangle:

`ppmcie {{[-f|-full]}} > {{path/to/output.ppm}}`
