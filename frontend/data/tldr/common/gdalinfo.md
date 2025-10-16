---
title: "GDAL Info - Analyze Raster Data | Online Free DevTools by Hexmos"
name: gdalinfo
path: "/freedevtools/tldr/common/gdalinfo/"
canonical: "https://hexmos.com/freedevtools/tldr/common/gdalinfo/"
description: "Analyze raster data with GDAL Info, revealing metadata and properties. Extract histograms, format details, and WMS information effortlessly. Free online tool, no registration required."
category: common
keywords:
- GDAL raster analysis
- geospatial data inspection
- raster format metadata
- WMS service information
- GDAL command-line utility
- image data properties
- raster histogram extraction
- geospatial data analysis linux
- raster data processing common
- GDAL info tool
features:
- Display comprehensive raster dataset information
- Extract and visualize raster histogram values
- List supported GDAL raster formats
- Retrieve metadata in JSON format
- Analyze Web Map Service (WMS) datasets
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gdalinfo

> List various information about a GDAL supported raster dataset.
> More information: <https://gdal.org/programs/gdalinfo.html>.

- List all supported raster formats:

`gdalinfo --formats`

- List information about a specific raster dataset:

`gdalinfo {{path/to/input.tif}}`

- List information about a specific raster dataset in JSON format:

`gdalinfo -json {{path/to/input.tif}}`

- Show histogram values of a specific raster dataset:

`gdalinfo -hist {{path/to/input.tif}}`

- List information about a Web Map Service (WMS):

`gdalinfo WMS:{{https://services.meggsimum.de/geoserver/ows}}`

- List information about a specific dataset of a Web Map Service (WMS):

`gdalinfo WMS:{{https://services.meggsimum.de/geoserver/ows}} -sd {{4}}`
