systemUtil.CloseProcessByName ("chrome.exe")
systemUtil.Run ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")

Browser("Home - Advantage Bank").Navigate "https://ci.advantageonlinebanking.com/dashboard" @@ hightlight id_;_1382620_;_script infofile_;_ZIP::ssf36.xml_;_

If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login").Exist(15) Then
	Reporter.ReportEvent micPass, "the side is in login", "the side is in login Description"
	else
	Reporter.ReportEvent micPass, "the side not in login", "the side not in login, need to login Description"
End If

If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login").Exist(15) Then
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set Parameter("User_Name")
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").Set Parameter("Password")
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login").Click 5,5
End If @@ script infofile_;_ZIP::ssf1.xml_;_

If Browser("Home - Advantage Bank").Page("Dashboard - Advantage").Link("View All Accounts").Exist(15) Then
	Reporter.ReportEvent micPass, "Passed Custom Step Test", "Login succefull Description"
	else
	Reporter.ReportEvent micFail, "Failed to login Test", "Fail to Login incurrect user or password Description"
End If

Browser("Home - Advantage Bank").Page("Dashboard - Advantage").Link("View All Accounts").Click 5,5 @@ script infofile_;_ZIP::ssf7.xml_;_
systemUtil.CloseProcessByName ("chrome.exe")
