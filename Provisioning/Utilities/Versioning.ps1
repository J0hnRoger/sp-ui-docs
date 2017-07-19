# Module NPM permettant d'incrémenter le numéro de version du package.json

$packageJson = Get-Content -Raw -Path ".\package.json" | ConvertFrom-Json
$propertyBagVersion = 'a5sysversion'

if ($Uninstall.IsPresent) {
    Write-Host "#Versioning - Delete Version property on WebProperties:" $propertyBagVersion -ForegroundColor Yellow
    Remove-PnPPropertyBagValue -Key $propertyBagVersion -Force
    Remove-PnPJavaScriptLink -Name "a5version"
} else {

    if ($VersionType) {
        npm run increment $VersionType.ToLower()
        Write-Host "#Versioning - New Version : " $VersionType

        $tagMsg = $moduleName + ' - version ' + $VersionType.ToLower() + ' - ' + $litVersion
        git tag -a $litVersion -m $tagMsg
    }

    $packageJson = Get-Content -Raw -Path ".\package.json" | ConvertFrom-Json
    $version = $packageJson.version
    $moduleName = $packageJson.name
    $litVersion = 'v-' + $version

    Write-Host "#Versioning - Deploy version : " $version -ForegroundColor Cyan

    Write-Host "#Versioning - Register version in property bag of SPWeb " -ForegroundColor Cyan
    Set-PnPPropertyBagValue -Key $propertyBagVersion -Value $litVersion

    # Add-PnPJavaScriptLink -Name 'a5version' -Scope "Web" -Url "/sites/software/Style%20Library/A5Sys/version.js"
}
