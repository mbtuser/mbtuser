Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("Page").Link("Swipe").Click
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("touchSwipe").WebElement("test").Swipe moveDown, 105
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("touchSwipe").WebElement("test_2").Swipe moveUp, 167
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("touchSwipe").WebElement("test_3").Swipe moveRight, 120
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("touchSwipe").WebElement("test_4").Swipe moveLeft, 94
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("touchSwipe").WebButton("Back Button").Click
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("Page").Link("Form Page").Click
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("HPE Mobile Center").WebEdit("firstname").Set Parameter("firstname")
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("HPE Mobile Center").WebEdit("lastname").Set Parameter("lastname")
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("HPE Mobile Center").WebCheckBox("vehicle2").Set "ON"
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("HPE Mobile Center").WebCheckBox("vehicle1").Set "ON"
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("HPE Mobile Center").WebButton("Submit Query").Click
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("HPE Mobile Center").WebButton("Back Button").Click
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("Page").Link("Tap to Zoom").Click
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("image viewer").Image("1").Click
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("image viewer").Image("1_2").Click
Device("Device").App("Gestures Hybrid").MobileWebView("mybrowser").Page("image viewer").WebButton("Back Button").Click
RunAction "Action2", oneIteration
