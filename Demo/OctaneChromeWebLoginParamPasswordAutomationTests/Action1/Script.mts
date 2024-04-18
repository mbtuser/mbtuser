
Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fileSystemObj.FileExists(chromeExist) then
 systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe")
Else
   systemUtil.Run ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
End If

Browser("DASHBOARD_2").Navigate "https://nightly-dev.almoctane.com/ui/?TENANTID=1&p=1001/1002#/dashboard"
If Browser("DASHBOARD_2").Page("DASHBOARD").Image("user avatar").Exist(15) Then
Browser("DASHBOARD_2").Page("DASHBOARD").Image("user avatar").Click @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("DASHBOARD_2").Page("DASHBOARD").WebButton("Logout").Click
 End If
 If Browser("DASHBOARD").Page("Login").WebButton("Login").Exist(15) Then
Browser("DASHBOARD").Page("Login").WebEdit("WebEdit").Set Parameter("Octane_User_Name") @@ script infofile_;_ZIP::ssf25.xml_;_
Browser("DASHBOARD").Page("Login").WebEdit("WebEdit_2").SetSecure Parameter("Octane_Password") @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("DASHBOARD").Page("Login").WebButton("Login").Click
 End If
 If Browser("DASHBOARD_2").Page("DASHBOARD").Image("user avatar").Exist(15) Then
 	Reporter.ReportEvent micPass, "Login successful","the Octane login successful"
 	Else
 	Reporter.ReportEvent micFail, "Login fail","the Octane fail to login"
 End If
Reporter.ReportEvent micDone, "Done the tests","Done the Octane login tests"
systemUtil.CloseProcessByName ("chrome.exe")



