'If Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Exist Then
'Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Click
'Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebMenu("My Profile Management").Select "Logout"
'End If @@ script infofile_;_ZIP::ssf12.xml_;_

If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Exist Then
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set Parameter("username")
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure Parameter("password") @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In").Click
End If @@ hightlight id_;_65898_;_script infofile_;_ZIP::ssf3.xml_;_
wait(3)
If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Exist Then @@ script infofile_;_ZIP::ssf8.xml_;_
       Reporter.ReportEvent micFail, "Failed", "Fail to Login incurrect user or password"
 	else
 	Reporter.ReportEvent micPass, "Passed Test", "Login succefull"
End If
