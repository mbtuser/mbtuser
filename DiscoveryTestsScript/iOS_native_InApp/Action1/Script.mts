If Device("Device").App("UICatalog_NI").MobileList("tableMAinFirst").Exist(5) Then
Device("Device").App("UICatalog_NI").MobileList("tableMAinFirst").Select 0,0
else
Reporter.ReportEvent micFail, "Failed", "mobile native in-app failed to click on the app"
End If
Device("Device").App("UICatalog_NI").MobileButton("Gray").Tap 47.897430,19.358973
Device("Device").App("UICatalog_NI").MobileButton("Back").Tap
 If Device("Device").App("UICatalog_NI").MobileList("tableMAinFirst").Exist(5) Then
 	Reporter.ReportEvent micPass, "Passed Test", "mobile native in-app run succefull"
 	else
 	Reporter.ReportEvent micFail, "Failed", "mobile native in-app failed to run"
 End If
