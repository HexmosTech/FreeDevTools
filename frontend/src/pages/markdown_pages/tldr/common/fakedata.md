---
title: "Generate Fake Data - Fakedata Tool | Online Free DevTools by Hexmos"
name: fakedata
path: /freedevtools/tldr/common/fakedata
canonical: "https://hexmos.com/freedevtools/tldr/common/fakedata/"
description: "Generate fake data effortlessly with Fakedata. Create realistic datasets for testing and development using a variety of generators. Free online tool, no registration required."
category: common
keywords:
  - fake data generator
  - data generation tool
  - sample data creation
  - test data generator
  - dummy data generator
  - data seeding tool
  - fakedata command
  - linux data generation
  - macos data generation
  - command line data
features:
  - Generate data using various built-in generators.
  - Format output in CSV, TAB, or SQL.
  - Limit the number of generated data items.
  - Use custom templates for data generation.
  - List available data generators.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fakedata

> Generate fake data using a large variety of generators.
> More information: <https://github.com/lucapette/fakedata>.

- List all valid generators:

`fakedata --generators`

- Generate data using one or more generators:

`fakedata {{generator1}} {{generator2}}`

- Generate data with a specific output format:

`fakedata {{[-f|--format]}} {{csv|tab|sql}} {{generator}}`

- Generate a given number of data items (defaults to 10):

`fakedata {{[-l|--limit]}} {{n}} {{generator}}`

- Generate data using a custom output template (the first letter of generator names must be capitalized):

`echo "{{\{\{Generator\}\}}}" | fakedata`
