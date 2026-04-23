Dim iURL
Dim objShell
iURL = Parameter("url")
set objShell = CreateObject("Shell.Application")

Set fileSystemObj = createobject("Scripting.FileSystemObject")
edgeExist = "C:\Program Files\Mozilla Firefox\firefox.exe"
If fileSystemObj.FileExists(edgeExist) then
objShell.ShellExecute "C:\Program Files\Mozilla Firefox\firefox.exe", iURL, "", ""
Else
objShell.ShellExecute "C:\Program Files (x86)\Mozilla Firefox\firefox.exe", iURL, "", ""
End If
wait(3)
Browser("AutoPilot AI").Navigate Parameter("url")
wait(3)
If Browser("AutoPilot AI").Page("AutoPilot AI").WebButton("Login").Exist(5) Then
Browser("AutoPilot AI").Page("AutoPilot AI").WebButton("Login").Click
Browser("AutoPilot AI").Page("AutoPilot AI").WebEdit("Enter any username").Set Parameter("username") @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("AutoPilot AI").Page("AutoPilot AI").WebEdit("Enter any password").SetSecure Parameter("password")
Browser("AutoPilot AI").Page("AutoPilot AI").WebButton("Login_2").Click
End If
 @@ hightlight id_;_328246_;_script infofile_;_ZIP::ssf3.xml_;_
If Browser("AutoPilot AI").Page("AutoPilot AI").WebElement("(Admin)").Exist(5) Then
Reporter.ReportEvent micPass, "Passed Test", "FireFox Browser work properly"
else
Reporter.ReportEvent micFail, "Failed Test", "FireFox Browser Failed"
End If @@ hightlight id_;_65662_;_script infofile_;_ZIP::ssf12.xml_;_
