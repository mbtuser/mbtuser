Public Function EnableWebSettingForMobile()
Set qtMobileLauncher = QTP.Test.Settings.Launchers("Mobile")
qtMobileLauncher.Lab = "MobileCenter"
qtMobileLauncher.Device.OSVersionCriteria = "> 10.3.1"
qtMobileLauncher.Device.OS = "iOS"
qtMobileLauncher.EnableWebSettingForMobile

'Set test options
qtMobileLauncher.InstallApps = true
qtMobileLauncher.RestartApps = true
qtMobileLauncher.UninstallApps = false
qtMobileLauncher.TrackCPUMetric = true
qtMobileLauncher.TrackMemoryMetric = true
qtMobileLauncher.TrackFreeMemoryMetric = true
qtMobileLauncher.TrackLogs = true

End Function

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
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileTenantId"
WshShell.RegWrite myKey, Parameter("dl_tenant"),"REG_SZ"
Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MobileAuthType"
WshShell.RegWrite myKey, Parameter("dl_type"),"REG_DWORD"
Set WshShell = Nothing

