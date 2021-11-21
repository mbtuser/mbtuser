if Device("Device").App("UICatalog").MobileLabel("Tabs").Exist Then
Device("Device").App("UICatalog").MobileLabel("Tabs").Tap
End If
Device("Device").App("UICatalog").MobileButton("Button1").Tap
Device("Device").App("UICatalog").MobileButton("Button2").Tap
Device("Device").App("UICatalog").MobileTabStrip("com.sample.UICatalog:id/").Select 1
Device("Device").App("UICatalog").MobileTabStrip("com.sample.UICatalog:id/").Select 2
Device("Device").App("UICatalog").MobileButton("Add Tab").Tap
Device("Device").Back
