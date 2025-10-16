---
title: "Mutation Testing - Analyze PHP Code with Infection | Online Free DevTools by Hexmos"
name: infection
path: "/freedevtools/tldr/in/infection/"
canonical: "https://hexmos.com/freedevtools/tldr/in/infection/"
description: "Analyze PHP code for mutation testing with Infection, a PHP mutation testing framework. Improve code quality and detect weaknesses. Free online tool, no registration required."
category: common
keywords:
- PHP mutation testing
- Infection PHP framework
- mutation testing tool
- PHP code analysis
- software testing PHP
- code coverage analysis
- PHP quality assurance
- PHP testing framework
- command line testing
- mutation score indicator
features:
- Analyze PHP code for mutations
- Specify a minimum Mutation Score Indicator (MSI)
- Define covered code MSI threshold
- Use specific test frameworks like PHPUnit or PHPSpec
- Display the applied mutation code
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# infection

> A mutation testing framework for PHP.
> More information: <https://infection.github.io>.

- Analyze code using the configuration file (or create one if it does not exist):

`infection`

- Use a specific number of threads:

`infection --threads {{number_of_threads}}`

- Specify a minimum Mutation Score Indicator (MSI):

`infection --min-msi {{percentage}}`

- Specify a minimum covered code MSI:

`infection --min-covered-msi {{percentage}}`

- Use a specific test framework (defaults to PHPUnit):

`infection --test-framework {{phpunit|phpspec}}`

- Only mutate lines of code that are covered by tests:

`infection --only-covered`

- Display the mutation code that has been applied:

`infection --show-mutations`

- Specify the log verbosity:

`infection --log-verbosity {{default|all|none}}`
