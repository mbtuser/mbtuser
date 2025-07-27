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

    Reporter.ReportEvent micFail, "Browser Launch", "No supported browser found"

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


Function GetObjectByName(elementName)

    Select Case elementName

        Case "username"

            Set GetObjectByName = Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username")

        Case "password"

            Set GetObjectByName = Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password")

        Case "signIn"

            Set GetObjectByName = Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In")

        Case "login"

            Set GetObjectByName = Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login")

        Case "dashboardBtn"

            Set GetObjectByName = Browser("Dashboard - Advantage_2").Page("Dashboard - Advantage").WebElement("Bank Accounts")

        Case Else

            Set GetObjectByName = Nothing

    End Select
End Function

Set usernameObj = GetObjectByName(Parameter("usernameField"))
If Not usernameObj Is Nothing And usernameObj.Exist(3) Then
    usernameObj.Set Parameter("username")
    Reporter.ReportEvent micPass, "Username Set", "Username set successfully"
Else
    Reporter.ReportEvent micFail, "Username Not Found", "ERROR: Username field '" & Parameter("usernameField") & "' not found on page."
    TakeAreaScreenshot 50, 50, 400, 100, "Expected Username field location" ' Adjust coordinates as needed
    Wait(5) ' Keep the wait for effect in recording
End If

Set passwordObj = GetObjectByName(Parameter("passwordField"))
If Not passwordObj Is Nothing And passwordObj.Exist(3) Then
    passwordObj.SetSecure Parameter("password")
    Reporter.ReportEvent micPass, "Password Set", "Password set successfully"
Else
    Reporter.ReportEvent micFail, "Password Not Found", "ERROR: Password field '" & Parameter("passwordField") & "' not found on page."
    TakeAreaScreenshot 50, 150, 400, 100, "Expected Password field location" ' Adjust coordinates as needed
    Wait(5) ' Keep the wait for effect in recording
End If

Set signInObj = GetObjectByName(Parameter("signInButton"))
Set loginObj  = GetObjectByName(Parameter("loginButton"))

If Not signInObj Is Nothing And signInObj.Exist(3) Then
    signInObj.Click
ElseIf Not loginObj Is Nothing And loginObj.Exist(3) Then
    loginObj.Click
Else
    Reporter.ReportEvent micFail, "Login Button", "ERROR: Login button ('" & Parameter("signInButton") & "' or '" & Parameter("loginButton") & "') not found on page."
    TakeAreaScreenshot 50, 250, 400, 100, "Expected Login button location" ' Adjust coordinates as needed
    Wait(5) ' Keep the wait for effect in recording
End If

Wait(3)

Set dashObj = GetObjectByName(Parameter("dashboardButton"))
If Not dashObj Is Nothing And dashObj.Exist(20) Then
    Reporter.ReportEvent micPass, "Login Test", "Login successful"
    dashObj.Click
Else
    Reporter.ReportEvent micFail, "Login Test", "ERROR: Dashboard button ('" & Parameter("dashboardButton") & "') not found. Login failed or element missing from page."
    TakeAreaScreenshot 50, 350, 400, 100, "Expected Dashboard button location" ' Adjust coordinates as needed
    Wait(5) ' Keep the wait for effect in recording
End If


SystemUtil.CloseProcessByName browserName

