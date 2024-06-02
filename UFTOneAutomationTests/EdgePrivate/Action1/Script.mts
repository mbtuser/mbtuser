
Dim objShell

Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
If fileSystemObj.FileExists(chromeExist) then
SystemUtil.Run "C:\Program Files\Microsoft\Edge\Application\msedge.exe",  " -private https://advantageonlineshopping.com/#/"
Else
SystemUtil.Run "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",  " -private https://advantageonlineshopping.com/#/"
End If
wait(1)


Reporter.ReportEvent micPass, "search success","the demo search of input value on google success"

systemUtil.CloseProcessByName ("chrome.exe")
