---
title: "Generate Tiles - gdal2tiles.py for Raster Data | Online Free DevTools by Hexmos"
name: gdal2tiles.py
path: /freedevtools/tldr/common/gdal2tiles-py
canonical: "https://hexmos-com/freedevtools/tldr/common/gdal2tiles-py/"
description: "Generate raster tiles with gdal2tiles.py for web mapping. Create TMS and XYZ tiles efficiently. Free online tool, no registration required."
category: common
keywords:
- raster tile generation
- TMS tile creation
- XYZ tile creation
- GDAL raster processing
- geospatial data tiles
- map tile generation
- gdal2tiles.py command
- raster data conversion
- georeferenced image tiles
- tile server preparation
features:
- Generate TMS tiles from raster datasets
- Create XYZ tiles from raster data
- Define zoom levels for tile generation
- Prepare raster data for web mapping applications
- Output tiles in a directory structure for easy deployment
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gdal2tiles.py

> Generate TMS or XYZ tiles for a raster dataset.
> More information: <https://gdal.org/programs/gdal2tiles.html>.

- Generate TMS tiles for the zoom levels 2 to 5 of a raster dataset:

`gdal2tiles.py --zoom 2-5 {{path/to/input.tif}} {{path/to/output_directory}}`

- Generate XYZ tiles for the zoom levels 2 to 5 of a raster dataset:

`gdal2tiles.py --zoom 2-5 --xyz {{path/to/input.tif}} {{path/to/output_directory}}`
