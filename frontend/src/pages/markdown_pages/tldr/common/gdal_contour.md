---
title: "Create Contours - Generate Elevation Data with GDAL Contour | Online Free DevTools by Hexmos"
name: gdal_contour
path: /freedevtools/tldr/common/gdal_contour
canonical: "https://hexmos.com/freedevtools/tldr/common/gdal_contour/"
description: "Generate elevation data contours with GDAL Contour. Extract contour lines and polygons from DEM. Free online tool, no registration required."
category: common
keywords:
- DEM contour generation
- GDAL contour extraction
- Elevation data processing
- Raster to vector conversion
- Geographic data analysis
- GDAL command line tool
- Geotiff contour creation
- Terrain modeling tool
- Digital elevation model processing
- Geospatial data manipulation
features:
- Generate contour lines from raster data.
- Create contour polygons from elevation models.
- Specify contour interval for data extraction.
- Assign elevation values to contour lines.
- Convert raster data to vector format.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gdal_contour

> Create contour lines and polygons from a digital elevation model.
> More information: <https://gdal.org/programs/gdal_contour.html>.

- Create a vector dataset with contour lines spread over an 100-meter [i]nterval while [a]ttributing the elevation property as "ele":

`gdal_contour -a {{ele}} -i {{100.0}} {{path/to/input.tif}} {{path/to/output.gpkg}}`

- Create a vector dataset with [p]olygons spread over an 100-meter [i]nterval:

`gdal_contour -i {{100.0}} -p {{path/to/input.tif}} {{path/to/output.gpkg}}`
