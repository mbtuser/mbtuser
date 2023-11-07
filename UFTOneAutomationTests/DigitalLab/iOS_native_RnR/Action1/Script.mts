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

Device("Device").App("Uicatalog-Ni").MobileLabel("Buttons").Tap
Device("Device").App("Uicatalog-Ni").MobileLabel("Background Image").Tap
Device("Device").App("Uicatalog-Ni").MobileButton("Back").Tap
