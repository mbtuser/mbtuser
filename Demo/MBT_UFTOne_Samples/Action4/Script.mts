Dim iURL, objShell, fileSystemObj, browserPath

iURL = "https://advantageonlinebanking.com/dashboard"
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

If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Open").Exist Then
       Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Open").Click @@ script infofile_;_ZIP::ssf9.xml_;_
End If
wait(3)
       Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Click @@ script infofile_;_ZIP::ssf2.xml_;_
       Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebMenu("My Profile Management").Select "Logout" @@ script infofile_;_ZIP::ssf3.xml_;_
       SystemUtil.CloseProcessByName "firefox.exe"
