---
title: "Upscale Images - waifu2x-ncnn-vulkan | Online Free DevTools by Hexmos"
name: waifu2x-ncnn-vulkan
path: /freedevtools/tldr/common/waifu2x-ncnn-vulkan
canonical: "https://hexmos.com/freedevtools/tldr/common/waifu2x-ncnn-vulkan/"
description: "Upscale images easily with waifu2x-ncnn-vulkan. Enhance image resolution using NCNN neural network framework. Free online tool, no registration required."
category: common
keywords:
- manga image upscaler
- anime image upscaler
- image resolution enhancer
- NCNN image processing
- Vulkan image processing
- waifu2x image upscaling
- image denoise tool
- command line image upscaler
- high resolution image generator
- batch image upscaling
features:
- Upscale manga and anime style images
- Denoise images while upscaling
- Support multiple image formats (JPG, PNG, WEBP)
- Process images using NCNN neural network
- Enhance image resolution with custom scaling factors
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# waifu2x-ncnn-vulkan

> Image upscaler for manga/anime-style images using NCNN neural network framework.
> More information: <https://github.com/nihui/waifu2x-ncnn-vulkan>.

- Upscale an image:

`waifu2x-ncnn-vulkan -i {{path/to/input_file}} -o {{path/to/output_file}}`

- Upscale an image by a custom scale factor and denoise it:

`waifu2x-ncnn-vulkan -i {{path/to/input_file}} -o {{path/to/output_file}} -s {{1|2|4|8|16|32}} -n {{-1|0|1|2|3}}`

- Save the upscaled image in a specific format:

`waifu2x-ncnn-vulkan -i {{path/to/input_file}} -o {{path/to/output_file}} -f {{jpg|png|webp}}`
