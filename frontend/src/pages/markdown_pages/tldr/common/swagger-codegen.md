---
title: "Swagger Codegen - Generate REST API Code & Docs | Free DevTools"
name: swagger-codegen
path: /freedevtools/tldr/common/swagger-codegen
canonical: "https://hexmos.com/freedevtools/tldr/common/swagger-codegen/"
description: "Generate REST API code and documentation with Swagger Codegen. Define APIs using OpenAPI/Swagger, automate code generation, and simplify API development. Free online tool, no registration required."
category: common
keywords:
- Swagger Codegen
- OpenAPI code generator
- REST API documentation generator
- API client generator
- API server stub generator
- Swagger API tools
- API definition tools
- Java code generation
- Python code generation
- YAML API definition
features:
- Generate server stubs from OpenAPI definitions
- Generate client SDKs for multiple languages
- Automate API documentation creation
- Support various templating engines for customization
- Configure code generation options using command-line arguments
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# swagger-codegen

> Generate code and documentation for your REST api from a OpenAPI/swagger definition.
> More information: <https://github.com/swagger-api/swagger-codegen>.

- Generate documentation and code from an OpenAPI/swagger file:

`swagger-codegen generate {{[-i|--input-spec]}} {{swagger_file}} {{[-l|--lang]}} {{language}}`

- Generate Java code using the library retrofit2 and the option useRxJava2:

`swagger-codegen generate {{[-i|--input-spec]}} {{http://petstore.swagger.io/v2/swagger.json}} {{[-l|--lang]}} {{java}} --library {{retrofit2}} -D{{useRxJava2}}={{true}}`

- List available languages:

`swagger-codegen langs`

- Display help for a specific command:

`swagger-codegen {{generate|config-help|meta|langs|version}} --help`
