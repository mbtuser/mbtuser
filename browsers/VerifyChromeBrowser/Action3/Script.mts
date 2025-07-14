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
Wait(5)

If Browser("Dashboard - Advantage").Page("Dashboard - Advantage").Link("Accounts").Exist(5) Then
    Wait(3)
    Browser("Dashboard - Advantage").Page("Dashboard - Advantage").Link("Accounts").Click
    Wait(3)

    If Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebButton("Open new account").Exist(3) Then
        Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebButton("Open new account").Click

        If Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebEdit("name").Exist(3) Then
            Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebEdit("name").Set Parameter("accountName")
            Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebButton("Create").Click
            Reporter.ReportEvent micPass, "Account Creation", "New account created successfully"
        Else
            Reporter.ReportEvent micFail, "Account Creation", "Name input field not found"
        End If
    Else
        Reporter.ReportEvent micFail, "Account Creation", "'Open new account' button not found"
    End If
Else
    Reporter.ReportEvent micFail, "Navigation", "'Accounts' link not found on dashboard"
End If

Wait(3)

SystemUtil.CloseProcessByName "chrome.exe"
