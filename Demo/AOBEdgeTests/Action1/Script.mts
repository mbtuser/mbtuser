Dim iURL
Dim objShell
iURL = Parameter("AOB_url")
set objShell = CreateObject("Shell.Application")

Set fileSystemObj = createobject("Scripting.FileSystemObject")
edgeExist = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
If fileSystemObj.FileExists(edgeExist) then
objShell.ShellExecute "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe", iURL, "", ""
Else
objShell.ShellExecute "C:\Program Files\Microsoft\Edge\Application\msedge.exe", iURL, "", ""
End If
wait(5)

If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Exist(5) Then
Reporter.ReportEvent micPass, "Passed Test", "Edge browser open properly properly"
else
Reporter.ReportEvent micFail, "Failed Test", "Failed to open or navigate to AOB with Edge browser"
End If

Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set Parameter("AOB_user")
Browser("Home").Page("Home").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").Set Parameter("AOB_password") @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In").Click @@ script infofile_;_ZIP::ssf7.xml_;_

If Browser("Home - Advantage Bank").Page("Dashboard - Advantage").Link("Accounts").Exist(5) Then
Reporter.ReportEvent micPass, "Passed Test", "Login work properly"
else
Reporter.ReportEvent micFail, "Failed Test", "Failed to Login"
End If @@ script infofile_;_ZIP::ssf8.xml_;_
