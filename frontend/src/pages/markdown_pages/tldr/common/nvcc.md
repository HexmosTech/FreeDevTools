---
title: "NVCC Compiler - Compile CUDA Programs | Online Free DevTools by Hexmos"
name: nvcc
path: /freedevtools/tldr/common/nvcc
canonical: "https://hexmos.com/freedevtools/tldr/common/nvcc/"
description: "Compile CUDA programs effortlessly with NVCC Compiler. Generate executables, debug information, and link libraries for GPU development. Free online tool, no registration required."
category: common
keywords:
- CUDA compiler
- NVIDIA compiler
- GPU programming
- CUDA programming
- nvcc command
- CUDA executable
- CUDA library
- CUDA debugging
- GPU architecture
- CUDA code generation
features:
- Compile CUDA source code into executables
- Generate debugging information for CUDA applications
- Include external libraries in CUDA projects
- Specify the target GPU architecture for compilation
- Generate optimized code for specific GPU devices
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nvcc

> The NVIDIA CUDA Compiler Driver.
> More information: <https://docs.nvidia.com/cuda/cuda-compiler-driver-nvcc>.

- Compile a CUDA program:

`nvcc {{path/to/source.cu}} {{[-o|--output-file]}} {{path/to/executable}}`

- Generate debug information:

`nvcc {{path/to/source.cu}} {{[-o|--output-file]}} {{path/to/executable}} {{[-g|--debug]}} {{[-G|--device-debug]}}`

- Include libraries from a different path:

`nvcc {{path/to/source.cu}} {{[-o|--output-file]}} {{path/to/executable}} {{[-I|--include-path]}} {{path/to/includes}} {{[-L|--library-path]}} {{path/to/library}} {{[-l|--library]}} {{library_name}}`

- Specify the compute capability for a specific GPU architecture:

`nvcc {{path/to/source.cu}} {{[-o|--output-file]}} {{path/to/executable}} {{[-gencode|--generate-code]}} arch={{arch_name}},code={{gpu_code_name}}`
