---
title: "Generate Raster Overviews - gdaladdo | Online Free DevTools by Hexmos"
name: gdaladdo
path: "/freedevtools/tldr/common/gdaladdo/"
canonical: "https://hexmos.com/freedevtools/tldr/common/gdaladdo/"
description: "Generate raster image overviews with gdaladdo. Resample raster data for faster viewing and analysis. Free online tool, no registration required."
category: common
keywords:
- raster image overview
- gdaladdo overview generator
- geotiff pyramid creation
- raster resampling
- image downsampling
- gdaladdo command line
- raster data processing
- geotiff optimization
- raster image tiling
- linux gdaladdo
features:
- Build overview images for raster datasets
- Resample raster data using various methods
- Optimize raster data for faster viewing
- Create pyramid levels for efficient zooming
- Support multiple raster data formats like GeoTIFF
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gdaladdo

> Build overview images of raster datasets.
> More information: <https://gdal.org/programs/gdaladdo.html>.

- Build overview images of a raster dataset using the "average" [r]esampling method:

`gdaladdo -r average {{path/to/input.tif}}`
