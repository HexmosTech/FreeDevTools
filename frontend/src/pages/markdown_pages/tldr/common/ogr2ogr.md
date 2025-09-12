---
title: "Convert Geospatial Data with ogr2ogr | Free DevTools"
name: ogr2ogr
path: /freedevtools/tldr/common/ogr2ogr
canonical: "https://hexmos.com/freedevtools/tldr/common/ogr2ogr/"
description: "Convert geospatial data formats with ogr2ogr. Transform shapefiles, GeoJSON, and CSV to GeoPackage and PostGIS effortlessly. Free online tool, no registration required."
category: common
keywords:
- Shapefile converter
- GeoJSON converter
- CSV to GeoPackage
- Geospatial data conversion
- ogr2ogr command
- Vector data transformation
- PostGIS data loader
- Coordinate reference system conversion
- Geospatial CLI tool
- GDAL ogr2ogr
features:
- Convert between various geospatial vector data formats
- Change coordinate reference systems of geospatial data
- Filter geospatial features based on property conditions
- Load GeoPackage data into a PostGIS database
- Clip geospatial layers to a specified bounding box
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ogr2ogr

> Convert geospatial vector data between file formats.
> More information: <https://gdal.org/programs/ogr2ogr.html>.

- Convert a Shapefile into a GeoPackage:

`ogr2ogr -f GPKG {{path/to/output.gpkg}} {{path/to/input.shp}}`

- Reduce a GeoJSON to features matching a condition:

`ogr2ogr -where '{{myProperty > 42}}' -f {{GeoJSON}} {{path/to/output.geojson}} {{path/to/input.geojson}}`

- Change coordinate reference system of a GeoPackage from `EPSG:4326` to `EPSG:3857`:

`ogr2ogr -s_srs {{EPSG:4326}} -t_srs {{EPSG:3857}} -f GPKG {{path/to/output.gpkg}} {{path/to/input.gpkg}}`

- Convert a CSV file into a GeoPackage, specifying the names of the coordinate columns and assigning a coordinate reference system:

`ogr2ogr -f GPKG {{path/to/output.gpkg}} {{path/to/input.csv}} -oo X_POSSIBLE_NAMES={{longitude}} -oo Y_POSSIBLE_NAMES={{latitude}} -a_srs {{EPSG:4326}}`

- Load a GeoPackage into a PostGIS database:

`ogr2ogr -f PostgreSQL PG:dbname="{{database_name}}" {{path/to/input.gpkg}}`

- Clip layers of a GeoPackage file to the given bounding box:

`ogr2ogr -spat {{min_x}} {{min_y}} {{max_x}} {{max_y}} -f GPKG {{path/to/output.gpkg}} {{path/to/input.gpkg}}`
