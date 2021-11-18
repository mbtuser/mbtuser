systemUtil.CloseProcessByName ("firefox.exe")
systemUtil.Run ("C:\Program Files\Mozilla Firefox\firefox.exe")

Browser("Home - Advantage Bank").Navigate "https://ci.advantageonlinebanking.com/dashboard" @@ hightlight id_;_1382620_;_script infofile_;_ZIP::ssf36.xml_;_

If Browser("Accounts - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Exist Then
 @@ script infofile_;_ZIP::ssf29.xml_;_
Browser("Accounts - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Click 5,5 @@ script infofile_;_ZIP::ssf30.xml_;_
Browser("Accounts - Advantage Bank").Page("Dashboard - Advantage").WebMenu("My Profile Logout").Select "Logout" @@ script infofile_;_ZIP::ssf31.xml_;_
 @@ script infofile_;_ZIP::ssf33.xml_;_
End If
 @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Accounts - Advantage Bank").Page("Home - Advantage Bank").WebButton("Registration").Click 5,5 @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("Accounts - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set Parameter("First_name") @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Accounts - Advantage Bank").Page("Home - Advantage Bank").WebEdit("lastName").Set Parameter("Last_name") @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Accounts - Advantage Bank").Page("Home - Advantage Bank").WebEdit("email").Set Parameter("Email") @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Accounts - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username_2").Set Parameter("User_Name") @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Accounts - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password_2").Set Parameter("Password")
Browser("Accounts - Advantage Bank").Page("Home - Advantage Bank").WebEdit("confirmPass").Set Parameter("Confirm_Password")
Browser("Accounts - Advantage Bank").Page("Home - Advantage Bank").WebButton("Register").Click 5,5 @@ script infofile_;_ZIP::ssf20.xml_;_
