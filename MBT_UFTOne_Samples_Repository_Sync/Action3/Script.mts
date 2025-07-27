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
Wait(5)

' Function to take an area screenshot and add it to the report
' x, y: top-left coordinates of the area
' width, height: dimensions of the area
' msg: description for the report
Function TakeAreaScreenshot(x, y, width, height, msg)
    On Error Resume Next ' Handle cases where screenshot might fail in headless mode
    DeviceReplay.Screen.CaptureBitmap "", True, x, y, width, height
    If Err.Number = 0 Then
        Reporter.ReportEvent micWarning, "Area Screenshot", msg & " (Screenshot attached)"
    Else
        Reporter.ReportEvent micWarning, "Area Screenshot", msg & " (Failed to capture specific area: " & Err.Description & ")"
    End If
    On Error GoTo 0
End Function


Dim accountsLinkText
accountsLinkText = Parameter("ElementName")

If Trim(accountsLinkText) = "" Then
    accountsLinkText = "Accounts"
End If

' *** חשוב: הגדרת האלמנטים באופן פרוגרמטי כדי לעקוף את בעיות ה-Object Repository ***
Set objAccountsLink = Browser("Dashboard - Advantage").Page("Dashboard - Advantage").Link("innertext:=" & accountsLinkText, "micClass:=Link")

If objAccountsLink.Exist(5) Then
    Wait(3)
    objAccountsLink.Click
    Wait(3)

    Set objOpenNewAccountButton = Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebButton("innertext:=Open new account", "micClass:=WebButton")
    If objOpenNewAccountButton.Exist(3) Then
        objOpenNewAccountButton.Click

        Set objAccountNameField = Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebEdit("name:=name", "micClass:=WebEdit")
        If objAccountNameField.Exist(3) Then
            objAccountNameField.Set Parameter("accountName")
            Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebButton("Create").Click
            Reporter.ReportEvent micPass, "Account Creation", "New account created successfully"
        Else
            Reporter.ReportEvent micFail, "Account Creation", "ERROR: 'Name' input field for account creation not found. Expected to be at top-left of popup/form."
            TakeAreaScreenshot 100, 100, 500, 200, "Expected Account Name field location" ' Adjust coordinates as needed
            Wait(5)
        End If
    Else
        Reporter.ReportEvent micFail, "Account Creation", "ERROR: 'Open new account' button not found. Expected on Accounts page."
        TakeAreaScreenshot 50, 50, 400, 100, "Expected 'Open new account' button location" ' Adjust coordinates as needed
        Wait(5)
    End If
Else
    Reporter.ReportEvent micFail, "Navigation", "ERROR: '" & accountsLinkText & "' link not found on dashboard. Expected to be in navigation menu."
    TakeAreaScreenshot 50, 50, 400, 100, "Expected Accounts link location" ' Adjust coordinates as needed
    Wait(5)
End If

Wait(3)


SystemUtil.CloseProcessByName browserName
