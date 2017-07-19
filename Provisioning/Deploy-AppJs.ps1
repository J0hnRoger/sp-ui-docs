
# Get Webpack output folder and upload all files in the style library (eventually will be replaced by CDN in the future)
[CmdletBinding()]
Param(
    [Parameter(Mandatory=$False)]
    [switch]$Uninstall=$false
)

$DistFolder = $CommandDirectory + "\..\build"

Push-Location $DistFolder

#Connect to Site Collection for upload in style library
Connect-PnPOnline -Url (Get-PnPSite).Url -Credentials $Credentials

function DeployAppModule () {
    Write-Host "AppJS# Uploading all files (non optimized)..." -ForegroundColor Magenta
    Get-ChildItem -Recurse $DistFolder -File | ForEach-Object {
        Write-Host "${$_.FullName}" -ForegroundColor Magenta
        $TargetFolder = "Style Library\$AppFolderName\" +  $packageJson.name + '\' + (Resolve-Path -relative $_.FullName) | Split-Path -Parent
        Add-PnPFile -Path $_.FullName -Folder ($TargetFolder.Replace("\","/")).Replace("./","").Replace(".","") -Checkout
    }
}

function RetractAppModule () {
    Write-Host "AppJS# Delete Source Folder (JS/CSS) in Style library..." -ForegroundColor Magenta
    Remove-PnPFolder -Name $packageJson.name -Folder "Style Library\$AppFolderName\"
}

if ($Uninstall.IsPresent)
{
    RetractAppModule
}
else {
    DeployAppModule
}

Pop-Location

Connect-PnPOnline -Url $SiteUrl -Credentials $Credentials
