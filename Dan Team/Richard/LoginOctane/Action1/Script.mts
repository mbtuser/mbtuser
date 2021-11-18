Browser("Unsupported Browser").Navigate Parameter("url") @@ script infofile_;_ZIP::ssf21.xml_;_

If Browser("MODEL BASED TESTING -").Page("MODEL BASED TESTING -").Image("user avatar").Exist Then
	Browser("MODEL BASED TESTING -").Page("MODEL BASED TESTING -").Image("user avatar").Click
	Browser("MODEL BASED TESTING -").Page("MODEL BASED TESTING -").WebButton("Logout").Click
End If
'Failed to login
Browser("Unsupported Browser").Page("Unsupported Browser").WebEdit("WebEdit_2").Set "blabla@bla.com"
Browser("Unsupported Browser").Page("Unsupported Browser").WebEdit("WebEdit").Set "blabla"
Browser("Unsupported Browser").Page("Unsupported Browser").WebButton("Login").Click

If Browser("MODEL BASED TESTING -").Page("Login").WebElement("Authentication failed").Exist Then
Browser("Unsupported Browser").Page("Unsupported Browser").WebEdit("WebEdit_2").Set Parameter("user_name")
Browser("Unsupported Browser").Page("Unsupported Browser").WebEdit("WebEdit").Set Parameter("password")
Browser("Login").Page("Login").WebButton("Login").Click @@ script infofile_;_ZIP::ssf23.xml_;_
 @@ script infofile_;_ZIP::ssf24.xml_;_
End If @@ script infofile_;_ZIP::ssf16.xml_;_

If Browser("MODEL BASED TESTING -").Page("MODEL BASED TESTING -").Image("user avatar").Exist Then
	Browser("MODEL BASED TESTING -").Page("MODEL BASED TESTING -").Image("user avatar").Click
	Browser("MODEL BASED TESTING -").Page("MODEL BASED TESTING -").WebButton("Logout").Click
End If

 @@ script infofile_;_ZIP::ssf18.xml_;_
 @@ script infofile_;_ZIP::ssf20.xml_;_
'SystemUtil.CloseProcessByName("chrome.exe")
