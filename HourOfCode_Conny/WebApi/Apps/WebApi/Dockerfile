# escape=`
FROM microsoft/aspnet:4.6.2-windowsservercore-10.0.14393.1715
SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]

RUN Import-Module IISAdministration; `
    Remove-Website -Name \"Default Web Site\"; `
    mkdir C:\webapi; `
    New-IISSite -Name WebApi -PhysicalPath C:\webapi -BindingInformation \"*:80:\";

EXPOSE 80

# add health check
HEALTHCHECK --interval=2s --timeout=5s --retries=10 CMD powershell -command `
try { `
	$result = Invoke-WebRequest http://127.0.0.1/api/health -UseBasicParsing; `
	if ($result.StatusCode -eq 200) { return 0} `
	else {return 1}; `
} catch { return 1 }

# configure IIS to write a global log file:
RUN Set-WebConfigurationProperty -p 'MACHINE/WEBROOT/APPHOST' -fi 'system.applicationHost/log' -n 'centralLogFileMode' -v 'CentralW3C'; `
    Set-WebConfigurationProperty -p 'MACHINE/WEBROOT/APPHOST' -fi 'system.applicationHost/log/centralW3CLogFile' -n 'truncateSize' -v 4294967295; `
    Set-WebConfigurationProperty -p 'MACHINE/WEBROOT/APPHOST' -fi 'system.applicationHost/log/centralW3CLogFile' -n 'period' -v 'MaxSize'; `
    Set-WebConfigurationProperty -p 'MACHINE/WEBROOT/APPHOST' -fi 'system.applicationHost/log/centralW3CLogFile' -n 'directory' -v 'c:\iislog' 
# add startup script
COPY deployment\bootstrap.ps1 C:\
ENTRYPOINT ["powershell", "C:\\bootstrap.ps1"] 

WORKDIR C:\webapi
COPY obj/Docker/publish .

