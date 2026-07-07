Dim iURL, objShell, fileSystemObj, browserPath

iURL = "https://advantageonlineshopping.com/#/"
Set objShell = CreateObject("Shell.Application")
Set fileSystemObj = CreateObject("Scripting.FileSystemObject")

browserPath = "C:\Program Files\Mozilla Firefox\firefox.exe"
If Not fileSystemObj.FileExists(browserPath) Then
    browserPath = "C:\Program Files (x86)\Mozilla Firefox\firefox.exe"
    If Not fileSystemObj.FileExists(browserPath) Then
        Reporter.ReportEvent micFail, "Browser Launch", "Firefox not found on this machine"
        ExitTest
    End If
End If

objShell.ShellExecute browserPath, iURL, "", "", 1
Wait(5)
Browser("Advantage Shopping").FullScreen
Browser("Advantage Shopping").Page("Advantage Shopping_2").Link("UserMenu").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping_2").WebEdit("username").Set Parameter("username") @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping_2").WebElement("Password").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping_2").WebEdit("password").SetSecure Parameter("password") @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping_2").WebButton("sign_in_btn").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping_2").Link("UserMenu_2").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping_2").Link("My orders").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping_2").WebElement("menuSearch").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping_2").WebEdit("Search in orders").Set Parameter("OrderNumber") @@ script infofile_;_ZIP::ssf13.xml_;_
