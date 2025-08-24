Dim iURL, objShell, fileSystemObj, browserPath, browserName

iURL = "https://advantageonlinebanking.com/dashboard"
Set objShell = CreateObject("Shell.Application")
Set fileSystemObj = CreateObject("Scripting.FileSystemObject")

If fileSystemObj.FileExists("C:\Program Files\Google\Chrome\Application\chrome.exe") Then
    browserPath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
    browserName = "chrome.exe"
ElseIf fileSystemObj.FileExists("C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe") Then
    browserPath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
    browserName = "msedge.exe"
ElseIf fileSystemObj.FileExists("C:\Program Files\Mozilla Firefox\firefox.exe") Then
    browserPath = "C:\Program Files\Mozilla Firefox\firefox.exe"
    browserName = "firefox.exe"
ElseIf fileSystemObj.FileExists("C:\Program Files (x86)\Mozilla Firefox\firefox.exe") Then
    browserPath = "C:\Program Files (x86)\Mozilla Firefox\firefox.exe"
    browserName = "firefox.exe"
Else
    Reporter.ReportEvent micFail, "Browser Launch", "No supported browser found on this machine"
    ExitTest
End If

objShell.ShellExecute browserPath, iURL, "", "", 1
Wait(3)

If Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Exist(5) Then
    Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Click
    Wait(1)

    If Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebMenu("My Profile Management").Exist(3) Then
        Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebMenu("My Profile Management").Select "Logout"
        Reporter.ReportEvent micPass, "Logout", "User logged out successfully"
    Else
        Reporter.ReportEvent micWarning, "Logout", "Logout menu not found"
    End If
Else
    Reporter.ReportEvent micDone, "Login Status", "User is not logged in – Dashboard button not found"
End If

SystemUtil.CloseProcessByName browserName
