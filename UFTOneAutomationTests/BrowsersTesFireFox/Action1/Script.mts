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
Browser("Browser").Navigate Parameter("url") @@ hightlight id_;_328246_;_script infofile_;_ZIP::ssf3.xml_;_
If Browser("Browser").Page("Booking.com | Official").Link("Sign in").Exist(5) Then
Reporter.ReportEvent micPass, "Passed Test", "FireFox Browser work properly"
else
Reporter.ReportEvent micFail, "Failed Test", "FireFox Browser Failed"
End If
 @@ hightlight id_;_197104_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Browser").Page("Booking.com | Official").Link("Sign in").Click @@ script infofile_;_ZIP::ssf10.xml_;_
 @@ hightlight id_;_65662_;_script infofile_;_ZIP::ssf12.xml_;_
