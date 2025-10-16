---
title: "Twurl - Control Twitter API from Command Line | Online Free DevTools by Hexmos"
name: twurl
path: "/freedevtools/tldr/common/twurl/"
canonical: "https://hexmos.com/freedevtools/tldr/common/twurl/"
description: "Control Twitter API interactions with Twurl, a command-line tool for interacting with Twitter. Authenticate, post, and fetch data easily. Free online tool, no registration required."
category: common
keywords:
- twitter api client
- command line twitter
- twitter curl alternative
- twurl api requests
- twitter api authentication
- oauth twitter command line
- twitter data retrieval
- twitter post command
- macos twurl
- linux twurl
features:
- Authorize access to a Twitter account via the command line
- Make GET requests to Twitter API endpoints
- Make POST requests with endpoint parameters to the Twitter API
- Upload media files directly to Twitter
- Create aliases for frequently requested Twitter API resources
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# twurl

> Curl-like command but tailored specifically for the Twitter API.
> More information: <https://github.com/twitter/twurl>.

- Authorize `twurl` to access a Twitter account:

`twurl authorize {{[-c|--consumer-key]}} {{twitter_api_key}} {{[-s|--consumer-secret]}} {{twitter_api_secret}}`

- Make a GET request to an API endpoint:

`twurl {{[-X|--request-method]}} GET {{twitter_api_endpoint}}`

- Make a POST request to an API endpoint:

`twurl {{[-X|--request-method]}} POST {{[-d|--data]}} '{{endpoint_params}}' {{twitter_api_endpoint}}`

- Upload media to Twitter:

`twurl {{[-H|--host]}} "{{twitter_upload_url}}" {{[-X|--request-method]}} POST "{{twitter_upload_endpoint}}" {{[-f|--file]}} "{{path/to/media.jpg}}" {{[-F|--file-field]}} "media"`

- Access a different Twitter API host:

`twurl {{[-H|--host]}} {{twitter_api_url}} {{[-X|--request-method]}} GET {{twitter_api_endpoint}}`

- Create an alias for a requested resource:

`twurl alias {{alias_name}} {{resource}}`
