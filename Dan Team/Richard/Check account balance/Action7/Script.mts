systemUtil.CloseProcessByName ("firefox.exe")
systemUtil.Run ("C:\Program Files\Mozilla Firefox\firefox.exe")

Browser("Home - Advantage Bank").Navigate "https://ci.advantageonlinebanking.com/dashboard" @@ hightlight id_;_1382620_;_script infofile_;_ZIP::ssf36.xml_;_

If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login").Exist Then
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set Parameter("User_Name")
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").Set Parameter("Password")
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login").Click 5,5
End If @@ script infofile_;_ZIP::ssf1.xml_;_

Browser("Home - Advantage Bank").Page("Dashboard - Advantage").Link("View All Accounts").Click 5,5 @@ script infofile_;_ZIP::ssf7.xml_;_
