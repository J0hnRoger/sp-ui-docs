##
# Launch - Provisioning Framework
##

[CmdletBinding()]
Param(
    [Parameter(Mandatory=$False)]
	[string]$Env="dev",

    [Parameter(Mandatory=$False)]
	[switch]$Uninstall=$false,

    [Parameter(Mandatory=$False)]
	[switch]$Production,

	[Parameter(Mandatory=$False)]
	[switch]$Update,

	[Parameter(Mandatory=$False)]
	[switch]$Minor=$false,

	[Parameter(Mandatory=$False)]
	[switch]$Major=$false,

	[Parameter(Mandatory=$False)]
	[switch]$Patch=$false,

	[Parameter(Mandatory=$False)]
	[switch]$OneShot=$false
)

# Load package configuration
$packageJson = Get-Content -Raw -Path ".\package.json" | ConvertFrom-Json
$version = $packageJson.version

# Load JSON env configuration
$configFile = Get-Content -Raw -Path "env.json" | ConvertFrom-Json
$config = $configFile.$Env

if ($Major.IsPresent) {
    $versionType = 'Major'
}
if ($Minor.IsPresent) {
    $versionType = 'Minor'
}
if ($Patch.IsPresent) {
    $versionType = 'Patch'
}

Write-Host "Deploiement de la configuration " $config

# Launch solution deploiement
. ".\Provisioning\Deploy-Solution.ps1" -SiteUrl $config.siteUrl -UserName $config.login -Password $config.pass -Uninstall:$Uninstall -Prod:$Production -VersionType $versionType -Update:$Update
