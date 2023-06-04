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

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileTenantIdAT"
WshShell.RegWrite myKey, Parameter("dl_tenant_at"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileTenantName"
WshShell.RegWrite myKey, Parameter("dl_tenant_name"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileTenantNameAT"
WshShell.RegWrite myKey, Parameter("dl_tenant_name_at"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileWorkspaceId"
WshShell.RegWrite myKey, Parameter("dl_workspace_id"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileWorkspaceIdAT"
WshShell.RegWrite myKey, Parameter("dl_workspace_id_at"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileWorkspaceIdUP"
WshShell.RegWrite myKey, Parameter("dl_workspace_id_up"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileTenantIdUP"
WshShell.RegWrite myKey, Parameter("dl_tenant_up"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileTenantNameUP"
WshShell.RegWrite myKey, Parameter("dl_tenant_name_up"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileWorkspaceName"
WshShell.RegWrite myKey, Parameter("dl_workspace_name"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileWorkspaceNameAT"
WshShell.RegWrite myKey, Parameter("dl_workspace_name_at"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileUseSSL"
WshShell.RegWrite myKey, Parameter("dl_ssl"),"REG_DWORD"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\DigitalLab_AccessKey"
WshShell.RegWrite myKey, Parameter("dl_access_key"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\DigitalLab_InsecureSSL"
WshShell.RegWrite myKey, Parameter("dl_insecure_ssl"),"REG_DWORD"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\DigitalLab_ValueEdge_AccessKey"
WshShell.RegWrite myKey, Parameter("dl_ve_access_key"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileAuthType"
WshShell.RegWrite myKey, Parameter("dl_type"),"REG_DWORD"
Set WshShell = Nothing
