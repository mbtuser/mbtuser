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

AIUtil.SetContext Browser("creationtime:=0")
AIUtil("profile").Click
AIUtil("input", "Username").Type Parameter("Username")
AIUtil("input", "Password").Type Parameter("Password")
AIUtil.FindTextBlock("SIGN IN").Click @@ script infofile_;_ZIP::ssf4.xml_;_
