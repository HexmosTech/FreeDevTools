---
title: "Gamma Correction - Adjust PNM Images | Free DevTools"
name: pnmgamma
path: /freedevtools/tldr/common/pnmgamma
canonical: "https://hexmos.com/freedevtools/tldr/common/pnmgamma/"
description: "Adjust gamma on PNM images with pnmgamma. Perform gamma correction, convert color spaces, and enhance image luminance easily. Free online tool, no registration required."
category: common
keywords:
- PNM image gamma correction
- PNM gamma adjust
- Gamma correction tool
- PNM image editor
- sRGB gamma conversion
- BT.709 gamma conversion
- Image luminance control
- PNM color space conversion
- Linux image processing
- Command-line gamma tool
features:
- Convert PNM images between color spaces
- Adjust gamma value for entire image
- Adjust gamma values per color component
- Convert images from BT.709 to linear or sRGB
- Convert images from linear or sRGB to BT.709
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pnmgamma

> Perform gamma correction on PNM images.
> More information: <https://netpbm.sourceforge.net/doc/pnmgamma.html>.

- Convert the image from BT.709 luminance to radiance or sRGB luminance:

`pnmgamma -{{bt709tolinear|bt709tosrgb}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Convert the image from radiance or sRGB luminance to BT.709 luminance:

`pnmgamma -{{lineartobt709|srgbtobt709}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Specify the gamma value used for the gamma transfer function:

`pnmgamma {{[-ga|-gamma]}} {{value}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Specify the gamma value used for the gamma transfer function per color component:

`pnmgamma {{[-rg|-rgamma]}} {{value}} {{[-gg|-ggamma]}} {{value}} {{[-bg|-bgamma]}} {{value}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`
