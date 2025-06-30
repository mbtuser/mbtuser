Dim iURL
Dim objShell
iURL = "https://advantageonlinebanking.com/dashboard"
set objShell = CreateObject("Shell.Application")

Set fileSystemObj = createobject("Scripting.FileSystemObject")
edgeExist = "C:\Program Files\Mozilla Firefox\firefox.exe"
If fileSystemObj.FileExists(edgeExist) then
	objShell.ShellExecute "C:\Program Files\Mozilla Firefox\firefox.exe", iURL, "", ""
Else
	objShell.ShellExecute "C:\Program Files (x86)\Mozilla Firefox\firefox.exe", iURL, "", ""
End If
wait(5) @@ script infofile_;_ZIP::ssf24.xml_;_

If Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Exist(5) Then
     Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Click @@ script infofile_;_ZIP::ssf22.xml_;_
     Browser("Home - Advantage Bank_3").Page("Dashboard - Advantage").WebMenu("My Profile Management").Select "Logout" @@ script infofile_;_ZIP::ssf23.xml_;_
 Else
     Reporter.ReportEvent micDone, "the page not in login", "the Advantage bancking not in login"
End If @@ script infofile_;_ZIP::ssf18.xml_;_

If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Registration").Exist(5) Then
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Registration").Click
	wait(3)
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("firstName").Set Parameter("firstName") @@ script infofile_;_ZIP::ssf4.xml_;_
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("lastName").Set Parameter("lastName") @@ script infofile_;_ZIP::ssf5.xml_;_
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("email").Set Parameter("email") @@ script infofile_;_ZIP::ssf6.xml_;_
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set Parameter("username")
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").Set Parameter("password") @@ script infofile_;_ZIP::ssf8.xml_;_
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("confirmPass").Set Parameter("confirmPass") @@ script infofile_;_ZIP::ssf9.xml_;_
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Register").Click
End If
 systemUtil.CloseProcessByName ("firefox.exe")
