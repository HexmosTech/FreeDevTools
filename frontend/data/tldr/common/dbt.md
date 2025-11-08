---
title: "dbt Model Transformation - Manage Data Warehouses | Online Free DevTools by Hexmos"
name: dbt
path: "/freedevtools/tldr/common/dbt/"
canonical: "https://hexmos.com/freedevtools/tldr/common/dbt/"
description: "Transform data warehouse models with dbt. Streamline data transformations and automate workflows for efficient data analysis. Free online tool, no registration required."
category: common
keywords:
- dbt model transformation
- data warehouse transformation
- dbt project debugging
- dbt model testing
- data build tool
- dbt run command
- data transformation pipeline
- data engineering workflow
- sql model building
- dbt cloud alternative
features:
- Debug dbt projects and database connections
- Run all models in a dbt project
- Test specific models within a dbt project
- Build models and their downstream dependencies
- Exclude models based on tags from builds
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dbt

> A tool to model transformations in data warehouses.
> More information: <https://github.com/dbt-labs/dbt-core>.

- Debug the dbt project and the connection to the database:

`dbt debug`

- Run all models of the project:

`dbt run`

- Run all tests of `example_model`:

`dbt test --select example_model`

- Build (load seeds, run models, snapshots, and tests associated with) `example_model` and its downstream dependents:

`dbt build --select example_model+`

- Build all models, except the ones with the tag `not_now`:

`dbt build --exclude "tag:not_now"`

- Build all models with tags `one` and `two`:

`dbt build --select "tag:one,tag:two"`

- Build all models with tags `one` or `two`:

`dbt build --select "tag:one tag:two"`
