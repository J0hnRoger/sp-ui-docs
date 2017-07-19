##
# Deploy ScriptLink Custom Actions on the web
##
[CmdletBinding()]
Param(
    [Parameter(Mandatory=$False)]
    [switch]$Uninstall=$false,
    [Parameter(Mandatory=$False)]
    [switch]$Prod
)

if ($Prod.IsPresent)
{
    $caUrl = (Get-PnPSite).Url + '/Style library/' + $AppFolderName + '/' + $packageJson.name
    Write-Host "Production version " $caUrl
    $caName = 'A5Prod'
} else {
    $caUrl = $localServerUrl
    $caName = 'A5Dev'
}

function DeployCA () {
    Write-Host "DeployScriptCA# Register JS files in CA ..." $caName " - " $caUrl -ForegroundColor Magenta
    Add-PnPJavaScriptBlock -Name $caName -Scope "Web" -Script "document.write('<script type=""text/javascript"" src=""$($caUrl)/main.js""></scr'+'ipt>');document.write('<link href=""$($caUrl)/main.css"" rel=""stylesheet"">');" -Sequence 9999
}

function RetractCA () {
    Write-Host "RetractScriptCA# Remove JS Custom Actions ... ${$caName}" -ForegroundColor Magenta
    Remove-PnPJavaScriptLink -Name $caName -Force
}

if ($Uninstall.IsPresent)
{
    RetractCA
}
else {
    DeployCA
}
