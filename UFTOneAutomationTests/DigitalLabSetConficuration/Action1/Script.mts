Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileHostAddress"
WshShell.RegWrite myKey, Parameter("dl_host"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileHostPort"
WshShell.RegWrite myKey, Parameter("dl_port"),"REG_SZ"
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
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobilePassword"
WshShell.RegWrite myKey, Parameter("dl_password"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileAccount"
WshShell.RegWrite myKey, Parameter("dl_account"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileTenantId"
WshShell.RegWrite myKey, Parameter("dl_tenant"),"REG_SZ"
Set WshShell = Nothing
