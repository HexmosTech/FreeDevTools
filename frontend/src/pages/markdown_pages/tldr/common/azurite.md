---
title: "Azurite - Emulate Azure Storage APIs | Free DevTools"
name: azurite
path: /freedevtools/tldr/common/azurite
canonical: "https://hexmos.com/freedevtools/tldr/common/azurite/"
description: "Emulate Azure Storage APIs with Azurite, a local Azure Storage emulator. Test blob, queue, and table services without connecting to Azure. Free online tool, no registration required."
category: common
keywords:
- Azure Storage emulator
- Blob storage emulator
- Queue storage emulator
- Table storage emulator
- Azurite local development
- Azure Storage API testing
- Blob service emulator
- Queue service emulator
- Table service emulator
- Azurite command line
features:
- Emulate Azure Blob Storage services locally
- Emulate Azure Queue Storage services locally
- Emulate Azure Table Storage services locally
- Customize listening ports for each storage service
- Enable debug logging for troubleshooting
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# azurite

> Azure Storage API compatible server (emulator) in local environment.
> More information: <https://www.npmjs.com/package/azurite>.

- Use an existing location as workspace path:

`azurite {{[-l|--location]}} {{path/to/directory}}`

- Disable access log displayed in console:

`azurite {{[-s|--silent]}}`

- Enable debug log by providing a file path as log destination:

`azurite {{[-d|--debug]}} {{path/to/debug.log}}`

- Customize the listening address of Blob/Queue/Table service:

`azurite {{--blobHost|--queueHost|--tableHost}} {{0.0.0.0}}`

- Customize the listening port of Blob/Queue/Table service:

`azurite {{--blobPort|--queuePort|--tablePort}} {{8888}}`
