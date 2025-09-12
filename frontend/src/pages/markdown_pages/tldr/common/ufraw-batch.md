---
title: "Convert RAW Files - Image Converter | Free DevTools"
name: ufraw-batch
path: /freedevtools/tldr/common/ufraw-batch
canonical: "https://hexmos.com/freedevtools/tldr/common/ufraw-batch/"
description: "Convert RAW files with ufraw-batch image converter. Supports JPEG and PNG formats. Extract previews and resize images quickly. Free online tool, no registration required."
category: common
keywords:
- RAW image converter
- camera raw converter
- batch image converter
- raw to jpg
- raw to png
- ufraw-batch linux
- ufraw-batch command line
- image format conversion
- raw image processing
- camera raw processing
features:
- Convert RAW images to JPEG format
- Convert RAW images to PNG format
- Extract embedded preview images from RAW files
- Resize images to specified dimensions
- Batch process multiple RAW files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ufraw-batch

> Convert RAW files from cameras into standard image files.
> More information: <https://manned.org/ufraw-batch>.

- Simply convert RAW files to JPEG:

`ufraw-batch --out-type=jpg {{input_file(s)}}`

- Simply convert RAW files to PNG:

`ufraw-batch --out-type=png {{input_file(s)}}`

- Extract the preview image from the raw file:

`ufraw-batch --embedded-image {{input_file(s)}}`

- Save the file with size up to the given maximums MAX1 and MAX2:

`ufraw-batch --size=MAX1,MAX2 {{input_file(s)}}`
