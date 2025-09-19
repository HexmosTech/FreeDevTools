---
title: "Reproject Image - GDAL Warp Reprojection | Online Free DevTools by Hexmos"
name: gdalwarp
path: /freedevtools/tldr/common/gdalwarp
canonical: "https://hexmos.com/freedevtools/tldr/common/gdalwarp/"
description: "Reproject images with GDAL Warp using various coordinate systems. Achieve accurate georeferencing and image transformation. Free online tool, no registration required."
category: common
keywords:
- raster reprojection
- image warping
- geospatial data transformation
- gdalwarp command
- tiff reprojection
- coordinate system conversion
- geoTIFF warping
- command-line image processing
- raster data manipulation
- geospatial command line tool
features:
- Reproject raster datasets to different spatial reference systems
- Crop raster datasets using specified bounding box coordinates
- Clip raster datasets based on vector polygon boundaries
- Transform images between coordinate systems losslessly
- Warp images using various resampling methods
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gdalwarp

> Image reprojection and warping utility.
> More information: <https://gdal.org/programs/gdalwarp.html>.

- Reproject a raster dataset:

`gdalwarp -t_srs {{EPSG:4326}} {{path/to/input.tif}} {{path/to/output.tif}}`

- Crop a raster dataset by using specific coordinates:

`gdalwarp -te {{min_x}} {{min_y}} {{max_x}} {{max_y}} -te_srs {{EPSG:4326}} {{path/to/input.tif}} {{path/to/output.tif}}`

- Crop a raster dataset using a vector layer:

`gdalwarp -cutline {{path/to/area_to_cut.geojson}} -crop_to_cutline {{path/to/input.tif}} {{path/to/output.tif}}`
