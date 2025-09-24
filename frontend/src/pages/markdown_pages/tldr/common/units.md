---
title: "Convert Units - Measure Conversion Online | Online Free DevTools by Hexmos"
name: units
path: /freedevtools/tldr/common/units
canonical: "https://hexmos.com/freedevtools/tldr/common/units/"
description: "Convert units easily with Units, the powerful command-line tool. Perform accurate measurements and conversions online. Free online tool, no registration required."
category: common
keywords:
- unit conversion
- measurement conversion
- command line units
- units command
- gnu units
- convert quarts to tablespoons
- convert pounds to kilograms
- convert meters per second to inches per hour
- convert acres to square feet
- byte multiplier conversion
features:
- Convert between different units of measure
- Perform interactive unit conversions
- Search for specific units by string
- Convert units with specified quantities
- Handle compound unit conversions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# units

> Convert between two units of measure.
> More information: <https://www.gnu.org/software/units/manual/units.html>.

- Run in interactive mode:

`units`

- List all units containing a specific string in interactive mode:

`search {{string}}`

- Show the conversion between two simple units:

`units {{quarts}} {{tablespoons}}`

- Convert between units with quantities:

`units "{{15 pounds}}" {{kilograms}}`

- Show the conversion between two compound units:

`units "{{meters / second}}" "{{inches / hour}}"`

- Show the conversion between units with different dimensions:

`units "{{acres}}" "{{ft^2}}"`

- Show the conversion of byte multipliers:

`units "{{15 megabytes}}" {{bytes}}`
