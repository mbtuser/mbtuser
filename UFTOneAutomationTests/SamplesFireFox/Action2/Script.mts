If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Registration").Exist Then
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Registration").Click
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("firstName").Set Parameter("firstName") @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("lastName").Set Parameter("lastName") @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("email").Set Parameter("email") @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set Parameter("username") @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure Parameter("password") @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("confirmPass").SetSecure Parameter("confirmPass") @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Register").Click
End If @@ script infofile_;_ZIP::ssf2.xml_;_

Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login").Click @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set Parameter("username") @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure Parameter("password")
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In").Click @@ script infofile_;_ZIP::ssf15.xml_;_
 @@ script infofile_;_ZIP::ssf22.xml_;_
  If Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Exist(5) Then
 	Reporter.ReportEvent micPass, "Passed Registration Test", "Registration Login succefull"
 	else
 	Reporter.ReportEvent micFail, "Failed", "Fail to Registration new user"
 End If @@ script infofile_;_ZIP::ssf17.xml_;_
 
Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Click @@ script infofile_;_ZIP::ssf21.xml_;_
Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebMenu("My Profile Logout").Select "Logout" 
