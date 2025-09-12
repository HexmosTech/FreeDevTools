---
title: "GDAL Translate - Convert Raster Data | Free DevTools"
name: gdal_translate
path: /freedevtools/tldr/common/gdal_translate
canonical: "https://hexmos.com/freedevtools/tldr/common/gdal_translate/"
description: "Convert raster data with GDAL Translate. Change formats, reproject, and resize geospatial images. Free online tool, no registration required."
category: common
keywords:
- raster data converter
- GeoTIFF converter
- GDAL translate raster
- geospatial data conversion
- COG converter
- raster reprojection
- image format conversion
- gdal command line
- spatial data processing
- raster resizing
features:
- Convert raster data between different formats.
- Assign a projection to a raster dataset.
- Reduce the size of raster datasets.
- Convert GeoTIFF to Cloud Optimized GeoTIFF (COG).
- Change image compression methods.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gdal_translate

> Convert raster data between different formats.
> More information: <https://gdal.org/programs/gdal_translate.html>.

- Convert a raster dataset to JPEG format:

`gdal_translate -of {{JPEG}} {{path/to/input.tif}} {{path/to/output.jpeg}}`

- Assign a projection to a raster dataset:

`gdal_translate -a_srs {{EPSG:4326}} {{path/to/input.tif}} {{path/to/output.tif}}`

- Reduce the size of a raster dataset to a specific fraction:

`gdal_translate -outsize {{40%}} {{40%}} {{path/to/input.tif}} {{path/to/output.tif}}`

- Convert a GeoTiff to a Cloud Optimized GeoTiff:

`gdal_translate {{path/to/input.tif}} {{path/to/output.tif}} -of COG -co COMPRESS=LZW`
