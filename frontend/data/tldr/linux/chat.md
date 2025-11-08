---
title: "Automate Chat - Control Serial Device Conversations | Online Free DevTools by Hexmos"
name: chat
path: "/freedevtools/tldr/linux/chat/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/chat/"
description: "Automate serial device conversations with Chat, a command-line tool for scripting interactions. Establish PPP connections and manage modems easily. Free online tool, no registration required."
category: linux
keywords:
  - serial communication automation
  - modem chat script execution
  - PPP connection setup
  - command-line chat interface
  - serial port communication
  - automate modem interactions
  - chat script debugger
  - linux chat command
  - serial device control
  - expect-send script interpreter
features:
  - Automate modem or serial device conversations.
  - Execute chat scripts from the command line or a file.
  - Set custom timeouts for expecting responses.
  - Log conversation details to syslog.
  - Include abort conditions for error handling.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# chat

> Automate conversations with a modem or serial device.
> Commonly used to establish PPP (Point-to-Point Protocol) connections.
> More information: <https://manned.org/chat.8>.

- Execute a chat script directly from the command line:

`chat '{{expect_send_pairs}}'`

- Execute a chat script from a file:

`chat -f '{{path/to/chat_script}}'`

- Set a custom timeout (in seconds) for expecting a response:

`chat -t {{timeout_in_seconds}} '{{expect_send_pairs}}'`

- Enable verbose output to log the conversation to `syslog`:

`chat -v '{{expect_send_pairs}}'`

- Use a report file to log specific strings received during the conversation:

`chat -r {{path/to/report_file}} '{{expect_send_pairs}}'`

- Dial a phone number using a variable, substituting `\T` in the script:

`chat -T '{{phone_number}}' '{{"ATDT\\T CONNECT"}}'`

- Include an abort condition if a specific string is received:

`chat 'ABORT "{{error_string}}" {{expect_send_pairs}}'`
