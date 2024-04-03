If Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("Page").Link("Swipe").Exist(5) Then
	 Reporter.ReportEvent micPass, "app display", "the gesture hybrid app install properly"
 	else
 	Reporter.ReportEvent micFail, "app not display", "Fail to install gesture hybrid app"
End If
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("Page").Link("Swipe").Click
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("touchSwipe").WebElement("test").Swipe moveDown, 96
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("touchSwipe").WebElement("test_2").Swipe moveUp, 129
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("touchSwipe").WebElement("test_3").Swipe moveRight, 105
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("touchSwipe").WebElement("test_4").Swipe moveLeft, 130
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("touchSwipe").WebButton("Back Button").Click
