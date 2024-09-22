Dim iURL
Dim objShell
iURL = "https://www.amazon.com --start-fullscreen"
set objShell = CreateObject("Shell.Application")

Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fileSystemObj.FileExists(chromeExist) then
objShell.ShellExecute "C:\Program Files\Google\Chrome\Application\chrome.exe", iURL, "", ""
Else
objShell.ShellExecute "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe", iURL, "", ""
End If

AIUtil.SetContext Browser("creationtime:=0")
AIUtil("hamburger_menu").Click
AIUtil("close").Click

systemUtil.CloseProcessByName ("chrome.exe")
