---
title: "Fabric Deploy - Automate Hyperledger Fabric Networks | Online Free DevTools by Hexmos"
name: minifab
path: "/freedevtools/tldr/common/minifab/"
canonical: "https://hexmos.com/freedevtools/tldr/common/minifab/"
description: "Automate Hyperledger Fabric deployments with minifab. Quickly set up, manage, and interact with blockchain networks. Free online tool, no registration required."
category: common
keywords:
- Hyperledger Fabric deployment
- blockchain network setup
- Fabric chaincode installation
- Fabric chaincode management
- Fabric ledger query
- minifab command-line tool
- blockchain development automation
- Hyperledger Fabric automation
- Fabric network administration
- Fabric application deployment
features:
- Automates Hyperledger Fabric network setup.
- Installs and manages chaincode on Fabric networks.
- Enables ledger querying for blockchain data retrieval.
- Allows invocation of chaincode methods with specific arguments.
- Simplifies application deployment on Fabric networks.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# minifab

> Automate the setup and deployment of Hyperledger Fabric networks.
> More information: <https://github.com/hyperledger-labs/minifabric>.

- Bring up the default Hyperledger Fabric network:

`minifab up {{[-i|--fabric-release]}} {{minifab_version}}`

- Bring down the Hyperledger Fabric network:

`minifab down`

- Install chaincode onto a specified channel:

`minifab install {{[-n|--chaincode-name]}} {{chaincode_name}}`

- Install a specific chaincode version onto a channel:

`minifab install {{[-n|--chaincode-name]}} {{chaincode_name}} {{[-v|--chaincode-version]}} {{chaincode_version}}`

- Initialize the chaincode after installation/upgrade:

`minifab approve,commit,initialize,discover`

- Invoke a chaincode method with the specified arguments:

`minifab invoke {{[-n|--chaincode-name]}} {{chaincode_name}} {{[-p|--chaincode-parameters]}} '"{{method_name}}", {{"argument1", "argument2", ...}}'`

- Make a query on the ledger:

`minifab blockquery {{block_number}}`

- Quickly run an application:

`minifab apprun {{[-l|--chaincode-language]}} {{app_programming_language}}`
