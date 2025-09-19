---
title: "Merge Vector Datasets - with ogrmerge.py | Online Free DevTools by Hexmos"
name: ogrmerge.py
path: /freedevtools/tldr/common/ogrmerge.py
canonical: "https://hexmos.com/freedevtools/tldr/common/ogrmerge.py/"
description: "Merge vector datasets effortlessly with ogrmerge.py. Combine multiple geospatial data files into a single, unified dataset. Free online tool, no registration required."
category: common
keywords:
- vector dataset merge
- geospatial data combination
- shapefile merge
- geojson merge
- gpkg merge
- ogr2ogr merge
- command line data processing
- geospatial data integration
- spatial data transformation
- gis data merge
features:
- Merge multiple vector datasets into a single output file
- Create GeoPackage files with individual layers for each input
- Generate Virtual Datasources (VRT) for GeoJSON datasets
- Concatenate datasets and preserve source information
- Store source dataset names as attributes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ogrmerge.py

> Merge several vector datasets into a single one.
> More information: <https://gdal.org/programs/ogrmerge.html>.

- Create a GeoPackage with a layer for each input Shapefile:

`ogrmerge.py -f {{GPKG}} -o {{path/to/output.gpkg}} {{path/to/input1.shp path/to/input2.shp ...}}`

- Create a virtual datasource (VRT) with a layer for each input GeoJSON:

`ogrmerge.py -f {{VRT}} -o {{path/to/output.vrt}} {{path/to/input1.geojson path/to/input2.geojson ...}}`

- Concatenate two vector datasets and store source name of dataset in attribute 'source_name':

`ogrmerge.py -single -f {{GeoJSON}} -o {{path/to/output.geojson}} -src_layer_field_name country {{source_name}} {{path/to/input1.shp path/to/input2.shp ...}}`
