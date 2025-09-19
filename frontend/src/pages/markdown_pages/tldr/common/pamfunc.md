---
title: "PAM Image Function - Apply Arithmetic Functions | Online Free DevTools by Hexmos"
name: pamfunc
path: /freedevtools/tldr/common/pamfunc
canonical: "https://hexmos.com/freedevtools/tldr/common/pamfunc/"
description: "Apply arithmetic functions to PAM images with pamfunc. Manipulate pixel values using addition, subtraction, multiplication, division, and bitwise operations. Free online tool, no registration required."
category: common
keywords:
- pam image arithmetic
- netpbm image manipulation
- pixel value adjustment
- pam image function
- image sample processing
- image bitwise operation
- common image tools
- image multiplier
- image divisor
- image adder
features:
- Apply multiplication to PAM image samples
- Divide PAM image samples by a specified value
- Add a constant to PAM image samples
- Perform bitwise AND, OR, and XOR operations on PAM image samples
- Shift PAM image sample bits left or right
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pamfunc

> Apply a simple arithmetic function to a Netpbm image.
> More information: <https://netpbm.sourceforge.net/doc/pamfunc.html>.

- Apply the specified arithmetic function with `n` as the second argument to each sample in the specified PAM image:

`pamfunc -{{multiplier|divisor|adder|subtractor|min|max}} {{n}} {{path/to/input.pam}} > {{path/to/output.pam}}`

- Apply the specified bit string function with `n` as the second argument to each sample in the specified PAM image:

`pamfunc -{{andmask|ormask|xormask|shiftleft|shiftright}} {{n}} {{path/to/input.pam}} > {{path/to/output.pam}}`
