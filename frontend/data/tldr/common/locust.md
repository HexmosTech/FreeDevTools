---
title: "Locust Load Test - Measure System Performance | Online Free DevTools by Hexmos"
name: locust
path: "/freedevtools/tldr/common/locust/"
canonical: "https://hexmos.com/freedevtools/tldr/common/locust/"
description: "Load test with Locust to accurately measure system performance and identify bottlenecks. Simulate concurrent users and analyze response times. Free online tool, no registration required."
category: common
keywords:
- load testing tool
- performance testing
- system performance analysis
- concurrent user simulation
- locust load test
- web application testing
- stress testing
- distributed load testing
- python load testing
- locustfile testing
features:
- Simulate a large number of concurrent users
- Define user behavior with Python code
- Run load tests in a distributed environment
- Generate real-time reports and statistics
- Measure system response times and identify bottlenecks
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# locust

> Load-testing tool to determine number of concurrent users a system can handle.
> More information: <https://locust.io>.

- Load-test "example.com" with web interface using locustfile.py:

`locust --host={{http://example.com}}`

- Use a different test file:

`locust --locustfile={{test_file.py}} --host={{http://example.com}}`

- Run test without web interface, spawning 1 user a second until there are 100 users:

`locust --no-web --clients={{100}} --hatch-rate={{1}} --host={{http://example.com}}`

- Start Locust in master mode:

`locust --master --host={{http://example.com}}`

- Connect Locust slave to master:

`locust --slave --host={{http://example.com}}`

- Connect Locust slave to master on a different machine:

`locust --slave --master-host={{master_hostname}} --host={{http://example.com}}`
