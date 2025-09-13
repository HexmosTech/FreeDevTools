---
title: "Generate Protobuf - Compile .proto Files | Free DevTools"
name: protoc
path: /freedevtools/tldr/common/protoc
canonical: "https://hexmos.com/freedevtools/tldr/common/protoc/"
description: "Generate Protobuf files with Protoc. Convert .proto files into code for various languages including Python and Java. Free online tool, no registration required."
category: common
keywords:
- protobuf compiler
- .proto to python
- .proto to java
- protobuf code generator
- protocol buffer converter
- .proto encoder
- .proto decoder
- protobuf message format
- protobuf command line
- proto file parser
features:
- Generate code from .proto files in multiple languages
- Encode text-format messages into protocol buffers
- Decode protocol buffers into text-format
- Convert .proto files to Python code
- Convert .proto files to Java code
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# protoc

> Parse Google Protobuf `.proto` files and generate output in the specified language.
> More information: <https://developers.google.com/protocol-buffers>.

- Generate Python code from a `.proto` file:

`protoc --python_out={{path/to/output_directory}} {{input_file.proto}}`

- Generate Java code from a `.proto` file that imports other `.proto` files:

`protoc --java_out={{path/to/output_directory}} --proto_path={{path/to/import_search_path}} {{input_file.proto}}`

- Generate code for multiple languages:

`protoc --csharp_out={{path/to/c#_output_directory}} --js_out={{path/to/js_output_directory}} {{input_file.proto}}`

- Encode a text-format message into a protocol message from a `.proto` file:

`protoc --encode={{TypeName}} {{input_file.proto}} < {{message.txt}}`

- Decode a protocol message into text-format from a `.proto` file:

`protoc --decode={{TypeName}} {{input_file.proto}} < {{message.bin}}`

- Decode a protocol message into raw tag/value pairs:

`protoc --decode_raw < {{message.bin}}`
