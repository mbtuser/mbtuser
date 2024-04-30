systemUtil.CloseProcessByName ("chrome.exe")
systemUtil.Run ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")

Browser("Home - Advantage Bank").Navigate "https://ci.advantageonlinebanking.com/dashboard" @@ hightlight id_;_1382620_;_script infofile_;_ZIP::ssf36.xml_;_

If Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Exist(15) Then
Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Click 5,5 @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebMenu("My Profile Managment console").Select "Logout" @@ script infofile_;_ZIP::ssf6.xml_;_
End If

Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login").Click 5,5 @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set Parameter("User_Name") @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").Set Parameter("Password")
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login_2").Click 5,5 @@ script infofile_;_ZIP::ssf4.xml_;_

If  Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Exist(15) Then
	Reporter.ReportEvent micPass, "Passed Custom Step Test", "Login succefull Description"
	else
	Reporter.ReportEvent micFail, "Failed to login Test", "Fail to Login incurrect user or password Description"
End If
