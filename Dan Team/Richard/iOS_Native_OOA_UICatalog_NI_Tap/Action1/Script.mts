if Device("Device").App("UICatalog_NI").MobileLabel("Buttons").Exist Then
Device("Device").App("UICatalog_NI").MobileLabel("Buttons").Tap
End If
Device("Device").App("UICatalog_NI").MobileButton("Gray").Tap
Device("Device").App("UICatalog_NI").MobileButton("Back").Tap
