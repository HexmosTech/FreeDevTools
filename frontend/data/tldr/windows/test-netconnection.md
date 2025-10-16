---
title: "Test-NetConnection - Network Diagnostic Information | Online Free DevTools by Hexmos"
name: test-netconnection
path: "/freedevtools/tldr/windows/test-netconnection/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/test-netconnection/"
description: "Diagnose network connection issues with Test-NetConnection, a powerful PowerShell command. Troubleshoot network problems and verify connectivity. Free online tool, no registration required."
category: windows
keywords:
- network connection test
- powershell network test
- test network connectivity
- windows network troubleshooting
- network diagnostic command
- test tcp connection
- test port connection
- powershell test-netconnection command
- network ping test
- network connection analysis
features:
- Diagnose network connection problems
- Test connectivity to remote hosts
- Verify connection using specific port numbers
- Display detailed network information
- Troubleshoot network latency issues
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Test-NetConnection

> Display diagnostic information for a connection.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/nettcpip/test-netconnection>.

- Test a connection and display detailed results:

`Test-NetConnection -InformationLevel Detailed`

- Test a connection to a remote host using the specified port number:

`Test-NetConnection -ComputerName {{ip_or_hostname}} -Port {{port_number}}`
