[CmdletBinding()]
Param(
	[Parameter(Mandatory=$True,Position=1)]
	[string]$SiteUrl,

	[Parameter(Mandatory=$True)]
	[string]$UserName,

	[Parameter(Mandatory=$True)]
	[string]$Password,

	[Parameter(Mandatory=$False)]
	[switch]$Prod=$false,

    [Parameter(Mandatory=$False)]
	[switch]$Uninstall=$false,

  [Parameter(Mandatory=$False)]
	[switch]$Update=$false,

	[Parameter(Mandatory=$False)]
	[string]$VersionType=$false
)

# Include Script Utilities
 . "./Provisioning/Utilities/SamplesFactory.ps1"

# -----------------
# Global parameters
# -----------------
$localServerUrl = "http://localhost:3000"
# Load package configuration for versioning
$packageJson = Get-Content -Raw -Path ".\package.json" | ConvertFrom-Json

$0 = $myInvocation.MyCommand.Definition
$CommandDirectory = [System.IO.Path]::GetDirectoryName($0)

# Name of the root folder in Style Library
$AppFolderName = "A5Sys"

# Open Connection to SharePoint
Write-Host "1# Connect to SharePoint ..." -ForegroundColor Magenta
$PasswordAsSecure = ConvertTo-SecureString $Password -AsPlainText -Force
$Credentials = New-Object System.Management.Automation.PSCredential ($UserName, $PasswordAsSecure)

[System.Net.ServicePointManager]::ServerCertificateValidationCallback = {$true}
Connect-PnPOnline -Url $SiteUrl -Credentials $Credentials

if ($Prod.IsPresent) {

  Write-Host "2# Production mode)..." -ForegroundColor Magenta
  if (-Not $Uninstall.IsPresent)
  {
    Write-Host "3# Move Artefacts\SP Files in dist folder(production mode)..." -ForegroundColor Magenta
    . "./Provisioning/Deploy-SharePointJS.ps1"

    Write-Host "4# Bundling the application (production mode)..." -ForegroundColor Magenta
    # Bundle the project in production mode
    npm run build
  }
    Write-Host "5# Upload JS in style Library (production mode)..." -ForegroundColor Magenta

   # Upload files in the style library (folders are created automatically by the PnP cmdlet)
   . "./Provisioning/Deploy-AppJs.ps1" -Uninstall:$Uninstall
}

if (-Not $Update.IsPresent)
{
  # Add ScriptLink custom action
  . "./Provisioning/Deploy-ScriptsCustomActions.ps1" -Uninstall:$Uninstall -Prod:$Prod
}

# Manage Version & register version number in webproperties
. "./Provisioning/Utilities/Versioning.ps1"

Write-Host "Done!" -ForegroundColor Green

# Close the connection to the server
Disconnect-PnPOnline
