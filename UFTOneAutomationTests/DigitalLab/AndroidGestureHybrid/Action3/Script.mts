If Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("Page").Link("Form Page").Exist(5) Then
	 Reporter.ReportEvent micPass, "app display", "the gesture hybrid app install properly"
 	else
 	Reporter.ReportEvent micFail, "app not display", "Fail to install gesture hybrid app"
End If

Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("Page").Link("Form Page").Click
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("HPE Mobile Center").WebEdit("firstname").Set Parameter("firstname")
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("HPE Mobile Center").WebCheckBox("vehicle1").Set "ON"
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("HPE Mobile Center").WebRadioGroup("gender").Select "female"
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("HPE Mobile Center").WebEdit("username").Set Parameter("username")
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("HPE Mobile Center").WebElement("function visitPage(){").Click
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("HPE Mobile Center").WebEdit("psw").SetSecure Parameter("psw")
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("HPE Mobile Center").WebButton("Back Button").Click


