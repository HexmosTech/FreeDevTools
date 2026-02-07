# ipm-install.ps1
$ErrorActionPreference = "Stop"

$APPNAME = "ipm"
# Global installation dir for Windows (matching your Bash script logic)
$INSTALL_DIR = "$env:USERPROFILE\.local\bin"

# Detect ARCH (Normalize to amd64/arm64)
$RAW_ARCH = $env:PROCESSOR_ARCHITECTURE
$ARCH = "amd64"
if ($RAW_ARCH -eq "ARM64") { $ARCH = "arm64" }

# Since this is the .ps1 version, OS is explicitly windows
$OS = "windows"
$EXT = ".exe"

$TARGET = "$INSTALL_DIR\$APPNAME$EXT"
$DOWNLOAD_URL = "https://github.com/HexmosTech/freeDevTools/releases/latest/download/ipm-$OS-$ARCH$EXT"

###################################
# Ensure install dir exists
###################################
if (!(Test-Path -Path $INSTALL_DIR)) {
    New-Item -ItemType Directory -Path $INSTALL_DIR -Force | Out-Null
}

###################################
# Check existing binary
###################################

if (Test-Path -Path $TARGET) {
    Write-Host "==> $APPNAME already exists at $TARGET"
    Write-Host "Run it using: $TARGET"
    return 
}
# Generate Install ID (date + random)
$INSTALL_ID = "install-$([DateTimeOffset]::Now.ToUnixTimeSeconds())-$(Get-Random -Minimum 1000 -Maximum 9999)"

###################################
# Track installation start (Background)
###################################
$StartPayload = @{
    api_key     = "phc_bC7cMka8DieEik61bxec1xAg3hANE8oNNGoelwXoE9I"
    event       = "ipm_install_started"
    distinct_id = $INSTALL_ID
    properties  = @{
        os     = $OS
        arch   = $ARCH
        method = "curl" 
    }
} | ConvertTo-Json -Compress

# Using Start-Job because it is built into all Windows versions
Start-Job -ScriptBlock {
    param($Payload)
    Invoke-RestMethod -Uri "https://us.i.posthog.com/i/v0/e/" -Method Post -Body $Payload -ContentType "application/json"
} -ArgumentList $StartPayload | Out-Null

###################################
# Download binary
###################################
Write-Host "==> Installing $APPNAME ($OS-$ARCH) to $INSTALL_DIR ..."
Write-Host "==> Downloading from $DOWNLOAD_URL ..."

try {
    # Ensure TLS 1.2 for GitHub downloads
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    Invoke-WebRequest -Uri $DOWNLOAD_URL -OutFile $TARGET -UseBasicParsing
} catch {
    Write-Host "==> Download failed: $($_.Exception.Message)"
    exit 1
}

###################################
# Track installation success (Background)
###################################
$SuccessPayload = $StartPayload -replace "ipm_install_started", "ipm_install_succeeded"

Start-Job -ScriptBlock {
    param($Payload)
    Invoke-RestMethod -Uri "https://us.i.posthog.com/i/v0/e/" -Method Post -Body $Payload -ContentType "application/json"
} -ArgumentList $SuccessPayload | Out-Null

# Update PATH for future sessions
$UserPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($UserPath -notlike "*$INSTALL_DIR*") {
    Write-Host "==> Adding $INSTALL_DIR to user PATH..."
    [Environment]::SetEnvironmentVariable("Path", "$UserPath;$INSTALL_DIR", "User")
    # Update current session's PATH as well
    $env:Path += ";$INSTALL_DIR"
}

# Define a Function for the current session
function ipm { & "$TARGET" @args }

Write-Host "==> Installation complete! You can now run '$APPNAME'."