'Create a QTP object
Set QTP = CreateObject("QuickTest.Application")
QTP.Launch
QTP.Visible = False
 
'Open a UFT One test
QTP.Open "C:\Users\Administrator\Desktop\tool\iOS_native_InApp", True 
'Set the UFT One test path
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
 
'Set result location
Set qtpResultsOpt = CreateObject("QuickTest.RunResultsOptions")
qtpResultsOpt.ResultsLocation = "C:\Users\Administrator\Desktop\tool\iOS_native_InApp" + "\Results" 

'Run the test
QTP.Test.Run qtpResultsOpt
 
'Close UFT One
QTP.Test.Close
QTP.Quit