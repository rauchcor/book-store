# copy process-level environment variables to machine level
foreach($key in [System.Environment]::GetEnvironmentVariables('Process').Keys) {
    if ([System.Environment]::GetEnvironmentVariable($key, 'Machine') -eq $null) {
        $value = [System.Environment]::GetEnvironmentVariable($key, 'Process')
        [System.Environment]::SetEnvironmentVariable($key, $value, 'Machine')
    }
}

# start iis
Start-Service W3SVC 

# make sure the logfile exists
Invoke-WebRequest http://127.0.0.1/api/health -UseBasicParsing | Out-Null
netsh http flush logbuffer | Out-Null

# continuously write logfile to std out
Get-Content -Path 'C:\iislog\W3SVC\u_extend1.log' -Tail 1 -Wait