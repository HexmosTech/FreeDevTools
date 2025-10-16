---
title: "MQTT Broker - Manage Messages | Online Free DevTools by Hexmos"
name: mosquitto
path: "/freedevtools/tldr/common/mosquitto/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mosquitto/"
description: "Manage messages with MQTT Broker Mosquitto. Configure, start, and daemonize your message broker. Free online tool, no registration required."
category: common
keywords:
- mqtt broker configuration
- mqtt message queueing
- mqtt server linux
- mosquitto mqtt broker
- mosquitto configuration file
- mosquitto publish subscribe
- mosquitto port configuration
- mosquitto daemonize process
- mqtt message broker common
- mosquitto command line tool
features:
- Start Mosquitto MQTT broker
- Specify a configuration file for Mosquitto
- Listen on a specific port for MQTT connections
- Daemonize Mosquitto to run in the background
- Configure MQTT broker settings using command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mosquitto

> An MQTT broker.
> More information: <https://mosquitto.org/man/mosquitto-8.html>.

- Start Mosquitto:

`mosquitto`

- Specify a configuration file to use:

`mosquitto {{[-c|--config-file]}} {{path/to/file.conf}}`

- Listen on a specific port:

`mosquitto {{[-p|--port]}} {{8883}}`

- Daemonize by forking into the background:

`mosquitto {{[-d|--daemon]}}`
