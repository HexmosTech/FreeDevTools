---
title: "Redshift - Adjust Screen Color Temperature | Online Free DevTools by Hexmos"
name: redshift
path: "/freedevtools/tldr/common/redshift/"
canonical: "https://hexmos.com/freedevtools/tldr/common/redshift/"
description: "Adjust screen color temperature with Redshift. Optimize display for day and night viewing on Linux, macOS, and other platforms. Free online tool, no registration required."
category: common
keywords:
- color temperature adjustment
- redshift color correction
- display temperature control
- screen color shift
- linux color temperature
- macos color temperature
- redshift command line
- gamma correction
- display optimization
- circadian rhythm
features:
- Adjust screen color temperature based on time of day.
- Manually specify custom location for color temperature adjustment.
- Control screen brightness for day and night modes.
- Set custom gamma levels for red, green, and blue channels.
- Purge temperature changes and set constant color temperature.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# redshift

> Adjust the color temperature of your screen according to your surroundings.
> More information: <https://manned.org/redshift>.

- Turn on Redshift with a specific [t]emperature during day (e.g., 5700K) and at night (e.g., 3600K):

`redshift -t {{5700}}:{{3600}}`

- Turn on Redshift with a manually specified custom [l]ocation:

`redshift -l {{latitude}}:{{longitude}}`

- Turn on Redshift with a specific screen [b]rightness during the day (e.g, 70%) and at night (e.g., 40%):

`redshift -b {{0.7}}:{{0.4}}`

- Turn on Redshift with custom [g]amma levels (between 0 and 1):

`redshift -g {{red}}:{{green}}:{{blue}}`

- [P]urge existing temperature changes and set a constant unchanging color temperature in [O]ne-shot mode:

`redshift -PO {{temperature}}`
