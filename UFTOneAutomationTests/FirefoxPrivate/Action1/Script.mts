﻿
Dim objShell

Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Mozilla Firefox\firefox.exe"
If fileSystemObj.FileExists(chromeExist) then
SystemUtil.Run "C:\Program Files\Mozilla Firefox\firefox.exe",  " -private https://advantageonlineshopping.com/#/"
Else
SystemUtil.Run "C:\Program Files (x86)\Mozilla Firefox\firefox.exe",  " -private https://advantageonlineshopping.com/#/"
End If
wait(1)


Reporter.ReportEvent micPass, "search success","the demo search of input value on google success"

'systemUtil.CloseProcessByName ("chrome.exe")
