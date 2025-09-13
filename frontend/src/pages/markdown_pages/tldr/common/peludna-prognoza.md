---
title: "Fetch Pollen Data - peludna-prognoza CLI | Free DevTools"
name: peludna-prognoza
path: /freedevtools/tldr/common/peludna-prognoza
canonical: "https://hexmos.com/freedevtools/tldr/common/peludna-prognoza/"
description: "Fetch pollen data with peludna-prognoza for Croatian cities from the terminal. Access real-time allergies information via Pliva's API using CLI commands. Free online tool, no registration required."
category: common
keywords:
- pollen data CLI
- allergies data fetch
- croatian cities pollen
- pliva allergies API
- terminal pollen forecast
- command line pollen
- pollen measurement tool
- console pollen monitor
- allergies risk assessment
- city pollen levels
features:
- Fetch pollen levels for specified Croatian cities
- Display pollen data in JSON or XML format
- Open the Pliva Zdravlje pollen measurement page in a web browser
- Initiate an interactive city search for pollen information
- Retrieve real-time pollen information from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# peludna-prognoza

> Fetch pollen measurement data for Croatian cities from your terminal using Pliva's allergies data API.
> More information: <https://github.com/vladimyr/peludna-prognoza>.

- Start an interactive search for a city and fetch data for it:

`peludna-prognoza`

- Fetch data for a city:

`peludna-prognoza "{{city}}"`

- Display data in a machine-readable format:

`peludna-prognoza "{{city}}" --{{json|xml}}`

- Display the pollen measurement page for a city at <https://plivazdravlje.hr> in the default web browser:

`peludna-prognoza "{{city}}" {{[-w|--web]}}`
