Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("Page").Link("Form Page").Click
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("HPE Mobile Center").WebEdit("username").Set Parameter("user_name")
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("HPE Mobile Center").WebEdit("psw").SetSecure Parameter("password")
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("HPE Mobile Center").WebElement("function visitPage(){").Click
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("HPE Mobile Center").WebButton("Back Button").Click
