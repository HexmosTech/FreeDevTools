---
title: "Datashader CLI - Create Visualizations from Data | Online Free DevTools by Hexmos"
name: datashader_cli
path: /freedevtools/tldr/common/datashader_cli
canonical: "https://hexmos.com/freedevtools/tldr/common/datashader_cli/"
description: "Create datashader visualizations with the datashader_cli command-line tool. Generate shaded scatter plots and geospatial data visualizations easily. Free online tool, no registration required."
category: common
keywords:
- datashader visualization cli
- geospatial data visualization cli
- shaded scatter plot creation
- parquet data visualization
- geojson data visualization
- shapefile data visualization
- geopackage data visualization
- command-line data visualization
- matplotlib data visualization
- python datashader visualization
features:
- Generate shaded scatter plots from Parquet, CSV, and other data formats.
- Visualize geospatial data from GeoParquet, Shapefile, GeoJSON, and GeoPackage files.
- Customize visualization appearance with background color options.
- Utilize matplotlib for high-quality image rendering.
- Create visualizations directly from the command line interface.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/datashader-cli-banner.png" #updated image
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/datashader-cli-banner.png" #updated image
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# datashader_cli

> Quick visualization of large datasets using CLI based on datashader.
> More information: <https://github.com/wybert/datashader-cli>.

- Create a shaded scatter plot of points and save it to a PNG file and set the background color:

`datashader_cli points {{path/to/input.parquet}} --x {{pickup_x}} --y {{pickup_y}} {{path/to/output.png}} --background {{black|white|#rrggbb}}`

- Visualize the geospatial data (supports Geoparquet, shapefile, geojson, geopackage, etc.):

`datashader_cli points {{path/to/input_data.geo.parquet}} {{path/to/output_data.png}} --geo true`

- Use matplotlib to render the image:

`datashader_cli points {{path/to/input_data.geo.parquet}} {{path/to/output_data.png}} --geo {{true}} --matplotlib true`
