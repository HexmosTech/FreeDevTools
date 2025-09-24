---
title: "Generate Ephemerides - Kosmorro Date & Location | Online Free DevTools by Hexmos"
name: kosmorro
path: /freedevtools/tldr/common/kosmorro
canonical: "https://hexmos.com/freedevtools/tldr/common/kosmorro/"
description: "Generate ephemerides with Kosmorro for specific dates and locations. Calculate celestial events and planetary positions using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- ephemeris generator
- astronomical calculations
- planetary positions
- celestial events
- date calculator
- location based astronomy
- command-line ephemeris
- kosmorro ephemeris
- linux ephemeris
- macos ephemeris
features:
- Calculate ephemerides for any date and location
- Determine celestial events based on geographic position
- Output ephemeris data in various formats
- Generate ephemerides with timezone support
- Create PDF reports of astronomical data
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kosmorro

> Compute the ephemerides and the events for a date at a position on Earth.
> More information: <https://kosmorro.space>.

- Get ephemerides for Paris, France:

`kosmorro --latitude={{48.7996}} --longitude={{2.3511}}`

- Get ephemerides for Paris, France, in the UTC+2 timezone:

`kosmorro --latitude={{48.7996}} --longitude={{2.3511}} --timezone={{2}}`

- Get ephemerides for Paris, France, on June 9th, 2020:

`kosmorro --latitude={{48.7996}} --longitude={{2.3511}} --date={{2020-06-09}}`

- Generate a PDF (Note: TeXLive must be installed):

`kosmorro --format={{pdf}} --output={{path/to/file.pdf}}`
