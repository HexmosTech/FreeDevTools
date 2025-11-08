---
title: "React Native Start - Run Development Server | Online Free DevTools by Hexmos"
name: react-native-start
path: "/freedevtools/tldr/react/react-native-start/"
canonical: "https://hexmos.com/freedevtools/tldr/react/react-native-start/"
description: "Run React Native development server with React Native Start. Quickly start the Metro bundler, reset cache, and specify custom ports for app development. Free online tool, no registration required."
category: common
keywords:
- react native start
- react native development server
- metro bundler start
- react native cli
- react native reset cache
- react native port configuration
- react native verbose mode
- react native max workers
- react native interactive mode
- javascript bundler
features:
- Start the React Native development server
- Reset the Metro bundler cache
- Specify a custom port for the server
- Run the server in verbose mode for detailed logs
- Disable interactive mode during server startup
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# react-native start

> Start the React Native server.
> More information: <https://github.com/facebook/react-native/tree/main/packages/community-cli-plugin#start>.

- Start the server that communicates with connected devices:

`react-native start`

- Start the metro bundler with a clean cache:

`react-native start --reset-cache`

- Start the server in a custom port (defaults to 8081):

`react-native start --port {{3000}}`

- Start the server in verbose mode:

`react-native start --verbose`

- Specify the maximum number of workers for transforming files (default is the number of CPU cores):

`react-native start --max-workers {{count}}`

- Disable interactive mode:

`react-native start --no-interactive`
