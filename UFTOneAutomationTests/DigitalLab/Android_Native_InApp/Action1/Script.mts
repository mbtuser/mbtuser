If Device("Device").App("Android System").MobileButton("OK").Exist(3) Then
	Device("Device").App("Android System").MobileButton("OK").Tap
End If
Device("Device").App("UICatalog").MobileList("list").Select 1
Device("Device").App("UICatalog").MobileButton("Button").Tap
