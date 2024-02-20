If Device("Device").App("Android System").MobileButton("OK").Exist(3) Then
	Device("Device").App("Android System").MobileButton("OK").Tap
End If
Device("Device").App("UICatalog").MobileList("list").Select 1
Device("Device").App("UICatalog").MobileButton("Button").Tap @@ hightlight id_;_-1_;_script infofile_;_ZIP::ssf5.xml_;_

Device("Device").App("Home").MobileObject("com.miui.home:id/search_").Tap
