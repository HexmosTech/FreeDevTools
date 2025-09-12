---
title: "Kitex Generate - Create Go RPC Stubs | Free DevTools"
name: kitex
path: /freedevtools/tldr/common/kitex
canonical: "https://hexmos.com/freedevtools/tldr/common/kitex/"
description: "Generate Go RPC stubs with Kitex. Create client and server code from Thrift and Protobuf IDLs using this code generation tool. Free online tool, no registration required."
category: common
keywords:
- Kitex code generation
- Go RPC stub generator
- Thrift IDL compiler
- Protobuf IDL compiler
- Go microservice generator
- Kitex client generator
- Kitex server generator
- Go service skeleton generator
- IDL code generation
- Go code generator
features:
- Generate Go client code from Thrift IDLs
- Generate Go client code from Protobuf IDLs
- Generate Go server code from Thrift IDLs
- Create a complete server-side project skeleton
- Support code generation both inside and outside $GOPATH
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kitex

> Code generation tool provided by the Go RPC framework Kitex.
> Kitex accepts both thrift and protobuf IDLs, and supports generating a skeleton of a server side project.
> More information: <https://www.cloudwego.io>.

- Generate client codes when a project is in `$GOPATH`:

`kitex {{path/to/IDL_file.thrift}}`

- Generate client codes when a project is not in `$GOPATH`:

`kitex -module {{github.com/xx-org/xx-name}} {{path/to/IDL_file.thrift}}`

- Generate client codes with protobuf IDL:

`kitex -type protobuf {{path/to/IDL_file.proto}}`

- Generate server codes:

`kitex -service {{svc_name}} {{path/to/IDL_file.thrift}}`
