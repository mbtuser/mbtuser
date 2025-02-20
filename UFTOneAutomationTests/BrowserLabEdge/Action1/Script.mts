If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Exist Then
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set Parameter("username")
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure Parameter("password")
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In").Click
End If @@ script infofile_;_ZIP::ssf6.xml_;_

If Browser("Home - Advantage Bank").Page("Dashboard - Advantage").Link("Dashboard").Exist Then
	Reporter.ReportEvent micPass, "Passed Test", "Login succefull"
 	else
 	Reporter.ReportEvent micFail, "Failed", "Fail to Login incurrect user or password"
End If
 @@ script infofile_;_ZIP::ssf7.xml_;_
