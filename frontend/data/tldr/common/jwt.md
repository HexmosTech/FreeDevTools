---
title: "JWT Tool - Create and Decode JSON Web Tokens | Online Free DevTools by Hexmos"
name: jwt
path: "/freedevtools/tldr/common/jwt/"
canonical: "https://hexmos.com/freedevtools/tldr/common/jwt/"
description: "Create and decode JSON Web Tokens (JWT) with JWT Tool. Verify authenticity and integrity of your data. Free online tool, no registration required."
category: common
keywords:
- jwt encoder
- jwt decoder
- json web token creator
- json web token decoder
- jwt signature validator
- hs256 jwt
- rs256 jwt
- jwt cli
- command line jwt tool
- linux jwt
features:
- Decode JSON Web Tokens
- Encode JSON to JWT
- Support various encryption algorithms (HS256, RS256, etc.)
- Verify JWT signature
- Encode key-value pairs to JWT
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jwt

> Work with JSON Web Tokens (JWTs).
> Encryption algorithms available are HS256, HS384, HS512, RS256, RS384, RS512, ES256, ES384.
> More information: <https://github.com/mike-engel/jwt-cli>.

- Decode a JWT:

`jwt decode {{jwt_string}}`

- Decode a JWT as a JSON string:

`jwt decode {{[-j|--json]}} {{jwt_string}}`

- Encode a JSON string to a JWT:

`jwt encode {{[-A|--alg]}} {{HS256}} {{[-S|--secret]}} {{1234567890}} '{{json_string}}'`

- Encode key pair payload to JWT:

`jwt encode {{[-A|--alg]}} {{HS256}} {{[-S|--secret]}} {{1234567890}} {{[-P|--payload]}} {{key=value}}`
