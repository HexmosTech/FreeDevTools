---
title: "OpenStreetMap Editor - Edit OSM Data with JOSM | Online Free DevTools by Hexmos"
name: josm
path: /freedevtools/tldr/common/josm
canonical: "https://hexmos.com/freedevtools/tldr/common/josm/"
description: "Edit OpenStreetMap data seamlessly with JOSM. Enhance maps, correct errors, and contribute to the OSM community. Free online tool, no registration required."
category: common
keywords:
- OpenStreetMap editor
- JOSM editor
- OSM data editor
- Java OSM editor
- OpenStreetMap data manipulation
- OpenStreetMap editing tool
- JOSM command line
- GIS data editor
- Map data editor
- OpenStreetMap contributor tool
features:
- Launch JOSM from the command line
- Start JOSM in maximized window mode
- Set a specific language for the JOSM interface
- Reset JOSM preferences to default values
- Download a specific bounding box of OSM data
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# josm

> Extensible OpenStreetMap editor for Java 8+.
> More information: <https://manned.org/josm>.

- Launch JOSM:

`josm`

- Launch JOSM in maximized mode:

`josm --maximize`

- Launch JOSM and set a specific language:

`josm --language {{de}}`

- Launch JOSM and reset all preferences to their default values:

`josm --reset-preferences`

- Launch JOSM and download a specific bounding box:

`josm --download {{minlat,minlon,maxlat,maxlon}}`

- Launch JOSM and download a specific bounding box as raw GPS:

`josm --downloadgps {{minlat,minlon,maxlat,maxlon}}`

- Launch JOSM without plugins:

`josm --skip-plugins`
