Browser("Dashboard - Advantage").Navigate "https://advantageonlinebanking.com/dashboard" @@ script infofile_;_ZIP::ssf5.xml_;_

If Browser("Dashboard - Advantage").Page("Dashboard - Advantage").WebButton("WebButton").Exist Then
	Browser("Dashboard - Advantage").Page("Dashboard - Advantage").WebButton("WebButton").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dashboard - Advantage").Page("Dashboard - Advantage").WebMenu("My Profile Management").Select "Logout"
End If

 If Browser("Dashboard - Advantage").Page("Home - Advantage Bank").WebButton("Sign-In").Exist(5) Then
 	Reporter.ReportEvent micPass, "Passed Test", "Logout succefull"
 	else
 	Reporter.ReportEvent micFail, "Failed", "Fail to Logout"
 End If

