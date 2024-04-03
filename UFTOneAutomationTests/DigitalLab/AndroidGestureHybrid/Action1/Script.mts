If Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("Page").Link("Wait to opject").Exist(5) Then
	 Reporter.ReportEvent micPass, "app display", "the gesture hybrid app install properly"
 	else
 	Reporter.ReportEvent micFail, "app not display", "Fail to install gesture hybrid app"
End If
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("Page").Link("Wait to opject").Click
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("HPE Mobile Center").WebButton("wait five seconds button").Click
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("HPE Mobile Center").WebButton("Back Button").Click
