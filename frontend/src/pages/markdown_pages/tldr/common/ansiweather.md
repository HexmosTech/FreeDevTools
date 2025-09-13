---
title: "Ansiweather - Display Weather in Terminal | Free DevTools"
name: ansiweather
path: /freedevtools/tldr/common/ansiweather
canonical: "https://hexmos.com/freedevtools/tldr/common/ansiweather/"
description: "Display weather information with Ansiweather, a command-line weather tool. Get forecasts and weather data in your terminal. Free online tool, no registration required."
category: common
keywords:
- ansiweather terminal
- command line weather
- terminal weather forecast
- linux weather display
- macos weather display
- weather cli
- ansi weather
- console weather
- current weather conditions
- command weather
features:
- Display current weather conditions in the terminal
- Show weather forecasts for specified locations
- Display wind and humidity data
- Customize output with symbols and daylight information
- Use metric or imperial units for temperature
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ansiweather

> Display the current weather conditions in your terminal.
> More information: <https://github.com/fcambus/ansiweather>.

- Display a [f]orecast using metric [u]nits for the next seven days for a specific [l]ocation:

`ansiweather -u metric -f 7 -l {{Rzeszow,PL}}`

- Display a [F]orecast for the next five days showing [s]ymbols and [d]aylight data for your current location:

`ansiweather -F -s true -d true`

- Display today's [w]ind and [h]umidity data for your current location:

`ansiweather -w true -h true`
