---
title: "GDAL DEM - Analyze Elevation Models | Online Free DevTools by Hexmos"
name: gdaldem
path: "/freedevtools/tldr/common/gdaldem/"
canonical: "https://hexmos.com/freedevtools/tldr/common/gdaldem/"
description: "Analyze digital elevation models with GDAL DEM. Generate hillshades, slopes, and aspects from raster data. Free online tool, no registration required."
category: common
keywords:
- DEM analysis
- digital elevation model
- raster processing
- terrain analysis
- GDAL DEM
- hillshade generation
- slope calculation
- aspect computation
- raster DEM
- elevation data
features:
- Generate hillshades from DEM data.
- Calculate slope gradients from elevation models.
- Compute aspect values for directional analysis.
- Process various DEM formats.
- Output processed DEMs in raster formats.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gdaldem

> Analyze and visualize digital elevation models (DEM).
> More information: <https://gdal.org/programs/gdaldem.html>.

- Compute the hillshade of a DEM:

`gdaldem hillshade {{path/to/input.tif}} {{path/to/output.tif}}`

- Compute the slope of a DEM:

`gdaldem slope {{path/to/input.tif}} {{path/to/output.tif}}`

- Compute the aspect of a DEM:

`gdaldem aspect {{path/to/input.tif}} {{path/to/output.tif}}`
