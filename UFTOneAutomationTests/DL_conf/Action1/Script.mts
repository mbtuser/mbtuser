Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileHostAddress"
WshShell.RegWrite myKey, Parameter("dl_host"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileSecretKey"
WshShell.RegWrite myKey, Parameter("dl_key"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileClientID"
WshShell.RegWrite myKey, Parameter("dl_user"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileTenantId"
WshShell.RegWrite myKey, Parameter("dl_tenant"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileAuthType"
WshShell.RegWrite myKey, Parameter("dl_type"),"REG_DWORD"
Set WshShell = Nothing
