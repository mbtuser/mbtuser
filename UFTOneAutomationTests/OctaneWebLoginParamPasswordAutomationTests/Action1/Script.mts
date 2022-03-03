systemUtil.CloseProcessByName ("firefox.exe")
systemUtil.Run ("C:\Program Files\Mozilla Firefox\firefox.exe")
Browser("Login").Navigate "https://nightly-dev.almoctane.com/ui/?TENANTID=1&p=1001/1002#/dashboard" @@ script infofile_;_ZIP::ssf11.xml_;_
 
 If Browser("DASHBOARD").Page("DASHBOARD").WebElement("Open widgets & templates").Exist(15) Then
Browser("DASHBOARD").Page("DASHBOARD").WebElement("Open widgets & templates").Click @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("DASHBOARD").Page("DASHBOARD").Image("user avatar").Click @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("DASHBOARD").Page("DASHBOARD").WebButton("Logout").Click
Reporter.ReportEvent micDone, "Logout successful","the Octane was in login"
 End If
 If Browser("DASHBOARD").Page("Login").WebButton("Login").Exist(15) Then
Browser("DASHBOARD").Page("Login").WebEdit("WebEdit").Set Parameter("Octane_User_Name") @@ script infofile_;_ZIP::ssf25.xml_;_
Browser("DASHBOARD").Page("Login").WebEdit("WebEdit_2").SetSecure Parameter("Octane_Password") @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("DASHBOARD").Page("Login").WebButton("Login").Click
 End If
 If Browser("DASHBOARD").Page("DASHBOARD").WebElement("Open widgets & templates").Exist(15) Then
 	Reporter.ReportEvent micPass, "Login successful","the Octane login successful"
 	Else
 	Reporter.ReportEvent micFail, "Login fail","the Octane fail to login"
 End If
Reporter.ReportEvent micDone, "Done the tests","Done the Octane login tests"
