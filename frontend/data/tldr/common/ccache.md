---
title: "Ccache - Control C/C++ Compilation Cache | Online Free DevTools by Hexmos"
name: ccache
path: "/freedevtools/tldr/common/ccache/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ccache/"
description: "Control C/C++ compilation with Ccache. Improve build times by caching compiler outputs and reusing them. Free online tool, no registration required."
category: common
keywords:
- C++ compiler cache
- C compiler cache
- Compilation caching
- Ccache statistics
- Ccache clear
- Ccache reset
- Linux compiler cache
- macOS compiler cache
- Build time optimization
- Compiler acceleration
features:
- Show current cache statistics
- Clear the entire cache content
- Reset statistics to zero without clearing the cache
- Compile C/C++ code using cached outputs
- Accelerate compilation process for faster builds
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ccache

> C/C++ compiler cache.
> Note: Packages usually provide symlinks for compilers in `/usr/lib/ccache/bin`. Prepend this directory to `$PATH` to automatically use `ccache` for them.
> More information: <https://ccache.dev/manual/latest.html>.

- Show current cache statistics:

`ccache {{[-s|--show-stats]}}`

- Clear all cache:

`ccache {{[-C|--clear]}}`

- Reset statistics (but not cache itself):

`ccache {{[-z|--zero-stats]}}`

- Compile C code and cache compiled output (to use `ccache` on all `gcc` invocations, see the note above):

`ccache gcc {{path/to/file.c}}`
