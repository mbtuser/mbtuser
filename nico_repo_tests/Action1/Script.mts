Dim iURL
Dim objShell
iURL = "https://www.google.com/"
set objShell = CreateObject("Shell.Application")

Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Mozilla Firefox\firefox.exe"
If fileSystemObj.FileExists(chromeExist) then
objShell.ShellExecute "C:\Program Files\Mozilla Firefox\firefox.exe", iURL, "", ""
Else
objShell.ShellExecute "C:\Program Files (x86)\Mozilla Firefox\firefox.exe", iURL, "", ""
End If
wait(1)

Reporter.ReportEvent micPass, "search success","the demo search of input value on google success"

systemUtil.CloseProcessByName ("firefox.exe")
