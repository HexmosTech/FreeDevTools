---
title: "Control MQTT Topics - mosquitto_sub | Free DevTools"
name: mosquitto_sub
path: /freedevtools/tldr/common/mosquitto_sub
canonical: "https://hexmos.com/freedevtools/tldr/common/mosquitto_sub/"
description: "Control MQTT topics with mosquitto_sub. Subscribe to topics, filter messages, and monitor broker status. Free online tool, no registration required."
category: common
keywords:
- MQTT subscriber
- MQTT topic listener
- mosquitto_sub command
- MQTT client
- Broker status monitor
- MQTT message filter
- MQTT topic subscription
- Command-line MQTT
- MQTT debug tool
- IoT message listener
features:
- Subscribe to specific MQTT topics
- Filter messages based on topic patterns
- Monitor MQTT broker status
- Control Quality of Service (QoS) levels
- Display published messages verbosely
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mosquitto_sub

> A simple MQTT version 3.1.1 client that will subscribe to topics and print the messages that it receives.
> More information: <https://mosquitto.org/man/mosquitto_sub-1.html>.

- Subscribe to the topic `sensors/temperature` information with Quality of Service (`QoS`) set to 1. (The default hostname is `localhost` and port 1883):

`mosquitto_sub {{[-t|--topic]}} {{sensors/temperature}} {{[-q|--qos]}} {{1}}`

- Subscribe to all broker status messages publishing on `iot.eclipse.org` port 1885 and print published messages verbosely:

`mosquitto_sub {{[-v|--verbose]}} {{[-h|--host]}} "iot.eclipse.org" {{[-p|--port]}} 1885 {{[-t|--topic]}} {{\$SYS/#}}`

- Subscribe to multiple topics matching a given pattern. (+ takes any metric name):

`mosquitto_sub {{[-t|--topic]}} {{sensors/machines/+/temperature/+}}`
