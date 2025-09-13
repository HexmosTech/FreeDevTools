---
title: "Device Tree Compiler - Recompile DTB Files | Free DevTools"
name: dtc
path: /freedevtools/tldr/common/dtc
canonical: "https://hexmos.com/freedevtools/tldr/common/dtc/"
description: "Recompile device trees with Device Tree Compiler (dtc). Convert between `.dts` and `.dtb` formats, create overlays and decompile system trees. Free online tool, no registration required."
category: common
keywords:
- device tree compiler
- dts to dtb converter
- dtb to dts decompiler
- device tree overlay
- linux device tree
- dtc command line
- device tree source
- device tree blob
- linux device tree compiler
- embedded device tree
features:
- Compile device tree source files into binary blob files
- Decompile device tree blob files into human-readable source files
- Create device tree overlay files
- Extract device tree from a running Linux system
- Convert device tree files between `.dts` and `.dtb` formats
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dtc

> The Device Tree Compiler, a tool for recompiling device trees between formats.
> More information: <https://github.com/dgibson/dtc>.

- Compile a device tree source `.dts` file into a binary device tree blob `.dtb` file:

`dtc -I dts -O dtb -o {{path/to/output_file.dtb}} {{path/to/input_file.dts}}`

- Compile a device tree source `.dts` file into a binary device tree blob overlay `.dtbo` file:

`dtc -@ -I dts -O dtb -o {{path/to/output_file.dtbo}} {{path/to/input_file.dts}}`

- Decompile a device tree blob `.dtb` file into a readable device tree source `.dts` file:

`dtc -I dtb -O dts -o {{path/to/output_file.dts}} {{path/to/input_file.dtb}}`

- Decompile the current device tree from the system into a readable device tree source `.dts` file:

`dtc -I fs -O dts /proc/device-tree`
