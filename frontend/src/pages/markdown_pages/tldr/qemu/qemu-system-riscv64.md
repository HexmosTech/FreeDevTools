---
title: "QEMU RISC-V Emulator - Run RISC-V Systems | Online Free DevTools by Hexmos"
name: qemu-system-riscv64
path: /freedevtools/tldr/qemu/qemu-system-riscv64
canonical: "https://hexmos.com/freedevtools/tldr/qemu/qemu-system-riscv64/"
description: "Emulate RISC-V systems with QEMU RISC-V Emulator. Execute kernels and test software on a virtualized RISC-V architecture. Free online tool, no registration required."
category: common
keywords:
- RISC-V emulator
- QEMU RISC-V
- RISC-V virtualization
- RISC-V kernel emulation
- RISC-V system architecture
- QEMU command-line
- Linux RISC-V
- RISCV64 architecture emulation
- Virtual RISC-V machine
- RISC-V embedded systems
features:
- Emulate the RISC-V 64-bit architecture
- Boot a kernel within the emulated RISC-V environment
- List available machine types for RISC-V emulation
- Execute commands non-graphically within QEMU
- Simulate different RISC-V hardware configurations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qemu-system-riscv64

> Emulate `riscv64` architecture.
> More information: <https://www.qemu.org/docs/master/system/target-riscv.html>.

- Boot a kernel emulating `riscv64` architecture:

`qemu-system-riscv64 {{[-M|-machine]}} virt -bios none -kernel {{kernel.elf}} -nographic`

- List supported machine types:

`qemu-system-riscv64 {{[-M|-machine]}} help`

- Exit non-graphical QEMU:

`<Ctrl a><x>`
