# Run this script as administrator
$ports = @(3000, 5173)
$appName = "Vite Dev Server"

foreach ($port in $ports) {
    # TCP Inbound
    New-NetFirewallRule -DisplayName "$appName (TCP-In $port)" `
        -Direction Inbound `
        -LocalPort $port `
        -Protocol TCP `
        -Action Allow

    # TCP Outbound
    New-NetFirewallRule -DisplayName "$appName (TCP-Out $port)" `
        -Direction Outbound `
        -LocalPort $port `
        -Protocol TCP `
        -Action Allow
}

Write-Host "Firewall rules have been added for ports 3000 and 5173" 