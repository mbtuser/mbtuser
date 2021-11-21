systemUtil.CloseProcessByName ("firefox.exe")
systemUtil.Run ("C:\Program Files\Mozilla Firefox\firefox.exe")

Browser("Dashboard - Advantage_2").Navigate "https://ci.advantageonlinebanking.com/dashboard"

If Browser("Dashboard - Advantage").Page("Dashboard - Advantage").WebButton("WebButton").Exist Then
	Browser("Dashboard - Advantage").Page("Dashboard - Advantage").WebButton("WebButton").Click 5,5
       Browser("Dashboard - Advantage").Page("Dashboard - Advantage").WebMenu("My Profile Managment console").Select "Logout"
End If

Browser("Dashboard - Advantage").Page("Home - Advantage Bank").WebButton("Forgotten password").Click 5,5 @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Dashboard - Advantage").Page("Home - Advantage Bank").WebEdit("username_2").Set Parameter("User_Name") @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dashboard - Advantage").Page("Home - Advantage Bank").WebButton("Submit").Click 5,5 @@ script infofile_;_ZIP::ssf7.xml_;_
wait 5
Browser("Dashboard - Advantage").Page("Home - Advantage Bank").WebEdit("password_2").Set Parameter("New_Password")
Browser("Dashboard - Advantage").Page("Home - Advantage Bank").WebEdit("confirmPass").Set Parameter("Repeat_New_Password")
Browser("Dashboard - Advantage").Page("Home - Advantage Bank").WebButton("Submit").Click 5,5 @@ script infofile_;_ZIP::ssf10.xml_;_
