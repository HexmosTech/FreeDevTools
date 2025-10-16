---
title: "Dotnet Test - Execute .NET Tests | Online Free DevTools by Hexmos"
name: dotnet-test
path: "/freedevtools/tldr/dotnet/dotnet-test/"
canonical: "https://hexmos.com/freedevtools/tldr/dotnet/dotnet-test/"
description: "Execute .NET tests quickly with Dotnet Test. Filter test execution based on names and properties for targeted results. Free online tool, no registration required."
category: common
keywords:
- .NET test execution
- .NET unit testing
- .NET test filter
- C# test runner
- dotnet test command
- xUnit test runner
- MSTest test runner
- NUnit test runner
- .NET core testing
- .NET framework testing
features:
- Execute tests in a .NET project or solution.
- Execute tests in a specified directory.
- Filter test execution based on name.
- Filter test execution based on properties.
- Support for xUnit, NUnit, and MSTest.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dotnet test

> Execute tests for a .NET application.
> Note: View <https://learn.microsoft.com/en-us/dotnet/core/testing/selective-unit-tests> for supported filter expressions.
> More information: <https://learn.microsoft.com/dotnet/core/tools/dotnet-test>.

- Execute tests for a .NET project/solution in the current directory:

`dotnet test`

- Execute tests for a .NET project/solution in a specific location:

`dotnet test {{path/to/project_or_solution}}`

- Execute tests matching the given filter expression:

`dotnet test --filter {{Name~TestMethod1}}`
