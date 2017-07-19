###
# Reset Kanban Web - Delete the Kanban web and recreate it from the PnPWebTemplate.
# $Password: Web must pass the password in Powershell parameter to can read it, because it can't be read from Environment variable cause it's secret
#  - see https://www.visualstudio.com/en-us/docs/build/define/variables
###
[CmdletBinding()]
Param(
	[Parameter(Mandatory=$True)]
	[string]$password
)

# Environment Variables
$componentSiteName = $env:COMPONENTSITENAME
$teamSiteTemplate = "STS#0"

 Write-Host "1# Connect to SharePoint ... user utilis�: $($env:USERNAME)" -ForegroundColor Magenta
 $PasswordAsSecure = ConvertTo-SecureString $password -AsPlainText -Force
 $Credentials = New-Object System.Management.Automation.PSCredential($env:USERNAME, $PasswordAsSecure)

# Suppressions
# Connect to Root Site for delete Component Web
[System.Net.ServicePointManager]::ServerCertificateValidationCallback = {$true}
Connect-PnPOnline -Url $env:SOFTWARESITEURL -Credentials $Credentials

Remove-PnPWeb -Url $componentSiteName -Force

# Creation
Write-Host "ResetPnPSite - Création du sous-site $($componentSiteName)" -ForegroundColor Green
New-PnPWeb -Url $componentSiteName -Title $componentSiteName -Template $teamSiteTemplate
