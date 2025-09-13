---
title: "Stressapptest - Memory and IO Test | Free DevTools"
name: stressapptest
path: /freedevtools/tldr/st/stressapptest
canonical: "https://hexmos.com/freedevtools/tldr/st/stressapptest/"
description: "Run memory and I/O tests with Stressapptest. Stress test your system's memory and identify hardware issues effectively. Free online tool, no registration required."
category: common
keywords:
- memory stress test
- IO stress test
- system stability test
- hardware diagnostics
- linux memory test
- command line memory tester
- stressapptest linux
- memory test tool
- detect memory errors
- system benchmark
features:
- Test memory allocation and deallocation
- Simulate high memory load
- Perform I/O operations to test storage
- Allow specifying verbosity levels for detailed output
- Identify system instability issues under stress
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# stressapptest

> Userspace memory and IO test.
> More information: <https://github.com/stressapptest/stressapptest>.

- Test the given amount of memory (in Megabytes):

`stressapptest -M {{memory}}`

- Test memory as well as I/O for the given file:

`stressapptest -M {{memory}} -f {{path/to/file}}`

- Test specifying the verbosity level, where 0=lowest, 20=highest, 8=default:

`stressapptest -M {{memory}} -v {{level}}`
