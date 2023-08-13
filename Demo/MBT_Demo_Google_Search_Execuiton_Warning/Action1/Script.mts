Dim iURL
Dim objShell
iURL = "http://google.com"
set objShell = CreateObject("Shell.Application")

Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Mozilla Firefox\firefox.exe"
If fileSystemObj.FileExists(chromeExist) then
objShell.ShellExecute "C:\Program Files\Mozilla Firefox\firefox.exe", iURL, "", ""
Else
objShell.ShellExecute "C:\Program Files (x86)\Mozilla Firefox\firefox.exe", iURL, "", ""
End If
wait(1)
Reporter.ReportEvent micWarning, "search with warning success","the demo warning message for search of input value on google success"

systemUtil.CloseProcessByName ("firefox.exe")
