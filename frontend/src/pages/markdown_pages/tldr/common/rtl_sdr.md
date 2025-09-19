---
title: "RTL-SDR Recorder - Capture Raw I/Q Data | Online Free DevTools by Hexmos"
name: rtl_sdr
path: /freedevtools/tldr/common/rtl_sdr
canonical: "https://hexmos.com/freedevtools/tldr/common/rtl_sdr/"
description: "Record raw I/Q data with RTL-SDR Recorder, a powerful SDR sampling tool. Capture radio frequencies, analyze signals and demodulate with ease. Free online tool, no registration required."
category: common
keywords:
- rtl-sdr recorder
- iq data capture
- software defined radio sampling
- rtl-sdr frequency recording
- rtl-sdr linux
- rtl-sdr command line
- rtl-sdr signal analysis
- radio frequency sampling
- rtl-sdr data streaming
- raw iq data recorder
features:
- Capture raw I/Q data from RTL-SDR receivers
- Record specific frequencies with adjustable sampling rates
- Stream data to other applications via pipe
- Control device gain and output block size
- Synchronous output for precise data capture
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rtl_sdr

> Raw data recorder for RTL-SDR receivers.
> Data is encoded using I/Q sampling (aka quadrature sampling).
> More information: <https://osmocom.org/projects/rtl-sdr/wiki/Rtl-sdr>.

- Save RAW data from a frequency (specified in Hz) to a file:

`rtl_sdr -f {{100000000}} {{path/to/file}}`

- Pipe data to another program:

`rtl_sdr -f {{100000000}} - | {{aplay}}`

- Read a specified number of samples:

`rtl_sdr -f {{100000000}} -n {{20}} -`

- Specify the sample rate in Hz (ranges 225001-300000 and 900001-3200000):

`rtl_sdr -f {{100000000}} -s {{2400000}} -`

- Specify the device by its index:

`rtl_sdr -f {{100000000}} -d {{0}} -`

- Specify the gain:

`rtl_sdr -f {{100000000}} -g {{20}} -`

- Specify the output block size:

`rtl_sdr -f {{100000000}} -b {{9999999}} -`

- Use synchronous output:

`rtl_sdr -f {{100000000}} -S -`
