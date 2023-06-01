Device("Device").App("UICatalog_NI").MobileList("tableMAinFirst").Select 0,0
wait 2
Device("Device").App("UICatalog_NI").MobileButton("Back").Tap
Device("Device").App("UICatalog_NI").MobileList("tableMAinFirst").Select 1,0
wait 2
Device("Device").App("UICatalog_NI").MobileToggle("Standard").Set "on"

Device("Device").App("UICatalog_NI").MobileButton("Back_2").Tap
Device("Device").App("UICatalog_NI").MobileList("tableMAinFirst").Select 2,0
Device("Device").App("UICatalog_NI").MobileEdit("Normal").SetFocus
Device("Device").App("UICatalog_NI").MobileEdit("Normal").Set "Qwerty"
Device("Device").App("UICatalog_NI").MobileButton("Back_3").Tap
Device("Device").App("UICatalog_NI").MobileList("tableMAinFirst").Select 3,0
Device("Device").App("UICatalog_NI").MobileButton("Back_4").Tap

Device("Device").App("UICatalog_NI").Uninstall
wait 3
Device("Device").Home
Set oDesc = Description.Create()
'oDesc("mcindex").value = "0"
oDesc("className").value = "Button"
set List = Device("Device").App("Home").ChildObjects(oDesc)
count = List.count()
	

For i = 0 To count-1
	Actual_Result = List(0).GetROProperty("accessibilityid")
   If Cstr(Actual_Result) =  "UICatalog_NI" Then
       reporter.ReportEvent micFail, "Fail to uninstall UICatalog", "Fail"
   else
	  reporter.ReportEvent micPass, "uninstall success", "Pass"
   End If
Next
