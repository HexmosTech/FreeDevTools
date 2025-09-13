---
title: "Control ORCA Sequencer - C-Port Tool | Free DevTools"
name: orca-c
path: /freedevtools/tldr/common/orca-c
canonical: "https://hexmos.com/freedevtools/tldr/common/orca-c/"
description: "Control ORCA sequencer parameters with orca-c, a C-port of the ORCA live programming environment. Create procedural sequencers easily. Free online tool, no registration required."
category: common
keywords:
- ORCA sequencer control
- live coding environment
- procedural music generator
- command line sequencer
- C-port ORCA tool
- music programming language
- esoteric programming
- algorithmic composition
- ORCA beats per minute
- ORCA grid size
features:
- Start ORCA with an empty workspace.
- Open a specific ORCA file.
- Set a custom tempo for the sequencer.
- Define the grid size for the ORCA environment.
- Configure the maximum number of undo steps.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# orca-c

> A C-port of the ORCA live programming environment.
> ORCA is an esoteric programming language for creating procedural sequencers.
> More information: <https://github.com/hundredrabbits/Orca-c>.

- Start ORCA with an empty workspace:

`orca-c`

- Start ORCA and open a specific file:

`orca-c {{path/to/file.orca}}`

- Start ORCA and set a specific tempo (defaults to 120):

`orca-c --bpm {{beats_per_minute}}`

- Start ORCA and set the size of the grid:

`orca-c --initial-size {{columns}}x{{rows}}`

- Start ORCA and set the maximum number of undo steps (defaults to 100):

`orca-c --undo-limit {{limit}}`

- Show the main menu inside of ORCA:

`<F1>`

- Show all shortcuts inside of ORCA:

`<?>`

- Show all ORCA operators inside of ORCA:

`<Ctrl g>`
