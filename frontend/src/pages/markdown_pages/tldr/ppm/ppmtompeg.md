---
title: "Encode MPEG-1 Streams - Generate MPEG | Online Free DevTools by Hexmos"
name: ppmtompeg
path: /freedevtools/tldr/ppm/ppmtompeg
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmtompeg/"
description: "Generate MPEG-1 streams with ppmtompeg. Easily encode images into MPEG videos using specified parameters. Free online tool, no registration required."
category: common
keywords:
- PPM to MPEG encoder
- MPEG-1 stream generator
- Image to MPEG converter
- PPM video encoder
- Netpbm MPEG tool
- Linux MPEG encoding
- MacOS MPEG encoding
- Command line video encoder
- Parameterized MPEG encoding
- Batch MPEG encoding
features:
- Encode images into MPEG-1 video streams
- Utilize parameter files for encoding configuration
- Encode specific GOP numbers
- Define the first and last frame for encoding
- Combine multiple MPEG frames into a single stream
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ppmtompeg

> Encode an MPEG-1 stream.
> More information: <https://netpbm.sourceforge.net/doc/ppmtompeg.html>.

- Produce an MPEG-1 stream using the parameter file to specify inputs and outputs:

`ppmtompeg {{path/to/parameter_file}}`

- Encode the GOP with the specified number only:

`ppmtompeg {{[-g|-gop]}} {{gop_num}} {{path/to/parameter_file}}`

- Specify the first and last frame to encode:

`ppmtompeg {{[-fr|-frames]}} {{first_frame}} {{last_frame}} {{path/to/parameter_file}}`

- Combine multiple MPEG frames into a single MPEG-1 stream:

`ppmtompeg -combine_frames {{path/to/parameter_file}}`
