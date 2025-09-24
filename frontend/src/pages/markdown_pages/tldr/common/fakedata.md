---
title: "Generate Fake Data - Fakedata Command | Online Free DevTools by Hexmos"
name: fakedata
path: /freedevtools/tldr/common/fakedata
canonical: "https://hexmos.com/freedevtools/tldr/common/fakedata/"
description: "Generate fake data effortlessly with the Fakedata command. Create realistic datasets for testing and development using various generators. Free online tool, no registration required."
category: common
keywords:
  - fake data generator
  - data generation command
  - sample data command line
  - test data command
  - dummy data generator command
  - CSV data generation
  - SQL data generation
  - Linux fake data command
  - MacOS fake data command
  - command line fake data
features:
  - Generate realistic fake data using numerous built-in generators.
  - Customize output format to CSV, TAB, or SQL.
  - Specify the number of data items to generate.
  - Employ custom templates for flexible data creation.
  - List and utilize available data generators via command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
