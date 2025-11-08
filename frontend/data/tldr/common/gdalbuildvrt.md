---
title: "Create VRT Datasets - Build Geospatial Mosaics | Online Free DevTools by Hexmos"
name: gdalbuildvrt
path: "/freedevtools/tldr/common/gdalbuildvrt/"
canonical: "https://hexmos.com/freedevtools/tldr/common/gdalbuildvrt/"
description: "Build geospatial mosaics with gdalbuildvrt. Create Virtual Raster Datasets effortlessly. Transform image collections into seamless, accessible layers. Free online tool, no registration required."
category: common
keywords:
- VRT dataset builder
- Geospatial mosaic creation
- Raster image processing
- gdalbuildvrt command
- Virtual dataset generation
- GIS data management
- TIFF mosaic generator
- Image stitching tool
- Command-line raster processing
- GDAL VRT builder
features:
- Create virtual raster datasets from multiple input files
- Generate mosaics from directories of raster images
- Support input file lists for flexible data selection
- Define no-data values and background colors for virtual datasets
- Build multi-band RGB mosaics from single-band inputs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gdalbuildvrt

> Build Virtual Datasets from a list of existing datasets.
> More information: <https://gdal.org/programs/gdalbuildvrt.html>.

- Make a virtual mosaic from all TIFF files contained in a directory:

`gdalbuildvrt {{path/to/output.vrt}} {{path/to/input_directory/*.tif}}`

- Make a virtual mosaic from files whose name is specified in a text file:

`gdalbuildvrt -input_file_list {{path/to/list.txt}} {{path/to/output.vrt}}`

- Make an RGB virtual mosaic from 3 single-band input files:

`gdalbuildvrt -separate {{path/to/rgb.vrt}} {{path/to/red.tif}} {{path/to/green.tif}} {{path/to/blue.tif}}`

- Make a virtual mosaic with blue background color (RGB: 0 0 255):

`gdalbuildvrt -hidenodata -vrtnodata "{{0 0 255}}" {{path/to/output.vrt}} {{path/to/input_directory/*.tif}}`
