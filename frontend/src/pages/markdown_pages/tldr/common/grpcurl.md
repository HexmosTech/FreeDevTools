---
title: "Interact gRPC Servers - Control gRPC with grpcurl | Online Free DevTools by Hexmos"
name: grpcurl
path: /freedevtools/tldr/common/grpcurl
canonical: "https://hexmos.com/freedevtools/tldr/common/grpcurl/"
description: "Interact with gRPC servers efficiently with grpcurl. Control gRPC services, inspect methods, and send requests easily. Free online tool, no registration required."
category: common
keywords:
- gRPC server interaction
- gRPC command line tool
- gRPC request sender
- gRPC service inspector
- gRPC method explorer
- gRPC API testing
- gRPC reflection tool
- command line gRPC client
- gRPC debugging linux
- gRPC debugging macos
features:
- Send gRPC requests with headers and bodies
- List all services exposed by a gRPC server
- Inspect specific gRPC service methods
- Interact with gRPC services from the command line
- Debug gRPC API endpoints
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# grpcurl

> Interact with gRPC servers.
> Like `curl`, but for gRPC.
> More information: <https://github.com/fullstorydev/grpcurl>.

- Send an empty request:

`grpcurl {{grpc.server.com:443}} {{my.custom.server.Service/Method}}`

- Send a request with a header and a body:

`grpcurl -H "{{Authorization: Bearer $token}}" -d {{'{"foo": "bar"}'}} {{grpc.server.com:443}} {{my.custom.server.Service/Method}}`

- List all services exposed by a server:

`grpcurl {{grpc.server.com:443}} list`

- List all methods in a particular service:

`grpcurl {{grpc.server.com:443}} list {{my.custom.server.Service}}`
