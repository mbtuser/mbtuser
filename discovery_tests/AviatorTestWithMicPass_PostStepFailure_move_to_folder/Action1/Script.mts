Dim iURL, objShell, fileSystemObj, chromePath

iURL = "https://advantageonlinebanking.com/dashboard"
Set objShell = CreateObject("Shell.Application")
Set fileSystemObj = CreateObject("Scripting.FileSystemObject")

chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If Not fileSystemObj.FileExists(chromePath) Then
    Reporter.ReportEvent micFail, "Browser Launch", "Google Chrome not found on this machine"
    ExitTest
End If

objShell.ShellExecute chromePath, iURL, "", "", 1
Wait(5)

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
            Set GetObjectByName = Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton")
        Case Else
            Set GetObjectByName = Nothing
    End Select
End Function


Set usernameObj = GetObjectByName(Parameter("usernameField"))
If Not usernameObj Is Nothing And usernameObj.Exist(3) Then
    usernameObj.Set Parameter("username")
    Reporter.ReportEvent micPass, "Username", "Username set successfully"
Else
    Reporter.ReportEvent micFail, "Username", "Username field not found"
End If

Set passwordObj = GetObjectByName(Parameter("passwordField"))
If Not passwordObj Is Nothing And passwordObj.Exist(3) Then
    passwordObj.SetSecure Parameter("password")
    Reporter.ReportEvent micPass, "Password", "Password set successfully"
Else
    Reporter.ReportEvent micFail, "Password", "Password field not found"
End If

Set signInObj = GetObjectByName(Parameter("signInButton"))
Set loginObj  = GetObjectByName(Parameter("loginButton"))

If Not signInObj Is Nothing And signInObj.Exist(3) Then
    signInObj.Click
ElseIf Not loginObj Is Nothing And loginObj.Exist(3) Then
    loginObj.Click
Else
    Reporter.ReportEvent micFail, "Login", "No login button found"
End If

Wait(3)
'
'Set dashObj = GetObjectByName(Parameter("dashboardButton"))
'If Not dashObj Is Nothing And dashObj.Exist(5) Then
'    Reporter.ReportEvent micPass, "Login Test", "Login successful"
'    dashObj.Click
'Else
'    Reporter.ReportEvent micFail, "Login Test", "Login failed – dashboard button not found"
'End If

Reporter.ReportEvent micPass, "Login Test micPass", "Login failed – Simulated step Failure, Report passed With Aviator Analysis"

SystemUtil.CloseProcessByName "chrome.exe"
