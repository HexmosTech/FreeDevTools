---
title: "Blackfire Profiler - Monitor PHP Apps | Online Free DevTools by Hexmos"
name: blackfire
path: "/freedevtools/tldr/common/blackfire/"
canonical: "https://hexmos.com/freedevtools/tldr/common/blackfire/"
description: "Profile PHP applications effectively with Blackfire Profiler. Identify bottlenecks and optimize performance for faster web applications. Free online tool, no registration required."
category: common
keywords:
- php profiler
- blackfire profiler
- php performance monitoring
- web application profiling
- blackfire agent
- php application debugging
- php performance analysis
- profiling tools
- php optimization
- blackfire cli
features:
- Profile and analyze PHP application performance
- Monitor web request execution and identify bottlenecks
- Collect performance samples for detailed analysis
- Upload profiling data to the Blackfire web service
- Configure and manage the Blackfire agent
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# blackfire

> Monitor, profile and test a PHP application.
> More information: <https://blackfire.io>.

- Initialize and configure the Blackfire client:

`blackfire config`

- Launch the Blackfire agent:

`blackfire agent`

- Launch the Blackfire agent on a specific socket:

`blackfire agent --socket="{{tcp://127.0.0.1:8307}}"`

- Run the profiler on a specific program:

`blackfire run {{php path/to/file.php}}`

- Run the profiler and collect 10 samples:

`blackfire --samples 10 run {{php path/to/file.php}}`

- Run the profiler and output results as JSON:

`blackfire --json run {{php path/to/file.php}}`

- Upload a profiler file to the Blackfire web service:

`blackfire upload {{path/to/file}}`

- View the status of profiles on the Blackfire web service:

`blackfire status`
