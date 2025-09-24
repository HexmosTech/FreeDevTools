---
title: "Generate Oil Painting - PAM Image to Oil | Online Free DevTools by Hexmos"
name: pamoil
path: /freedevtools/tldr/common/pamoil
canonical: "https://hexmos.com/freedevtools/tldr/common/pamoil/"
description: "Generate oil paintings with pamoil, converting PAM images into artistic renderings. Adjust pixel neighborhood for varied smearing effects. Free online tool, no registration required."
category: common
keywords:
- PAM image oil painting
- PAM to oil painting conversion
- Image processing linux
- Netpbm image manipulation
- Linux command line image editor
- PAM image editor
- Image filter tool
- Image smearing effect
- PAM image effects
- Pixel neighborhood processing
features:
- Convert PAM images to oil paintings.
- Adjust the level of the oil painting effect by specifying pixel neighborhood size.
- Apply image smearing effect to create an oil painting appearance.
- Process PAM images directly from the command line.
- Generate artistic renderings of images.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pamoil

> Turn a PAM image into an oil painting.
> More information: <https://netpbm.sourceforge.net/doc/pamoil.html>.

- Turn a PAM image into an oil painting:

`pamoil {{path/to/input_file.pam}} > {{path/to/output_file.pam}}`

- Consider a neighborhood of `n` pixels for the "smearing" effect:

`pamoil -n {{n}} {{path/to/input_file.pam}} > {{path/to/output_file.pam}}`
