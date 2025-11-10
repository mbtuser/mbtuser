Dim iURL, objShell, fileSystemObj, browserPath

iURL = "https://advantageonlinebanking.com/dashboard"
Set objShell = CreateObject("Shell.Application")
Set fileSystemObj = CreateObject("Scripting.FileSystemObject")

browserPath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If Not fileSystemObj.FileExists(browserPath) Then
    Reporter.ReportEvent micFail, "Browser Launch", "Google Chrome not found on this machine"
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

SystemUtil.CloseProcessByName "chrome.exe"
