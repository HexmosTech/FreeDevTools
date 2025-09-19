---
title: "OGRINFO - List Data Source Information | Online Free DevTools by Hexmos"
name: ogrinfo
path: /freedevtools/tldr/common/ogrinfo
canonical: "https://hexmos.com/freedevtools/tldr/common/ogrinfo/"
description: "List data source information with OGRINFO, a powerful geospatial data tool. Inspect vector data formats and metadata using command line. Free online tool, no registration required."
category: common
keywords:
- geospatial data information
- ogrinfo command line
- vector data inspection
- gdal data source
- spatial data formats
- geojson metadata
- gpkg layer information
- shapefile inspection
- ogr2ogr alternative
- common linux ogrinfo
features:
- List supported geospatial data formats
- Inspect layers within a data source file
- Extract detailed information about a specific layer
- Filter features based on attribute conditions
- Execute SQL queries to update geospatial data
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ogrinfo

> List information about an OGR-supported data source.
> More information: <https://gdal.org/programs/ogrinfo.html>.

- List supported formats:

`ogrinfo --formats`

- List layers of a data source:

`ogrinfo {{path/to/input.gpkg}}`

- Get detailed information about a specific layer of a data source:

`ogrinfo {{path/to/input.gpkg}} {{layer_name}}`

- Show summary information about a specific layer of a data source:

`ogrinfo -so {{path/to/input.gpkg}} {{layer_name}}`

- Show summary of all layers of the data source:

`ogrinfo -so -al {{path/to/input.gpkg}}`

- Show detailed information of features matching a condition:

`ogrinfo -where '{{attribute_name > 42}}' {{path/to/input.gpkg}} {{layer_name}}`

- Update a layer in the data source with SQL:

`ogrinfo {{path/to/input.geojson}} -dialect SQLite -sql "{{UPDATE input SET attribute_name = 'foo'}}"`
