---
title: "Arthas Watch - Observe Method Data | Online Free DevTools by Hexmos"
name: arthas-watch
path: /freedevtools/tldr/arthas/arthas-watch
canonical: "https://hexmos.com/freedevtools/tldr/arthas/arthas-watch/"
description: "Observe method invoke data with Arthas Watch. Inspect parameters, return values, and exceptions in real-time for deeper code insights. Free online tool, no registration required."
category: common
keywords:
- arthas watch data
- arthas method observation
- arthas invoke monitoring
- java method tracing
- arthas parameter analysis
- arthas return value inspection
- arthas exception tracking
- arthas dynamic instrumentation
- java code debugging
- java method profiling
features:
- Observe method parameters and return values dynamically
- Expand nested object attributes to specified levels
- Filter observations based on parameter values
- Track method execution and exception occurrences
- Inspect object properties at runtime
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# arthas-watch

> Method invoke data observation.
> See also: `arthas`, `arthas-trace`.
> More information: <https://arthas.aliyun.com/en/doc/watch.html>.

- Observe the first parameter and return value of method, and expand the nested attributes of the object to 4 levels:

`watch {{class-pattern}} {{method-pattern}} {{'{ params[0],returnObj }'}} -x 4`

- When the value of the first parameter of the method is 5, the second parameter and return value are output, and the object is expanded 4 layers:

`watch {{class-pattern}} {{method-pattern}} {{'{ params[1],returnObj }'}} {{'"5".equals(params[0])'}} -x 4`

- When the method returns or an exception occurs, observe the count property of the second parameter:

`watch {{class-pattern}} {{method-pattern}} {{'{ params[1].count }'}} -e -s`
