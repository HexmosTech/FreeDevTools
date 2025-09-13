---
title: "Create Datashader Visualizations - CLI Tool | Free DevTools"
name: datashader_cli
path: /freedevtools/tldr/common/datashader_cli
canonical: "https://hexmos.com/freedevtools/tldr/common/datashader_cli/"
description: "Create datashader visualizations with datashader_cli. Generate shaded scatter plots and geospatial data visualizations easily via the command line. Free online tool, no registration required."
category: common
keywords:
- datashader visualization
- geospatial data visualization
- shaded scatter plot
- command line visualization
- parquet visualization
- geojson visualization
- shapefile visualization
- geopackage visualization
- python visualization tool
- data visualization cli
features:
- Create shaded scatter plots from various data formats
- Visualize geospatial data from GeoParquet, Shapefile, GeoJSON, and GeoPackage
- Render images using matplotlib
- Customize background colors for visualizations
- Generate visualizations from command line interface
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
