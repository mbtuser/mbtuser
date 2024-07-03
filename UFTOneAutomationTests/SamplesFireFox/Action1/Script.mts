If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Exist Then
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set Parameter("username")
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure Parameter("password") @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In").Click
End If
  If Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Exist(5) Then
 	Reporter.ReportEvent micPass, "Passed Login Test", "Login succefull"
 	else
 	Reporter.ReportEvent micFail, "Failed", "Update Git for Jenkins discovery tests - Fail to Login incurrect user or password"
 End If
