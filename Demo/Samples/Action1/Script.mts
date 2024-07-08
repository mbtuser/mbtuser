If Browser("Browser").Page("Home - Advantage Bank").WebButton("Open").Exist Then
	Browser("Browser").Page("Home - Advantage Bank").WebButton("Open").Click
	Browser("Browser").Page("Dashboard - Advantage").WebButton("WebButton").Click
       Browser("Browser").Page("Dashboard - Advantage").WebMenu("My Profile Management").Select "Logout" @@ script infofile_;_ZIP::ssf13.xml_;_
End If @@ script infofile_;_ZIP::ssf11.xml_;_
wait(3)
If Browser("Browser").Page("Home - Advantage Bank").WebButton("Login").Exist Then
	Browser("Browser").Page("Home - Advantage Bank").WebButton("Login").Click
wait(3)
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set Parameter("username")
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure Parameter("password") @@ script infofile_;_ZIP::ssf5.xml_;_
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In").Click
End If
wait(3)
  If Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Exist(5) Then
 	Reporter.ReportEvent micPass, "Passed Login Test", "Login succefull"
 	else
 	Reporter.ReportEvent micFail, "Failed", "Fail to Login incurrect user or password"
 End If
